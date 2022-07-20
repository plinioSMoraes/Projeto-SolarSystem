import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões"> </Title>
        {missions.map(({ name, year, country, destination }) => (
          <MissionCard
            key=""
            name={ name }
            year={ year }
            country={ country }
            destination={ destination }
          />
        ))}
      </div>); // parentes no return SEMPRE
  }
}

export default Missions;
