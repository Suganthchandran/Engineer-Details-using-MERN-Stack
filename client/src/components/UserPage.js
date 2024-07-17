import React, { useEffect, useState } from 'react';

export const UserPage = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const res = await fetch("http://localhost:5000/getdata", {
        method: "GET"
      });
      if (res.ok) {
        const data = await res.json();
        setUserData(data);
      } else {
        console.error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="container">
      <h2>User Dashboard</h2>
      <div className="row row-cols-1 g-4">
        {userData.map((element) => (
          <div key={element._id} className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                {element.employeePhoto ? (
                  <img 
                    src={`http://localhost:5000/images/${(element.employeePhoto).replace('uploads\\', '')}`} 
                    alt={element.name} 
                    style={{ width: '50px', height: '50px', borderRadius: '50px' }} 
                  />
                ) : (
                  <div style={{ width: '50px', height: '50px', borderRadius: '50px', backgroundColor: '#ccc' }} />
                )}
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{element.name}</h5>
                  <p className="card-text"><strong>Speciality:</strong> {element.speciality}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
