// import React, { useEffect, useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import { MdEdit } from "react-icons/md";
// import { IoMdEye } from "react-icons/io";
// import { MdDelete } from "react-icons/md";
// import "../Style/AdminDashboard.css";

// export const AdminDashboard = () => {
//     const [userData, setUserData] = useState([]);
//     const [searchQuery, setSearchQuery] = useState('');
//     const [searchResults, setSearchResults] = useState([]);
//     const [showSearchResults, setShowSearchResults] = useState(false);

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const fetchData = async () => {
//         try {
//             const res = await fetch("http://localhost:5000/getdata", {
//                 method: "GET"
//             });
//             if (res.ok) {
//                 const data = await res.json();
//                 setUserData(data);
//             } else {
//                 console.error('Failed to fetch data');
//             }
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     };

//     const handleSearch = async (e) => {
//         e.preventDefault();
//         if (searchQuery.trim() !== '') {
//             try {
//                 const res = await fetch(`http://localhost:5000/search?query=${searchQuery}`);
//                 if (res.ok) {
//                     const data = await res.json();
//                     setSearchResults(data);
//                     setShowSearchResults(true);
//                 } else {
//                     console.error('Failed to fetch search results');
//                 }
//             } catch (error) {
//                 console.error('Error searching:', error);
//             }
//         } else {
//             setShowSearchResults(false);
//         }
//     };

//     const deleteuser = async (id) => {
//         try {
//             const res = await fetch(`http://localhost:5000/deleteuser/${id}`, {
//                 method: "DELETE",
//                 headers: {
//                     "Content-type": "application/json"
//                 }
//             });

//             if (!res.ok) {
//                 console.error('Failed to delete user');
//                 return;
//             }

//             const data = await res.json();
//             console.log(data); // Log success message or handle as needed

//             // After deletion, fetch updated data
//             fetchData();
//         } catch (error) {
//             console.error('Error deleting user:', error);
//         }
//     };

//     const renderUsers = () => {
//         const dataToRender = showSearchResults ? searchResults : userData;
//         return dataToRender.map((element, id) => (
//             <div key={element._id} className="card mb-3" style={{ maxWidth: '540px' }}>
//                 <div className="row g-0 ">
//                     <div className="col-md-4">
//                         <img
//                             src={`http://localhost:5000/images/${element.employeePhoto.replace('uploads\\', '')}`}
//                             alt={element.name}
//                             className="img-fluid rounded-start"
//                             style={{ width: '100%', height: 'auto', maxHeight: '200px' }}
//                         />
//                     </div>
//                     <div className="col-md-8">
//                         <div className="card-body">
//                             <h5 className="card-title">{element.name}</h5>
//                             <p className="card-text"><strong>Speciality:</strong> {element.speciality}</p>
//                             <div className="d-flex justify-content-between align-items-center">
//                                 <NavLink to={`view/${element._id}`} className="btn btn-warning"><IoMdEye /></NavLink>
//                                 <NavLink to={`edit/${element._id}`} className="btn btn-primary"><MdEdit /></NavLink>
//                                 <button className="btn btn-danger" onClick={() => deleteuser(element._id)}><MdDelete /></button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         ));
//     };

//     return (
//         <div className="mt-5">
//             <div className="container">
//                 <div className="add_btn mt-2">
//                     <NavLink to="/add-data" className="btn btn-success">Add Data</NavLink>
//                 </div>
//                 <form className="d-flex mx-auto" role="search" onSubmit={handleSearch}>
//                     <input
//                         id="search"
//                         className="form-control me-2"
//                         type="search"
//                         placeholder="Search by Speciality"
//                         aria-label="Search"
//                         value={searchQuery}
//                         onChange={(e) => setSearchQuery(e.target.value)}
//                     />
//                     <button className="btn btn-outline-success" type="submit">Search</button>
//                 </form>
//                 <div className="row row-cols-1 row-cols-md-2 g-4">
//                     {renderUsers()}
//                 </div>
//             </div>
//         </div>
//     );
// };


import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MdEdit } from "react-icons/md";
import { IoMdEye } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import "../Style/AdminDashboard.css";

export const AdminDashboard = () => {
    const [userData, setUserData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showSearchResults, setShowSearchResults] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
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

    const handleSearch = async (e) => {
        e.preventDefault();
        if (searchQuery.trim() !== '') {
            try {
                const res = await fetch(`http://localhost:5000/search?query=${searchQuery}`);
                if (res.ok) {
                    const data = await res.json();
                    setSearchResults(data);
                    setShowSearchResults(true);
                } else {
                    console.error('Failed to fetch search results');
                }
            } catch (error) {
                console.error('Error searching:', error);
            }
        } else {
            setShowSearchResults(false);
        }
    };

    const deleteuser = async (id) => {
        try {
            const res = await fetch(`http://localhost:5000/deleteuser/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-type": "application/json"
                }
            });

            if (!res.ok) {
                console.error('Failed to delete user');
                return;
            }

            const data = await res.json();
            console.log(data); // Log success message or handle as needed

            // After deletion, fetch updated data
            fetchData();
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    const renderUsers = () => {
        const dataToRender = showSearchResults ? searchResults : userData;
        return dataToRender.map((element, id) => (
            <div key={element._id} className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img
                            src={`http://localhost:5000/images/${element.employeePhoto.replace('uploads\\', '')}`}
                            alt={element.name}
                            className="img-fluid rounded-start"
                            style={{ width: '100%', height: 'auto', maxHeight: '200px' }}
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body d-flex flex-column justify-content-between">
                            <div>
                                <h5 className="card-title">{element.name}</h5>
                                <p className="card-text"><strong>Speciality:</strong> {element.speciality}</p>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mt-auto">
                                <NavLink to={`view/${element._id}`} className="btn btn-warning"><IoMdEye /></NavLink>
                                <NavLink to={`edit/${element._id}`} className="btn btn-primary"><MdEdit /></NavLink>
                                <button className="btn btn-danger" onClick={() => deleteuser(element._id)}><MdDelete /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ));
    };

    return (
        <div className="mt-5">
            <div className="container">
                <div className="add_btn mt-2">
                    <NavLink to="/add-data" className="btn btn-success">Add Data</NavLink>
                </div>
                <form className="d-flex mx-auto" role="search" onSubmit={handleSearch}>
                    <input
                        id="search"
                        className="form-control me-2"
                        type="search"
                        placeholder="Search by Speciality"
                        aria-label="Search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                <div className="row row-cols-1 g-4">
                    {renderUsers()}
                </div>
            </div>
        </div>
    );
};
