import React, { useEffect, useState } from 'react'
import '../Style/EngineerDetails.css';
import { useParams } from 'react-router-dom';

export const EngineerDetails = () => {

  const {id} = useParams("");
  console.log(id)
  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata);

  const getdata = async () => {
      try {
          const res = await fetch(`http://localhost:5000/getuser/${id}`, {
              method: "GET"
          });
          const data = await res.json();
          if (res.status === 201) {
              setUserdata(data);
              console.log("Got Data");
          } else {
              console.log("Error", data);
          }
      } catch (error) {
          alert(`Error: ${error.message}`);
          console.log("Error", error);
      }
  };

  useEffect(() => {
      getdata();
  }, []);

    const formData = {
        employeeId: 'E12345',
        employeePhoto: 'https://via.placeholder.com/150',
        name: 'John Doe',
        age: 30,
        gender: 'Male',
        phone: '123-456-7890',
        email: 'johndoe@example.com',
        qualification: 'Bachelor of Engineering',
        department: 'IT',
        speciality: 'Software Development',
      };
    
      return (
        <div className="container mt-5">
          <div className="card shadow-lg">
            <div className="card-header bg-primary text-white text-center">
              <div className='d-flex justify-content-evenly'>
                    <h3>Employee Details</h3>
                    <button className='btn btn-primary'>Update</button>
                    <button className='btn btn-danger'>Delete</button>
              </div>
            </div>
            <div className="card-body text-center">
              <div className="text-center mb-4">
              {getuserdata.employeePhoto ? (
            <img 
            src={`http://localhost:5000/images/${(getuserdata.employeePhoto).replace('uploads\\', '')}`}  
             alt={getuserdata.name} 
             style={{ width: '50px', height: '50px', borderRadius:'50px' }} 
             />
          ) : (
            <div style={{ width: '50px', height: '50px', borderRadius: '50px', backgroundColor: '#ccc' }} />
          )}
              
              </div>
              <div className="row mb-3 justify-content-center">
                <div className="col-md-4 font-weight-bold">Employee ID:</div>
                <div className="col-md-8">{getuserdata.employeeId}</div>
              </div>
              <div className="row mb-3 justify-content-center">
                <div className="col-md-4 font-weight-bold">Name:</div>
                <div className="col-md-8">{getuserdata.name}</div>
              </div>
              <div className="row mb-3 justify-content-center">
                <div className="col-md-4 font-weight-bold">Age:</div>
                <div className="col-md-8">{getuserdata.age}</div>
              </div>
              <div className="row mb-3 justify-content-center">
                <div className="col-md-4 font-weight-bold">Gender:</div>
                <div className="col-md-8">{getuserdata.gender}</div>
              </div>
              <div className="row mb-3 justify-content-center">
                <div className="col-md-4 font-weight-bold">Phone:</div>
                <div className="col-md-8">{getuserdata.phone}</div>
              </div>
              <div className="row mb-3 justify-content-center">
                <div className="col-md-4 font-weight-bold">Email:</div>
                <div className="col-md-8">{getuserdata.email}</div>
              </div>
              <div className="row mb-3 justify-content-center">
                <div className="col-md-4 font-weight-bold">Qualification:</div>
                <div className="col-md-8">{getuserdata.qualification}</div>
              </div>
              <div className="row mb-3 justify-content-center">
                <div className="col-md-4 font-weight-bold">Department:</div>
                <div className="col-md-8">{getuserdata.department}</div>
              </div>
              <div className="row mb-3 justify-content-center">
                <div className="col-md-4 font-weight-bold">Speciality:</div>
                <div className="col-md-8">{getuserdata.speciality}</div>
              </div>
            </div>
          </div>
        </div>
      );
}
