import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
    return (
       <ul className="friend-list">
        {friends.map(friendlistitem => (
            <FriendListItem key={friendlistitem.id} friendlistitem={friendlistitem} />
        ))}
       </ul>
    );
};