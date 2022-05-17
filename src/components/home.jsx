import React from 'react'
import Bkgrnd from "../images/image.png";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
const Home = () => {
    let navic = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [errors, setErrors] = useState({});
    const [proceed, setProceed] = useState(true);
    const [checked, setChecked] = useState(false);
    let err = {}
    const errorcheck = () => {
        //email validates here
        if (!email.trim()) {
            setProceed(false);
            err.email = "!Email Required";
            // eslint-disable-next-line
        } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
            setProceed(false);
            err.email = "!Enter a valid email";
            // eslint-disable-next-line
        } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            err.email = "";
        }
        //password validates here
        if (!password.trim()) {
            setProceed(false);
            err.password = "!Password Required";
        } else if (password.trim().length < 6) {
            setProceed(false);
            err.password = "Didn't match";
        }
        if (!cpassword.trim()) {
            setProceed(false);
            err.cpassword = "!Password Required";
        } else if (cpassword.trim().length < 6) {
            setProceed(false);
            err.cpassword = "Didn't match";
        } else if (password.trim() !== cpassword.trim()) {
            setProceed(false);
            err.cpassword = "Didn't match";
            err.password = "Didn't match";
            alert("Confirm password and password does not match")
        }
        //name
        if (!name.trim()) {
            setProceed(false);
            err.name = "Enter Name";
        }
        //
        if (!phone.trim()) {
            setProceed(false);
            err.phone = "Enter Your Mobile Number"
        }
        setErrors(err)
    }
    const submit = () => {
        errorcheck();
        if (proceed) {
            alert("Please Fill The Form With Correct Data");
        } if (!checked) {
            alert("Accept The Terms And Conditions!")
        } else {
            navic("/graph");
        }
    }
    const check = (e) => {
        setChecked(e.target.checked);
    }
    return (
        <div className="App">
            <div className="parent">
                <div className="clm clm-primary">
                    <img src={Bkgrnd} className="img" alt="date" />
                    <span>Choose a date range</span>
                    <h5 className="sub-heading">
                        Lorem ipsum dolor sit amet consectrtur adipiscing elit. Mauris
                        imperdiet bibendum.
                    </h5>
                </div>
                <div className="clm clm-secondary">
                    <div className="form">
                        <span>Create an account</span>
                        <div className="form-field">
                            <h5 className="sub-heading heading2">Your email address</h5>
                            <input
                                type="text"
                                className="input-field"
                                onChange={(event) => {
                                    setEmail(event.target.value);
                                }}
                            />
                            <h5 className="errtext">{errors.email}</h5>
                            <h5 className="sub-heading heading2">Your password</h5>
                            <input
                                type="text"
                                className="input-field"
                                onChange={(event) => {
                                    setPassword(event.target.value);
                                }}
                            />
                            <h5 className="errtext">{errors.password}</h5>
                            <h5 className="sub-heading heading2">Confirm your password</h5>
                            <input
                                type="text"
                                className="input-field"
                                onChange={(event) => {
                                    setCpassword(event.target.value);
                                }}
                            />
                            <h5 className="errtext">{errors.cpassword}</h5>
                            <h5 className="sub-heading heading2">Your full name</h5>
                            <input
                                type="text"
                                className="input-field"
                                onChange={(event) => {
                                    setName(event.target.value);
                                }}
                            />
                            <h5 className="errtext">{errors.name}</h5>
                            <h5 className="sub-heading heading2">Your phone number</h5>
                            <input
                                type="number"
                                className="input-field"
                                style={{ width: "25vh" }}
                                onChange={(event) => {
                                    setPhone(event.target.value)
                                }}
                            />
                            <h5 className="errtext">{errors.phone}</h5>
                        </div>
                        <div className="form-accept">
                            <input type="checkbox" className="cb" id="check1" onChange={check} />
                            <label htmlFor="check1">
                                <h5 className="heading3">
                                    I read and agree Terms and Conditions
                                </h5>
                            </label>
                            <br />
                        </div>
                        <button className="btn btn-primary" onClick={submit}>Create Account</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home