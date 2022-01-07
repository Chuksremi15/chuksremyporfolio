import React from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

const Process = () => {
  return (
    <div>
      <Navbar />
      <section className='heading'>
        <div className='container'>
          <div>
            <h1 className='text-center'>My Process</h1>
            <p className='text-center'>
              From wireframes to code, below is a detailed look at how I run a
              typical project.
            </p>
          </div>
        </div>
      </section>

      <section className='process'>
        <div className='container'>
          <div className='content'>
            <h1 className='process-heading'>
              STEP 1 - <span className='text-bold'> GETTING STARTED </span>
            </h1>
            <div className='line'></div>
            <div className='box'>
              <div className='img-container'>
                <img
                  src='./img/icons/icons8-training-96.png'
                  alt=''
                  width='60'
                />
              </div>

              <div className='text-content'>
                <h3>Brief</h3>
                <p>
                  To get a clear picture of what you need I start every project
                  by receiving an initial brief of what you want. Having this
                  gives me enough context to properly provide you with a
                  proposal and ultimately tailor my services to your project
                  goals.
                </p>
              </div>
            </div>
            <div className='box'>
              <div className='img-container'>
                <img
                  src='./img/icons/icons8-consultation-96.png'
                  alt=''
                  width='60'
                />
              </div>
              <div className='text-content'>
                <h3>Initial Chat</h3>
                <p>
                  The next step is to have a quick 15-minute call so we can
                  properly introduce ourselves and make sure we're both on the
                  same page. This is the perfect time to let me know anything I
                  might need to be aware of during the project.
                </p>
              </div>
            </div>
          </div>

          <div className='content'>
            <h1 className='process-heading'>
              STEP 2 - <span className='text-bold'> DESIGN </span>
            </h1>
            <div className='line'></div>
            <div className='box2'>
              <div className='text-content'>
                <h3>Wireframes</h3>
                <p>
                  Having a good set of wireframes is the bedrock of any
                  successful website project. This is where we hammer down the
                  layout and general functionality while always making sure the
                  user is the primary focus.
                </p>
              </div>
              <div className='img-container'>
                <img
                  src='./img/icons/icons8-goodnotes-96.png'
                  alt=''
                  width='60'
                />
              </div>
            </div>
            <div className='box2'>
              <div className='text-content'>
                <h3>Designs</h3>
                <p>
                  This is where I apply the paint to your website. I'll take the
                  concepts we've agreed on in the wireframes to make them look
                  usable, modern and clean.
                </p>
              </div>

              <div className='img-container'>
                <img
                  src='./img/icons/icons8-computer-support-96.png'
                  alt=''
                  width='60'
                />
              </div>
            </div>
          </div>

          <h1 className='process-heading'>
            STEP 3 - <span className='text-bold'> DEVELOPMENT & LAUNCH </span>
          </h1>
          <div className='line'></div>
          <div className='box'>
            <div className='img-container'>
              <img src='./img/icons/icons8-code-96.png' alt='' width='60' />
            </div>

            <div className='text-content'>
              <h3>Code</h3>
              <p>
                When the coding begins there will generally be less
                communication from me as this is quite an involved process that
                doesn't require much feedback. This is where I take the visuals
                of your website and make them into something real that people
                can interact with.
              </p>
            </div>
          </div>
          <div className='box'>
            <div className='img-container'>
              <img
                src='./img/icons/icons8-personal-trainer-96.png'
                alt=''
                width='60'
              />
            </div>

            <div className='text-content'>
              <h3>Training</h3>
              <p>
                After the website has been coded but before it goes live I like
                to provide in-depth training. Going forward your website will be
                easily updatable by yourself so I'll take you through everything
                over the phone and even provide screencasts for you to keep.
              </p>
            </div>
          </div>
          <div className='box'>
            <div className='img-container'>
              <img src='./img/icons/icons8-launch-96.png' alt='' width='60' />
            </div>
            <div className='text-content'>
              <h3>Launch</h3>
              <p>
                When it's time to launch the new site I'll take care of
                everything. All you'll need to do is get that Tweet ready about
                your shiny new website!
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Process;
