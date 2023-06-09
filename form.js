import React, { Component } from 'react';
/**
 *  Components in React return a piece of JSX code that tells what should be rendered on the screen. 
 *  There are two types of components:
 *      1)Functional Components - Simply javascript functions.
 *      2)Class Components - They work with other components in the program
 * */

class SimpleForm extends Component {
    constructor () {
        super();
        this.state = {
            formFields: {
                firstName: '',
                lastName: '',
                email:'',
                password:''
            },
            errors: {}
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    //Field change method
    handleChange(event){
        let formFields = this.state.formFields;
        formFields[event.target.name] =event.target.value;
        this.setState({
            formFields
        });
    }

    //Validate fields method
    validate(){
        let formFields = this.state.formFields;
        let errors = {};
        let IsValid = true;

        if(!formFields["firstName"]){
            IsValid = false;
            errors["firstName"] = "Enter Your First Name";
        }
        if(!formFields["lastName"]){
            IsValid = false;
            errors["lastName"] = "Enter Your Last Name";
        }
        if(!formFields["password"]){
            IsValid = false;
            errors["password"] = "Enter Your Password";
        }
        this.setState({
            errors: errors
        })
        return IsValid;
    }

    //Form Submission method
    handleSubmit(event){
        event.preventDefault();
        if(this.validate()){
            let formFields = {};
            formFields["firstName"] = "";
            formFields["lastName"] = "";
            formFields["email"] = "";
            formFields["password"] = "";
            this.setState({ formFields: formFields}); 
        }
    }
    render(){
        return(
            <div className="container" style={{ width: '315px' }}></div>
        )
    }
}

export default SimpleForm;