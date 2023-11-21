import { Link } from 'react-router-dom';
import img1 from './images/customer-service.png'
import img2 from './images/contact-form.png'
import img3 from './images/question.png'

const Contact = () => {
    return (
        <div className='contactpage'>
            <h1>Contact Us</h1>
            <br></br>
            <br></br>
            <div className='ContactUs'>
                <div className='phone'> 
                    <img src={img1} alt="img"/>
                    <h3>By Phone</h3>
                    <p>(Monday to Friday, 9am to 4pm IST)</p>
                    <p>+91-987-654-3210</p>
                </div>
                <div className='query'>
                    <img src={img2} alt="img"/>
                    <h3>Send a Query</h3>
                    <p>Just send us your questions or concerns and we will give you the help you need.</p>
                    <Link to="/contact-page"><button className='btn'>Send a Query</button></Link>
                </div>
                <div className='faq'>
                    <img src={img3} alt="img"/>
                    <h3>FAQs</h3>
                    <p>Get your answer from our frequently asked questions.</p>
                    <Link to="/faq-page"><button className='btn'>View FAQs</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Contact;