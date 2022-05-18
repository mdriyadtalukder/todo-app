import React from 'react';
const Product = ({ product, deleteItem }) => {
    const { _id, name, description } = product;

    const deleteItems = id => {

        const proceed = window.confirm("Are you sure to delete this task?");
        if (proceed) {
            fetch(`http://localhost:5000/products/${id}`, {
                method: 'DELETE',
            })
                .then(response => response.json())
                .then(data => {
                    deleteItem(_id);
                })
        }

    }
    return (
        <tr>
            <th scope="row">{name}</th>
            <td className='text-center'>{description}</td>

            <td className='text-center'>
                <button style={{ border: "2px solid green" }} className='bg-success text-white rounded'>Complete</button>
                <button  onClick={() => deleteItems(_id)} style={{ border: "2px solid #DC3545" }} className=' bg-danger text-white rounded '>Delete</button>
            </td>

        </tr>

    );
};

export default Product;