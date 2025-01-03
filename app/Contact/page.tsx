import React from 'react'

const Contactpage = () => {
  return (
    <div>
      <h3>Contac us</h3>
      <p>If you have any questions, feedback, or collaboration inquiries, feel free to reach out. You can use the form below to get in touch,<br/> or connect with us via social media.</p>
      <div className="container mx-auto p-8">
  <header className="text-center">
    <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
    <p className="text-lg mb-6">We’d love to hear from you! Please fill out the form below or reach out via social media.</p>
  </header>

  <form action="/submit" method="POST" className="space-y-6">
    <div className="space-y-2">
      <label htmlFor="name" className="text-lg font-semibold">Your Name</label>
      <input type="text" id="name" name="name" required className="w-full p-3 border border-gray-300 rounded-md" placeholder="Enter your name"/>
    </div>

    <div className="space-y-2">
      <label htmlFor="email" className="text-lg font-semibold">Your Email</label>
      <input type="email" id="email" name="email" required className="w-full p-3 border border-gray-300 rounded-md" placeholder="Enter your email"/>
    </div>

    <div className="space-y-2">
      <label htmlFor="message" className="text-lg font-semibold">Your Message</label>
      <textarea id="message" name="message" rows={5} required className="w-full p-3 border border-gray-300 rounded-md" placeholder="Write your message"></textarea>
    </div>

    <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600">Submit</button>
  </form>
    </div>
    </div>
  )
}

export default Contactpage
