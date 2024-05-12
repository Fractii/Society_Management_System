import React, { useState } from "react";
import axios from "axios";
import styles from './signup.css'
import { useNavigate } from "react-router-dom";

export default function Signup() {
    
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({})

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('https://localhost:443/api/index.php', inputs).then(function(response){
            console.log(response.data);
            navigate("/Login");
        });
        
    }

    return (
        <>
            <form onSubmit={handleSubmit} method="POST" className={`${styles.form} justify-content-center`} style={{ background: 'rgb(0, 38, 77)',padding: '20px', margin: "0 auto"}}>
                <h2 style={{ color: 'white' }}>Register</h2>
                <p style={{ color: 'white' }}>Please fill in this form to to register your soceity.</p>
                <hr></hr>
                <div class="row mb-3">
                    <div class="col-md-6">
                        <label htmlFor="sname" style={{ color: 'white' }}>Society Name:</label>
                        <br />
                        <input onChange={handleChange} type="text" name="sname" id="s_name" placeholder="Society Name" style={{ border: '2px solid rgb(191, 128, 64)' }} required autoFocus />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="semail" style={{ color: 'white' }}>Society Email:</label>
                        <br />
                        <input onChange={handleChange} type="email" name="semail" id="s_email" placeholder="Society Email" style={{ border: '2px solid rgb(191, 128, 64)' }} required />
                    </div>
                </div>
                <br />
                <br />
                <div className="row mb-3">
                <div class="col-md-6">
                        <label htmlFor="pname" style={{ color: 'white' }}> President Name:</label>
                        <br />
                        <input onChange={handleChange} type="text" name="pname" id="p_name" placeholder="President Name" style={{ border: '2px solid rgb(191, 128, 64)' }} required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="pemail" style={{ color: 'white' }}>President Email:</label>
                        <br />
                        <input onChange={handleChange} type="email" name="pemail" id="p_email" placeholder="President Email" style={{ border: '2px solid rgb(191, 128, 64)' }} required />
                    </div>
                </div>
                <br />
                <br />
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="supnumber" style={{ color: 'white' }}>Supervisor Name:</label>
                        <br />
                        <input onChange={handleChange} type="text" name="supnumber" id="sup_number" placeholder="Supervisor Name" style={{ border: '2px solid rgb(191, 128, 64)' }} required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="supemail" style={{ color: 'white' }}>Supervisor Email:</label>
                        <br />
                        <input onChange={handleChange} type="email" name="supemail" id="sup_email" placeholder="President Email" style={{ border: '2px solid rgb(191, 128, 64)' }} required />
                    </div>
                </div>
                <br />
                <br />
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="fac" style={{ color: 'white' }}>Faculty/Field:</label>
                        <br />
                        <input onChange={handleChange} type="text" name="fac" id="fac_name" style={{ border: '2px solid rgb(191, 128, 64)' }} required placeholder="Faculty" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="members" style={{ color: 'white' }}>No of members:</label>
                        <br />
                        <input onChange={handleChange} type="number" name="member" id="members" style={{ border: '2px solid rgb(191, 128, 64)' }} placeholder="total members" required />
                    </div>
                </div>
                <br />
                <br />
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="Date" style={{ color: 'white' }}>Date:</label>
                        <br />
                        <input onChange={handleChange} type="date" name="date" id="date" placeholder="Date" style={{ border: '2px solid rgb(191, 128, 64)', width: '190px' }} required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="funds" style={{ color: 'white' }}>Funding body:</label>
                        <br />
                        <input onChange={handleChange} type="text" name="fund" id="fund" placeholder="Funds" style={{ border: '2px solid rgb(191, 128, 64)' }} required />
                    </div>
                </div>
                <br />
                <br />
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="psw" style={{ color: 'white' }}>Password</label>
                        <br />
                        <input onChange={handleChange} type="password" placeholder="Enter Password" name="psw" id="psw" style={{ border: '2px solid rgb(191, 128, 64)' }} required />
                    </div>
                    <div className="col-md-6">
                        <label for="psw-repeat" style={{ color: 'white' }}>Repeat Password</label>
                        <br />
                        <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" style={{ border: '2px solid rgb(191, 128, 64)' }} required></input>
                    </div>
                </div>
                <br />
                <br />
                <label htmlFor="description" style={{ color: 'white' }}>Brief description of society:</label>
                <textarea onChange={handleChange} name="description" id="desc" cols="50" rows="4" placeholder="Briefly describe society..." style={{ border: '2px solid rgb(191, 128, 64)' }}></textarea>
                <br />
                <br />
                <input type="checkbox" id="condition" name="condition" value="accepted" />
                <label for="condition" style={{ color: 'white' }}> I accept the term and privacy policyt</label><br></br>
                <br />
                <br />
                <input className="btn btn-lg btn-light" type="submit" name="submit" id="submit" style={{ border: '2px solid rgb(191, 128, 64)' }} />
                <p style={{ color: 'white' }}>Already have account? <b> <a href="../Login">Click here</a> </b> </p>
            </form>
        </>
    )
}

