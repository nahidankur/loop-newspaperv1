import c from './devider.module.css'
import {FaFacebookF } from 'react-icons/fa'
import { AiOutlineInstagram, AiOutlineTwitter} from 'react-icons/ai'

export default function SocialDevider() {
    return (
        <>
        <div className='section-space'>
        <div className='custom_container'>
            <div className={`border-top border-bottom`}>
             <div className={`p-3 ${c.flex}`}>
                <p className={c.social_text}>JOIN OR SOCIAL MEDIA</p>
                <h2 className={c.social_heading}>For even more exclusive content!</h2>
                <div className={c.icons} >
                    <li><a href='#'><FaFacebookF /></a></li>
                    <li><a href='#'><AiOutlineInstagram /></a></li>
                    <li><a href='#'><AiOutlineTwitter /></a></li>
                </div>
                
             </div>
            </div>
   


        </div>
        </div>
 
        </>
    )
}