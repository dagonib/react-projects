import './menuItem.css'

export default function MenuItem ({ title, price, tags }) {
    return (
        <div className='app__menuItem'>
            <div className='app__menuItem-head'>
                <div className='app__menuItem-name'>
                    <p className='p__cormorant' style={{ color: '#DCCE87'}}>{title}</p>
                </div>

                <div className='app__menuItem-dash' />

                <div className='app__menuItem-price'>
                    <p className='p__cormorant'>{price}</p>
                </div>
            </div>

            <div className='app__menuItem-sub'>
                <p className='p__opensans' style={{ color: '#AA'}}>{tags}</p>
            </div>
        </div>
    )
}