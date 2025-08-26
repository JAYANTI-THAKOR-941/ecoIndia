import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import statesData from "../data/StateData.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/States.css";

const States = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedState, setSelectedState] = useState("");

  const handleClick = (stateName) => {
    navigate(`/state/${stateName.toLowerCase()}`);
  };

  const filteredStates = statesData.filter((state) => {
    const matchesSearch = state.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDropdown = selectedState ? state.name === selectedState : true;
    return matchesSearch && matchesDropdown;
  });

  const settings = {
    infinite: filteredStates.length > 1,
    speed: 600,
    slidesToShow: Math.min(filteredStates.length, 3),
    slidesToScroll: 1,
    autoplay: filteredStates.length > 1,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(filteredStates.length, 2),
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="states-page">
      {/* Hero Section */}
      <section className="hero-header">
        <div className="hero-content">
          <h1>Explore India State by State</h1>
          <p>Gain insights into each Indian state's environment, economy, tourism, and challenges.</p>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="filters-container">
        <h2 className="section-title">Search & Filter States</h2>
        <div className="search-bar-container">
          <input
            type="text"
            placeholder="Search state..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-bar"
          />

          <select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            className="dropdown"
          >
            <option value="">All States</option>
            {statesData.map((state) => (
              <option key={state.name} value={state.name}>
                {state.name}
              </option>
            ))}
          </select>
        </div>
      </section>

      {/* Highlight Section */}
      <section className="highlights">
        <h3>Did You Know?</h3>
        <ul>
          <li>🔍 India has 28 states and 8 union territories</li>
          <li>🌾 Agriculture and industry vary widely across states</li>
          <li>📈 Each state's GDP, education, and climate policies differ</li>
        </ul>
      </section>

      {/* Slider Section */}
      <section className="cards-carousel">
        <h2 className="section-title">State Profiles</h2>
        {filteredStates.length > 0 ? (
          <Slider {...settings}>
            {filteredStates.map((state, index) => (
              <div key={index} className="card-container">
                <div
                  className="state-card"
                  style={{ backgroundImage: `url(${state.image})` }}
                  onClick={() => handleClick(state.name)}
                >
                  <div className="overlay">
                    <h3>{state.name}</h3>
                    <p>{state.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          <p className="no-results">No states found.</p>
        )}
      </section>
    </div>
  );
};

export default States;
