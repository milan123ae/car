import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const Home = () => {


 const [page, setPage] = useState(1);
 //Per page
 const [limit, setLimit] = useState(10);
 const handlePrevPage = () => {
  setPage((page) => {
    if (page === 1) return page;
    else return page - 1;
  });
};

const handleNextPage = () => {
  setPage((page) => page + 1);
};

const handlePageLimit = (e) => {
  const value = e.target.value;
  setLimit(parseInt(value));
};


  const [cars, setCar] = useState([]);

  function b64_to_utf8(str) {
    return decodeURIComponent(escape(window.atob(str)));
  }

  useEffect(() => {
    loadCars();
  }, [page, limit]);
  const loadCars = async () => {
    let array = [];

    const result = await axios.post("http://127.0.0.1:8000/car/list",
    {"metadata": {

    }
     , params: {
        page,
        per_page: limit,
      },
    
    }, {
    headers: {
      'content-type': 'application/json',
      'Auth-Access-Token': 'ed7dee8e-d471-4ff7-86d9-d7e7b24da3b8'
    } 
  });
   // console.log(b64_to_utf8(result.data.data))
  let res = JSON.parse(b64_to_utf8(result.data.data));
 // setRes(res);
 //   for (let i = (page - 1) * limit; i < (page * limit); i++){
  //    array.push(res[i])
  //  }
   // setCar(JSON.parse(b64_to_utf8(result.data.data)));
   // console.log(Math.ceil(res.length / limit))
   // var  totalPage = Math.ceil(res.length / limit)
 //   console.log(totalPage)
    setCar(res);
  };
//console.log(setRes)
  const deleteCar = async id => {
    await axios.post("http://127.0.0.1:8000/car/delete",
    {
      "data": {
          "id": id
      }
    },
    {
      headers: {
        'content-type': 'application/json',
        'Auth-Access-Token': 'ed7dee8e-d471-4ff7-86d9-d7e7b24da3b8'
      } 
    }
    );
    loadCars();
  };

  return (
    <div className="container">
      <div className="py-4">
      <Link className="btn btn-primary mr-2" to={`/cars/add`}>
        ADD
      </Link>
        <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Manufacturer</th>
              <th scope="col">Model</th>
              <th scope="col">Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>

            {cars.map((car, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{car.manufacturer}</td>
                <td>{car.model}</td>
                <td>{car.price}</td>
                <td>
                  <Link className="btn btn-primary mr-2" to={`/cars/${car.id}`}>
                    View
                  </Link>
                  
                  <Link
                    className="btn btn-outline-primary mr-2"
                    to={`/cars/edit/${car.id}`}
                  >
                    Edit
                  </Link>

                  <Link to="/#"
                    className="btn btn-danger"
                    onClick={() => deleteCar(car.id)}
                  >
                    Delete
                  </Link>
                    
                     
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="more-options">
          <label>
            <small>Per Page</small>
            <select onChange={handlePageLimit}>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </label>
          <div className="pagination">
            <button onClick={handlePrevPage}>{page}</button>
            <button onClick={handleNextPage}>{page + 1}</button>
          </div>
        </div>
    </div>
   );
};
// <Pagination totalPage={totalPage} page = {page} limit={limit} siblings={1} />
export default Home;
