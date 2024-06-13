import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import "../Style/AdminDashboard.css";

export const AdminDashboard = () => {
    const [getuserdata, setUserdata] = useState([]);
    console.log(getuserdata);

    const getdata = async () => {
        try {
            const res = await fetch("http://localhost:5000/getdata", {
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

    // const deleteuser = async (id) => {
    //     try {
    //         const res2 = await fetch(`http://localhost:5000/deleteuser/${id}`, {
    //             method: "DELETE",
    //             headers: {
    //                 "Content-type": "application/json"
    //             }
    //         });

    //         if (res2.status === 422) {
    //             console.log("Error");
    //             return;
    //         }

    //         const deletedata = await res2.json();
    //         console.log(deletedata);

    //         if (res2.status === 201) {
    //             console.log("User Deleted");
    //             getdata();
    //         } else {
    //             console.log("Error", deletedata);
    //         }
    //     } catch (error) {
    //         console.log("Error", error);
    //     }
    // };

    const deleteuser = async (id) => {
        try {
            const res2 = await fetch(`http://localhost:5000/deleteuser/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-type": "application/json"
                }
            });
    
            if (res2.status === 422) {
                console.log("Error");
                return;
            }
    
            const deletedata = await res2.json();
            console.log(deletedata);
    
            if (res2.status === 201) {
                console.log("User Deleted");
                getdata();
            } else {
                console.log("Error", deletedata);
            }
        } catch (error) {
            console.log("Error", error);
        }
    };
    

    return (
        <div className='mt-5'>
            <div className='container'>
                <div className='add_btn mt-2'>
                    <NavLink to='/add-data'><button className='btn btn-success'>Add Data</button></NavLink>
                </div>
                <table className="table">
                    <thead className='table-dark'>
                        <tr>
                            <th scope="col">#</th>
                            <th scope='col'>Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Speciality</th>
                            <th scope='col'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {getuserdata.map((element, id) => (
                            <tr key={element._id}>
                                <th scope="row">{id + 1}</th>
                                <td>
                                    <img
                                        src={`http://localhost:5000/images/${element.employeePhoto.replace('uploads\\', '')}`}
                                        alt={element.name}
                                        style={{ width: '50px', height: '50px', borderRadius: '50px' }}
                                    />
                                </td>
                                <td>{element.name}</td>
                                <td>{element.speciality}</td>
                                <td className='d-flex justify-content-evenly'>
                                    <NavLink to={`view/${element._id}`}><button className='btn btn-warning'>View</button></NavLink>
                                    <NavLink to={`edit/${element._id}`}><button className='btn btn-primary'>Update</button></NavLink>
                                    <button className='btn btn-danger' onClick={() => deleteuser(element._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
