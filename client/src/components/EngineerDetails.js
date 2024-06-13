import React from 'react'
import '../Style/EngineerDetails.css';

export const EngineerDetails = () => {
    // const formData = {
    //     employeeId: 'E12345',
    //     employeePhoto: 'https://via.placeholder.com/150',
    //     name: 'John Doe',
    //     age: 30,
    //     gender: 'Male',
    //     phone: '123-456-7890',
    //     email: 'johndoe@example.com',
    //     qualification: 'Bachelor of Engineering',
    //     department: 'IT',
    //     speciality: 'Software Development',
    //   };
    
    //   return (
    //     <div className="container mt-5">
    //       <div className="card">
    //         <div className="card-header">
    //           <h3>Employee Details</h3>
    //         </div>
    //         <div className="card-body">
    //           <div className="row mb-3">
    //             <div className="col-md-3">
    //               <strong>Employee ID:</strong>
    //             </div>
    //             <div className="col-md-9">
    //               {formData.employeeId}
    //             </div>
    //           </div>
    //           <div className="row mb-3">
    //             <div className="col-md-3">
    //               <strong>Employee Photo:</strong>
    //             </div>
    //             <div className="col-md-9">
    //               <img src={formData.employeePhoto} alt="Employee" className="img-thumbnail" />
    //             </div>
    //           </div>
    //           <div className="row mb-3">
    //             <div className="col-md-3">
    //               <strong>Name:</strong>
    //             </div>
    //             <div className="col-md-9">
    //               {formData.name}
    //             </div>
    //           </div>
    //           <div className="row mb-3">
    //             <div className="col-md-3">
    //               <strong>Age:</strong>
    //             </div>
    //             <div className="col-md-9">
    //               {formData.age}
    //             </div>
    //           </div>
    //           <div className="row mb-3">
    //             <div className="col-md-3">
    //               <strong>Gender:</strong>
    //             </div>
    //             <div className="col-md-9">
    //               {formData.gender}
    //             </div>
    //           </div>
    //           <div className="row mb-3">
    //             <div className="col-md-3">
    //               <strong>Phone:</strong>
    //             </div>
    //             <div className="col-md-9">
    //               {formData.phone}
    //             </div>
    //           </div>
    //           <div className="row mb-3">
    //             <div className="col-md-3">
    //               <strong>Email:</strong>
    //             </div>
    //             <div className="col-md-9">
    //               {formData.email}
    //             </div>
    //           </div>
    //           <div className="row mb-3">
    //             <div className="col-md-3">
    //               <strong>Qualification:</strong>
    //             </div>
    //             <div className="col-md-9">
    //               {formData.qualification}
    //             </div>
    //           </div>
    //           <div className="row mb-3">
    //             <div className="col-md-3">
    //               <strong>Department:</strong>
    //             </div>
    //             <div className="col-md-9">
    //               {formData.department}
    //             </div>
    //           </div>
    //           <div className="row mb-3">
    //             <div className="col-md-3">
    //               <strong>Speciality:</strong>
    //             </div>
    //             <div className="col-md-9">
    //               {formData.speciality}
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   );

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
                <img src={formData.employeePhoto} alt="Employee" className="img-thumbnail rounded-circle employee-photo" />
              </div>
              <div className="row mb-3 justify-content-center">
                <div className="col-md-4 font-weight-bold">Employee ID:</div>
                <div className="col-md-8">{formData.employeeId}</div>
              </div>
              <div className="row mb-3 justify-content-center">
                <div className="col-md-4 font-weight-bold">Name:</div>
                <div className="col-md-8">{formData.name}</div>
              </div>
              <div className="row mb-3 justify-content-center">
                <div className="col-md-4 font-weight-bold">Age:</div>
                <div className="col-md-8">{formData.age}</div>
              </div>
              <div className="row mb-3 justify-content-center">
                <div className="col-md-4 font-weight-bold">Gender:</div>
                <div className="col-md-8">{formData.gender}</div>
              </div>
              <div className="row mb-3 justify-content-center">
                <div className="col-md-4 font-weight-bold">Phone:</div>
                <div className="col-md-8">{formData.phone}</div>
              </div>
              <div className="row mb-3 justify-content-center">
                <div className="col-md-4 font-weight-bold">Email:</div>
                <div className="col-md-8">{formData.email}</div>
              </div>
              <div className="row mb-3 justify-content-center">
                <div className="col-md-4 font-weight-bold">Qualification:</div>
                <div className="col-md-8">{formData.qualification}</div>
              </div>
              <div className="row mb-3 justify-content-center">
                <div className="col-md-4 font-weight-bold">Department:</div>
                <div className="col-md-8">{formData.department}</div>
              </div>
              <div className="row mb-3 justify-content-center">
                <div className="col-md-4 font-weight-bold">Speciality:</div>
                <div className="col-md-8">{formData.speciality}</div>
              </div>
            </div>
          </div>
        </div>
      );
}
