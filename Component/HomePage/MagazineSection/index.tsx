import ImageLoader from '@/Component/ImageLoader'
import c from './magazine.module.css'


export default function Magazine(){
    return(
        <>
        <div className='section-space'>
            <div className='custom_container'>
                <div className={`${c.section_heading}`}>
                    <h1 className={c.bgtext}>LIFESTYLE</h1>
                    <h1 className={c.ftext}>Celebrity</h1>
                </div>
               

                <div className={`row mt-4`}>
                    <div className='col-lg-6 col-md-6'>
                        <div className={c.flex}>
                            <div className={c.imageBox}>
                                <ImageLoader height={464} width={696} src='breaking-003.jpg' />
                            </div>

                            <div className={c.textBox}>
                                <a href='#'>
                                <h1 className={c.h1}>
                             Kristen Stewart Visits the Toronto Film Festival with New Boyfriend
                             </h1>
                                </a>
                             <div className={c.flex3}>
                   <div className={c.avatarImage}>
                   <ImageLoader src='user.jpg' height={96} width={96} />
                   </div>
                   <div className={c.flex2}>
                   <a className={c.margin} href='#'> <p className={c.username}>Dan Bush -</p></a>
                   <p className={c.date}> September 29, 2021</p>
                   </div>
                    </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-6 col-md-6'>
                        <div className={c.flex}>
                            <div className={c.imageBox}>
                                <ImageLoader height={464} width={696} src='breaking-001.jpg' />
                            </div>

                            <div className={c.textBox}>
                            <a href='#'>
                                <h1 className={c.h1}>
                             Kristen Stewart Visits the Toronto Film Festival with New Boyfriend
                             </h1>
                                </a>

                             <div className={c.flex3}>
                   <div className={c.avatarImage}>
                   <ImageLoader src='user.jpg' height={96} width={96} />
                   </div>
                   <div className={c.flex2}>
                   <a className={c.margin} href='#'> <p className={c.username}>Dan Bush -</p></a>
                   <p className={c.date}> September 29, 2021</p>
                   </div>
                  
                    </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* second row */}

                <div className={`row`}>
                    <div className='col-lg-3 col-md-3'>
                        <div className={c.imageBox2}>
                        <ImageLoader height={464} width={696} src='breaking-001.jpg' />
                        </div>

                        <a href='#'> <h3 className={c.h3}>The Biggest Hollywood Celebrities Visit the Ranches of California</h3></a>

                   <div className={c.flex3}>
                   <div className={c.avatarImage2}>
                   <ImageLoader src='user.jpg' height={96} width={96} />
                   </div>
                   <div className={c.flex2}>
                   <a className={c.margin} href='#'> <p className={c.username}>Dan Bush -</p></a>
                   <p className={c.date}> September 29, 2021</p>
                   </div>
                    </div>
                    </div>

                    <div className='col-lg-3 col-md-3'>
                        <div className={c.imageBox2}>
                        <ImageLoader height={464} width={696} src='breaking-002.jpg' />
                        </div>

                        <a href='#'> <h3 className={c.h3}>The Biggest Hollywood Celebrities Visit the Ranches of California</h3></a>

                        <div className={c.flex3}>
                   <div className={c.avatarImage2}>
                   <ImageLoader src='user.jpg' height={96} width={96} />
                   </div>
                   <div className={c.flex2}>
                   <a className={c.margin} href='#'> <p className={c.username}>Dan Bush -</p></a>
                   <p className={c.date}> September 29, 2021</p>
                   </div>
                  
                    </div>
                    </div>

                    <div className='col-lg-3 col-md-3'>
                        <div className={c.imageBox2}>
                        <ImageLoader height={464} width={696} src='breaking-004.jpg' />
                        </div>

                        <a href='#'> <h3 className={c.h3}>The Biggest Hollywood Celebrities Visit the Ranches of California</h3></a>

                        <div className={c.flex3}>
                   <div className={c.avatarImage2}>
                   <ImageLoader src='user.jpg' height={96} width={96} />
                   </div>
                   <div className={c.flex2}>
                   <a  className={c.margin}  href='#'> <p className={c.username}>Dan Bush -</p></a>
                   <p className={c.date}> September 29, 2021</p>
                   </div>
                  
                    </div>
                    </div>

                    <div className='col-lg-3 col-md-3'>
                        <div className={c.imageBox2}>
                        <ImageLoader height={464} width={696} src='breaking-003.jpg' />
                        </div>

                        <a href='#'> <h3 className={c.h3}>The Biggest Hollywood Celebrities Visit the Ranches of California</h3></a>

                        <div className={c.flex3}>
                   <div className={c.avatarImage2}>
                   <ImageLoader src='user.jpg' height={96} width={96} />
                   </div>
                   <div className={c.flex2}>
                   <a  className={c.margin} href='#'> <p className={c.username}>Dan Bush -</p></a>
                   <p className={c.date}> September 29, 2021</p>
                   </div>
                  
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}