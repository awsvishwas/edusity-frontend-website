import React from 'react'
import './Contact.css'
import mailIcon from '../../assets/mail-icon.png'
import locationIcon from '../../assets/location-icon.png'
import phoneIcon from '../../assets/phone-icon.png'
import msgIcon from '../../assets/msg-icon.png'
import whiteArrow from '../../assets/white-arrow.png'

const Contact = () => {
    const [result, setResult] = React.useState("");
    const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "dcad1930-3e84-466a-82f0-2286817b9adc");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
}

  return (
    <div className='contact'>
        <div className='contact-col'>
            <h3>Send us a message <img src={msgIcon} alt="" /></h3>
            <p>Feel free to reach out through contact form or 
                find our contact information below. 
                Your feedback, questions, and suggestions are important to us as we 
                strive to provide exceptional service to our university community.</p>
                <ul>
                    <li> <img src={mailIcon} alt="" />support@educity.com</li>
                    <li> <img src={phoneIcon} alt="" />+1 123-456-7890</li>
                    <li> <img src={locationIcon} alt="" />77 Massachusetts Ave, Cambridge MA 02139, United States</li>
                </ul>
        </div>
        <div className='contact-col'>
            <form onSubmit={onSubmit} className='contact-form'>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" placeholder='Enter Your Name' />
                <label htmlFor="phone">Contact</label>
                <input type="tel" name="phone" placeholder='Enter Your Contact Number' />
                <label htmlFor="phone">Email</label>
                <input type="email" name="email" placeholder='Enter Your Email' />
                <label htmlFor="message">Message</label>
                <textarea type="text" name="message" placeholder='Message here...' rows={6}/>
                <button type='submit' className='btn dark-btn'>Submit now <img src={whiteArrow} alt="" /></button>
            </form>
            <span className='sending'>{`${result}.`}</span>
        </div>
      
    </div>
  )
}

export default Contact
