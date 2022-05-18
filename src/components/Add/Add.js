import React, { useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Add = () => {
    const namevalue = useRef('');
    const descriptionvalue = useRef('');
    const [reload, setReload] = useState(false);
    const addItem = event => {
        event.preventDefault();
        const name = namevalue.current.value;
        const description = descriptionvalue.current.value;


        // add item's object
        const additems = {
            name: name,
            description: description

        }

        //add item with conditional statement
        if (name && description) {
            fetch('http://localhost:5000/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(additems),
            }, [reload])
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    toast('Task successfully added!!!');
                    event.target.reset();
                    setReload(!reload);
                })
        }
        else {
            toast('Please enter the all input field!')
        }
    }
    return (
        <div>
            <div className='mt-3 mb-3' style={{ minHeight: '90vh' }}>
                <h1 className='text-center fw-bold'>Add New Task</h1>
                <Form id='additemform' onSubmit={addItem} className='w-50 mx-auto shadow-lg p-5 mt-3 mb-3'>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Task Name</Form.Label>
                        <Form.Control ref={namevalue} type="text" placeholder="Enter Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicDescription">
                        <Form.Label>Task Description</Form.Label>
                        <Form.Control ref={descriptionvalue} type="text" placeholder="Enter Description" />
                    </Form.Group>

                    <button className='btn btn-info w-100'>Add Item</button>
                </Form>
                <ToastContainer ></ToastContainer>
                <div className="text-center">
                <Link to='/' className='btn btn-info'>Go to Tasks</Link>
            </div>
            </div>
        </div>
    );
};

export default Add;