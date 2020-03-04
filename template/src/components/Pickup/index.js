import React from 'react';
import Form from '../Form';
import Input from '../Input';
import toastr from 'toastr';




class Pickup extends React.Component {
    state = {
        fields: {
            name: "",
            address: "", 
            city: "",
            telephone: "",
            postalcode: "",
        },
        errors: {
            nameError: '',
            adressError: '',
            cityError: '',
            telephoneError: '',
            postalError: '',
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
        }
      }

      validateForm() {
        const { name } = this.state.fields;
        const errors = {};
    
        if (name === '') { errors.nameError = 'Name is required.'; }
        
        if (Object.keys(errors).length > 0) {
          this.setState({ ...this.state.errors, errors });
          return false;
        }
    
        return true;
      }

    render() {
        const { name, address, telephone, city, postalcode } = this.state.fields;
        const { nameError } = this.state.errors
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