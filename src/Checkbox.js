import { useState, useEffect } from "react";
import reviewData from "./reviews.json";

export function Checkbox() {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    console.log(`checked: ${checked.toString()}`);
    reviewData.filter(review => review.checked !== true);
  });

  return (
    <>
      <input
        type="checkbox"
        value={checked}
        onChange={() => setChecked((checked) => !checked)}
      />
    </>
  );
}
