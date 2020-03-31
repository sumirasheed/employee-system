import React, { Component } from 'react';
import { Container,Row, Col } from 'react-bootstrap';
import EmployeeForm from '../components/Form';
import EmployeeTable from '../components/Table';

class Employee extends Component {
    userData;
    arrayValues=[];
    constructor(props) {
        super(props);
        this.state = {
            id:null,
            name: '',
            age: '',
            department: '',
            bloodg:'',
            address: [],
            phone: [],
            users:[],
            phoneCount: 1,
            addressCount: 1
        }
    }

    // React Life Cycle
    componentDidMount() {
        this.getDataFromLocal(); 
    }

    //Function to get data from Local Storage
    getDataFromLocal = () => {
        this.userData = JSON.parse(localStorage.getItem('users'));
        if (this.userData) {
            this.setState({
                users: this.userData,
            });
        } 
    }

    //Function to save data to Local Storage
    setDataToLocal = () =>{
        localStorage.setItem('users',JSON.stringify(this.state.users)) 
    }

    //Function to add multiple address and phone number dynamically
    onLinkClick = (e,field) =>{
        e.preventDefault();
        switch(field){
            case "phone":
                this.setState({
                    phoneCount:this.state.phoneCount+1
                })
                break;
            case "address":
                this.setState({
                    addressCount:this.state.addressCount+1
                })
                break;
            default:
                this.setState({
                    addressCount:this.state.addressCount+1
                })
        }
        
    }

    //Function to submit Employee Form
    submitForm(e) {
        e.preventDefault();
        this.getDataFromLocal();
        let users = this.state.users
        let empty = [];
        let user ={
            id:users.length+1,
            name: this.state.name,
            age: this.state.age,
            department: this.state.department,
            bloodg:this.state.bloodg,
            address:this.state.address,
            phone:this.state.phone,
        }
        if(user.name !== ''){
            users.push(user);
            this.setState({
                users: users,
                name: '',
                age: '',
                department: '',
                bloodg:'',
                address: empty,
                phone: empty

            },this.setDataToLocal);
        } else{
            alert('Please fill name')
        }
         
    }

    //Function on change event of input fields
    handleChange = (event) => {
        console.log(event.target.value)
        if(event.target.name === "phone"||event.target.name==="address"){
            let aId = event.target.getAttribute("data-id");
            this.arrayValues = this.state[event.target.name];
            this.arrayValues[aId] = event.target.value;
            this.setState({
                [event.target.name]: this.arrayValues
            });
        } else{
            this.setState({
                [event.target.name]: event.target.value
            });
        }
        
    } 

    //Function to delete employee from Local Storage
    deleteUser = (id) =>{
        let users = this.state.users.slice(0, id).concat(this.state.users.slice(id + 1, this.state.users.length));
        this.setState({
            users: users,
        },this.setDataToLocal);
    }

    //Function to update employee data in the Local Storage
    updateUser = (id,user) =>{
        let users = this.state.users;
        if(user.name !== ''){
            users[id]=user;
            this.setState({
                users: users,
            },this.setDataToLocal);
        } else{
            alert('Please fill name')
        }
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
                                address={this.state.address} phone={this.state.phone} onLinkClick={this.onLinkClick} phoneCount={this.state.phoneCount} addressCount={this.state.addressCount}/>
                            </Col>
                            <Col md={8}>
                                <EmployeeTable users={this.state.users} updateUser={(id,user)=>this.updateUser(id,user)}  deleteUser={(id)=>this.deleteUser(id)} handleChange={this.handleChange}/> 
                            </Col> 
                        </Row>
                    </div>
                </Container>
            </main>
        );
    }
}

export default Employee;