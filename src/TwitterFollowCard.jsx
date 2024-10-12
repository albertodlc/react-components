import "./TwitterFolloCard.css";
import { useState } from "react";

export function TwitterFollowCard({children, format, username, initialIsFollowing = false}){
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
    const [isShown, setIsShown] = useState(false);

    const imgUrl = `https://unavatar.io/${username}`;
    const message = isFollowing ? 
        isShown ? 
            "Dejar de seguir" : "Siguiendo" : 
        "Seguir";
    const color = isFollowing ? "pressed" : "";


    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }

    const handleOnMouseEnter = () => {
        if( isFollowing ){
            setIsShown(true);
        }
    }

    const handleOnMouseLeave = () => {
        if( isFollowing ){
            setIsShown(false);
        }
    }

    return (
        <article>
            <header>
                <img src={imgUrl} alt="avatar" />
                <div>
                    <strong>{children}</strong>
                    <span>{format(username)}</span>
                </div>
            </header>
            <aside>
                <button onMouseLeave={handleOnMouseLeave} onMouseEnter={handleOnMouseEnter} onClick={handleClick} className={color}>{message}</button>
            </aside>
        </article>
    );
}