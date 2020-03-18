import React from 'react';
import { Form, Button,Row,Col } from 'react-bootstrap';

const EmployeeForm = (props) => {
    return (
        <div className='employeeForm'>
            <Form className='employeeForm__form' onSubmit={props.submitForm}>
                <Form.Group controlId="formGroupName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Name" name='name' value={props.name} onChange={props.handleChange} />
                </Form.Group>

                <Form.Group controlId="formGroupAge">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="text" placeholder="Age" name='age' value={props.age} onChange={props.handleChange} />
                </Form.Group>
                
                <Form.Group controlId="formGroupdep">
                    <Form.Label>Department</Form.Label>
                    <Form.Control type="text" placeholder="Department" name='department' value={props.department} onChange={props.handleChange} />
                </Form.Group>
                <Form.Group controlId="formGroupblood">
                    <Form.Label>Blood Group</Form.Label>
                    <Form.Control type="text" placeholder="Blood Group" name='bloodg' value={props.bloodg} onChange={props.handleChange} />
                </Form.Group>
                <Form.Group controlId="formGroupaddr">
                    <Form.Label>Address</Form.Label>
                    <Form.Control as="textarea" rows="3" placeholder="Address" name='address' value={props.address} onChange={props.handleChange} />
                </Form.Group>
                <Form.Group controlId="formGroupNumber">
                    <Form.Label>Contact Number</Form.Label>
                    <Form.Control type="text" placeholder="Number" name='phone' value={props.phone} onChange={props.handleChange} />
                </Form.Group>
                <Form.Group as={Row}>
                    <Col sm={{ span: 10 }}>
                        <Button type="submit">Submit</Button>
                    </Col>
                </Form.Group>
            </Form>
        </div>
    );
};

export default EmployeeForm;