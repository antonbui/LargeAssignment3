import React from 'react';
import Form from '../Form';
import Input from '../Input';
import toastr, { info } from 'toastr';
import { Link } from 'react-router-dom';
import ProductList from '../CartList'




class Review extends React.Component {
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
        this.setState({ fields: JSON.parse(localStorage.getItem('customerInfo'))});
    }

    saveInformation() {
        localStorage.setItem('customerInfo', JSON.stringify(this.state.fields));
        console.log("customerInfo saved");
      }

    orderComplete() {
        alert("Order confirmed. You will be directed to home page. Click OK");

        let bundles = localStorage.getItem('idBundleInCart')
        let items = localStorage.getItem('idItemInCart')
        let total = localStorage.getItem('total')
        let customerInfo = localStorage.getItem('customerInfo')
        localStorage.clear();
        // localStorage.setItem('idBundleInCart',null)
        // localStorage.setItem('idItemInCart',null)
        // localStorage.setItem('total',0)
        localStorage.setItem('customerInfo',customerInfo)


        // let postData = {
        //     bundles: bundles,
        //     bubbles: items,
        //     total: total,
        //     customerInfo: customerInfo
        // }

        // console.log("postData: " + postData);

        setTimeout(() => {
            this.props.history.push('/Home');
        },5000)
    }

    render() {
        const { name, address, telephone, city, postalcode } = this.state.fields;
        const { nameError } = this.state.errors
        return (
        <div>
            <div><h1>Review</h1></div>
            <div><p>Go back to edit</p></div>
            <Form >
            <Input
                label="Name:"
                type="text"
                value={ name }
                disabled="disabled"
                />
            <Input
                type="text"
                value={ address }
                name="address"
                htmlId="address"
                label="Address:"/>
            <Input
                type="text"
                value={ telephone }
                name="telephone"
                htmlId="telephone"
                disabled="disabled"
                label="Telephone no.:"/>
                <Input
                type="text"
                value={ city }
                name="city"
                htmlId="city"
                disabled="disabled"
                label="City:"/>
                <Input
                type="text"
                value={ postalcode }
                name="postalcode"
                htmlId="postalcode"
                disabled="disabled"
                label="Postal code:"/>

            {/* <Link to={`/delivery/`}>
              <input
                  type="submit"
                  value="Back!"
                  className="btn btn-primary"
                  style={{ float: 'right', marginTop: '10' }}
                  onClick={ this.saveInformation() }
                />
            </Link> */}
            <Link to={`/review/`}>
            <input
                value="Order!"
                className="btn btn-primary"
                style={{ float: 'right', marginTop: '10' }}
                onClick={ () => { this.orderComplete()} }
                />
            </Link>

            </Form>
            <p>Total price: { localStorage.getItem('total') }</p>
        </div>
        );
    };
};

export default Review;