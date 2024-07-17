// import React, { useEffect, useState } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { useParams } from 'react-router-dom';

// export const EditData = () => {

//     const navigate = useNavigate()

//     const [formData, setFormData] = useState({
//         employeeId: '',
//         employeePhoto: null,
//         name: '',
//         age: '',
//         gender: '',
//         phone: '',
//         email: '',
//         qualification: '',
//         department: '',
//         speciality: '',
//     });

//     const { id } = useParams();
//     console.log(id);

//     const getdata = async () => {
//         try {
//             const res = await fetch(`http://localhost:5000/getuser/${id}`, {
//                 method: "GET"
//             });
//             const data = await res.json();
//             if (res.status === 201) {
//                 setFormData(data);
//                 console.log("Got Data");
//             } else {
//                 console.log("Error", data);
//             }
//         } catch (error) {
//             alert(`Error: ${error.message}`);
//             console.log("Error", error);
//         }
//     };

//     const updatedata = async (e) => {
//         e.preventDefault();

//         const formDataToSend = new FormData();
//         for (const key in formData) {
//             formDataToSend.append(key, formData[key]);
//         }

//         if (formData.employeePhoto instanceof File) {
//             formDataToSend.append('employeePhoto', formData.employeePhoto);
//         }

//         try {
//             const res = await fetch(`http://localhost:5000/updateuser/${id}`, {
//                 method: "PATCH",
//                 body: formDataToSend
//             });

//             if (res.status === 201) {
//                 alert("Data Updated");
//                 console.log("Data Updated");
//                 navigate("/");

//             } else {
//                 const data = await res.json();
//                 alert(`Error: ${data.message}`);
//                 console.log("Error", data);
//             }
//         } catch (error) {
//             alert(`Error: ${error.message}`);
//             console.log("Error", error);
//         }
//     };

//     useEffect(() => {
//         getdata();
//     }, []);

//     const specialities = {
//         hr: ['Recruitment', 'Employee Relations', 'Payroll'],
//         it: ['Software Development', 'Network Administration', 'Cyber Security'],
//         marketing: ['Digital Marketing', 'Content Creation', 'SEO'],
//         sales: ['Retail Sales', 'B2B Sales', 'Account Management'],
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prevData) => ({
//             ...prevData,
//             [name]: value,
//         }));
//     };

//     const handleFileChange = (e) => {
//         setFormData((prevData) => ({
//             ...prevData,
//             employeePhoto: e.target.files[0],
//         }));
//     };

//     const handleDepartmentChange = (e) => {
//         const { value } = e.target;
//         setFormData((prevData) => ({
//             ...prevData,
//             department: value,
//             speciality: '',
//         }));
//     };

//     return (
//         <div className='container'>
//             <NavLink to="/">Home</NavLink>
//             <form>
//                 <div className="mb-3">
//                     <label htmlFor="employeeId" className="form-label">Employee ID</label>
//                     <input type="text" className="form-control" id="employeeId" name="employeeId" value={formData.employeeId} onChange={handleChange} required />
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="employeePhoto" className="form-label">Employee Photo</label>
//                     <input type="file" className="form-control" id="employeePhoto" name="employeePhoto" onChange={handleFileChange} />
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="name" className="form-label">Name</label>
//                     <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="age" className="form-label">Age</label>
//                     <input type="number" className="form-control" id="age" name="age" value={formData.age} onChange={handleChange} required />
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="gender" className="form-label">Gender</label>
//                     <select className="form-select" id="gender" name="gender" value={formData.gender} onChange={handleChange} required>
//                         <option value="" disabled>Select Gender</option>
//                         <option value="male">Male</option>
//                         <option value="female">Female</option>
//                         <option value="other">Other</option>
//                     </select>
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="phone" className="form-label">Phone</label>
//                     <input type="tel" className="form-control" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="email" className="form-label">Email</label>
//                     <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="qualification" className="form-label">Qualification</label>
//                     <input type="text" className="form-control" id="qualification" name="qualification" value={formData.qualification} onChange={handleChange} required />
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="department" className="form-label">Department</label>
//                     <select className="form-select" id="department" name="department" value={formData.department} onChange={handleDepartmentChange} required>
//                         <option value="" disabled>Select Department</option>
//                         <option value="hr">HR</option>
//                         <option value="it">IT</option>
//                         <option value="marketing">Marketing</option>
//                         <option value="sales">Sales</option>
//                     </select>
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="speciality" className="form-label">Speciality</label>
//                     <select className="form-select" id="speciality" name="speciality" value={formData.speciality} onChange={handleChange} required>
//                         <option value="" disabled>Select Speciality</option>
//                         {formData.department && specialities[formData.department].map((speciality) => (
//                             <option key={speciality} value={speciality.toLowerCase().replace(/\s+/g, '-')}>{speciality}</option>
//                         ))}
//                     </select>
//                 </div>
//                 <button type="submit" onClick={updatedata} className="btn btn-primary">Submit</button>
//             </form>
//         </div>
//     );
// };


import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';

export const EditData = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [formData, setFormData] = useState({
        employeeId: '',
        employeePhoto: null,
        name: '',
        age: '',
        gender: '',
        phone: '',
        email: '',
        qualification: '',
        department: '',
        speciality: '',
    });

    const specialities = {
        hr: ['Recruitment', 'Employee Relations', 'Payroll'],
        it: ['Software Development', 'Network Administration', 'Cyber Security'],
        marketing: ['Digital Marketing', 'Content Creation', 'SEO'],
        sales: ['Retail Sales', 'B2B Sales', 'Account Management'],
    };

    useEffect(() => {
        const getdata = async () => {
            try {
                const res = await fetch(`http://localhost:5000/getuser/${id}`);
                if (res.ok) {
                    const data = await res.json();
                    setFormData(data);
                    console.log("Got Data");
                } else {
                    console.log("Error", res.status);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        getdata();
    }, [id]);

    const updatedata = async (e) => {
        e.preventDefault();

        const formDataToSend = new FormData();
        for (const key in formData) {
            if (key === 'employeePhoto' && formData[key] instanceof File) {
                formDataToSend.append('employeePhoto', formData[key]);
            } else {
                formDataToSend.append(key, formData[key]);
            }
        }

        try {
            const res = await fetch(`http://localhost:5000/updateuser/${id}`, {
                method: "PATCH",
                body: formDataToSend
            });

            if (res.ok) {
                alert("Data Updated");
                console.log("Data Updated");
                navigate("/");

            } else {
                const data = await res.json();
                alert(`Error: ${data.message}`);
                console.log("Error", data);
            }
        } catch (error) {
            alert(`Error: ${error.message}`);
            console.error("Error updating data:", error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        setFormData(prevData => ({
            ...prevData,
            employeePhoto: e.target.files[0],
        }));
    };

    const handleDepartmentChange = (e) => {
        const { value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            department: value,
            speciality: '',
        }));
    };

    return (
        <div className='container'>
            <NavLink to="/">Home</NavLink>
            <form>
                <div className="mb-3">
                    <label htmlFor="employeeId" className="form-label">Employee ID</label>
                    <input type="text" className="form-control" id="employeeId" name="employeeId" value={formData.employeeId} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="employeePhoto" className="form-label">Employee Photo</label>
                    <input type="file" className="form-control" id="employeePhoto" name="employeePhoto" onChange={handleFileChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="age" className="form-label">Age</label>
                    <input type="number" className="form-control" id="age" name="age" value={formData.age} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="gender" className="form-label">Gender</label>
                    <select className="form-select" id="gender" name="gender" value={formData.gender} onChange={handleChange} required>
                        <option value="" disabled>Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input type="tel" className="form-control" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="qualification" className="form-label">Qualification</label>
                    <input type="text" className="form-control" id="qualification" name="qualification" value={formData.qualification} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="department" className="form-label">Department</label>
                    <select className="form-select" id="department" name="department" value={formData.department} onChange={handleDepartmentChange} required>
                        <option value="" disabled>Select Department</option>
                        <option value="hr">HR</option>
                        <option value="it">IT</option>
                        <option value="marketing">Marketing</option>
                        <option value="sales">Sales</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="speciality" className="form-label">Speciality</label>
                    <select className="form-select" id="speciality" name="speciality" value={formData.speciality} onChange={handleChange} required>
                        <option value="" disabled>Select Speciality</option>
                        {formData.department && specialities[formData.department].map(speciality => (
                            <option key={speciality} value={speciality.toLowerCase().replace(/\s+/g, '-')}>{speciality}</option>
                        ))}
                    </select>
                </div>
                <button type="submit" onClick={updatedata} className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};
