import React from 'react';
import Form from '../Form';
import Input from '../Input';
import toastr from 'toastr';




class Pickup extends React.Component {
    state = {
        fields: {
            name: "",
            telephone: "",
        },
        errors: {
            nameError: '',
            telephoneError: '',
          },
    };

    onInput(e) {
        this.setState({ fields: {
          ...this.state.fields,
          [ e.target.name ]: e.target.value,
        } });
      }

      submitForm(e) {
        e.preventDefault();
    
        if (!this.validateForm()) {
          toastr.error('The form was not successfully submitted!', 'Failed!');
        } else {
          console.log(this.state.fields);
          toastr.success('The form was successfully submitted!', 'Success!');
          this.props.history.push("/review/");
        }
      }

      validateForm() {
        const { name, telephone } = this.state.fields;
        const errors = {};
        var  phonePattern = /^[0-9]{3}-?\s?[0-9]{4}$/;
        var phoneTest = phonePattern.test(telephone);
    
        if (name === '') { errors.nameError = 'Name is required.'; }
        if (phoneTest === false) { errors.telephoneError = 'Telephone number is not valid'; }
        
        if (Object.keys(errors).length > 0) {
          this.setState({ ...this.state.errors, errors });
          return false;
        }
    
        return true;
      }

      saveInformation() {
        localStorage.setItem('customerInfo', JSON.stringify(this.state.fields));
        console.log("customerInfo saved");
      }

    render() {
        const { name, telephone } = this.state.fields;
        const { nameError, telephoneError } = this.state.errors
        return (
        <div>
            <div><h1>Delivery</h1></div>
            <Form onSubmit={ e => this.submitForm(e) }>
            <Input
                type="text"
                value={ name }
                name="name"
                htmlId="name"
                label="Name:"
                errorMessage={ nameError }
                onInput={ e => this.onInput(e) }/>

            <Input
                type="text"
                value={ telephone }
                name="telephone"
                htmlId="telephone"
                label="Telephone no.:"
                errorMessage={ telephoneError }
                onInput={ e => this.onInput(e) }/>
            
            <input
                type="submit"
                value="Order!"
                className="btn btn-primary"
                style={{ float: 'right', marginTop: '10' }} />
            </Form>
        </div>
        );
    };
};

export default Pickup;