import React from 'react'


const Contact = () => {

   

  return (
    <div className='auth'>
        <h1>Contact Form</h1>
        <form >
            <input required type="text" placeholder='firstname' name="firstname" />
            <input required type="text" placeholder='lastname' name="lastname"/>
            <input required type="email" placeholder='email' name="email" />
            <textarea name="messsage" id="" cols="30" rows="10" placeholder='message'></textarea>
            <button>Send</button>
           
        </form>
    </div>
  )
}

export default Contact