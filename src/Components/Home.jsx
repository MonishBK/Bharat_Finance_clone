import React from 'react'
import '../CSS/home.css'


import { BsClockHistory } from "react-icons/bs";

const Home = () => {
  return (
    <>
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
                            <BsClockHistory style={{
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

        <div className="cantainer-fluid">
            <div className="row">
                <div className="col-sm-4" fs-2>Finance</div>
                <div className="col-sm-2">HEllo</div>
                <div className="col-sm-2">Bye</div>
                <div className="col-sm-2"></div>
                <div className="col-sm-2"></div>

            </div>
        </div>

    </div>

                  

        {/* <div className="container-fluid">

            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://images.pexels.com/photos/1181562/pexels-photo-1181562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.pexels.com/photos/699459/pexels-photo-699459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.pexels.com/photos/3184589/pexels-photo-3184589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" alt="..."/>
                    </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

        </div> */}



</div>
</>
  )
}

export default Home