import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to a server, use GPt to setup your own email
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });

    const email = "mdheeraj2000@gmail.com";

    const mailtoLink = `mailto:${email}`;

    window.location.href = mailtoLink;
  };

  

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Get in Touch</h2>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition-colors duration-300 flex items-center justify-center"
            >
              Send Message
              <Send size={20} className="ml-2" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;



// import React, { useState } from 'react';
// import { Send } from 'lucide-react';
// import emailjs from 'emailjs-com'; // Import EmailJS

// const Contact: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     // Prepare data for EmailJS
//     const templateParams = {
//       from_name: formData.name,
//       from_email: formData.email,
//       message: formData.message,
//     };

//     // Send email via EmailJS
//     emailjs.send('service_fmg59ls', 'template_0n8ffr5', templateParams, 'pWg7pZ33q8HVzclfR')
//       .then((response) => {
//         console.log('SUCCESS!', response.status, response.text);
//         alert('Thank you for your message! I will get back to you soon.');
//         setFormData({ name: '', email: '', message: '' });
//       }, (error) => {
//         console.error('FAILED...', error);
//         alert('Oops! Something went wrong. Please try again.');
//       });
//   };

//   return (
//     <section id="contact" className="py-20 bg-gray-900">
//       <div className="container mx-auto px-4">
//         <h2 className="text-4xl font-bold mb-12 text-center">Get in Touch</h2>
//         <div className="max-w-2xl mx-auto">
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <div>
//               <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
//               <textarea
//                 id="message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//                 rows={4}
//                 className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               ></textarea>
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition-colors duration-300 flex items-center justify-center"
//             >
//               Send Message
//               <Send size={20} className="ml-2" />
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
