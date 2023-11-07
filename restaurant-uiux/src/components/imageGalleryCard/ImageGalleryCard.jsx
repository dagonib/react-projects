import { BsInstagram } from "react-icons/bs";
import './imageGalleryCard.css'

export default function ImageGalleryCard ({ image }) {
    return (
        <div className='image-gallery__card flex__center'>
            <img src={image} alt='Image Gallery' />
            <BsInstagram className='image-gallery__card-icon' /> 
        </div>
    )
}