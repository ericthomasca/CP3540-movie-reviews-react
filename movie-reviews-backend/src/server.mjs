import express from "express";
import { MongoClient } from "mongodb";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "/build")));

app.use(express.json());

const client = new MongoClient("mongodb://localhost:27017");

app.delete("/api/remove", async (req, res) => {
  try {
    await client.connect();

    const db = client.db("movies");

    const movieInfo = await db.collection("collection").deleteOne(req.body);

    res.status(200).json(movieInfo);

    client.close();
  } catch (error) {
    res.sendStatus(500);
  }
})

app.post("/api/add", async (req, res) => {
  try {
    await client.connect();

    const db = client.db("movies");

    const movieInfo = await db.collection("collection").insertOne(req.body);

    res.status(200).json(movieInfo);

    client.close();
  } catch (error) {
    res.sendStatus(500);
  }
});

app.get("/api/data", async (req, res) => {
  try {
    await client.connect();

    const db = client.db("movies");

    const movieInfo = await db.collection("collection").find({}).toArray();

    res.status(200).json(movieInfo);
  } catch (error) {
    res.sendStatus(500);
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/build/index.html"));
});

app.listen(8000, () => console.log("Listening on port 8000"));
