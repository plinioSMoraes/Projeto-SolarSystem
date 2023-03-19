import React from 'react';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import Title from './Title';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões"> </Title>
        <div className="missionsCards">
          {missions.map(({ name, year, country, destination }) => (
            <MissionCard
              key=""
              name={ name }
              year={ year }
              country={ country }
              destination={ destination }
            />
          ))}
        </div>
      </div>); // parentes no return SEMPRE
  }
}

export default Missions;
