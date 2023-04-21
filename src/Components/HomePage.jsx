import React from 'react'

import '../CSS/homePage.css'
import '../CSS/home.css'
import Cards,{ImgCard,ProgCard} from './Cards';

import { BsSearch,BsTwitter,BsClockHistory,BsClock } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { GrSkype } from "react-icons/gr";
import { SiSitepoint } from "react-icons/si";

const HomePage = () => {
  return (

    

    <div className="container-fluid px-0 ">

<div className="container-fluid">


<div className="row">
    <div className="col-sm-12">

        <div className='f_header_top'>
            <div className="inner_f_header_top">
                <div className="l_inner_f_header_top">
                    <span style={{
                        backgroundColor:'#fd4a36',
                        paddingTop:2,
                        paddingBottom:2,
                        paddingLeft:9,
                        paddingRight:9,
                        fontSize:13,
                        borderRadius:20,
                        marginRight:8,
                        display:'flex',
                        alignItems:'center',
                        justifyItems:'center'
                    }} >Too Little!</span>  Receiving $100 / Hr Consulting. <span style={{
                        fontSize:13,
                        borderRadius:20,
                        marginLeft:8,
                        color:'#fd4a36',
                        
                    }} >Start Today</span> 
                </div>
                <div className="r_inner_f_header_top">
                    <div className="inner_r_inner">
                        <BsClock style={{
                            fontSize: 13,
                            marginRight:10,
                            color:'fd4a36'
                        }} />
                        Office Hrs: Today 9.00am to 6.00pm
                    </div>
                    <div className="inner_l_inner">
                        <div className="t_inner">
                        <select name="language" id="lang" >
                            <option value="English">English</option>
                        </select>
                        </div>
                        <div className="b_inner">
                            Powered by Google TranslateTranslate
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>


</div>
</div>

{/* Novbar */}
        <div className="row ">
            <div className="col-sm-5 fs-1 text-sm-center fw-bold lh-sm d-flex justify-content-center py-4">
                logo
            </div>
            <div className="col-sm-7 fs-2">
                <div className="row py-5 ">
                    <div className="col-sm-8">
                        <div className="row menu_items">
                            <div className="col-sm-2 fs-5 text-center " style={{fontWeight:500 , color:'#000' }}  >HOME </div>
                            <div className="col-sm-2 fs-5 text-center " style={{fontWeight:500, color:'#000' }}   >COMPANY</div>
                            <div className="col-sm-2 fs-5 text-center " style={{fontWeight:500, color:'#000' }}   >CONTACT</div>
                            <div className="col-sm-2 fs-5 text-center " style={{fontWeight:500, color:'#000' }}  >SIGN UP</div>
                            <div className="col-sm-2 fs-5 text-center " style={{fontWeight:500, color:'#000' }}  >SIGN IN</div>
                        </div>
                    </div>
                    <div className="col-sm-2 fs-5 text-center " style={{fontWeight:500, color:'#000' }}  >
                        <div className="row last_part">
                            <div className="col-sm-6">
                                <BsSearch className='fs-2'/>
                            </div>
                            <div className="col-sm-6 more_symbol py-2">
                                <div className="more_lines"></div>
                                <div className="more_lines"></div>
                                <div className="more_lines"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    {/* Slider */}
    <div className="container-fluid px-0 slider_con">
        <div className="row px-0 ">
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active ">
                        <img src="./img/pic1.jpg" className="d-block w-100 carousel_main_img" alt="..."/>
                        <div class="carousel-caption d-none d-md-block slider_img_text">
                            <div className="slider_title1">
                                <p>Get More. Make Less </p>
                                <h1>LETS START <br/> WITH FINANCE. </h1>
                                <div className="line_image "></div>
                                <div className="line_image l2"></div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, ullam?.</p>
                                <div className="btn_slider">
                                    <button style={{
                                        color:"#fff",
                                        backgroundColor:"#fd4a36"
                                    }} >Our Comapy</button>
                                    <button style={{
                                        color:"#fd4a36",
                                        backgroundColor:"#fff"
                                    }}
                                    
                                    >Contact Us</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item ">
                        <img src="./img/pic2.jpg" className="d-block w-100 carousel_main_img" alt="..."/>
                        <div class="carousel-caption d-none d-md-block slider_img_text">
                        <div className="slider_title2">
                            <div className="inner_l_slider2"></div>
                            <div className="inner_r_slider2">
                                <p>Get More. Make Less </p>
                                <h1>LETS START <br/> WITH FINANCE. </h1>
                                <div className="line_image "></div>
                                <div className="line_image l2"></div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, ullam?.</p>
                                <div className="btn_slider">
                                    <button style={{
                                        color:"#fff",
                                        backgroundColor:"#fd4a36"
                                    }} >Our Comapy</button>
                                    <button style={{
                                        color:"#fd4a36",
                                        backgroundColor:"#fff"
                                    }}
                                    
                                    >Contact Us</button>

                            </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item ">
                        <img src="./img/pic3.jpg" className="d-block w-100 carousel_main_img" alt="..."/>
                        <div class="carousel-caption d-none d-md-block slider_img_text">
                        <div className="slider_title1 slider3">
                                <p>Get More. Make Less </p>
                                <h1>LETS START <br/> WITH FINANCE. </h1>
                                <div className="line_image "></div>
                                <div className="line_image l2">
                                    <div className="inner_l2"></div>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, ullam?.</p>
                                <div className="btn_slider">
                                    <button style={{
                                        color:"#fff",
                                        backgroundColor:"#fd4a36"
                                    }} >Sign uP</button>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev " type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon btn_slide" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next " type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon btn_slide" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

         </div>



        {/* container-2 */}
        <div className="row con_2">
            <div className="col-sm-12">
                {/* <img src="./img/pattern-1.png"  alt="" className='img-fluid' /> */}
                <div className="row">
                    <div className="col-sm-12">
                        
                    </div>
                </div>
            </div>
        </div>




    </div>

    <div className="row mt-5 "  >
        <div className="col-sm-12">
            <div className="row">
                {/* <div className="col-sm-2 bg-danger "></div> */}
                <div className="col-sm-10 " style={{
        backgroundColor:'#f1f5f8'
    }}>
                    <div className="row">
                        <div className="col-sm-2"></div>
                        <div className="col-sm-10">

                            <h1 className='py-5 mt-5 text-center' style={{
                                fontSize:35,
                                fontWeight:'bold',
                                
                            }}  >Developing Leaders & <br />
        High-Performance Creative Teams</h1>

                        <div className="circles_div r_padding" >

                            <div className="circles"></div>
                            <div className="circles"></div>
                            <div className="circles circle_middel"></div>
                            <div className="circles"></div>
                            <div className="circles"></div>
                        </div>

                        </div>
                    </div>


                </div>
                <div className="col-sm-2"></div>
            </div>

                    <div className="row bg-dark">
                        <div className="col-sm-12 fs-1">
                            hello
                        </div>
                    </div>
        </div>
    </div>


{/* How can we help You */}
<section className='row '>
    <div className="col-sm-6">
        <div className="logo mt-5 img-thumbnail float-end rounded-circle ">
            <div className="log_inner p-4 m-4 img-thumbnail float-end rounded-circle shadow-lg  ">
                <img src="./img/icon-12.png" alt="" className='img-thumbnail float-end   ' />
            </div>
        </div>
        <div className="row">
            <div className="col-sm-12 p-2 ms-5" style={{
                marginTop:150,
                backgroundColor:"#f1f2f5"
            }} ></div>
        </div>
    </div>
    <div className="col-sm-6">
        <div className="row">
            <div className="col-sm-12 py-5 fw-bolder" style={{
                fontSize:33,
                marginTop:90
            }} >
            How We Can<br/>
            Help You ?
                <div className="circles_div wrk_prog_circle" style={{
                    paddingTop:20,
                    paddingBottom:20,
                    color:'#0c2957'
                }}>
                    <div className="circles"></div>
                    <div className="circles"></div>
                    <div className="circles circle_middel"></div>
                    <div className="circles"></div>
                    <div className="circles"></div>
                </div>

                <div className="row pe-5 py-4">
                    <div className="col-sm-12 fs-4  ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, pariatur deserunt vero quasi sit quae ratione consequatur, ipsa maxime tempora architecto illum ipsum, ex corrupti voluptas deleniti asperiores similique inventore?
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-sm-12 ">
                        <ul className='fs-1'>
                            <li style={{
                                color:'#fd4a36'
                            }} >Lorem, ipsum dolor.</li>
                        </ul>
                        <p className='fs-2 px-5' >Lorem ipsum dolor Veniam, aperiam.</p>
                        <ul className='fs-1'>
                        <li style={{
                                color:'#fd4a36'
                            }} >Lorem, ipsum dolor.</li>
                        </ul>
                        <p className='fs-2 px-5' >Lorem ipsum dolor Veniam, aperiam.</p>
                    </div>
                </div>

            </div>

        </div>
    </div>

</section>

{/* container Boxes */}
<div className="container-fluid px-0 con_6">
    <div className="row d-sm-flex align-items-center justify-content-evenly" style={{
        padding:80
    }} >
        <div className="col-sm-4 " >
            <Cards/>
        </div>
        <div className="col-sm-4">
        <Cards/>
        </div>
        <div className="col-sm-4">  
        <Cards/>
        </div>
    </div>
</div>

{/* Resons for choosing */}
<div className="row" style={{
    backgroundColor:'#201630',
    paddingBottom:90
}}>
    <div className="col-sm-12" style={{
        position:'relative'
    }}>
        <img src="./img/pattern-3.png" alt="" className='img-fluid float-end' />

        <div className="row" style={{
            position:'absolute'
        }} >
            <div className="col-sm-12">           
                <img src="./img/image-1.png" alt="" className='img-fluid ' />    
            </div>
        </div>

{/* inside the choosing for Finance */}
    <div className="row  pt-5 mt-5 main_Consultation_container " style={{
         position:'absolute',
        //  top:0,
         bottom:-10,
         right:0,
         left:0
    }}>
        <div className="col-sm-6  px-5" style={{
            position:'relative'

        }} >
            <div className="row">
                <div className="col-sm-12 p-5 Consultation_container " style={{
                    // position:'absolute',
                }}>
                    <h1 className=' py-5 fw-bolder' style={{
                        fontSize:40,
                        color:'#201630',
                    }} >
                    Request for Our
                    Free Consultation
                    </h1>
                    <form className='py-5 '>
                        <div className="row">
                            <div class="mb-3 col-sm-6">
                                <input type="text" className="form-control fs-3" id="exampleInputEmail1" placeholder='Your Name' />
                                
                            </div>
                            <div class="mb-3 col-sm-6">
                                <input type="email" className="form-control fs-3" id="exampleInputEmail1" placeholder='Your Email' />
                            </div>

                        </div>
                        <div className="row">
                            <div class="mb-3 col-sm-6">
                                <input type="number" className="form-control fs-3" id="exampleInputEmail1" placeholder='Your Name' />
                                
                            </div>
                            <div class="mb-3 col-sm-6">
                                <select class="form-select fs-3" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>

                        </div>

                        <div className="row">
                            <div className="col-sm-6">
                            <div className="btn_slider">
                                    <button className='shadow-lg' style={{
                                        color:"#fd4a36",
                                        backgroundColor:"#fff"
                                    }}
                                    >Send Request</button>
                                </div>
                            </div>
                            <div className="col-sm-6 flexible_schedule">
                                <p className='fs-3 text-center' >
                                For flexible schedule
                                </p>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
        <div className="col-sm-6">
            <div className="row">
                <div className="col-sm-12">
                    <h1 className='fw-bolder p-5' style={{
                      color:'#fff',
                        fontSize:35
                    }} >
                        Reason For Choosing Our  <br />Finance <br />
                        Plateform

                    </h1>
                    <div className="circles_div wrk_prog_circle">
                        <div className="circles"></div>
                        <div className="circles"></div>
                        <div className="circles circle_middel"></div>
                        <div className="circles"></div>
                        <div className="circles"></div>
                    </div>

                    <div className="row mt-5 ">
                        <div className="col-sm-2 single_feacture_point mt-4 pt-1"   >
                            <SiSitepoint />
                        </div>
                        {/* <div className="col-sm-1"></div> */}
                        <div className="col-sm-9 " style={{
                            color:'#fff'
                        }} >

                            <h2 className='fs-1 fw-bolder pt-5' >
                                Lorem ipsum dolor sit 
                            </h2>
                            <p className='fs-4 mt-4'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, accusamus,
                            </p>
                        </div>
                    </div>

                    <div className="row  mt-5 ">
                        <div className="col-sm-2 single_feacture_point mt-4 pt-1"   >
                            <SiSitepoint />
                        </div>
                        {/* <div className="col-sm-1"></div> */}
                        <div className="col-sm-9 " style={{
                            color:'#fff'
                        }} >

                            <h2 className='fs-1 fw-bolder pt-5' >
                                Lorem ipsum dolor sit 
                            </h2>
                            <p className='fs-4 mt-4'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, accusamus,
                            </p>
                        </div>
                    </div>

                    <div className="row mt-5 ">
                        <div className="col-sm-2 single_feacture_point mt-4 pt-1"   >
                            <SiSitepoint />
                        </div>
                        {/* <div className="col-sm-1"></div> */}
                        <div className="col-sm-9 " style={{
                            color:'#fff'
                        }} >

                            <h2 className='fs-1 fw-bolder pt-5' >
                                Lorem ipsum dolor sit 
                            </h2>
                            <p className='fs-4 mt-4'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, accusamus,
                            </p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </div>

    </div>
</div>


{/* Our Projects */}

<div className="row">
    <div className="col-sm-12">
        <div className="row proj_con">
            <div className="col-sm-12">
                <div className="sec_bg"></div>
                <h1 className=' text-center fw-bold' style={{
                    marginTop:50,
                    paddingTop:100,
                    color:'#201630',
                    fontSize:35
                }} >Our Projects Make Uniqueness <br/>
                    From Others</h1>
                    <div className="circles_div">

                        <div className="circles"></div>
                        <div className="circles"></div>
                        <div className="circles circle_middel"></div>
                        <div className="circles"></div>
                        <div className="circles"></div>
                    </div>
            </div>
        </div>

    </div>

</div>

 <div className="proj_con_card">
        <div className="inner_con_proj">
            <ImgCard img_src={'./img/pic1.jpg'} />
            <ImgCard img_src={'./img/pic1.jpg'} />
            <ImgCard img_src={'./img/pic1.jpg'} />
        </div>
 </div>
 <div className="proj_con_card">
        <div className="inner_con_proj">
            <ImgCard img_src={'./img/pic1.jpg'} />
            <ImgCard img_src={'./img/pic1.jpg'} />
            <ImgCard img_src={'./img/pic1.jpg'} />
        </div>
 </div>

 {/* work progress */}
<div className="wrk_progress">
    <div className="inner_wrk_progress">
        <div className="header_wrk_progress">
                Our Basic Work Processs
        </div>
        <div className="circles_div wrk_prog_circle">
            <div className="circles"></div>
            <div className="circles"></div>
            <div className="circles circle_middel"></div>
            <div className="circles"></div>
            <div className="circles"></div>
        </div>

        <div className="wrk_progress_para">
        We aim to acquire a significant market share in financial services<br/>
        distribution with assessment performed from various perspectives of creditability in absence of proper and systematic.
        </div>

        <div className="wrk_progress_box">
                <ProgCard p_h='01. MAKE AN ACCOUNT' p_pic='./img/icon-4.png' p_l='REGISTER'   />
                <ProgCard p_h='02.CHOOSE PLAN' p_pic='./img/icon-5.png' p_l='PAY FOR MEMBERSHIP'   />
                <ProgCard p_h='03. DO TASK' p_pic='./img/icon-6.png' p_l='COMPLETE YOUR TASK'   />

        </div>

    </div>
</div>


{/* Footer */}
<div className="footer_div">
    <div className="inner_footer_div">
        <div className="first_part"></div>
        <div className="second_part">
            <div className="l_part">
                <h1>LOGO</h1>
            </div>
            <div className="m_part">
                <div className="first">
                    <div className="inner_f_items">
                        <h2>Company</h2>
                        <p>Home</p>
                        <p>About</p>
                        <p>Contact</p>
                        <p>Sign Up</p>
                        <p>Sign In</p>
                    </div>
                </div>
                <div className="second">
                <div className="inner_f_items">
                        <h2>Legal</h2>
                        <p>Terms & Conditions</p>
                        <p>Disclaimer</p>
                        <p>Privacy Policy</p>
                    </div>
                </div>
                <div className="third">
                    <div className="inner_f_items">
                        <h2>Support</h2>
                        <p>FAQ’s</p>
                        <p>Telegram</p>
                        <p>Contact</p>
                        <p>Resources</p>
                    </div>
                </div>
            </div>
            <div className="r_part">
                <div className="inner_r_part">
                        <h2>Project</h2>
                        <div className="images_r_part">
                            <div className="top_row">
                                <div className="top_images_r_part">
                                    <img src="./img/pic1.jpg" alt="" />
                                </div>
                                <div className="top_images_r_part">
                                <img src="./img/pic2.jpg" alt="" />
                                </div>
                                <div className="top_images_r_part">
                                <img src="./img/pic3.jpg" alt="" />
                                </div>

                            </div>
                            <div className="top_row">
                                <div className="top_images_r_part">
                                    <img src="./img/pic1.jpg" alt="" />
                                </div>
                                <div className="top_images_r_part">
                                    <img src="./img/pic2.jpg" alt="" />
                                </div>
                                <div className="top_images_r_part">
                                    <img src="./img/pic3.jpg" alt="" />
                                </div>

                            </div>
                        </div>
                </div>
            </div>

        </div>
        <div className="third_part">
            <div className="f_tp_footer">
                <h3>Privacy Policy/Terms & Conditions</h3>
                <h3>Get back to home</h3>
            </div>
            <div className="s_tp_footer">
                <div className="inner_s_tp_footer">
                    <div className="logos">
                        <FaFacebookF/>
                    </div>
                    <div className="logos">
                        <BsTwitter />
                    </div>
                    <div className="logos">
                        <AiOutlineGooglePlus />
                    </div>
                    <div className="logos">
                    <GrSkype/>
                    </div>
                </div>
            </div>
            <div className="t_tp_footer">
                <h3>
                © Copyright 2023 Bharat Finance | All Rights Reserved. | Designed & Developed by Kanak Technology
                </h3>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default HomePage