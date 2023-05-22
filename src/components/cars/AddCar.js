import React, { useCallback, useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

function AddCar() {
  const history = useHistory();
  const [data, setData] = useState({
    id: '',
    manufacturer: '',
    model: '',
    picture:'',
    transmission:'',
    fuel: '',
    type:'',
    price:''
  })
  const handleInput = (event) => {
    setData({...data, [event.target.name]: event.target.value})
  }
  function handlesubmit(event,) {
    data.price = parseFloat(data.price)
    data.id = `${Math.random().toString(36).substr(2, 9)}_${Date.now()}`
    //console.log(data);
    event.preventDefault()
    axios.post('http://127.0.0.1:8000/car/create', {data},
    {
      headers: {
        'content-type': 'application/json',
        'Auth-Access-Token': '14a06315-72d9-47bf-b055-09ca2d9144a2'
      } 
    }
    );
    history.push("/");
   // .then(response => console.log(response))
   // .catch(err => console.log(err))
  }

  return(
    <div className="d-flex align-items-cener justify-content-center vh-100 w-100">
      <div className="w-50 text-center">
        <form onSubmit={handlesubmit}>
          Manufacturer: <input type="text" onChange={handleInput} name="manufacturer"></input><br/><br/>
          Model: <input type="text" onChange={handleInput} name="model"></input><br/><br/>
          Picture: <input type="text" onChange={handleInput} name="picture"></input><br/><br/>
          Transmission: <input type="text" onChange={handleInput} name="transmission"></input><br/><br/>
          Fuel: <input type="text" onChange={handleInput} name="fuel"></input><br/><br/>
          Type: <input type="text" onChange={handleInput} name="type"></input><br/><br/>
          Price: <input type="text" onChange={handleInput} name="price"></input><br/><br/>
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default AddCar