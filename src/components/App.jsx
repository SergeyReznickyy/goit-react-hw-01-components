import { Profile } from './profile/profile.jsx';
import { Statistics } from './statistics/statistics.jsx';
import { FriendList } from './friendList/friendList.jsx';
import { Transactions } from './transactions/transactions.jsx';

import user from '../json/user.json';
import data from '../json/data.json';
import friends from '../json/friends.json';
import transactions from '../json/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <Transactions items={transactions} />
    </div>
  );
};
