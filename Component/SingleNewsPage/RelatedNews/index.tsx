import ImageLoader from '@/Component/ImageLoader'
import c from './related.module.css'


export default function RelatedNews(){
    return(
        <>
        <div className= {c.relatedSection}>
            <div className='custom_container'>
                <div className={`${c.section_heading}`}>
                    <h1 className={c.bgtext}>RELATED</h1>
                    <h1 className={c.ftext}>More Like This</h1>
                </div>
               

                <div className='row'>
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