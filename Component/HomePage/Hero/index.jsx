import c from './hero.module.css'
import ImageLoader from "@/Component/ImageLoader";
import { AiOutlineCalendar} from 'react-icons/ai'
import {FaRegComments } from 'react-icons/fa'

export default function Hero() {
    return (
        <>
        <div className={`custom_container`}>
            <div className={`d-lg-flex gap ${c.flex_container}`}>
                <div className={`${c.feature_image_container} col-lg-6 `}>
              <div className={c.feature_img} > 
                  <div className={c.feature_text}>
                  <a className='tag_btn bg_pink' href='#'>Fashion</a>
                  <div className={c.feature_heading}>
                      <a href='#'>
                          <h2 className='h2 white'>Big Budget Issues Force The Our To Be Cancelled</h2>
                      </a>
                  </div>
                  <p className='sub_text lgrey'> BY <a href='#' className={`${c.admin2}`}>ADMIN</a> <AiOutlineCalendar /> JUNE 19, 2023<span className={c.comments}><FaRegComments /> 0 Comments</span> </p>  
                  </div>
                  
                  </div>

                  </div>
                
    
                  <div className={c.feature_side}>
                 <div className= {`flex ${c.responsive}`}>
                 <div className={`mb-4 ${c.side_image}`}>
                    <a href='#'>
                    <ImageLoader src='blog-001.jpg' width={220} height={175} />
                    </a>
                       
                </div>
                    <div className={c.side_text}>
                        <a className='tag_btn bg_orange' href='#'>Food</a>
                      <a href='#'><h3 className='h3 black'> Crafty Cook and Decorate all of our food dishes with love</h3></a>
                       <p className='sub_text grey'> BY <a href='#' className={c.admin}>ADMIN</a> <AiOutlineCalendar /> JUNE 19, 2023 </p>  
                    </div>
                 </div>
                 <div className= {`flex ${c.responsive}`}>
                 <div className={`mb-4 ${c.side_image}`}>
                    <a href='#'>
                    <ImageLoader src='blog-002.jpg' width={220} height={175} />
                    </a>      
                </div>
                <div className={c.side_text}>
                        <a className='tag_btn bg_skyblue' href='#'>Food</a>
                      <a href='#'><h3 className='h3 black'> Crafty Cook and Decorate all of our food dishes with love</h3></a>
                       <p className='sub_text grey'> BY <a href='#' className={c.admin}>ADMIN</a> <AiOutlineCalendar /> JUNE 19, 2023 </p>
                       
                    </div>
                 </div>
                 <div className= {`flex ${c.responsive}`}>
                 <div className={`${c.side_image}`}>
                    <a href='#'>
                    <ImageLoader src='blog-003.jpg' width={220} height={175} />
                    </a>
                      
                </div>
                <div className={`${c.side_text} ${c.margin}`}>
                        <a className='tag_btn bg_lgreen' href='#'>Food</a>
                      <a href='#'><h3 className='h3 black'> Crafty Cook and Decorate all of our food dishes with love</h3></a>
                       <p className='sub_text grey'> BY <a href='#' className={c.admin}>ADMIN</a> <AiOutlineCalendar /> JUNE 19, 2023 </p>
                       
                    </div>
                 </div>
                </div>   
            </div>
        </div>

        </>
    )

}