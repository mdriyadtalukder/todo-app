import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';
import './Home.css'
const Home = () => {
    const [products, setProduct] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);
    const deleteItem = id => {
        const remaining = products.filter(item => item._id !== id);
        setProduct(remaining);
    }
    return (
      
           <div>
               <h1 className='mt-4 text-center fw-bold'>TO DO APP</h1>
                <table class="table w-75 mx-auto mt-4 shadow-lg mt-5">
                <thead>
                    <tr>
                        <th  scope="col">Task Name</th>
                        <th className='text-center' scope="col">Task Description</th>
                        <th className='text-center' scope="col"> Task Action</th>
                    </tr>
                </thead>
                <tbody cl>
                    {
                        products.map(product => <Product products={products} deleteItem={deleteItem} product={product}></Product>)
                    }
                </tbody>
            </table>
            <div className='text-center'>
            <Link to='/add' className='btn btn-info add text-center fw-bold'>Add</Link>
            </div>
           </div>

    );
};

export default Home;