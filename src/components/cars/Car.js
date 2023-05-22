import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Car = () => {
  const [car, setCar] = useState({
    id: "",
    manufacturer: "",
    model: "",
    picture: "",
    transmission: "",
    fuel: "",
    type: "",
    price: ""
  });
  const { id } = useParams();

  function b64_to_utf8(str) {
    return decodeURIComponent(escape(window.atob(str)));
  }

  useEffect(() => {
    loadCar();
  }, []);
  const loadCar = async () => {
    const result = await axios.post("http://127.0.0.1:8000/car/read",
    {
      "data": {
          "id": id
      }
    },
    {
      headers: {
        'content-type': 'application/json',
        'Auth-Access-Token': '14a06315-72d9-47bf-b055-09ca2d9144a2'
      } 
    }
  );
    
   // console.log(JSON.parse(b64_to_utf8(result.data.data)))
    setCar(JSON.parse(b64_to_utf8(result.data.data)));
  };
  return (
    <div className="container py-4">
      <img
        src= {car.picture}
        height="200"
      />
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">Manufacturer: {car.manufacturer}</li>
        <li className="list-group-item">Model: {car.model}</li>
        <li className="list-group-item">Transmission: {car.transmission}</li>
        <li className="list-group-item">Fuel: {car.fuel}</li>
        <li className="list-group-item">Type: {car.type}</li>
        <li className="list-group-item">Price: {car.price}</li>
      </ul>
      <br/>
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
    </div>
  );
};

export default Car;
