import './awardCard.css'

export default function AwardCard({ award: { imgUrl, title, subtitle } }) {
    return (
        <div className='award-card'>
            <img src={imgUrl} alt='awards' />

            <div className='award-card_content'>
                <p className='p__cormorant' style={{ color: '#DCCA87' }}>{title}</p>
                <p className='p__opensans'>{subtitle}</p>
            </div>
        </div>
    )
}