import './gallery.css'
import { ImageGalleryCard, SubHeading } from '../../components'
import { images } from '../../constants'

import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { useScroll } from '../../hooks/useScroll';

const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04]

export default function Gallery () {
    const { scrollRef, scroll } = useScroll();

    return (
        <section className='app__gallery flex__center'>
           <div className='app__gallery-content'>
                <SubHeading title='Instagram' />
                <h1 className='headtext__cormorant '>Photo Gallery</h1>
                <p className='p__opensans' style={{ color: '#AAA', marginTop: '2rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
                <button type='button' className='custom__button'>View More</button>
            </div> 

            <div className='app__gallery-images'>
                <div className='app__gallery-images_container' ref={scrollRef}>
                    {galleryImages.map((image, index) => (
                        <ImageGalleryCard image={image} key={`gallery_image-${index + 1}`}/>
                    ))}
                </div>
                <div className='app__gallery-images_arrows'>
                    <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll('left')} />
                    <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('right')} />
                </div>
            </div>
        </section>
    )
}