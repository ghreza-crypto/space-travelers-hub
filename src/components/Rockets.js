import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets, reserve, cancelReservation } from './redux/rockets/rocketsSlice';

const Rockets = () => {
  const dispatch = useDispatch();
  const { isLoading, rockets, errorMessage } = useSelector((store) => store.rockets);

  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(fetchRockets());
    }
  }, []);
  const handleReserve = (id) => {
    dispatch(reserve(id));
  };

  const handleCancelation = (id) => {
    dispatch(cancelReservation(id));
  };
  return (
    <div className="rocketsWrapper">
      {isLoading && <h1>Loading...</h1>}
      {!isLoading && errorMessage ? (
        <div>
          Error:
          {errorMessage}
        </div>
      ) : null}
      {!isLoading && rockets.length
        ? (rockets.map((rocket) => (
          <div key={rocket.rocket_id} className="rocketsContainer">
            <img src={rocket.flickr_images[0]} alt={rocket.name} className="rocketImage" />
            <div className="rocketsInfo">
              <h2>{rocket.rocket_name}</h2>
              <p>
                {rocket.reserved && <span className="reservedLabel">Reserved</span>}
                {rocket.description}
              </p>
              <div className="btnWrapper">
                {rocket.reserved ? (
                  <button type="button" onClick={() => handleCancelation(rocket.rocket_id)} className="cancelBtn">Cancel Reservation</button>
                ) : (
                  <button type="button" onClick={() => handleReserve(rocket.rocket_id)} className="reserveBtn">Reserve Rocket</button>
                )}
              </div>
              {errorMessage && <h1>{errorMessage}</h1>}
            </div>
          </div>
        ))
        ) : null}
    </div>

  );
};

export default Rockets;
