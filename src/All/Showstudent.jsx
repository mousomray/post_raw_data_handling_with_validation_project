import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Showstudent = () => {
  const [student, setStudent] = useState([]);
  // const [loading, setLoading] = useState(true);
  const [loadMore, setLoadMore] = useState(3);

  const fetchData = async () => {
    const response = await axios.get('https://tureappservar.onrender.com/student/show');
    setStudent(response.data.data);
    // setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleLoadMore = () => {
    setLoadMore(prev => prev + 3);
  };

  // if (loading) {
  //   return (
  //     <div style={{
  //       position: 'fixed',
  //       top: '0',
  //       left: '0',
  //       width: '100%',
  //       height: '100%',
  //       backgroundColor: 'white',
  //       display: 'flex',
  //       justifyContent: 'center',
  //       alignItems: 'center'
  //     }}>
  //       <div style={{
  //         position: 'absolute',
  //         top: '50%',
  //         left: '50%',
  //         transform: 'translate(-50%, -50%)'
  //       }}>
  //         <div className="spinner-border text-warning" role="status">
  //           <span className="sr-only">Loading...</span>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }
  

  return (
    <>
      {/* <!-- service section --> */}
      <section className="service_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2> All students </h2>
          </div>

          <div className="row">
            {student.slice(0, loadMore).map((studentData, index) => (
              <div className="col-sm-4" key={index}>
                <div className="box">
                  <div className="detail-box">
                    <h5>{studentData.name}</h5>
                    <p>{studentData.email}</p>
                    <p>{studentData.phone}</p>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button class="btn btn-primary mt-5"><Link to={`/details/${studentData?.slug}`} style={{ color: 'white', textDecoration: 'none' }}>Details</Link></button>
                  </div>

                </div>
              </div>
            ))}
          </div>



          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button class="btn btn-primary mt-5" onClick={handleLoadMore}>View More</button>
          </div>




        </div>
      </section>
      {/* <!-- end service section --> */}
    </>
  );
};

export default Showstudent;
