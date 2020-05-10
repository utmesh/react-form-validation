import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form'
import './Styles/Card.css';


export default function Card(props) {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    return (
        <div className='entireDisplay'>
            <div className='Description'>
                <h1>{props.header}</h1>
                <h5>{props.body}</h5>
            </div>
            <div className='FORM'>
                <h5>{props.info}</h5>
                <form >
                    <table>
                        <tr>
                            <input type='text' name='firstname' placeholder='First Name'
                                ref={register({ required: true, maxLength: 80 })} />
                        </tr>
                        <tr>
                            <input type='text' name='lastname' placeholder='Last Name'
                                ref={register({ required: true, maxLength: 100 })} />
                        </tr>
                        <tr>
                            <input type='email' name='email' placeholder='Email Address'
                                ref={register({ required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })} />
                        </tr>
                        <tr>
                            <input type='password' name='password' placeholder='Password'
                                ref={register({
                                    required: true,
                                    minLength:{
                                        value:8,
                                        message:"Password must have at least 8 characters"
                                    }
                                })} />
                        </tr>
                        <tr>
                            <button type='submit' onSubmit={handleSubmit(onSubmit)}>CLAIM YOUR FREE TRIAL</button>
                        </tr>
                    </table>
                    <h6>By clicking the button you are agreeing to our <span className='Red'>Terms and Services</span></h6>
                </form>
            </div>
            <div className="backgroundColor"></div>
        </div>
    )
}

Card.propTypes = {
    header: PropTypes.string,
    body: PropTypes.string,
    info: PropTypes.string
}