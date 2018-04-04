import React, { Component } from 'react';
import './App.css';
import Product from './components/Product';
class App extends Component {
    render() {
        var products = [
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
                status: false,
                image: 'https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-h1-400x460-400x460.png',
            },
        ];
        let elements = products.map((product, index) => {
            let result = "";
            if (product.status) {
                result = <Product
                    key={product.id}
                    price={product.price}
                    image={product.image}
                >
                    {product.name}
                </Product>
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
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                {elements}
                                {elements.e}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
