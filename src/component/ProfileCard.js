import './DashNavbar.css';

function ProfileCard(props) {
  return (
    <>
      <div className="profile-card-container">

        <div className="flex flex-col">
          <span className="profile-name"> {props.name} </span>
        </div>
      </div>
    </>
  );
}

export default ProfileCard;
