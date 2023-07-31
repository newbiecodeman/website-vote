import React from "react";
import "../dist/css/Kandidat.css";

import carData from "../assets/data/kandidat";
import CarItem from "../components/CarItem";

const Kandidat = () => {
  return (
    <div className="Kandidat">
      <div className="Kandidat__wrapper">
        <h2 className="Kandidat__title">Kandidat</h2>

        <div className="filter__widget-wrapper">
          <div className="filter__widget-01">
            <select>
              <option value="New">New</option>
              <option value="Popular">Popular</option>
              <option value="Upcoming">Upcoming</option>
            </select>
          </div>

          <div className="filter__widget-01">
            <select>
              <option value="toyota">Toyota</option>
              <option value="bmw">Bmw</option>
              <option value="audi">Audi</option>
            </select>
          </div>
        </div>

        <div className="Kandidat__car-list">
          {carData?.map((item) => (
            <CarItem item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Kandidat;
