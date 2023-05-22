import React, {  useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();
  const [data, setData] = useState({
    username: '',
    password: ''
  })
  const handleInput = (event) => {
    setData({...data, [event.target.name]: event.target.value})
  }
  function handlesubmit(event) {
    //console.log(data);
    let token;
    event.preventDefault()
    axios.post('http://127.0.0.1:8000/auth/login', {data},
    {
      headers: {
        'content-type': 'application/json',
  
      } 
    }
    );
    console.log()
   // localStorage.setItem('token', )
    history.push("/home");
   // .then(response => console.log(response))
   // .catch(err => console.log(err))
  }

  return(
    <div className="d-flex align-items-cener justify-content-center vh-100 w-100">
      <div className="w-50 text-center">
        <form onSubmit={handlesubmit}>
            <br />
          Email: <br />
          <input type="text" onChange={handleInput} name="username"></input><br/><br/>
          <br /> Password: 
          <br /><input type="text" onChange={handleInput} name="password"></input><br/><br/>
          <br /><button className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Login