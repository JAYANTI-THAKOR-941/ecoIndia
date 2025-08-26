import React from "react";
import { useParams } from "react-router-dom";
import statesData from "../data/StateDetails.js";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import "../css/StateDetail.css"; // Custom styling

const StateDetail = () => {
  const { stateName } = useParams();
  const state = statesData.find(
    (s) => s.name.toLowerCase() === stateName.toLowerCase()
  );

  if (!state) return <h2>State not found</h2>;

  return (
    <div className="state-detail">
      <h1>{state.name}</h1>

      <img src={state.image} alt={state.name} className="banner-image" />

      <section className="section">
        <h2>Overview</h2>
        <p>{state.description}</p>
      </section>

      <section className="section">
        <h2>Demographics</h2>
        <ul>
          <li><strong>Population:</strong> {state.population}</li>
          <li><strong>Literacy Rate:</strong> {state.literacyRate}</li>
          <li><strong>Languages:</strong> {state.languages.join(", ")}</li>
        </ul>
      </section>

      <section className="section">
        <h2>Economy</h2>
        <ul>
          <li><strong>GDP:</strong> {state.gdp}</li>
          <li><strong>Main Industries:</strong> {state.industries.join(", ")}</li>
        </ul>
      </section>

      <section className="section">
        <h2>Tourism</h2>
        <p>{state.tourismInfo}</p>
        <ul>
          {state.touristPlaces.map((place, idx) => (
            <li key={idx}>{place}</li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2>Education & Healthcare</h2>
        <p><strong>Major Universities:</strong> {state.education.join(", ")}</p>
        <p><strong>Healthcare Facilities:</strong> {state.healthcare}</p>
      </section>

      <section className="section">
        <h2>Key Issues</h2>
        <ul>
          {state.keyIssues.map((issue, index) => (
            <li key={index}>{issue}</li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2>Insights</h2>
        <ul>
          {state.insights.map((insight, index) => (
            <li key={index}>{insight}</li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2>Development Statistics</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={state.chartData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#4caf50" />
          </BarChart>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default StateDetail;
