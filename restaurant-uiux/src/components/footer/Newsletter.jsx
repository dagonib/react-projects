import './newsletter.css'

import SubHeading from '../subHeading/SubHeading'

export default function Newsletter () {
    return (
        <div className='app__newsletter'>
            <div className='app__newsletter-heading'>
                <SubHeading title='Nesletter'/>
                <h1 className='headtext__cormorant'>Subscribe To Our Newsletter</h1>
                <p className='p__opensans'>And never miss latest Updates!</p>
            </div>

            <div className='app__newsletter-input flex__center'>
                <input type='email' placeholder='Enter your address' />
                <button className='custom__button'>Subscribe</button>
            </div>
        </div>
    )
}