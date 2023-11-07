import './aboutUs.css'

import { images } from '../../constants'

export default function AboutUs () {
    return (
        <section className='app__aboutus app__bg flex__center section__padding' id='aboutus'>
            <div className='app__aboutus-overlay flex__center'>
                <img src={images.G} alt='G letter' />
            </div>

            <div className='app__aboutus-content flex__center'>
                <div className='app__aboutus-content_about'>
                    <h1 className='headtext__cormorant'>About Us</h1>
                    <img src={images.spoon} alt='spoon image' className='spoon__img' />
                    <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
                    <button type='button' className='custom__button'>View more</button>
                </div>

                <div className='app__aboutus-content_knife flex__center'>
                    <img src={images.knife} alt='about_knife' />
                </div>

                <div className='app__aboutus-content_history'>
                    <h1 className='headtext__cormorant'>Our history</h1>
                    <img src={images.spoon} alt='spoon image' className='spoon__img' />
                    <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
                    <button type='button' className='custom__button'>View more</button>
                </div>
            </div>
        </section>
    )
}