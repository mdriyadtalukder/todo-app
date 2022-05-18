import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Product = ({ product, deleteItem }) => {
    const { _id, name, description } = product;
    let name2 = name.replace('<strike>', ' ');
    let name3 = name2.replace('</strike>', ' ');

    let description2 = description.replace('<strike>', ' ');
    let description3 = description2.replace('</strike>', ' ');
    const deleteItems = id => {

        const proceed = window.confirm("Are you sure to delete this task?");
        if (proceed) {
            fetch(`https://peaceful-citadel-73337.herokuapp.com/products/${id}`, {
                method: 'DELETE',
            })
                .then(response => response.json())
                .then(data => {
                    deleteItem(_id);
                })
        }

    }

    const updateTask = event => {
        const names = name.strike();
        const descriptions = description.strike();
        const updateTask = { names, descriptions };
        fetch(`https://peaceful-citadel-73337.herokuapp.com/products/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateTask),
        })
            .then(response => response.json())
            .then(data => {

                toast("Complete successfully!!");



            })
    }
    return (
        <tr>
            <th className={name.includes('<strike>') && 'text-decoration-line-through'} scope="row">{name.includes('<strike>') ? name3 : name}</th>
            <td className={description.includes('<strike>') ? 'text-decoration-line-through text-center' : 'text-center'} >{description.includes('<strike>') ? description3 : description}</td>

            <td className='text-center'>
                <button onClick={updateTask} style={{ border: "2px solid green" }} className='bg-success text-white rounded'>Complete</button>
                <button onClick={() => deleteItems(_id)} style={{ border: "2px solid #DC3545" }} className=' bg-danger text-white rounded '>Delete</button>
            </td>
            <ToastContainer></ToastContainer>

        </tr>

    );
};

export default Product;