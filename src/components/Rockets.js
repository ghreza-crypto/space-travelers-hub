import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchRockets } from './redux/rockets/rocketsSlice';

const Rockets = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);
  return <div> Rockets </div>;
};

export default Rockets;
