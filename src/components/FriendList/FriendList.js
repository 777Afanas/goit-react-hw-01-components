import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css';


export const FriendList = ({ friends }) =>{
    return (
    //    <ul className="friend-list">
    //     {friends.map(friendlistitem => (
    //         <FriendListItem key={friendlistitem.id} friendlistitem={friendlistitem} />
    //     ))}
    //     </ul>
      <ul className={css.friendList}>
        {friends.map(({ id, avatar, name, isOnline }) => (
          <FriendListItem key={id}
          id={id}  
          avatar={avatar}
          name={name}
          isOnline={isOnline}
             />
        ))}
       </ul>
    );
};

// FriendList.propTypes = {
//   friends: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//     })
//   ).isRequired,
// };

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};