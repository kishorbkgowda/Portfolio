import React from 'react'
import {AiFillLinkedin , AiFillGithub,AiFillInstagram} from 'react-icons/ai'
function Contact() {
  return (
    <div className='max-w-[1200px] mx-auto glass'id='contact'>
      <div className='mx-auto max-w-[600px] text-center p-6'>
        <h2 className='text-gray-500 text-3xl md:text-5xl mb-4 font-bold '>Let's connect</h2>
        <p className='text-gray-500 text-2xl text-right'>and start working on amazing things</p>
      </div>
      <div className='flex justify-center '>
        <div className='my-auto text-purple-900 '>
          <a href="" ><AiFillLinkedin className='w-20 sm:w-[100px] h-auto mb-4'/></a>
          <a href=""><AiFillGithub className='w-20 sm:w-[100px] h-auto mb-4'/></a>
          <a href=""><AiFillInstagram className='w-20 sm:w-[100px] h-auto'/></a>
        </div>
        <div className='p-6 max-w-6xl'>
          <h2 className='mb-4 text-xl sm:text-2xl font-bold text-gray-400'>Ready to Get Started?</h2>
          <form action=''>
            <div className='space-y-4 mb-6'>
              <input className='w-full border-gray-400 py-2 px-4 border rounded' type='text' id='name' name='name' placeholder='Your name...'/>
              <input className='w-full border-gray-400 py-2 px-4 
              border rounded ' type='email' id='email' name='email' placeholder='Your email address...'/>
              <textarea className='w-full border-gray-400 py-2 px-4 border rounded ' name="message" type="textarea" placeholder='Your message...' rows="5"></textarea>
            </div>
            <div className='text-center '>
              <button type='submit' className='w-full bg-purple-700 px-6 max-w-lg py-3 rounded-xl md:text-[1.15rem]'>Send Message</button></div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact