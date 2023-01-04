import Profile from './Profile/Profile';
import user from '../user.json';

import Statistics from './Statistics/Statistics';
import data from '../data.json';

import { FriendList } from './FriendList/FriendList';
import friends from '../friends.json';

import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from '../transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <FriendList friends={friends} />
      <Statistics
        title="Upload stats"
        stats={data} />
      <Statistics
        stats={data} />
      <TransactionHistory
        items={transactions} />;

      </>
      
    );  
}



// style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}