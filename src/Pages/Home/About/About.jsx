import React from 'react';

const About = () => {
    return (
        <div id="about-me">
            <div data-aos="fade-right" className='grid md:grid-cols-2 lg:grid-cols-2 '>
                <div >
                    <img className='rounded mx-auto h-auto w-3/4' src="" alt="" />
                </div>
                <div className='flex justify-center items-center'>
                    <div className='text-center md:text-left lg:text-left mt-4 px-3 md:mt-0 lg:mt-0 md:px-0 lg:px-0'>
                        <h1 className='text-4xl  font-bold text-blue-800'>About Me</h1>
                        <p className='my-4 text-xl pr-4'>I am Anonna Ferdaus, I have completed my CSE graduation from UITS in 2020. Then I started learning basic front end development from W3 school by my own interest. Then I also took an online course provided by Programming Hero to expand my knowledge in this field.


                            One of my strengths is my ability to communicate and collaborate effectively with others. I enjoy working as part of a team and I'm always willing to learn new things. Additionally, I have skills in graphic design and Facebook marketing.
                            When it comes to graphic design, I can create attractive and user-friendly designs for websites and other digital media. As for Facebook marketing, I know how to promote products and services, engage with the target audience, and analyze marketing campaigns for better results.

                        </p>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default About;