import css from './FriendList.module.css';
import PropTypes from "prop-types";
import clsx from "clsx";

export const FriendList = ({friends}) => {
    return (
        <ul className={css["friend-list"]}>
            {friends.map( ({avatar, name, isOnline, id}) =>(
                <li key = {id} className={css['friend-item']}>
                    <span className={clsx(css.status, {[css.isOnline]: isOnline})}></span>
                    <img className={css["friend-avatar"]} src={avatar} alt="User avatar" width="48" />
                    <p className={css["friend-name"]}>{name}</p>
                </li>
            ))}
</ul>
    )
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired
}