import { useState } from "react"

export function TwitterFollowCard ({ children, userName = 'unknown', initialIsFollowing }) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    const addAt = (userName) => `@${userName}`
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing 
        ? 'tw-followCard-button is-following' 
        : 'tw-followCard-button'

    return (
        <article className="tw-followCard">
        <header className="tw-followCard-header">
          <img 
            className="tw-followCard-avatar"
            alt="El avatar de midudev" 
            src={`https://unavatar.io/${userName}`}
          />
          <div className='tw-followCard-info'>
            <strong className='tw-followCard-infoUserName'>{children}</strong>
            <span>{addAt(userName)}</span>
          </div>
        </header>

        <aside>
          <button className={buttonClassName} onClick={handleClick}>
            <span className="tw-followCard-text">{text}</span>
            <span className="tw-followCard-stopFollow">Dejar de seguir</span>
          </button>
        </aside>
    </article>
    )
}