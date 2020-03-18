import React from 'react';
import { Table } from 'react-bootstrap';

const EmployeeTable = (props) => {
    console.log(props.users)
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>Name</th>
                <th>Age</th>
                <th>Department</th>
                <th>Blood Group</th>
                <th>Address</th>
                <th>Number</th>
                </tr>
            </thead>
            <tbody>
                {props.users.map((item,key)=>{
                    return(
                        <tr key={key}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.department}</td>
                            <td>{item.bloodg}</td>
                            <td>{item.address}</td>
                            <td>{item.phone}</td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
};

export default EmployeeTable;