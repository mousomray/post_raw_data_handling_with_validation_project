import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { addStudent } from '../Service/Api'; // Import function for Post Data

const Addstudent = () => {
    const initialState = {
        name: "",
        email: "",
        phone: "",
        city: "",
        address: "",
        state: "",
        section: "",
        classes: ""
    };

    const [student, setStudent] = useState(initialState);
    const [loading, setLoading] = useState(false); // State for loading indicator
    const [error, setError] = useState({}); // Make state for error message
    const navigate = useNavigate();


    // Create a validation function for to add validation of each form field 
    const validation = () => {

        let error = {}; // Take error in a blank object

        // Validation on name 
        if (!student.name) {
            error.name = "Name is Required"
        } else if (student.name.length < 3) {
            error.name = "Name must be alleast three characters"
        }

        // Validation on email
        if (!student.email) {
            error.email = "Email is Required"
        } else if (
            !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(student.email)
        ) {
            error.email = "Enter a valid Email"
        }

        // Validation on phone 
        if (!student.phone) {
            error.phone = "Phone is Required"
        } else if (student.phone.length < 10) {
            error.phone = "Enter a valid phone number"
        }

        // Validation on City 
        if (!student.city) {
            error.city = "City is Required"
        } else if (student.city.length < 3) {
            error.name = "City must be alleast three characters"
        }

        // Validation on Address 
        if (!student.address) {
            error.address = "Address is Required"
        } else if (student.address.length < 3) {
            error.address = "Address must be alleast three characters"
        }

        // Validation on State 
        if (!student.state) {
            error.state = "State is Required"
        } else if (student.state.length < 3) {
            error.state = "State must be alleast three characters"
        }

        // Validation on Section 
        if (!student.section) {
            error.section = "Section is Required"
        } else if (student.section.length < 3) {
            error.section = "Section must be alleast three characters"
        }

        return error
    }



    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudent({ ...student, [name]: value });

        // In handle I set required field for all form field 

        if (name === "name") {
            if (value.length === 0) {
                setError({ ...error, name: "@Name is Required" });
            } else if (value.length < 3) {
                setError({ ...error, name: "Name must be at least 3 characters" });
            } else {
                setError({ ...error, name: "" });
            }
            setStudent({ ...student, name: value });
        }

        if (name === "email") {
            if (value.length === 0) {
                setError({ ...error, email: "@Email is Required" })
                setStudent({ ...student, email: "" })
            } else {
                setError({ ...error, email: "" })
                setStudent({ ...student, email: value })
            }
        }

        if (name === "phone") {
            if (value.length === 0) {
                setError({ ...error, phone: "@Phone is Required" });
            } else if (value.length < 10) {
                setError({ ...error, phone: "Phone must be 10 characters" });
            } else {
                setError({ ...error, phone: "" });
            }
            setStudent({ ...student, phone: value });
        }

        if (name === "city") {
            if (value.length === 0) {
                setError({ ...error, city: "@City is Required" });
            } else if (value.length < 3) {
                setError({ ...error, city: "City must be at least 3 characters" });
            } else {
                setError({ ...error, city: "" });
            }
            setStudent({ ...student, city: value });
        }

        if (name === "address") {
            if (value.length === 0) {
                setError({ ...error, address: "@Address is Required" });
            } else if (value.length < 3) {
                setError({ ...error, address: "Address must be at least 3 characters" });
            } else {
                setError({ ...error, address: "" });
            }
            setStudent({ ...student, address: value });
        }


        if (name === "state") {
            if (value.length === 0) {
                setError({ ...error, state: "@State is Required" });
            } else if (value.length < 3) {
                setError({ ...error, state: "State must be at least 3 characters" });
            } else {
                setError({ ...error, state: "" });
            }
            setStudent({ ...student, state: value });
        }

        if (name === "section") {
            if (value.length === 0) {
                setError({ ...error, section: "@Section is Required" });
            } else if (value.length < 3) {
                setError({ ...error, section: "Section must be at least 3 characters" });
            } else {
                setError({ ...error, section: "" });
            }
            setStudent({ ...student, section: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Start loading
        setLoading(true);

        let ErrorList = validation() // Call validation function in ErrorList variable 
        setError(validation())

        if (Object.keys(ErrorList).length === 0) {
           try{
                const response = await addStudent(student)
                console.log(response);
                toast.success("Student Added Successfully")
                setStudent(initialState)
                navigate("/showstudent")
                setLoading(false)
           }catch (error){
                console.log("Error fetching data",error);
                toast.error("Student Fail to Add")
                setLoading(false)
           }

        } else {
            setTimeout(() => {
                setLoading(false);
            }, 100);
        }

    };

    return (
        <>
            

            {/* <!-- contact section --> */}

            <section class="contact_section layout_padding">
                <div class="container">
                    <div class="heading_container">
                        <h2>
                            Student Register
                        </h2>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <form onSubmit={handleSubmit} method='post'>
                                <div>
                                    <input type="text" name='name' placeholder="Name" onChange={handleChange}
                                        value={student.name} style={{ color: 'black' }} />
                                    <span style={{ color: 'red', display: 'block' }}> {error.name} </span>
                                </div>
                                <div>
                                    <input type="email" name='email' placeholder="Email" onChange={handleChange} value={student.email} style={{ color: 'black' }} />
                                    <span style={{ color: 'red', display: 'block' }}> {error.email} </span>
                                </div>
                                <div>
                                    <input type="text" name='phone' placeholder="Phone Number" onChange={handleChange} value={student.phone} style={{ color: 'black' }} />
                                    <span style={{ color: 'red', display: 'block' }}> {error.phone} </span>
                                </div>
                                <div>
                                    <input type="text" name='city' placeholder="City" onChange={handleChange}
                                        value={student.city} style={{ color: 'black' }} />
                                    <span style={{ color: 'red', display: 'block' }}> {error.city} </span>
                                </div>
                                <div>
                                    <input type="text" name='address' placeholder="Address" onChange={handleChange}
                                        value={student.address} style={{ color: 'black' }} />
                                    <span style={{ color: 'red', display: 'block' }}> {error.address} </span>
                                </div>
                                <div>
                                    <input type="text" name='state' placeholder="State" onChange={handleChange}
                                        value={student.state} style={{ color: 'black' }} />
                                    <span style={{ color: 'red', display: 'block' }}> {error.state} </span>
                                </div>
                                <div>
                                    <input type="text" name='section' placeholder="Section" onChange={handleChange}
                                        value={student.section} style={{ color: 'black' }} />
                                    <span style={{ color: 'red', display: 'block' }}> {error.section} </span>
                                </div>
                                <div>
                                    <input type="text" name='classes' placeholder="Classes" onChange={handleChange}
                                        value={student.classes} style={{ color: 'black' }} />

                                </div>

                                <div className="d-flex ">
                                    <button type='submit' className="btn btn-primary">
                                        {loading ?
                                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                            :
                                            "Submit"}
                                    </button>
                                </div>

                            </form>
                        </div>
                        <div class="col-md-6">
                            <div class="map_container">
                                <div class="map">
                                    <div id="googleMap" style={{ width: '100%', height: '100%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- end contact section --> */}
        </>
    );
};

export default Addstudent;
