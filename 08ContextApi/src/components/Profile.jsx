import { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  return user ? (
    <div>
      Profile - {user.username} - {user.password}
    </div>
  ) : (
    <div>Please login</div>
  );
};

export default Profile;
