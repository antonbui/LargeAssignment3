import React from 'react';
import Form from '../Form';
import Input from '../Input';
import toastr from 'toastr';
import { Link } from 'react-router-dom';
import Review from '../Review';




class Delivery extends React.Component {
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
    componentDidMount() {
      this.setState({ fields: JSON.parse(localStorage.getItem('customerInfo'))})
      // if (localStorage.getItem('customerInfo') != null) {
      //   console.log("IS NULL");
      //   var data = JSON.parse(localStorage.getItem('customerInfo'))
      //   console.log("DATA: " + data);
      //   if (data.name != "") {
      //     console.log("Name NOT EMPTY");
      //     this.setState({ fields: JSON.parse(localStorage.getItem('customerInfo'))})
      //   }

      //   console.log(this.state.fields.name);
      // }

    }

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

      saveInformation() {
        localStorage.setItem('customerInfo', JSON.stringify(this.state.fields));
        console.log("customerInfo saved");
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
                value={ address }
                name="address"
                htmlId="address"
                label="Address:"
                onInput={ e => this.onInput(e) }/>
            <Input
                type="text"
                value={ telephone }
                name="telephone"
                htmlId="telephone"
                label="Telephone no.:"
                onInput={ e => this.onInput(e) }/>
                <Input
                type="text"
                value={ city }
                name="city"
                htmlId="city"
                label="City:"
                onInput={ e => this.onInput(e) }/>
                <Input
                type="text"
                value={ postalcode }
                name="postalcode"
                htmlId="postalcode"
                label="Postal code:"
                onInput={ e => this.onInput(e) }/>
                

            <Link to={`/review/`}>
              <input
                  type="submit"
                  value="Review!"
                  className="btn btn-primary"
                  style={{ float: 'right', marginTop: '10' }}
                  onClick={ this.saveInformation() }>
              </input>
            </Link>
            <Link to={`/checkout/`}>
              <input
                  value="Back!"
                  className="btn btn-primary"
                  style={{ float: 'right', marginTop: '10' }}
                  // onClick={ }
                  >
              </input>
            </Link>
            
            {/* <button
              type="button"
              className="btn btn-primary"
              onClick={ }>Review</button> */}
            </Form>
        </div>
        );
    };
};

export default Delivery;