import { useState } from 'react'
import { IoLogoFacebook } from "react-icons/io";
import { FaYoutube, FaGithub } from "react-icons/fa";
import image from './Components/Image/girl.jpg'
import './App.css'
import img from './Components/Image/reactjs.png'
import pic from './Components/Image/python.png'
import picture from './Components/Image/tailwind.png'
import imag from './Components/Image/java.webp'
import photo from './Components/Image/js.webp'
import dp from './Components/Image/canva.jpg'
import { FaInstagram } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import web from './Components/Image/forms.png';
import website from './Components/Image/redstore.png';
import webb from './Components/Image/calculation.png';
import websites from './Components/Image/restfood.png';

function App() {

  return (
    <>
    <div className='bg-sky-900 text-white '>
      <header className='sticky top-0 bg-sky-900'>
        <ul className="font-bold flex p-8">
          <li className='text-5xl'>Portfolio</li>
          <div class=' flex space-x-10 right ml-auto text-3xl'>
           <a href="#home"> <li>Home</li></a>
            <a href="#about"><li>About</li></a>
           <a href="#skills"> <li>Skills</li></a>
            <a href="#project"><li>Projects</li></a>
            <a href="#contact"><li>Contact</li></a>
            <li>
            </li>
          </div>
        </ul>
      </header>
      <div id='home' className="flex pl-8">
        <div className="right">
          <h3 className="font-bold pl-3.5 mt-32 text-2xl">Welcome In My Feed</h3>
          <h1 className="font-bold text-5xl mb-8 pl-3.5">
            Hello, I am Tanu from Punjab, India.
          </h1>
          <p className='pl-3.5 text-xl mt-10'>
            I am learning web development and love creating modern websites.<br />
            Currently, I am improving my frontend skills with HTML, CSS, Tailwind CSS and JavaScript.<br />
            My goal is to become a professional frontend developer and work on real-world projects.
          </p>

          <div className="font-bold space-x-10 pl-3.5 mt-20 text-2xl">
      
              Available On
              <div className=' flex mt-2 gap-1 '>
               <IoLogoFacebook /> <FaYoutube /> <FaGithub /> <FaInstagram /> <BsTelegram />
               </div>
          </div>
        </div>
        <div className="left mt-32 mr-32 ">
          <img className="flex rounded-full size-80 ml-80 mr-40 " src={image} alt="Profile" />
        </div>
      </div>
      <div className="container pl-8" id='about'>
        <h1 className='text-5xl font-bold mb-1.5 mt-36 pl-3.5 underline underline-offset-1'>About</h1><br></br>
        <p className='mb-1.5 text-xl mt-5 pl-3.5'>
          Hello, I am Tanu, a passionate Web developer who loves creating modern, responsive, and user-friendly websites.<br />
          I specialize in HTML, CSS, Tailwind CSS, JavaScript and React. I enjoy turning ideas into beautiful digital experiences.<br />
          I'm always learning new technologies and improving my skills to build amazing projects.
        </p>

        <h1 className='text-4xl text-white mb-1.5 font-bold mt-20 pl-3.5 underline underline-offset-1 '>Education & Training</h1>
        <div className="mb-1.5 text-xl pl-3.5 mt-10">
  <ul className="list-disc pl-5">
    <li>B.Ed - (Punjab University) 2025 with 75%</li>
    <li>MCA - (Lovely Professional University) 2017 with CGPA - 7.70</li>
    <li>BCA - (Lovely Professional University) 2015 with CGPA 7.30</li>
  </ul>
</div>

        <h1 className='text-4xl text-white mb-1.5 font-bold mt-20 pl-3.5 underline underline-offset-1' id='skills'>  Skills & Expertise </h1>
        <ul className=' mt-10 list-disc pl-5 '>
          <li>Python, HTML, CSS, JavaScript, Tailwind CSS, Canva, Figma<br/></li>
       <li> Teaching Experience - (Little Leaders School) Dasuya - 01 April 2017 to 30 April 2020<br/></li>
        <li>Internship During B.Ed - (DAV School) Dasuya - 6 Month</li>
        </ul>
      </div>
      <div>
        <h1 className='text-5xl font-bold pl-10 mt-40 underline underline-offset-1 mb-3' id='project'>Portfolio</h1>
        <h3 className='font-bold text-4xl underline underline-offset-1 pl-10 mt-10'>Featured Projects</h3>
      </div>
      <div className="grid grid-cols-3 gap-6 p-6 pl-10 mt-10">
        <div className="border rounded-lg shadow-md p-4">
          <img src={img} alt="React Project" className="w-50 h-40 object-cover rounded" />
          <h2 className="text-xl font-bold mb-2">ReactJS</h2>
          <p>Skilled in building dynamic and reusable user interfaces using ReactJs.</p>
          <div className="flex gap-3 mt-4">
            <button className="bg-blue-500 text-white px-3 py-1 rounded">Video</button>
            <button className="bg-green-600 text-white px-3 py-1 rounded">Source Code</button>
          </div>
        </div>

        <div className="border rounded-lg shadow-md p-4">
          <h2 className="text-xl font-bold mb-2">Python</h2>
          <img src={pic} alt="React Project" className="w-50 h-40 object-cover rounded" />
          <p>Good command of python for logic building and automation.</p>
          <div className="flex gap-3 mt-4">
            <button className="bg-blue-500 text-white px-3 py-1 rounded">Video</button>
            <button className="bg-green-600 text-white px-3 py-1 rounded">Source Code</button>
          </div>
        </div>

        <div className="border rounded-lg shadow-md p-4">
          <h2 className="text-xl font-bold mb-2">Tailwind CSS</h2>
          <img src={picture} alt="React Project" className="w-50 h-40 object-cover rounded" />
          <p>Experienced in designing responsive layouts using Tailwind CSS.</p>
          <div className="flex gap-3 mt-4">
            <button className="bg-blue-500 text-white px-3 py-1 rounded">Video</button>
            <button className="bg-green-600 text-white px-3 py-1 rounded">Source Code</button>
          </div>
        </div>
        <div className="border rounded-lg shadow-md p-4">
          <h2 className="text-xl font-bold mb-2">Java</h2>
          <img src={imag} alt="React Project" className="w-50 h-40 object-cover rounded" />
          <p>Skilled in Java for Object-oriented programming and application development.</p>
          <div className="flex gap-3 mt-4">
            <button className="bg-blue-500 text-white px-3 py-1 rounded">Video</button>
            <button className="bg-green-600 text-white px-3 py-1 rounded">Source Code</button>
          </div>
        </div>
        <div className="border rounded-lg shadow-md p-4">
          <h2 className="text-xl font-bold mb-2">JavaScript</h2>
          <img src={photo} alt="React Project" className="w-50 h-40 object-cover rounded" />
          <p>Strong understanding of JavaScript for interactive and dynamic web development .</p>
          <div className="flex gap-3 mt-4">
            <button className="bg-blue-500 text-white px-3 py-1 rounded">Video</button>
            <button className="bg-green-600 text-white px-3 py-1 rounded">Source Code</button>
          </div>
          </div>
          <div className="border rounded-lg shadow-md p-4">
          <h2 className="text-xl font-bold mb-2">Canva And Figma</h2>
          <img src={dp} alt="React Project" className="w-50 h-40 object-cover rounded" />
          <p>Experienced in Canva for creating attractive graphics and visual designs  .</p>
          <p> Skilled in Figma for UI/UX design,wireframing and prototyping</p>
          <div className="flex gap-3 mt-4">
            <button className="bg-blue-500 text-white px-3 py-1 rounded">Video</button>
            <button className="bg-green-600 text-white px-3 py-1 rounded">Source Code</button>
          </div>
          </div>
        </div>
         <div>
  <h1 className="text-5xl font-bold pl-10 mt-40 underline underline-offset-1 mb-3">
    Projects
  </h1>

  {/* Flex container for all project cards */}
  <div className="flex flex-wrap gap-6 p-6 pl-10 mt-10">
    {/* Card 1 */}
    <div className="border rounded-lg shadow-md p-4 w-60">
      <img src={web} alt="HTML Project" className="w-full h-40 object-cover rounded mb-2" />
      <h2 className="text-xl font-bold mb-2">HTML</h2>
      <p>Creating a form with the help of HTML.</p>
    </div>

    {/* Card 2 */}
    <div className="border rounded-lg shadow-md p-4 w-66">
      <img src={website} alt="HTML & CSS Project" className="w-full h-40 object-cover rounded mb-2" />
      <h2 className="text-xl font-bold mb-2">HTML & CSS</h2>
      <p>Creating a Redstore Website with the help of HTML & CSS.</p>
    </div>

    {/* Card 3 */}
    <div className="border rounded-lg shadow-md p-4 w-60">
      <img src={webb} alt="JavaScript Project" className="w-full h-40 object-cover rounded mb-2" />
      <h2 className="text-xl font-bold mb-2">JavaScript</h2>
      <p>Creating the Calculator with the help of Javascript.</p>
    </div>

    {/* Card 4 */}
    <div className="border rounded-lg shadow-md p-4 w-66">
      <img src={websites} alt="Bootstrap Project" className="w-full h-40 object-cover rounded mb-2" />
      <h2 className="text-xl font-bold mb-2">BootStrap</h2>
      <p>Creating the Restfood website with the help of BootStrap.</p>
    </div>
  </div>
</div>

        <div>
          <h1 className='text-5xl font-bold pl-10 mt-20 underline underline-offset-1' id='contact'>Contact me</h1>
        <h3 className='font-bold text-2xl pl-10 mt-4'>Please fill out the form below to contact me.</h3>
        <div className='container '>
          <form method="post">
            <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-lg bg-white bg-sky-900 text-white ">
  <h2 className="text-2xl font-bold text-sky-600 mb-4">Send Your Message</h2>
  <form>
    {/* Full Name */}
    <div className="mb-4">
      <label className="block text-gray-700 text-sky-600 font-semibold mb-2 text-white">Full Name</label>
      <input 
        type="text" 
        placeholder="Enter your fullname" 
        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>

    {/* Email */}
    <div className="mb-4">
      <label className="block text-gray-700 font-semibold mb-2 text-sky-600">Email Address</label>
      <input 
        type="email" 
        placeholder="Enter your email address" 
        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>

    {/* Message */}
    <div className="mb-4">
      <label className="block text-gray-700 font-semibold mb-2 text-sky-600">Message</label>
      <textarea 
        placeholder="Enter your query" 
        rows="4"
        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
      ></textarea>
    </div>

    {/* Submit Button */}
    <button 
      type="submit" 
      className="bg-sky-600 rounded-full text-bold text-xl border border-indigo-200 w-60 ml-20 text-white px-4 py-2 rounded hover:bg-indigo-700"
    >
      Send me
    </button>
  </form>
</div>

             </form>


        </div>
        </div>
        <footer className='mt-20'>
          <hr></hr>
          <div className="align-center flex justify-center gap-3 mt-10 text-2xl  ">
               <IoLogoFacebook /><FaInstagram /><BsTelegram />
            </div>
            
            <div className='max-x-7xl mx-auto px-4 text-center bg-gray-900 text-white py-6 mt-10'>
              <p className='text-sm text-gray-400 mb-2'>
                Thanks for visting my portfolio website.</p>
              <p>
                @2026 Tanu. All Rights Reserved
              </p>


            </div>
          
        </footer>
        </div>

        






      </>
      )
}

      export default App