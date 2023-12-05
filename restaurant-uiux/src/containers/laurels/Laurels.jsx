import './laurels.css'
import { AwardCard, SubHeading } from '../../components'
import { images, data } from '../../constants'

export default function Laurels () {
    return (
        <section className='app__bg app__wrapper section__padding' id='awards'>
            <div className='app__wrapper_info'>
                <SubHeading title='Awards & Recongnition' />
                <h1 className='headtext__cormorant'>Our Laurels</h1>

                <div className='app__laurels_awards'>
                    {data.awards.map((award) => (
                        <AwardCard award={award} key={award.title} />
                    ))}
                </div>
            </div>

           <div className='app__wrapper_img'>
                <img src={images.laurels} alt='laurels_img' />
            </div> 
        </section>
    )
}