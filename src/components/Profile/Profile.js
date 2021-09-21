import React, {useContext} from "react";
import { UserContext } from "../../shared/global/provider/UserProvider";
import '../Profile/Profile.css'

export const Profile = () => {
  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);

  return (
    <div>
      <a className="nav-link">{authenticatedUser}</a>
    </div>
  );
};
