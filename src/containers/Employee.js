import React, { Component } from 'react';
import { Container,Row, Col } from 'react-bootstrap';
import EmployeeForm from '../components/Form';
import EmployeeTable from '../components/Table';
class Employee extends Component {
    userData;
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            department: '',
            bloodg:'',
            address:'',
            phone:''
        }
    }

     // React Life Cycle
     componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('document'));

        if (localStorage.getItem('document')) {
            this.setState({
                name: this.userData.name,
                age: this.userData.age,
                department: this.userData.department,
                bloodg:this.userData.bloodg,
                address: this.userData.address,
                phone: this.userData.phone,
            })
        } else {
            this.setState({
                name: '',
                age: '',
                department: '',
                bloodg:'',
                address: '',
                phone: ''
            })
        }
    }

    // componentWillUpdate(nextProps, nextState) {
    //     localStorage.setItem('user', JSON.stringify(nextState));
    // }

    submitForm(e) {
        e.preventDefault()
        localStorage.setItem('document',JSON.stringify(this.state));
        this.setState({
             name: '',
                age: '',
                department: '',
                bloodg:'',
                address: '',
                phone: ''
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    

    render() {
        return (
            <main>
                <Container className>
                    <div className='employee'>
                        <h3 className='mb-5'>Employee Management System</h3>
                        <Row>
                            <Col md={4}>
                                <EmployeeForm submitForm={this.submitForm.bind(this)} handleChange={this.handleChange} 
                                name={this.state.name} age={this.state.age} 
                                department={this.state.department} bloodg={this.state.bloodg} 
                                address={this.state.address} phone={this.state.phone} />
                            </Col>
                            <Col md={8}>
                                <EmployeeTable /> 
                            </Col> 
                        </Row>
                    </div>
                </Container>
            </main>
        );
    }
}

export default Employee;