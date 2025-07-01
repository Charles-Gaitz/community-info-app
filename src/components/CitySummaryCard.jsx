import React from "react";

function CitySummaryCard({ city }) {
  const dummyData = {
    name: city,
    schoolRating: "8/10",
    averageHomePrice: "$420,000",
    population: "250,000",
  };

  return (
    <div className="bg-white shadow rounded-xl p-4">
      <h2 className="text-xl font-semibold mb-2">{dummyData.name}</h2>
      <p>School Rating: {dummyData.schoolRating}</p>
      <p>Average Home Price: {dummyData.averageHomePrice}</p>
      <p>Population: {dummyData.population}</p>
    </div>
  );
}

export default CitySummaryCard;
