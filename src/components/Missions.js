import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getMissions from './redux/missions/getMissions';
import { joinMissions, leaveMissions } from './redux/missions/missionsSlice';

const Missions = () => {
  const dispatch = useDispatch();
  const { missions } = useSelector((state) => state.missions);
  useEffect(() => {
    if (missions.length === 0) {
      dispatch(getMissions());
    }
  }, [dispatch, missions.length]);

  const handleJoin = (id) => {
    dispatch(joinMissions(id));
  };

  const handleLeave = (id) => {
    dispatch(leaveMissions(id));
  };

  return (
    <div>
      <table className="mission-table">
        <thead>
          <>
            <tr>
              <th className="cell-col"> Mission </th>
              <th className="cell-col"> Description </th>
              <th className="cell-col"> Status </th>
              <th className="cell-col"> </th>
            </tr>
          </>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.mission_id}>
              <td>{mission.mission_name}</td>
              <td>{mission.description}</td>
              <td>
                {mission.reserved ? (
                  <div className="member-badge active-member">
                    Active Member
                  </div>
                ) : (
                  <div className="member-badge not-member"> NOT A MEMBER</div>
                )}
              </td>
              <td>
                {missions.reserved ? (
                  <button
                    type="button"
                    className="button-mission leave-mission"
                    onClick={() => handleLeave(mission.mission_id)}
                  >
                    Leave Mission
                  </button>
                ) : (
                  <button
                    type="button"
                    className="button-mission join-mission"
                    onClick={() => handleJoin(mission.mission_id)}
                  >
                    Join Mission
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
