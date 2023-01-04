import { FriendList } from './FriendList/FriendList';
import friends from '../friends.json';


export const App = () => {
  return <>
    <FriendList friends={friends} />
  </>;   
};


// style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}