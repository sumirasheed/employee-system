import React, { Component } from 'react';
import { Container,Row, Col } from 'react-bootstrap';
import EmployeeForm from '../components/Form';
import EmployeeTable from '../components/Table';
import { Thumbnail } from 'react-bootstrap';
class Employee extends Component {
    userData;
    constructor(props) {
        super(props);
        this.state = {
            id:null,
            name: '',
            age: '',
            department: '',
            bloodg:'',
            address: '',
            phone: '',
            users:[],
        }
    }

     // React Life Cycle
    componentDidMount() {
        this.getDataFromLocal(); 
    }

    getDataFromLocal = () => {
        this.userData = JSON.parse(localStorage.getItem('users'));
        if (this.userData) {
            console.log('Blah')
            this.setState({
                users: this.userData,
            });
        } 
        console.log(this.state.users)
    }
    setDataToLocal = () =>{
        localStorage.setItem('users',JSON.stringify(this.state.users)) 
    }
    submitForm(e) {
        e.preventDefault();
        this.getDataFromLocal();
        let users = this.state.users
        let user ={
            id:users.length+1,
            name: this.state.name,
            age: this.state.age,
            department: this.state.department,
            bloodg:this.state.bloodg,
            address:this.state.address,
            phone:this.state.phone,
        }
        users.push(user);
        this.setState({
            users: users,
        },this.setDataToLocal); 
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
                                <EmployeeTable users={this.state.users}/> 
                            </Col> 
                        </Row>
                    </div>
                </Container>
            </main>
        );
    }
}

export default Employee;