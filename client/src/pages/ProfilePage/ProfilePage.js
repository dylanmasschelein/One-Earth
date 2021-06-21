import { useState, useEffect } from "react";
import "./ProfilePage.scss";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import FollowedAreasList from "../../components/FollowedAreasList/FollowedAreasList";
import axios from "axios";

const ProfilePage = (props) => {
  const { setUser, user, setToggleModal, setModalText, setRedirect } = props;
  const [failedAuth, setFailedAuth] = useState(false);
  const [followedAreas, setFollowedAreas] = useState(null);
  const token = sessionStorage.getItem("token");

  const getData = (token) => {
    axios
      .get("http://localhost:8080/user/current", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((user) => {
        setUser(user.data);
        setFollowedAreas(user.data.followedAreas);
      })
      .catch(() => setFailedAuth(true));
  };

  useEffect(() => {
    if (!token) {
      setFailedAuth(true);
    }
    getData(token);
  }, []);

  const editProfileInfo = (key, value) => {
    axios
      .put(`http://localhost:8080/user/edit/${user.email}`, {
        value,
        key,
      })
      .then((res) => console.log("res sent", res))
      .catch((err) => console.error(err));
  };

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    setUser(null);
    setFailedAuth(true);
    setToggleModal(true);
    setModalText("You have been logged out!");
    setRedirect("/");
  };

  const handleDelete = (id) => {
    console.log(user.email);
    axios
      .delete(`http://localhost:8080/user/${user.email}/area/${id}`)
      .then(() => getData(token))
      .catch((err) => console.error(err));
  };

  {
    !failedAuth && <h1>You must be logged in to view your profile</h1>;
  }

  return (
    <div className='profile'>
      <div className='profile__user'>
        {user && <ProfileInfo user={user} editProfileInfo={editProfileInfo} />}
        <button onClick={handleLogout} className='profile__logout'>
          Log out
        </button>
      </div>
      <div className='profile__followed'>
        <h1 className='profile__title'>Followed areas</h1>
        <div className='profile__areas'>
          {followedAreas && (
            <FollowedAreasList
              handleDelete={handleDelete}
              followedAreas={followedAreas}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
