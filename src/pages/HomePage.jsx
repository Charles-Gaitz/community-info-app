import React, { useState } from "react";
import CitySummaryCard from "../components/CitySummaryCard";

function HomePage() {
  const [city, setCity] = useState("Houston");

  return (
    
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Texas Community Info</h1>
      <button className="btn btn-primary">Test Bootstrap</button>

      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter a Texas city..."
        className="border p-2 w-full mb-4"
      />
      <CitySummaryCard city={city} />
    </div>
  );
}

export default HomePage;
