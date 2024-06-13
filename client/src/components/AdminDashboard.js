import React from 'react'

export const AdminDashboard = () => {
    return (
        <div className='mt-5'>
            <div className='container'>
                <div className='add_btn mt-2'>
                    <button className='btn btn-success'>Add Data</button>
                </div>
                <table className="table">
                    <thead className=' table-dark'>
                        <tr>
                            <th scope="col">#</th>
                            <th scope='col'>Image</th>
                            <th scope="col">Name</th>
                            {/* <th scope="col">Age</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Email</th>
                            <th scope="col">Qualification</th>
                            <th scope="col">Department</th> */}
                            <th scope="col">Speciality</th>
                            <th scope='col'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Suganth</td>
                            {/* <td>19</td>
                            <td>Male</td>
                            <td>9042482004</td>
                            <td>sugantha.22cse@kongu.edu</td>
                            <td>B.E.</td>
                            <td>X-Ray</td> */}
                            <td>Gamma Radiation</td>
                            <td className='d-flex justify-content-evenly'>
                                <button className='btn btn-warning'>View</button>
                                <button className='btn btn-primary'>Update</button>
                                <button className='btn btn-danger'>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
