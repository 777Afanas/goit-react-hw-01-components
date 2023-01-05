import PropTypes from 'prop-types';

export const FriendListItem = ({ friendlistitem: { avatar, name, isOnline } }) => {
    return (
      <li className="item">
        {isOnline ? (<span className="status green"></span>) :
          (<span className="status red"></span>)
        }
  
  <img className="avatar" src={avatar} alt={name} width="48" />
  <p className="name">{name}</p>
</li> 
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};




