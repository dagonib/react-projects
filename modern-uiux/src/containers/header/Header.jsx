import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

export default function Header () {
    return (
        <div className='gpt3__header section__padding' id='home'>
            <div className='gpt3__header-content'>
                <h1 className='gradient__text'>Let's Build Something amazing with GPT-3 OpenAi</h1>
                <p className=''>Si es relativo a su padre si se puede usando porcentajes, ya que por ejemplo, cuando pones width:10%, se refiere a un 10% del ancho del padre</p>

                <div className='gpt3__header-content__input'>
                    <input type='email' placeholder='Your email address' />
                    <button type='button'>Get Started</button>
                </div>

                <div className='gpt3__header-content__people'>
                    <img src={people} alt='people' />
                    <p>1600 people requested access & visit at last 24 hours</p>
                </div>
            </div>

            <div className='gpt3__header-image'>
                <img src={ai} alt='ai' />
            </div>
        </div>
    )
}