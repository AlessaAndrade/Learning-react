import { useState } from "react"

export function TwitterFollowCard ({ formatUserName, userName, name }) {
    const [isFollowing, setIsFollowing] = useState(false)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing 
        ? 'tw-followCard-button is-following' 
        : 'tw-followCard-button'
    
    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
      <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img 
              className='tw-followCard-avatar'
              src={`https://unavatar.io/${userName}`} />
            <div className='tw-followCard-info'>
                <strong>{name}</strong>
                <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
            </div>
        </header>

        <aside>
            <button className='tw-followCard-button' onClick={handleClick}> 
                {text}
                <span className="tw-followCard-stopFollow">Dejar de Seguir</span>
            </button>
        </aside>
      </article>
    )
}