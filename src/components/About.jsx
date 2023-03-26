import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Franco Hermsoilla, nice to meet you</p>
            </div>
            <div>
              <p>Graduated from Henry as a Full Stack developer 💻. I love challenges and starting on this path as a developer is one of them. During my course at Henry 🧑‍🎓, I participated in different projects 💼 where I was able to develop my technological skills and at the same time learn other technologies as a self-taught person. 💖I am passionate about programming and my goal is to continue developing as a Full Stack as part of a company that allows me to apply everything I have learned so far and continue to grow both personally and professionally to achieve the best possible results 💪.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
