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
                             experiences
                        </div>
                    </div> 
            </div>
        </div>

    </div>
  )
}

export default About