import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import getMissions from './redux/missions/getMissions';

const Missions = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);
  return <div> Missions </div>;
};

export default Missions;
