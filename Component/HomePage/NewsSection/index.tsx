import c from './news.module.css'
import {BsArrowRight } from 'react-icons/bs'
import ImageLoader from '@/Component/ImageLoader'

export default function NewsSection() {
    return(
        <>
        <div className='section-space'>
            <div className='custom_container'>
                <div className={c.border}>
                    <h1 className={c.section_heading}>Politics</h1>
                   <p ><a href='#'><span className={c.view}>VIEW ALL  <BsArrowRight style={{marginLeft: "7px"}} /></span>   </a> </p>
                </div>

              <div className={`row ${c.flex_container}`}>
                <div className='col-lg-3 col-md-6'>
                <a href='#'>
                    <div className={c.heading_image}>
                        <ImageLoader height={464} width={696}  src='breaking-001.jpg' />
                    </div>
                    </a>
                        <a href='#' className={c.heading}>Dell Will Invest $125 Billion in China’s Tech in the Next 5 Years</a>
                        <div className={c.flex}>
                   <div className={c.avatarImage}>
                   <ImageLoader src='user.jpg' height={96} width={96} />
                   </div>
                   <div className={c.flex2}>
                   <a href='#'> <p className={c.username}>Dan Bush -</p></a>
                   <p className={c.date}> September 29, 2021</p>
                   </div>
                  
                    </div>
                </div>

                <div className='col-lg-3 col-md-6'>
                    <a href='#'>
                    <div className={`${c.heading_image} ${c.margin}`}>
                        <ImageLoader height={464} width={696}  src='breaking-002.jpg' />
                    </div>
                    </a>
                    <a href='#' className={c.heading}>Dell Will Invest $125 Billion in China’s Tech in the Next 5 Years</a>
                        <div className={c.flex}>
                   <div className={c.avatarImage}>
                   <ImageLoader src='user.jpg' height={96} width={96} />
                   </div>
                   <div className={c.flex2}>
                   <a href='#'> <p className={c.username}>Dan Bush -</p></a>
                   <p className={c.date}> September 29, 2021</p>
                   </div>
                  
                    </div>
                </div>

                <div className='col-lg-3 col-md-6'>
                <a href='#'>
                <div className={`${c.heading_image} ${c.margin}`}>
                        <ImageLoader height={464} width={696}  src='breaking-003.jpg' />
                    </div>
                    </a>
                    <a href='#' className={c.heading}>Dell Will Invest $125 Billion in China’s Tech in the Next 5 Years</a>
                        <div className={c.flex}>
                   <div className={c.avatarImage}>
                   <ImageLoader src='user.jpg' height={96} width={96} />
                   </div>
                   <div className={c.flex2}>
                   <a href='#'> <p className={c.username}>Dan Bush -</p></a>
                   <p className={c.date}> September 29, 2021</p>
                   </div>
                  
                    </div>
                </div>

                <div className='col-lg-3 col-md-6'>
                <a href='#'>
                <div className={`${c.heading_image} ${c.margin}`}>
                        <ImageLoader height={464} width={696}  src='breaking-004.jpg' />
                    </div>
                    </a>
                    <a href='#' className={c.heading}>Dell Will Invest $125 Billion in China’s Tech in the Next 5 Years</a>
                    <div className={c.flex}>
                   <div className={c.avatarImage}>
                   <ImageLoader src='user.jpg' height={96} width={96} />
                   </div>
                   <div className={c.flex2}>
                  <a href='#'> <p className={c.username}>Dan Bush -</p></a>
                   <p className={c.date}> September 29, 2021</p>
                   </div>
                  
                    </div>
                </div>
              </div>
              <div className='border mt-2 mb-3'></div>
             

             <div className='row'>
                <div className='col-lg-3'>
                   <div>
                   <a className={c.stext} href='#'>Things to Look For in a Financial Trading Platform Environment</a>
                    <p className={c.date2}>September 29, 2021</p>
                   </div>


                   <div>
                   <a className={c.stext} href='#'>Things to Look For in a Financial Trading Platform Environment</a>
                    <p className={c.date2}>September 29, 2021</p>
                   </div>


                   <div>
                   <a  className={c.stext} href='#'>Things to Look For in a Financial Trading Platform Environment</a>
                    <p className={c.date2}>September 29, 2021</p>
                   </div>

                </div>

                <div className='col-lg-3'>
                   <div>
                   <a className={c.stext} href='#'>Things to Look For in a Financial Trading Platform Environment</a>
                    <p className={c.date2}>September 29, 2021</p>
                   </div>


                   <div>
                   <a className={c.stext} href='#'>Things to Look For in a Financial Trading Platform Environment</a>
                    <p className={c.date2}>September 29, 2021</p>
                   </div>
                   

                   <div>
                   <a className={c.stext} href='#'>Things to Look For in a Financial Trading Platform Environment</a>
                    <p className={c.date2}>September 29, 2021</p>
                   </div>

                </div>


                <div className='col-lg-3'>
                   <div>
                   <a className={c.stext} href='#'>Things to Look For in a Financial Trading Platform Environment</a>
                    <p className={c.date2}>September 29, 2021</p>
                   </div>


                   <div>
                   <a className={c.stext} href='#'>Things to Look For in a Financial Trading Platform Environment</a>
                    <p className={c.date2}> September 29, 2021</p>
                   </div>
                   

                   <div>
                   <a className={c.stext} href='#'>Things to Look For in a Financial Trading Platform Environment</a>
                    <p className={c.date2}>September 29, 2021</p>
                   </div>

                </div>


                <div className='col-lg-3'>
                   <div>
                   <a className={c.stext} href='#'>Things to Look For in a Financial Trading Platform Environment</a>
                    <p className={c.date2}>September 29, 2021</p>
                   </div>


                   <div>
                   <a className={c.stext} href='#'>Things to Look For in a Financial Trading Platform Environment</a>
                    <p className={c.date2}>September 29, 2021</p>
                   </div>
                   

                   <div>
                   <a className={c.stext} href='#'>Things to Look For in a Financial Trading Platform Environment</a>
                    <p className={c.date2}>September 29, 2021</p>
                   </div>

                </div>
             </div>

            </div>

        </div>
        </>
    )
}