import React from 'react'
import axios from 'axios'

class UserUpdate extends React.Component{
    constructor(props) {
        super(props) 
        this.state = {
                firstName:'',
                lastName:'',
                phoneNumber:'',
                notice:''
        
        }
    }

    handleChange = (e) => {
        e.persist() 
        this.setState(() => ({
            [e.target.name]: e.target.value
        }))
    }


    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            phoneNumber:this.state.phoneNumber
        }
        if(this.state.phoneNumber.length!==10){
            this.setState(()=>({
                notice:'phone number should be 10 digits'
            }))
            return false
        }
        
        const id=this.props.match.params.id

        axios.put(`http://localhost:3005/users/edit/${id}`, formData,{
            headers:{
                'x-auth':localStorage.getItem('token')
            }

        })
        .then(response => {

            if(response.data.errors) {
                this.setState(() => ({
                    errors: response.data.errors
                }))
                
            } else {
                
                this.props.history.push('/users/account')
            }   
        })
        
    }

    render() {
        return(
            <div className="row">
            <div className="col-md-6 offset-3">

                <h2>Edit User Details </h2>
                
                <form onSubmit={this.handleSubmit}>

                    <div className="form-group">
                        <label>
                            First Name
                            <input type="text"
                                name="firstName"
                                value={this.state.firstName}
                                onChange={this.handleChange}
                                className="form-control"
                                placeholder="update first name"
                            />
                        </label>
                        
                    </div>

                    <div className="form-group">
                        <label>
                            Last Name
                            <input type="text"
                                name="lastName"
                                value={this.state.lastName}
                                onChange={this.handleChange}
                                className="form-control"
                                placeholder="update last name"
                            />
                        </label>
                        
                    </div>

                    <div className="form-group">
                        <label>
                            Phone Number
                            <input type="text"
                                name="phoneNumber"
                                value={this.state.phoneNumber}
                                onChange={this.handleChange}
                                className="form-control"
                                placeholder="update phone number"
                            />
                        </label>
                        
                    </div>
                    {this.state.notice && <p> { this.state.notice } </p>}
                    <input type="submit" className="btn btn-primary" />
                   

                </form>
            </div>
        </div> 
        )
    }
}

export default UserUpdate