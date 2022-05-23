import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';

const app = express();

app.use(bodyParser.json());

app.get('/api/movies/:rating', async (req, res) => {
    try{
        const movieRating = req.params.rating;
    
        const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true });
        const db = client.db('movies');
    
        const movieInfo = await db.collection('collection').findOne({ rating: movieRating });
        res.status(200).json(movieInfo);
    
        client.close();
    } catch (error) {
        res.status(500).json({ message: 'Error connecting to db', error })
    }
});

app.listen(8000, () => console.log('Listening on port 8000'));