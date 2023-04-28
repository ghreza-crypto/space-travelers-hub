import { useSelector } from 'react-redux';
import './profile.css';

const MyProfile = () => {
  const { missions } = useSelector((state) => state.missions);
  const { rockets } = useSelector((state) => state.rockets);

  return (
    <div className="profile-container">
      <div className="sub-section">
        <h2>My Missions</h2>
        {missions.some((mission) => mission.reserved === true) ? (
          <div className="reserved-list">
            {missions
              .filter((mission) => mission.reserved === true)
              .map((mission) => (
                <h3 key={mission.mission_id}>{mission.mission_name}</h3>
              ))}
          </div>
        ) : (
          <div className="not-found">
            <h3>No Missions Found</h3>
          </div>
        )}
      </div>

      <div className="sub-section">
        <h2>My Rockets</h2>
        {rockets.some((rocket) => rocket.reserved === true) ? (
          <div className="reserved-list">
            {missions
              .filter((rocket) => rocket.reserved === true)
              .map((rocket) => (
                <h3 key={rocket.rocket_id}>{rocket.rocket_name}</h3>
              ))}
          </div>
        ) : (
          <div className="not-found">
            <h3>No Rockets Found</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
