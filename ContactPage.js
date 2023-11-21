// src/ContactPage.js

import React, { useState } from 'react';

const ContactPage = () => {
  const [email, setEmail] = useState('');
  const [query, setQuery] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');

  const handleSubmit = () => {
    // Add your logic to handle the form submission here
    console.log('Email:', email);
    console.log('Query:', query);
    // You can send the data to your backend or perform any other necessary actions
  };

  return (
    
    <div className="contact">
      <h4>GOT A QUESTION?</h4>
      <h1>Contact CoEd</h1>
      <p>We're here to help and answer any question you might have. We look forward to hearing from you.</p>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="box">
        <form onSubmit={handleSubmit}>
            <div className="name">
                <div>
                    <label><b>FIRST NAME</b></label>
                    <input 
                        type="text" 
                        value={fname} 
                        onChange={(e) => setFname(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label><b>LAST NAME</b></label>
                    <input 
                        type="text" 
                        value={lname} 
                        onChange={(e) => setLname(e.target.value)}
                        required
                    />
                </div>
            </div>
            <div>            
                <label><b>EMAIL</b></label><br></br>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label><b>QUERY</b></label><br></br>
                <textarea
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;