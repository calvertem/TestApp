import React from 'react';
import './App.css';
import data from './CollegeBasketballTeams.json';

interface TeamProps {
  school: string;
  name: string;
  city: string;
  state: string;
}

function Welcome() {
  return (
    <div>
      <h1>March Madness!</h1>
      <h3>NCAA Tourney Time!!!</h3>
      <p>
        We wanted to make sure everyone had all the information they needed this
        tournament season. So here is all you need to know about all the teams
        playing in the tournament this year.
      </p>
    </div>
  );
}

class Team extends React.Component<TeamProps> {
  render() {
    const oneTeam = this.props;

    return (
      <div>
        <img />
        <h2>{oneTeam.school}</h2>
        <h3>Mascot: {oneTeam.name}</h3>
        <h3>
          Location: {oneTeam.city}, {oneTeam.state}{' '}
        </h3>
      </div>
    );
  }
}

function TeamList() {
  return (
    <div>
      {data.teams.map((oneTeam) => (
        <Team key={oneTeam.tid} {...oneTeam} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <TeamList />
    </div>
  );
}

export default App;
