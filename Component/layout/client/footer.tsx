import Link from "next/link"
import React from "react"
import c from './footer.module.css'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa'
import { BsArrowRight} from 'react-icons/bs'

const Footer = ()=> {
    return (
        <>
        <footer className={c.footer_container}>
            <div className="custom_container">
                <div className={`row ${c.border}`}>
                    <div className="col-lg-5 col-md-4">
                        <h1 className={c.logo}>LoopNews</h1>
                    </div>

                    <div className={`col-lg-7 col-md-8 ${c.largeScreen}`}>
                            <ul className={c.flex}>
                                <li className={c.list}> <a href="#">Music</a> </li>
                                 <li className={c.list}> <a href="#">Celebrity</a> </li>
                                 <li className={c.list}> <a href="#">Politics</a> </li>
                                 <li className={c.list}> <a href="#">Finance</a> </li>
                                 <li className={c.list}> <a href="#">Travel</a> </li>
                                 <li className={c.list}> <a href="#">Food</a> </li>
                                 <li className={c.list}> <a href="#">Marketing</a> </li>
                                 <li className={c.list}> <a href="#">Tech</a> </li>
                                 <li className={c.list}> <a href="#">Make-up</a> </li>
                            </ul>
                    </div>


                    {/* for mobile screen */}
                    <div className={`col-sm-12 ${c.mobileScreen}`}>
                      <div className={c.flexMenu1}>
                             <li className={c.list}> <a href="#">Music</a> </li>
                             <li className={c.list}> <a href="#">Celebrity</a> </li>
                             <li className={c.list}> <a href="#">Politics</a> </li>
                            <li className={c.list}> <a href="#">Finance</a> </li>
                            <li className={c.list}> <a href="#">Travel</a> </li>
                      </div>

                      <div className={c.flexMenu2}>
                            <li className={c.list}> <a href="#">Food</a> </li>
                            <li className={c.list}> <a href="#">Marketing</a> </li>
                            <li className={c.list}> <a href="#">Tech</a> </li>
                            <li className={c.list}> <a href="#">Make-up</a> </li>
                      </div>
                    </div>

  
        
                </div>


  
                <div className="row">
                    <div className="col-lg-3 col-md-3">
                        <p className={c.footerMenuTitle}>About Us</p>

                        <p className={c.footer_desc}>Each template in our ever growing studio library can be added and moved around within any page effortlessly with one click.</p>

                        <div className={c.social_icons}>
                            <div className={c.IconContainer}>
                          <a href="#"> <FaFacebookF className={c.icon} /></a> 
                            </div>
                            <div className={c.IconContainer}>
                           <a href="#"> <FaInstagram className={c.icon} /></a>
                            </div>
                            <div className={c.IconContainer}>
                           <a href="#"> <FaTwitter className={c.icon} /></a>
                            </div>
                            <div className={c.IconContainer}>
                            <a href="#"><FaYoutube className={c.icon} /></a>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-2 col-md-2">
                    <p className={c.footerMenuTitle}>Company</p>  
                      <div>
                      <li className={c.fMenu}><a href="#">About</a></li>
                        <li className={c.fMenu}><a href="#">Contact Us</a></li>
                        <li className={c.fMenu}><a href="#">Subscription Plan</a></li>
                        <li className={c.fMenu}><a href="#">My Account</a></li>
                      </div> 
                    </div>


                    <div className="col-lg-3 col-md-3">
                    <p className={c.footerMenuTitle}>The Latest</p>  

                    <div>
                    <a className={c.latestNews} href="#">Social Media Marketing for Franchises is Meant for Women</a>
                      <div className={c.flex2}>
                        <a className={c.tag} href="#">MARKETING</a>
                        <p className={c.date}>September 29, 2021</p>
                      </div>
                    </div>     


                    <div>
                    <a className={c.latestNews} href="#">A Look at How Social Media & Mobile Gaming Can Increase Sales</a>
                      <div className={c.flex2}>
                        <a className={c.tag} href="#">FINANCE</a>
                        <p className={c.date}>September 29, 2021</p>
                      </div>
                    </div>  

                    <div>
                    <a className={c.latestNews} href="#">A Look at How Social Media & Mobile Gaming Can Increase Sales</a>
                      <div className={c.flex2}>
                        <a className={c.tag} href="#">FINANCE</a>
                        <p className={c.date}>September 29, 2021</p>
                      </div>
                    </div>  
                   
                    </div>


                    <div className="col-lg-2 col-md-2">
                    <p className={c.footerMenuTitle}>Subscribe</p>  
                      <div>
                      <form>
                        <div className={c.inputDiv}>
                        <input className={c.input} placeholder="Email Address" /> <br />
                        </div>

                        <div className={c.btnContainer}>
                        <a className={c.subsscribeBtn} href="#"> I WANT IN <BsArrowRight /> </a>
                        </div>
                       
                        <div className={c.inputFlex}>
                        <input type="checkbox" id="vehicle1" name="vehicle1" />
                        <label className={c.label} > I have read and accept the</label>
                       
                        <a className={c.hypeLink} href="#">Privacy Policy</a>
                        </div>

                      </form>
                      </div> 
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}

export default React.memo(Footer);