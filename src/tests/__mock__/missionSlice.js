const fetchMission = () => {
  const missions = {
    data: [
      {
        id: 1,
        name: 'Thaicom',
        description: 'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited',
        reserved: false,
      },
      {
        id: 2,
        name: 'Telstar',
        description: 'Telstar 19V (Telstar 19 Vantage) is a communication satellite in the Telstar series of the Canadian satellite communications company Telesat.',
        reserved: false,
      },
      {
        id: 3,
        name: 'Iridium NEXT',
        description: 'In 2017, Iridium began launching Iridium NEXT, a second-generation worldwide network of telecommunications satellites, consisting of 66 active satellites',
        reserved: false,
      },
      {
        id: 4,
        name: 'SES',
        description: 'SES S.A. is a communications satellite owner and operator providing video and data connectivity worldwide to broadcasters',
        reserved: false,
      },
    ],
  };
  return missions.data;
};

export default fetchMission;
