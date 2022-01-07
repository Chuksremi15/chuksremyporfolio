import React from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <section class='heading'>
        <div class='container'>
          <div>
            <h1 class='text-center'>Contact Me</h1>
            <p class='text-center'>
              If you’d like to chat about a project, please reach me.
            </p>
          </div>
        </div>
      </section>

      <section class='contact'>
        <div class='container'>
          <div class='card text-center'>
            <h4 class='m-1'>Status</h4>
            <h1 class='mb-3'>Available</h1>
            <p>I’m currently accepting new projects!</p>
          </div>
          <div class='card text-center'>
            <h4 class='m-1'>Email</h4>
            <h1 class='mb-3'>Chuksremi15@gmail.com</h1>
          </div>
          <div class='card text-center'>
            <h4 class='m-1'>Phone/Whatsapp</h4>
            <h1 class='mb-3'>+2349058641510</h1>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
