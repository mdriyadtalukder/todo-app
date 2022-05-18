import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';
import './Home.css'
const Home = () => {
    const [products, setProduct] = useState([]);
    const [loading, setloading] = useState(true);
    useEffect(() => {
       
        fetch('https://peaceful-citadel-73337.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProduct(data);
                setloading(false);

            })
    }, [products]);
    const deleteItem = id => {
        const remaining = products.filter(item => item._id !== id);
        setProduct(remaining);
    }

    return (


        <div>
           {loading &&  <div className='d-flex justify-content-center align-items-center mt-5'>
                <Spinner animation="border" variant="info" />
            </div>} 
            {!loading && <><h1 className='mt-4 text-center fw-bold text-info'>TO DO APP</h1>
            <table class="table container  mt-4 shadow-lg mt-5">
                <thead>
                    <tr>
                        <th scope="col">Task Name</th>
                        <th className='text-center' scope="col">Task Description</th>
                        <th className='text-center' scope="col"> Task Action</th>
                    </tr>
                </thead>
                <tbody cl>
                    {
                        products.map(product => <Product key={product._id} products={products} deleteItem={deleteItem} product={product}></Product>)
                    }
                </tbody>
            </table>
            <div className='text-center'>
                <Link to='/add' className='btn text-white btn-info add text-center fw-bold'>Add</Link>
            </div>
            </> }
            
        </div>


    );
};

export default Home;