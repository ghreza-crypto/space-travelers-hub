import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets, reserve } from './redux/rockets/rocketsSlice';

const Rockets = () => {
  const dispatch = useDispatch();
  const { isLoading, rockets, errorMessage } = useSelector((store) => store.rockets);

  useEffect(() => {
    dispatch(fetchRockets());
  }, []);
  const handleReserve = (id) => {
    dispatch(reserve(id));
  };
  return (
    <div>
      {isLoading && <h1>Loading...</h1>}
      {!isLoading && errorMessage ? (
        <div>
          Error:
          {errorMessage}
        </div>
      ) : null}

      {!isLoading && rockets.length
        ? (rockets.map((rocket) => (
          <div key={rocket.rocket_id}>
            <img src={rocket.flickr_images[0]} alt={rocket.name} />
            <div>
              <h2>{rocket.rocket_name}</h2>
              <p>
                {rocket.reserved && <span>Reserved</span>}
                {rocket.description}
              </p>
              {rocket.reserved ? (
                <button type="button">Cancel Reservation</button>
              ) : (
                <button type="button" onClick={() => handleReserve(rocket.rocket_id)}>Reserve Rocket</button>
              )}
              {errorMessage && <h1>{errorMessage}</h1>}
            </div>
          </div>
        ))
        ) : null}
    </div>

  );
};

export default Rockets;
