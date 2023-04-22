import React from 'react'

import '../CSS/homePage.css'
import { HeaderCard,ServiceBox } from './Cards'

import { BsBank2,BsArrowRight,BsTrophy,BsFillPeopleFill } from "react-icons/bs";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

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

        <div className="row fun_facts_section py-5">
            <div className="col-sm-12 py-5" >
                <div className="row" style={{

                    color: 'white',
                }}>

                    <div className="col-sm-4  " style={{
                        display: 'grid',
                        alignItems: 'center',
                    }} >

                        <div className="row">

                            <div className="col-sm-5 text-end pt-5">
                                <AiOutlineFundProjectionScreen style={{
                                color:'#fff',
                                fontSize:50,
                                fontWeight:'bold'
                            }}  />
                            </div>
                            <div className="col-sm-7 p-5  " style={{
                                borderRight: '2px solid grey'
                            }} >
                                <p className='fs-3 fw-bold pb-3'>
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

                        <div className="col-sm-5 text-end pt-5 ">
                            <BsFillPeopleFill style={{
                                color:'#fff',
                                fontSize:50,
                                fontWeight:'bold'
                            }} />
                        </div>
                        <div className="col-sm-7 p-5  " style={{
                            borderRight: '2px solid grey'
                        }} >
                            <p className='fs-3 fw-bold pb-3'>
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

                        <div className="col-sm-5 text-end pt-5 ">
                            <BsTrophy style={{
                                color:'#fff',
                                fontSize:50,
                                fontWeight:'bold'
                            }} />
                        </div>
                        <div className="col-sm-7 p-5  " style={{
                            borderRight: '2px solid grey'
                        }} >
                            <p className='fs-3 fw-bold pb-3'>
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

        <div className="row p-5" style={{
            backgroundColor:"#f1f5f8",
        }} >
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

        <div className="row pb-5" style={{
            placeContent:"space-evenly",
            backgroundColor:"#f1f5f8",
        }}>
            
            <ServiceBox icon={<BsBank2/> } text={ <div className=" fs-2 fw-bold " style={{
                    display: 'flex',
                    alignItems:'center'
                }} >   Banking & <br/> capital market</div>  }/>

            <ServiceBox icon={<BsBank2/> } text={ <div className=" fs-2 fw-bold " style={{
                    display: 'flex',
                    alignItems:'center'
                }} >   
                Finance & <br/>
                insurance market</div>  }/>

            <ServiceBox icon={<BsBank2/> } text={ <div className=" fs-2 fw-bold " style={{
                    display: 'flex',
                    alignItems:'center'
                }} >   
                Logistic & <br/>
                trasportation</div>  }/>

            <ServiceBox icon={<BsBank2/> } text={ <div className=" fs-2 fw-bold " style={{
                    display: 'flex',
                    alignItems:'center'
                }} >   
                
                Justice & <br/>    
                defence security</div>  }/>

            <ServiceBox icon={<BsBank2/> } text={ <div className=" fs-2 fw-bold " style={{
                    display: 'flex',
                    alignItems:'center'
                }} >   
                       
                Energy & <br/>
                resource industry</div>  }/>

            <ServiceBox icon={<BsBank2/> } text={ <div className=" fs-2 fw-bold " style={{
                    display: 'flex',
                    alignItems:'center'
                }} >   
                       
                Life & <br/>
                health science</div>  }/>


        </div>

        <div className="row awards_con mt-5">
            <div className="row px-5 py-5">
                <div className="col-sm-12 px-5 py-5">
                    <h1 className='pb-4' style={{
                        fontSize:40,
                        fontWeight:'bold',
                    }} >
                        Our Awards And Achivements
                    </h1>

                    <div className="circles_div wrk_prog_circle">
                        <div className="circles"></div>
                        <div className="circles"></div>
                        <div className="circles circle_middel"></div>
                        <div className="circles"></div>
                        <div className="circles"></div>
                    </div>

                    <p className='fs-3 pt-5'>
                    To take a trivial example, which of us ever undertakes laborious physical exercise, except <br />
                        obtain some advantage from it enjoy a pleasure.
                    </p>

                </div>
            </div>

            <div className="row">
                <div className="col-sm-8 px-5">
                    <div className="row">

                        <div className="col-lg-4 " style={{
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection:'column'
                        }} >
                            <div className="image mb-4">
                                <img src="./img/award-8.png" alt="" className='.img-thumbnail' />
                            </div>
                            <p className=' fw-bold fs-3 text-center' >
                                Best consulting <br />
                                company
                            </p>
                        </div>

                        <div className="col-lg-4 border-left border-start border-end " style={{
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection:'column'
                        }} >
                            <div className="image mb-4">
                                <img src="./img/award-9.png" alt="" className='.img-thumbnail' />
                            </div>
                            <p className=' fw-bold fs-3 text-center' >
                            Best outsourcing <br/>
                            advisors

                            </p>
                        </div>

                        <div className="col-lg-4 " style={{
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection:'column'
                        }} >
                            <div className="image mb-4">
                                <img src="./img/award-10.png" alt="" className='.img-thumbnail' />
                            </div>
                            <p className=' fw-bold fs-3 text-center' >
                            Customer choice for <br/>
                            support
                            </p>
                        </div>
                    </div>
                        <p className='fs-3 px-5 py-5' >
                        We have won 27 more awards in our career. View All Awards  <BsArrowRight className='fw-bold fs-2'/>
                        </p>

                </div>
            </div>


        </div>

        {/* proud to work */}

        <div className="row p-5" style={{
            backgroundColor:"#f1f5f8",
        }} >
            <div className="col-sm-6 py-5">
                <h1 className=' pb-5 ' style={{
                    fontSize:40,
                    fontWeight:'bold',
                }} >
                         We Proud To Work
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
                Which is the same as saying through shrinking from toil and pain. These cases are
                perfectly simple and easy to distinguish.
                </p>
            </div>
        </div>
        <div className="row pb-5 mb-5 px-5" style={{
            placeContent:"space-evenly",
            backgroundColor:"#f1f5f8",
        }}>
            <div className="col-lg-3 col-md-6 border px-5 py-5" style={{
                display:"flex",
                justifyContent:"center",
            }}>
                <img src="./img/client-7.png" alt="" />
            </div>
            <div className="col-lg-3 col-md-6 border px-5 py-5" style={{
                display:"flex",
                justifyContent:"center",
            }}>
                <img src="./img/client-8.png" alt="" />
            </div>
            <div className="col-lg-3 col-md-6 border px-5 py-5" style={{
                display:"flex",
                justifyContent:"center",
            }}>
                <img src="./img/client-9.png" alt="" />
            </div>
            <div className="col-lg-3 col-md-6 border px-5 py-5" style={{
                display:"flex",
                justifyContent:"center",
            }}>
                <img src="./img/client-10.png" alt="" />
            </div>

            <div className="col-lg-3 col-md-6 border px-5 py-5" style={{
                display:"flex",
                justifyContent:"center",
            }}>
                <img src="./img/client-11.png" alt="" />
            </div>
            <div className="col-lg-3 col-md-6 border px-5 py-5" style={{
                display:"flex",
                justifyContent:"center",
            }}>
                <img src="./img/client-12.png" alt="" />
            </div>
            <div className="col-lg-3 col-md-6 border px-5 py-5" style={{
                display:"flex",
                justifyContent:"center",
            }}>
                <img src="./img/client-13.png" alt="" />
            </div>
            <div className="col-lg-3 col-md-6 border px-5 py-5" style={{
                display:"flex",
                justifyContent:"center",
            }}>
                <img src="./img/client-14.png" alt="" />
            </div>

    
        </div>

    </div>
  )
}

export default About