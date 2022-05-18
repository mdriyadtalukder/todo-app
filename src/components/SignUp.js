import React, { useRef } from 'react';
import { Form, Spinner } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import SocialLogIn from './SocialLogIn/SocialLogIn';
import './Style.css'

const SignUp = () => {
    const nameValue = useRef('');
    const emailValue = useRef('');
    const passwordValue = useRef('');
    const navigate = useNavigate();

    // Hook of createUserWithEmailAndPassword with sent email verification
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    let allError;
    if (error) {
        allError = <p className='text-danger'>Error: {error?.message}</p>
    }

    if (loading) {
        return <div className='d-flex justify-content-center align-items-center mt-5'>
            <Spinner animation="border" variant="info" />
        </div>

    }
    if (user) {
        navigate('/')
    }

    //Sign Up
    const signupForm = event => {
        event.preventDefault();
        const name = nameValue.current.value;
        const email = emailValue.current.value;
        const password = passwordValue.current.value;
        createUserWithEmailAndPassword(email, password);


    }
    return (
        <div>
            <div id='signUp' className='w-25 p-5 shadow-lg mx-auto mt-5 rounded mb-5'>
                <Form onSubmit={signupForm}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control ref={nameValue} type="text" placeholder="Enter name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailValue} type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordValue} type="password" placeholder="Password" />
                    </Form.Group>
                    {allError}
                    <button className='btn btn-info w-100 text-white fw-bold '>Sign Up</button>

                    <p className='mt-3'>Already have an account? <Link to='/login' className=' fw-bold text-decoration-none text-info'>Please Log In </Link></p>

                </Form>
                <SocialLogIn></SocialLogIn>
            </div>
        </div>
    );
};

export default SignUp;