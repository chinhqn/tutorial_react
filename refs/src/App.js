import React, { Component } from 'react';
import './App.css';
// import Product from './components/Product';
class App extends Component {
    constructor(props) {
        super(props);
        this.onAddProduct = this.onAddProduct.bind(this);

        this.state = {
            products : [
                {
                    id: 1,
                    name: 'Apple 16GB',
                    price: 1500000,
                    status: true,
                    image: 'https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-h1-400x460-400x460.png',
                },
                {
                    id: 2,
                    name: 'samsung 16GB',
                    price: 1500000,
                    status: true,
                    image: 'https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-h1-400x460-400x460.png',
                },
                {
                    id: 3,
                    name: 'Nokia 16GB',
                    price: 1500000,
                    status: true,
                    image: 'https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-h1-400x460-400x460.png',
                },
            ],
            isActive: true,
        };
        // this.onSetState = this.onSetState.bind(this);
    }
    onAddProduct() {
        console.log(this.refs.name.value);
    }

    onSetState = () => {
        this.setState({
            isActive: !this.state.isActive
        })
    }
    render() {
        let elements = this.state.products.map((product, index) => {
            let result = "";
            if (product.status) {
                result = <tr key={index}>
                                <td>{index}</td>
                                <td>{product.name}</td>
                                <td>
                                    <span className="label label-success">{product.price}</span>
                                </td>
                            </tr>
            }
            return result;
        });
        return (
            <div>
                <nav className="navbar navbar-default">
                    <div className="navbar-header">
                        <a className="navbar-brand">Title</a>
                    </div>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="row">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>STT</th>
                                        <th>Ten san pham</th>
                                        <th>Gia</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {elements}
                                </tbody>
                            </table>
                            <button type="button" className="btn btn-success" onClick={this.onSetState}>
                                Active : {this.state.isActive === true ? 'true' : 'false'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
