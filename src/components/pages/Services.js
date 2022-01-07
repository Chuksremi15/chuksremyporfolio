import React from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

const Services = () => {
  return (
    <div>
      <Navbar />
      <section class='heading'>
        <div class='container'>
          <div>
            <h1 class='text-center'>My Services</h1>
            <p class='text-center'>
              Everything I offer with a detailed overview of each.
            </p>
          </div>
        </div>
      </section>

      <section class='service'>
        <div class='container'>
          <div class='offers'>
            <div class='card'>
              <img
                src='./img/icons/icons8-web-design-96.png'
                alt=''
                class='img-fluid'
                width='150'
              />
              <div>
                <h1 class='mt-3'>Web Design</h1>
                <h3 class='mt-5'>User Focused</h3>
                <p>
                  A website should be designed for the people who will use it,
                  so that's exactly what I do. User focused design should be the
                  primary goal of any website.
                </p>
                <h3 class='mt-5'>eCommerce</h3>
                <p>
                  Creating a good online store can be hard. Over the years I've
                  learned the best ways to design stores that sell products and
                  provide real value to customers
                </p>
                <h3 class='mt-5'>Application UI</h3>

                <p>
                  The user interface of an application, whether it's mobile or
                  desktop, can make or break a business. Getting the interface
                  right and most importantly of all, making it easy to navigate,
                  are the keys to a successful app.
                </p>
              </div>
            </div>
            <div class='card'>
              <img
                src='./img/icons/icons8-css3-96.png'
                alt=''
                class='img-fluid'
                width='150'
              />
              <div>
                <h1 class='mt-3'>Web Development</h1>
                <h3 class='mt-5'>HTML / CSS</h3>
                <p>
                  Creating a strong foundation for a website means getting the
                  HTML and CSS architecture right. If you've got a design I can
                  create the front-end code for it.
                </p>
                <h3 class='mt-5'>WordPress</h3>
                <p>
                  Almost all of the websites I make are done using WordPress and
                  the reason is simple: It just works. You can easily update
                  every piece of content, turn sections on or off and so much
                  more.
                </p>
                <h3 class='mt-5'>Performance</h3>

                <p>
                  Having a fast website is key to keeping people around which
                  ultimately converts them into customers. There are a myriad of
                  techniques involved in making a fast website, all of which
                  I've spent years learning. I build these techniques into every
                  site I code and can also offer this as a standalone service
                  for existing websites.
                </p>
              </div>
            </div>
            <div class='card'>
              <img
                src='./img/icons/icons8-react-native-96.png'
                alt=''
                class='img-fluid'
                width='150'
              />
              <div>
                <h1 class='mt-3'>React Development</h1>
                <h3 class='mt-5'>Declarative</h3>
                <p>
                  React makes it painless to create interactive UIs. Design
                  simple views for each state in your application, and React
                  will efficiently update and render just the right components
                  when your data changes.
                </p>
                <h3 class='mt-5'>Component-Based</h3>
                <p>
                  Build encapsulated components that manage their own state,
                  then compose them to make complex UIs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;
