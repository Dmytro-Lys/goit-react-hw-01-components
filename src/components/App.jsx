import { Profile } from "./profile/Profile";
import user from './profile/user.json';
import { Statistics } from "./statistics/Statistiks";
import data from './statistics/data.json';

export const App = () => {
  return (
    <>
    <Profile
      // username={user.username}
      // tag={user.tag}
      // location={user.location}
      // avatar={user.avatar}
      // stats={user.stats}
        user={user}  
    />
    <Statistics 
      title="Upload stats"
      stats={data}
      />
    </>  
  );
};
