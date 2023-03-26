import React from 'react'
import swal from 'sweetalert';


const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const email = event.target.elements.email.value;
    const message = event.target.elements.message.value;

    if (!name || !email || !message) {
      swal({
        title: "Something went wrong",
        text: "Try again",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      return;
    }

    // Create a new FormData object with the form data
    const formData = new FormData(event.target);

    // Send the form data to the server using fetch API
    fetch("https://getform.io/f/e3530cba-bfa7-4913-8e08-4a2453b63d7f", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          swal({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success",
          });
          event.target.reset();
        } else {
          swal({
            title: "Something went wrong",
            text: "Try again or send an email to franconicolas50@gmail.com",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
        }
      })
      .catch((error) => {
        swal({
          title: "Something went wrong",
          text: "Try again or send an email to franconicolas50@gmail.com",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        console.error(error);
      });
  };
  
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' onSubmit={handleSubmit} className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name and surname' name='name' required />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' required  />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message' required></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Send</button>
        </form>
    </div>
  )
}

export default Contact
