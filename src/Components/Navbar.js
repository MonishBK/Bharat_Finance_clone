import React from 'react'

import { BsSearch,BsTwitter,BsClockHistory,BsClock,BsFacebook,BsPinterest,BsInstagram ,BsYoutube} from "react-icons/bs";
import { MdKeyboardArrowDown,MdKeyboardArrowRight } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import { RxCrossCircled } from "react-icons/rx";

const Navbar = () => {
  return (
    <>

    {/* top navbar */}
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
    </>
  )
}

export const MainNavbar = () =>{

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

    return(
        <>
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

            
            {/* upper container */}
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
                            <div className="item_lists">&nbsp;&nbsp;&nbsp;&nbsp; HOME</div>
                            <div className="item_lists comp_item"  onClick={CompanyToggle}>&nbsp;&nbsp;&nbsp;&nbsp; COMPANY</div>

                                <div className="company_lists" id ='com_items'>

                                    <div className="item_lists"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ABOUT US</div>
                                    <div className="item_lists legal_item" onClick={LegalToggle}> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; LEGAL  </div>

                                </div>
                                    <div className="legal_lists" id='legal_items'  >

                                        <div className="item_lists"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; TERMS & CONDITIONS</div>
                                        <div className="item_lists"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; DISCLAMER</div>
                                        <div className="item_lists"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; PRIVACY POLICY </div>

                                    </div>
                            
                            <div className="item_lists"> &nbsp;&nbsp;&nbsp;&nbsp; CONTACT</div>
                            <div className="item_lists">&nbsp;&nbsp;&nbsp;&nbsp; SIGN UP</div>
                            <div className="item_lists">&nbsp;&nbsp;&nbsp;&nbsp; SIGN IN</div>

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

export default Navbar