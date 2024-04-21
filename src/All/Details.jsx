import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Details = () => {
    const { slug } = useParams();
    const [user, setUser] = useState([]);
    // const [loading, setLoading] = useState(true);

    const getData = async () => {

        const response = await axios.get(`https://tureappservar.onrender.com/student/${slug}`);
        setUser(response.data.data[0]);
        console.log(response);
        // setLoading(false);

    };

    useEffect(() => {
        getData();
    }, []);

    // if (loading) {
    //     return (
    //         <div style={{
    //             position: 'fixed',
    //             top: '50%',
    //             left: '50%',
    //             transform: 'translate(-50%, -50%)'
    //         }}>
    //             <div class="spinner-border" role="status">
    //                 <span class="sr-only">Loading...</span>
    //             </div>
    //         </div>
    //     );
    // }

    return (

        <>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                flexDirection: 'column'
            }}>

                <section class="service_section layout_padding">
                    <div class="container ">
                        
                        <div class="row">

                            <div className="col-sm-6 col-md-4 mx-auto" style={{ display: 'flex', justifyContent: 'center' }}>
                                <div className="box" style={{ width: '500px' }}>

                                    <div className="detail-box" style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        height: '400px',
                                        width: '500px',
                                        flexDirection: 'column'
                                    }}>

                                        <h1>{user?.name}</h1>
                                        <p><b style={{ fontSize: '20px' }}>Email :</b> {user?.email}</p>
                                        <p><b style={{ fontSize: '20px' }}>City :</b> {user?.city}</p>
                                        <p><b style={{ fontSize: '20px' }}>Address :</b> {user?.address}</p>
                                        <p><b style={{ fontSize: '20px' }}>State :</b> {user?.state}</p>
                                        <p><b style={{ fontSize: '20px' }}>Section :</b> {user?.section}</p>
                                        <p><b style={{ fontSize: '20px' }}>Class :</b> {user?.classes}</p>
                                        <p><b style={{ fontSize: '20px' }}>Slug :</b> {user?.slug}</p>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </section>

                {/* <!-- end service section --> */}


            </div>
        </>
    );
};

export default Details;
