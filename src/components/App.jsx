import { Profile } from "./profile/Profile";
import user from './profile/user.json';
import { Statistics } from "./statistics/Statistiks";
import data from './statistics/data.json';
import { FriendList } from "./friends/FriendList";
import friends from "./friends/friends.json"
import { TransactionHistory } from "./transactions/TransactionHistory";
import transactions from "./transactions/transactions.json"


export const App = () => {
  return (
    <>
    <Profile
         user={user}  
    />
    <Statistics 
      title="Upload stats"
      stats={data}
      />
      <FriendList
        friends={friends}
      />  
      <TransactionHistory
        items={transactions}
      />
    </>  
  );
};
