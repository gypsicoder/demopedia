import React from 'react';
import Image from 'next/image';
import UrlButton from '@/components/urlButton/UrlButton';

export const metadata = {
  title: 'Demopedia Contact Page',
  description:
    'This is the contact page of Demopedia which is a website showcasing projects and blog posts developed in NextJS 13',
};

function Contact() {
  return (
    <div>
      <h1 className='text-5xl text-center mb-[50px]'>{"Let's Keep in Touch"}</h1>
      <div className='flex items-center gap-[100px]'>
        <div className='flex-1 relative h-[450px]'>
          <Image
            src={'/contact.png'}
            fill={true}
            alt=''
            className='object-contain contact-image-animation'
          />
        </div>
        <form action='' className='flex flex-1 flex-col gap-[20px]'>
          <input type='text' className='p-[20px] bg-transparent outline-none text-[#ccc] border-[3px] border-[#ccc] text-[20px] font-bold' placeholder='Name' />
          <input
            type='email'
            className='p-[20px] bg-transparent outline-none text-[#ccc] border-[3px] border-[#ccc] text-[20px] font-bold'
            placeholder='Email'
          />
          <textarea
            name='message'
            id='message'
            placeholder='Message'
            cols={30}
            rows={10}
            className='p-[20px] bg-transparent outline-none text-[#ccc] border-[3px] border-[#ccc] text-[20px] font-bold'
          ></textarea>
          <UrlButton url='#' text='Send' />
        </form>
      </div>
    </div>
  );
}

export default Contact;
