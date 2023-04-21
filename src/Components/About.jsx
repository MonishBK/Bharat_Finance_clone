import React from 'react'

import '../CSS/homePage.css'
import { HeaderCard } from './Cards'

const About = () => {
  return (
    <div>
        
        <HeaderCard header='Terms and Conditions' path='HOME  > TERMS AND CONDITIONS' />

        <div className="row px-3 py-5">
            <div className="col-sm-6 ps-5  ">
                <h1 className='fw-bolder ps-5 ' style={{
                    fontSize:35 
                }} > 
                Professional And <br />
                Dedicated Consulting Services
                </h1>

                <div className="circles_div wrk_prog_circle my-5">

                    <div className="circles"></div>
                    <div className="circles"></div>
                    <div className="circles circle_middel"></div>
                    <div className="circles"></div>
                    <div className="circles"></div>
                </div>

                <p className='fs-3 ps-5' >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus corporis in expedita non sed ea quis vel. Repudiandae, distinctio magni?
                </p>

            </div>
            <div className="col-sm-6  ">
                    <div className="experience_year_block">
                        <div className="image">
                            <img src="./img/image-46.jpg" alt="" />
                            <h2>
                                14
                            </h2>
                        </div>
                        <div className="text">
                             Years <br />
                             experience
                        </div>
                    </div> 
            </div>
        </div>

        <div class="row">

            <div className="col-sm-6">
                <img src="./img/image-45.jpg" alt="" />
            </div>

            <div className="col-sm-6   ">
                    <h1 className='fw-bolder ' style={{
                        fontSize:35 
                    }} > 
                    Reason For Choosing Our <br />
                    Consultancy
                    </h1>

                    <div className="circles_div wrk_prog_circle my-5">

                        <div className="circles"></div>
                        <div className="circles"></div>
                        <div className="circles circle_middel"></div>
                        <div className="circles"></div>
                        <div className="circles"></div>
                    </div>

                    <div className="row py-5 ">
                        <div className="col-sm-2 py-4">
                        <div className="Consultancy_icon"></div>
                        </div>
                        <div className='col-sm-9' >
                            <h2 className='fs-2 fw-bolder' >
                            Flexibility to serve you <br />
                            better service
                            </h2>
                            <p className='fs-3 pt-3' >
                            Complete accounts of the systems and expound teachings of the great explorers.
                            </p>
                        </div>
    
                    </div>

                    <div className="row  py-5 ">
                        <div className="col-sm-2 py-4">
                        <div className="Consultancy_icon"></div>
                        </div>
                        <div className='col-sm-9' >
                            <h2 className='fs-2 fw-bolder' >
                            Tailored advice and <br />
                            support
                            </h2>
                            <p className='fs-3 pt-3' >
                            Business it will frequently occur that pleasures have to repudiated accepted.
                            </p>
                        </div>
    
                    </div>

                </div>
        </div>

        <div className="row">
            <div className="col-sm-12 py-5" style={{
                position:'relative'
            }}>
                <img src="./img/bg-20.jpg" alt="" className='img-fluid'  />

                <div className="row" style={{
                    position:'absolute',
                    top:0,
                    left:0,
                    right:0,
                    bottom:0,
                    color: 'white',
                }}>

                    <div className="col-sm-4  " style={{
                        display: 'grid',
                        alignItems: 'center',
                    }} >

                        <div className="row">

                            <div className="col-sm-5 ">

                            </div>
                            <div className="col-sm-7 p-5  " style={{
                                borderRight: '2px solid grey'
                            }} >
                                <p className='fs-3 fw-bold'>
                                    PROJECTS
                                </p>
                                <h2 style={{
                                    fontSize:40,
                                    fontWeight:'bold'
                                }}>
                                    2.5K
                                </h2>
                                <p className='fw-bold fs-2' > 
                                    Successful Projects
                                </p>

                                <p className='fs-3 ' style={{
                                    color:'#fd4a36'
                                }} >
                                    -Our Projects
                                </p>
                            </div>

                        </div>



                    </div>

                    <div className="col-sm-4 " style={{
                        display: 'grid',
                        alignItems: 'center',
                    }}  >

                    <div className="row">

                        <div className="col-sm-5 ">

                        </div>
                        <div className="col-sm-7 p-5  " style={{
                            borderRight: '2px solid grey'
                        }} >
                            <p className='fs-3 fw-bold'>
                                OUR TEAM
                            </p>
                            <h2 style={{
                                fontSize:40,
                                fontWeight:'bold'
                            }}>
                                138+
                            </h2>
                            <p className='fw-bold fs-2' > 
                                Experienced Staff
                            </p>

                            <p className='fs-3 ' style={{
                                    color:'#fd4a36'
                                }} >
                                -Team Members
                            </p>
                        </div>

                        </div>

                    </div>
                    <div className="col-sm-4 " style={{
                        display: 'grid',
                        alignItems: 'center',
                    }} >

                    <div className="row">

                        <div className="col-sm-5 ">

                        </div>
                        <div className="col-sm-7 p-5  " style={{
                            borderRight: '2px solid grey'
                        }} >
                            <p className='fs-3 fw-bold'>
                            HAPPY CLIENTS
                            </p>
                            <h2 style={{
                                fontSize:40,
                                fontWeight:'bold'
                            }}>
                                99%
                            </h2>
                            <p className='fw-bold fs-2' > 
                            Client Satisfaction
                            </p>

                            <p className='fs-3 ' style={{
                                    color:'#fd4a36'
                                }} >
                                -Testimonials
                            </p>
                        </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>

        {/* Industry we served */}

        <div className="row p-5" >
            <div className="col-sm-6 py-5">
                <h1 className=' pb-5 ' style={{
                    fontSize:40,
                    fontWeight:'bold',
                }} >
                         Industries We Served
                </h1>

                <div className="circles_div wrk_prog_circle">

                    <div className="circles"></div>
                    <div className="circles"></div>
                    <div className="circles circle_middel"></div>
                    <div className="circles"></div>
                    <div className="circles"></div>
                </div>
                
                <div className="row">
                    <div className="col-sm-4">

                    </div>
                </div>

            </div>
            <div className="col-sm-6 py-5">
                <p className='fs-3' >
                Which is the same as saying through shrinking from toil and pain <br />
                these perfectly simple and easy to distinguish.
                </p>
            </div>
        </div>

        <div className="row">
            
        </div>


    </div>
  )
}

export default About