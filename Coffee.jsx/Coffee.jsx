 import React, { useState } from 'react'
//  import "./App.css"
import "./Coffee.css"
// import Coldcoffeeglass from "../assets/col"
import { motion } from "framer-motion"
import Tumbler from "../assets/Tumbler.png"
import Coldcoffee from "../assets/Coldcoffee.png"
import Colddrink from "../assets/Colddrink.png"
 import Map from "../assets/Map.png"
 import Hotcoffee from "../assets/Hotcoffee.png"
 import Keyboard from "../assets/Keyboard.jpg"
 import playstorelogo from "../assets/Playstorelogo.jpg"
 import Storelogo from "../assets/Storelogo.jpg"
import { FaBars, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Coffee = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* top section */}
          <div className="flex relative w-full overflow-x-hidden">

             {/* left div */}
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: false }}
                    className='h-[950px] w-1/2 text-2xl bg-[#0f0e19]'
                >
                    <div className='mt-12 ml-10'>
                        <span className='text-orange-500'>CODERS</span>
                        <span className='text-white m-2'>COFFEE.</span>

                        <div className='mt-10 text-6xl font-bold text-orange-200'>
                            BLVCK <br /> TUMBLER
                        </div>
                        <div className='flex mt-10'>
                            <div className='bg-[#211f36] h-40 w-60 absolute mt-60'></div>
                            <div className='text-amber-50 z-10 ml-10 max-w-md mt-76 text-xl leading-8'>
                                <span className='text-amber-100 font-bold'>Black Lifestyle Lovers,</span>
                                <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ipsum rerum voluptates rem molestiae.
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* menu button */}
                <motion.button
                    initial={{ y: -100, opacity: 0 }}
                    whileTap={{ scale: 0.8 }}
                    viewport={{ once: false }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10, duration: 0.3 }}
                    onClick={() => setIsOpen(!isOpen)}
                    className="z-50 absolute top-12 right-40 text-4xl text-white rounded-md"
                >
                    <FaBars />
                </motion.button>

                {/* Sidebar Nav */}
                <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: isOpen ? 0 : "100%" }}
                    viewport={{ once: false }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                    className="fixed right-0 h-full w-38 rounded-3xl bg-yellow-500 text-white z-40 shadow-lg"
                >
                    <div className="p-6 flex flex-col gap-6">
                        <nav className="flex fixed right-10 text-6xl top-60 flex-col gap-4">
                            <a href="https://facebook.com"><FaFacebook /></a>
                            <a href="https://instagram.com"><FaInstagram /></a>
                            <a href="https://twitter.com"><FaTwitter /></a>
                        </nav>
                    </div>
                </motion.div>

                {/* tumbler img */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
                    <motion.img
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                        transition={{ duration: 1.2, type: "spring", stiffness: 120 }}
                        viewport={{ once: false }}
                        src={Tumbler}
                        alt="Tumbler"
                        className="w-[300px] md:w-[400px]"
                    />
                </div>

                {/* right div */}
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: false }}
                    className='h-[950px] w-1/2 bg-[#202127] overflow-hidden p-10'
                >
                    <div className='text-[80px] md:text-[120px] font-bold text-[rgb(59,62,65)] leading-tight'>
                        BLVCK TUMBLER
                    </div>
                    <motion.div
                        className='h-[200px] w-[200px] mt-20 z-49'>
                        {/* <h1 className='font-extrabold text-yellow-600 text-9xl'>O</h1> */}
                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            viewport={{ once: false }}

                            className='h-50 w-50  border-amber-400 border-[20px] rounded-full bg-none relative -top-50 ml-15 '></motion.div>
                    </motion.div>
                    <div className='flex mt-10'>
                        <div className='bg-[#211f36] h-40 w-60 absolute  ml-30' ></div>
                        <div className='text-amber-50 z-20 ml-40 max-w-md  text-xl leading-8'>
                            <span className='text-amber-100 font-bold'>Blvck Tumbler</span>
                            <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aspernatur.
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* white div */}
            <div className='h-full w-full bg-white overflow-x-hidden'>

                {/* heading */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false }}
                    className='text-center mt-10'
                >
                    <h1 className='text-black font-bold text-3xl'>
                        Fresh and <span className='text-orange-400'>Tasty coffee</span>
                    </h1>
                    <p className='text-black mt-4'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos reprehenderit eum ducimus,
                        <br /> distinctio cum eaque totam voluptatem ex dolorem fuga.
                    </p>
                </motion.div>

                {/* coffee cards */}
                <div className='flex flex-wrap gap-9 justify-center items-center mt-10'>

                    <div className='flex flex-wrap gap-9 justify-center items-center mt-10'>
                        <motion.div className='w-90 text-center'
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.6, }}
                            viewport={{ once: false, amount: 0.6}}

                        >
                            <motion.img src={Colddrink} alt="Coldcoffee.png"
                            whileHover={{scale:1.2, }}
                                className='mx-auto' />
                            <h1 className='text-orange-400 font-bold mt-2'>Black Coffee</h1>
                            <p className='text-black mt-2'>lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </motion.div>
                        <motion.div className='w-90 text-center'
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.6, }}
                            viewport={{ once: false }}

                        >
                            <motion.img src={Coldcoffee} alt="Colddrink.png"
                            whileHover={{scale:1.2, }}
                                className='mx-auto' />
                            <h1 className='text-orange-400 font-bold mt-2'>Cold Coffee</h1>
                            <p className='text-black mt-2'>lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </motion.div>
                        <motion.div className='w-90 text-center'
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.6, }}
                            viewport={{ once: false }}

                        >
                            <motion.img src={Hotcoffee} alt="Hotcoffee"
                            whileHover={{scale:1.2}}
                                className='mx-auto mt-4 relative ' />
                            <h1 className='text-orange-400 font-bold mt-28'>Hot Coffee</h1>
                            <p className='text-black mt-2'>lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </motion.div>
                    </div>

                </div>

                {/* form + map */}Colddrink
                <motion.div
                    initial={{ y: 80, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: false }}
                    className='flex flex-col md:flex-row justify-evenly mt-20 px-5 gap-6'
                >
                    <div className='w-full md:w-1/2 font-bold'>
                        <h1 className='text-black text-xl'>Buy our products from anywhere</h1>
                        <div className='flex flex-wrap gap-2 mt-5'>
                            <input type="text" className='text-black border-2 p-2 rounded-sm flex-1' placeholder='Name' />
                            <input type="Email" className='text-black border-2 p-2 rounded-sm flex-1' placeholder='Email' />
                        </div>
                        <div className='flex flex-wrap gap-2 mt-5'>
                            <input type="text" className='text-black border-2 p-2 rounded-sm flex-1' placeholder='Country' />
                            <input type="number" className='text-black border-2 p-2 rounded-sm flex-1' placeholder='Zipcode' />
                        </div>
                        <button className='bg-amber-600 text-white font-bold h-10 w-full mt-4 rounded-sm'>Submit</button>
                    </div>

                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: false }}
                        className='w-full md:w-1/2 mt-10 md:mt-0'
                    >
                        <img src={Map} alt="Map" className='w-full' />
                    </motion.div>
                </motion.div>

                {/* keyboard img */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.2 }}
                    viewport={{ once: false }}
                    className='mt-10 flex  mb-10'
                    style={{backgroundImage:`url(${Keyboard})`,width:"150%",height:"450px" ,backgroundRepeat:"no-repeat", borderRadius:10}}
                >
                    <div className='ml-200 mt-50 text-black' >
                        <h1>
                            Download the App 
                        </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt.</p>
                        <div className='flex w-100 gap-1 h-10'>
                        <img src={playstorelogo} alt="" />
                        <img src={Storelogo} alt="" />
                        </div>
                    </div>   
                </motion.div>
                {/* footer */}
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false }}
                    className='bg-amber-600 w-full flex flex-col md:flex-row justify-evenly p-10 text-white'
                >
                    <div className='w-full md:w-1/3 mb-6 md:mb-0'>
                        <h1 className='font-bold'>Coders Cafe</h1>
                        <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ea ratione quidem libero.</p>
                    </div>

                    <div className='w-full md:w-1/3 mb-6 md:mb-0'>
                        <h1 className='font-bold'>Quick Links</h1>
                        <div className='flex justify-between mt-5'>
                            <ul>
                                <li className='mt-2'>Home</li>
                                <li className='mt-2'>About</li>
                                <li className='mt-2'>Contact</li>
                                <li className='mt-2'>Privacy Policies</li>
                            </ul>
                            <ul>
                                <li className='mt-2'>Home</li>
                                <li className='mt-2'>About</li>
                                <li className='mt-2'>Contact</li>
                                <li className='mt-2'>Privacy Policies</li>
                            </ul>
                        </div>
                    </div>

                    <div className='w-full md:w-1/3'>
                        <h1 className='font-bold'>Follow Us</h1>
                        <div className='flex'>
                        <a href="https://facebook.com"style={{ marginRight: '80px' }}><FaFacebook size={'40px'}/></a>
                            <a href="https://instagram.com"style={{ marginRight: '80px' }}><FaInstagram size={'40px'} /></a>
                            <a href="https://twitter.com"><FaTwitter size={'40px'}/></a>
                        </div>
                    </div>
                </motion.div>

                <div className='bg-amber-600 text-white text-center p-5'>
                    <hr className="border-t-2 border-white mb-5" />
                    <p>Copyright © 2024 Company Name. All rights reserved.</p>
                </div>
            </div>
        </>
    )
}

export default Coffee