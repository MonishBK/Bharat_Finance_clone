import React from 'react'

import '../CSS/homePage.css'
import '../CSS/home.css'
import Cards,{ImgCard,ProgCard} from './Cards';

import { BsSearch,BsTwitter,BsClockHistory,BsClock,BsFacebook,BsPinterest,BsInstagram ,BsYoutube} from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { GrSkype } from "react-icons/gr";
import { SiSitepoint } from "react-icons/si";
import { MdKeyboardArrowDown,MdStarRate,MdKeyboardArrowRight } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import { RxCrossCircled } from "react-icons/rx";
import { HiOutlineChat } from "react-icons/hi";
import { IoHomeOutline } from "react-icons/io5";

const HomePage = () => {


    const ToggleMenu =() =>{
        document.getElementById("toggle_container").style.display = "flex";
    }

    const DisableMenu = () =>{
        document.getElementById("toggle_container").style.display = "none";
    }

    const CompanyToggle = () =>{

       let c_dom = document.getElementById("com_items")
        if(c_dom.style.display == "none"){
            c_dom.style.display = "flex";
        }else{
            c_dom.style.display = "none";
            document.getElementById("legal_items").style.display = 'none'
        }
    }

    const LegalToggle = () =>{
       let l_dom = document.getElementById("legal_items")
        if(l_dom.style.display == "none"){
            document.getElementById("com_items").style.display = "flex";
            l_dom.style.display = "flex";
        }else{
            document.getElementById("com_items").style.display = "flex";
            l_dom.style.display = "none";
        }
    }

  return (

    
<>
<div className="main_container">

{/* <div className="timing_container"> */}


<div className="row">
    <div className="col-sm-12 col-lg-12">

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
{/* </div> */}

{/* Novbar */}
        <div className="row nav_bar ">
            <div className="col-lg-5 col-sm-6  fs-1 text-sm-center fw-bold lh-sm d-flex justify-content-center py-4">
                logo
            </div>
            <div className="col-lg-7 col-sm-6 fs-2 ">
                <div className="row py-5 ">
                    <div className="col-lg-8 col-sm-0">
                        <div className="row menu_items ">
                            <div className="col-sm-2 fs-5 text-center py-1 items "   >HOME </div>
                            <div className="col-sm-3 fs-5 text-center py-1 more_company items "  >
                                 COMPANY <MdKeyboardArrowDown className='fs-2 text-center ' />
                                 <div className="list_company_item py-3 ">
                                    <div className='two_opt px-4' >
                                        <p  >ABOUT US</p>
                                        <p className='more_opt_legal' >  LEGAL <GoPlus className='fw-bold fs-4'/>
                                        

                                            <div className=" py-3 px-4 more_legal" >
                                                <p>TERMS & CONDITIONS</p>
                                                <p style={{
                                                    borderTop:'1px solid #afadade3',
                                                    borderBottom:'1px solid #afadade3'
                                                }}>DISCLAMER</p>
                                                <p>PRIVACY POLICY</p>
                                            </div>

                                         </p>
                                    </div>
                                 </div>
                                </div>
                            <div className="col-sm-2 fs-5 text-center py-1 items"   >CONTACT</div>
                            <div className="col-sm-2 fs-5 text-center py-1 items"  >SIGN UP</div>
                            <div className="col-sm-2 fs-5 text-center py-1 items" >SIGN IN</div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-sm-6  fs-5 text-center " style={{fontWeight:500, color:'#000' }}  >
                        <div className="row last_part">
                            <div className="col-sm-3 col-lg-6 nav_search_icon">
                                <BsSearch className='fs-2 '/>
                            </div>
                            <div className="col-sm-3 col-lg-6 more_symbol py-2" onClick={ToggleMenu}>
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
    <div className="container-fluid px-0 slider_con ">
        <div className="row px-0 ">
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active ">
                        <img src="./img/3.jpg" className="d-block w-100 carousel_main_img" alt="..."/>
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
                        <img src="./img/1.jpg" className="d-block w-100 carousel_main_img" alt="..."/>
                        <div class="carousel-caption d-none d-md-block slider_img_text">
                        <div className="slider_title2">
                            <div className="inner_l_slider2"></div>
                            <div className="inner_r_slider2">
                                <p>BHARAT FINANCE WILL HELPING </p>
                                <h1>BUILD AND <br/> GROW BUSINESS </h1>
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
                        <img src="./img/2.jpg" className="d-block w-100 carousel_main_img" alt="..."/>
                        <div class="carousel-caption d-none d-md-block slider_img_text">
                        <div className="slider_title1 slider3">
                                <p>BHARAT FINANCE </p>
                                <h1>TAKE CARE <br/> OF YOUR FUTURE </h1>
                                <div className="line_image "></div>
                                <div className="line_image l2">
                                    <div className="inner_l2"></div>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, ullam?.</p>
                                <div className="btn_slider">
                                    <button style={{
                                        color:"#fff",
                                        backgroundColor:"#fd4a36"
                                    }} >Sign UP</button>
                                    
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

{/* Developing Leaders */}
    <div className="row mt-5 "  >
        <div className="col-sm-12">
            <div className="row">
                {/* <div className="col-sm-2 bg-danger "></div> */}
                <div className="col-sm-10 " style={{
                        backgroundColor:'#f1f5f8'
                    }}>
                    <div className="row ">
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

                    <div className="row  developing_leaders_con py-5">
                        <div className="col-sm-12 fs-1 text-light py-5 px-5 inner_developing_leaders ">
                            
                                <div className=" dev_led_main py-4 my-5">
                                    <div className="image">
                                        <div className="icon">
                                            <span>
                                                <IoHomeOutline/>
                                            </span>
                                        </div>
                                        <img src="./img/image-1.jpg" alt="" className='img-fluid' />
                                    </div>
                                    <div className="content ">
                                        <h4 className='fs-4 text-center' style={{
                                            color:'#fd4a36'
                                        }}>
                                            EXPLORE
                                        </h4>
                                        <h3 className='fs-2 text-center'>
                                            Our Company History
                                        </h3>
                                    </div>


                                    <div className="overlay">

                                        <div className="content">
                                            <h4 className='fs-3' style={{
                                            color:'#fd4a36'
                                        }}>
                                                EXPLORE
                                            </h4>
                                            <h3 className='fs-2'>
                                                Our Company History
                                            </h3>
                                        </div>
                                        <div className="text">
                                            <p className='fs-4 text-light text-center px-5'>
                                            In a free hour when our power choices when proveprevents best all easy to distinguish.
                                            </p>

                                            <div className="link_btn">
                                                <a href="#">
                                            <MdKeyboardArrowRight className='fs-1 fw-bold'/>
                                                </a>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="dev_led_main_2  py-4 my-5">
                                    <div className="orange_design">
                                        <div className="inner_l_design"></div>
                                        <div className="inner_r_design"></div>
                                    </div>
                                    <div className="content py-3 shadow-lg">
                                        
                                        <h4 className='fs-4' style={{
                                            color: "#fd4a36"
                                        }} >
                                            KNOWLEDGE
                                        </h4>
                                        <h2 className='fs-2'>
                                            Smart self service
                                        </h2>
                                    </div>


                                    <div className="overlay">

                                        <div className="content shadow-lg">
                                            <h4 className='fs-3' style={{
                                            color:'#fd4a36'
                                        }}>
                                                KNOWLEDGE
                                            </h4>
                                            <h3 className='fs-2'>
                                            Smart self service
                                            </h3>
                                        </div>
                                        <div className="text">
                                            <p className='fs-4 text-light text-center px-5'>
                                            In a free hour when our power choices when proveprevents best all easy to distinguish.
                                            </p>

                                            <div className="link_btn">
                                                <a href="#">
                                            <MdKeyboardArrowRight className='fs-1 fw-bold'/>
                                                </a>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                                <div className="dev_led_main_2  py-4 my-5">
                                    <div className="orange_design">
                                        <div className="inner_l_design"></div>
                                        <div className="inner_r_design"></div>
                                    </div>
                                    <div className="content py-3 shadow-lg">
                                        
                                        <h4 className='fs-4' style={{
                                            color: "#fd4a36"
                                        }} >
                                            KNOWLEDGE
                                        </h4>
                                        <h2 className='fs-2'>
                                            Smart self service
                                        </h2>
                                    </div>


                                    <div className="overlay">

                                        <div className="content shadow-lg">
                                            <h4 className='fs-3' style={{
                                            color:'#fd4a36'
                                        }}>
                                                KNOWLEDGE
                                            </h4>
                                            <h3 className='fs-2'>
                                            Smart self service
                                            </h3>
                                        </div>
                                        <div className="text">
                                            <p className='fs-4 text-light text-center px-5'>
                                            In a free hour when our power choices when proveprevents best all easy to distinguish.
                                            </p>

                                            <div className="link_btn">
                                                <a href="#">
                                            <MdKeyboardArrowRight className='fs-1 fw-bold'/>
                                                </a>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                                

                        </div>
                    </div>

                        <div className="row py-5">
                        <div className="col-sm-2"></div>
                        <div className="col-sm-10">

                            <p className="fs-3 text-center">
                            We help take your small business to the next level. Don’t hesitate to contact us.
                            </p>
                            <h2 className="fs-3 fw-5 text-center" >
                            30 Minutes Free Consultation
                            </h2>
                            <div className="btn_slider">
                                    <button className='shadow-lg' style={{
                                        color:"#fd4a36",
                                        backgroundColor:"#fff"
                                    }}
                                    >Send Request</button>
                                </div>
                        </div>
                        </div>        

                </div>
                <div className="col-sm-2"></div>
            </div>

            {/* <div className="row  developing_leaders_con">
                <div className="col-sm-5 fs-1 text-light">
                            hello
                 </div>
            </div> */}
        </div>
    </div>


{/* How can we help You */}
<section className='row '>
    <div className="col-lg-6 col-sm-12">
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
    <div className="col-lg-6 col-sm-0 help_you">
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
    <div className="row d-sm-flex align-items-center justify-content-evenly content " style={{
        padding:50
    }} >
        <div className="col-sm-12  col-lg-4 " >
            <Cards 
            t_text="Projects with 100% satisfaction" 
            m_text="2.5K" 
            b_text="Power of choices when nothing what we like best principle."
            logo_img='./img/icon-1.png'
             />
        </div>
        <div className="col-sm-12 col-lg-4  ">
            <Cards 
            t_text="Experienced & Professional team" 
            m_text="138+" 
            b_text="Except to obtain some of advantages from it has any right to find." 
            logo_img='./img/icon-2.png'
            />
        </div>
        <div className="col-sm-12 col-lg-4 ">  
            <Cards 
            t_text="Revenue of last financial year" 
            m_text="9.8%" 
            b_text="Complete account of the system and expound actual teachings." 
            logo_img='./img/icon-3.png'
            />
        </div>
    </div>
</div>

{/* Reasons for choosing */}
<div className="row mt-5" style={{
    backgroundColor:'#201630',
    paddingBottom:90
}}>
    <div className="col-lg-12" style={{
        position:'relative'
    }}>
        <img src="./img/pattern-3.png" alt="" className='img-fluid float-end' />

        <div className="row reason_image" style={{
            position:'absolute'
        }} >
            <div className="col-lg-12 ">           
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
        
        <div className="col-sm-12  col-lg-6 px-5" style={{
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
        
        <div className="col-sm-12 col-lg-6 ">
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
            <ImgCard img_src={'./img/gallery-1.jpg'} />
            <ImgCard img_src={'./img/gallery-2.jpg'} />
            <ImgCard img_src={'./img/gallery-3.jpg'} />

        </div>
 </div>
 <div className="proj_con_card">
        <div className="inner_con_proj">
            <ImgCard img_src={'./img/gallery-4.jpg'} />
            <ImgCard img_src={'./img/gallery-5.jpg'} />
            
            <div className="card_con">
            <div className="inner_card_con_l ">
                <a href='#' className="middle_content fs-3 ">
                    Check <br /> More Works
                </a>
            </div>
        </div>

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

        <div className="wrk_progress_para fs-2">
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


{/* bottom carousel */}
<div className="row below_carousel">
    <div className="col-lg-6 col-sm-12 ">
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="2000">
            <img src="./img/image-6.jpg" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item" data-bs-interval="2000" >
            <img src="./img/image-7.jpg" className="d-block w-100" alt="..."/>
            </div>
        </div>
        </div>
    </div>

    <div className="col-lg-6 col-sm-12 bottom_slider" style={{
                           display: "flex",
                        //    alignItems: "center",
                        //    justifyContent: "center",
                           color:'#fff'
                        }} >
    <div id="carouselExampleSlidesOnly " className="carousel slide" data-bs-ride="carousel"  >
        <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="2000">
                <div className="b_slider_content">
                        <div className="row py-5" >
                            <div className="col-sm 12 ">
                                <HiOutlineChat  />
                                <h1 >
                                Best Service Ever, We Highly Recommend!
                                </h1>
                                <p>
                                Finance’s is specialized retail financing organization engaged in financial services.
                                </p>
                                <p className='stars'>
                                    <MdStarRate/>
                                    <MdStarRate/>
                                    <MdStarRate/>
                                    <MdStarRate/>
                                    <MdStarRate/>
                                </p>
                            </div>
                        </div>
                </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
            <div className="b_slider_content">
                        <div className="row py-5" >
                            <div className="col-sm 12 ">
                                <HiOutlineChat  />
                                <h1 >
                                Best Service Ever, We Highly Recommend!
                                </h1>
                                <p>
                                Finance’s is specialized retail financing organization engaged in financial services.
                                </p>
                                <p className='stars'>
                                    <MdStarRate/>
                                    <MdStarRate/>
                                    <MdStarRate/>
                                    <MdStarRate/>
                                    <MdStarRate/>
                                </p>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        </div>
    </div>
</div>


{/* feactures section two */}

<div className="feacture_sections_two">
    <div className="inner_f_s_t">

        <div className="left_feacture_section  ">
            <div className="inner_left_feacture ">
                <div className="row py-5 px-4 overlay_l_div" >
                    <div className="col-sm-2 py-3">
                        <img src="./img/icon-9.png" alt="" className='img-thumbnail' />
                    </div>
                    <div className="col-sm-10 py-3">
                            <h2 className='fs-2'>
                            Become a Partner of Bharat Finance
                            </h2>
                            <p className="fs-4">
                            To become our partner you need to register on our website.
                            </p>
                    </div>
                </div>
            </div>
          
        </div>
        <div className="right_feacture_section ">
            <div className="inner_right_feacture ">
                <div className="row py-5 px-4 overlay_r_div">
                        <div className="col-sm-2 py-3 " >
                            <img src="./img/icon-10.png" alt="" className='img-thumbnail' />
                        </div>
                        <div className="col-sm-10 py-3">
                                <h2 className='fs-2'>
                                Career Opportunities in Bharat Finance
                                </h2>
                                <p className="fs-4">
                                Anyone who is our registered partner can earn money anywhere anytime using internet.
                                </p>
                        </div>
                    </div>

            </div>
        </div>
    </div>
</div>

{/* Footer */}
<div className="footer_div ">
    <div className=" inner_footer_div">
        <div className="first_part"></div>

        <div className=" row second_part">
            <div className=" col-lg-3 col-sm-6 l_part ">
                <h1 className='fs-1'>LOGO</h1>
            </div>
            {/* <div className="m_part"> */}
                <div className=" col-lg-2  col-sm-6  py-3 first">
                    {/* <div className="inner_f_items"> */}
                        <h2 className='fs-2 fw-bold'>Company</h2>
                        <p className='fs-3' >Home</p>
                        <p className='fs-3'>Contact</p>
                        <p className='fs-3'>Sign Up</p>
                        <p className='fs-3'>Sign In</p>
                    {/* </div> */}
                </div>
                <div className=" col-lg-2 col-sm-6 py-3 second">
                {/* <div className="inner_f_items"> */}
                        <h2 className='fs-2 fw-bold'>Legal</h2>
                        <p className='fs-3'>Terms & Conditions</p>
                        <p className='fs-3'>Disclaimer</p>
                        <p className='fs-3'>Privacy Policy</p>
                    {/* </div> */}
                </div>
                <div className="col-lg-2 col-sm-6 py-3 third">
                    {/* <div className="inner_f_items"> */}
                        <h2 className='fs-2 fw-bold'> Credentials & Support</h2>
                        <p className='fs-3'>FAQ’s</p>
                        <p className='fs-3'>Telegram</p>
                        <p className='fs-3'>Contact</p>
                        <p className='fs-3'>Resources</p>
                    {/* </div> */}
                </div>
            {/* </div> */}
            <div className=" col-lg-3 col-sm-12 py-3 r_part">
                <div className="inner_r_part px-3">
                        <h2 className='fs-2 fw-bold'>Project</h2>
                        <div className="images_r_part py-4">
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
            <div className="t_tp_footer mt-2">
                <h3 className='fs-4 text-center'>
                © Copyright 2023 Bharat Finance | All Rights Reserved. | Designed & Developed by Kanak Technology
                </h3>
            </div>
        </div>
    </div>
</div>

    </div>

    <div className="upper_container" id='toggle_container' >
        <div className="left_con_upper"></div>
        <div className="right_con_upper">
            <div className="close_logo"  onClick={DisableMenu}>
                    <RxCrossCircled />
            </div>

            <div className="r_top_con">
                LOGO
            </div>
            <div className="r_bottom_con">
                <div className="item_lists">&nbsp; HOME</div>
                <div className="item_lists comp_item"  onClick={CompanyToggle}>&nbsp; COMPANY</div>

                    <div className="company_lists" id ='com_items'>

                        <div className="item_lists"> &nbsp;&nbsp;&nbsp; ABOUT US</div>
                        <div className="item_lists legal_item" onClick={LegalToggle}> &nbsp;&nbsp;&nbsp; LEGAL  </div>

                    </div>
                        <div className="legal_lists" id='legal_items'  >

                            <div className="item_lists"> &nbsp;&nbsp;&nbsp; TERMS & CONDITIONS</div>
                            <div className="item_lists"> &nbsp;&nbsp;&nbsp; DISCLAMER</div>
                            <div className="item_lists"> &nbsp;&nbsp;&nbsp; PRIVACY POLICY </div>

                        </div>
                
                <div className="item_lists"> &nbsp; CONTACT</div>
                <div className="item_lists">&nbsp; SIGN UP</div>
                <div className="item_lists">&nbsp; SIGN IN</div>

                <div className="menu_logos">
                    <div className="inner_logos">

                        <div className="logs_items"> 
                            <BsTwitter/>
                        </div>
                        <div className="logs_items">
                            <BsFacebook/>
                        </div>
                        <div className="logs_items">
                            <BsPinterest/>
                        </div>
                        <div className="logs_items">
                            <BsInstagram/>
                        </div>
                        <div className="logs_items">
                            <BsYoutube/>
                        </div>
                    </div>
                </div>
            </div>
            

        </div>
    </div>

    </>
  )
}

export default HomePage