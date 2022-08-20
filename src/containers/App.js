import React, { useState, useEffect } from 'react';
import Searchbox from '../components/SearchBox';
// import Scroll from './../components/scroll';
import Cardlist from '../components/CardList';
import './../assets/App.css';

const App = () => {

  const [robots, setRobot] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        setRobot(users);
        setLoading(false);
      });
  }, []);

  const onSearchChange = (e) => {
    setSearchField(e.target.value);
  }

  const filteredRobots = robots.filter(robot =>
    robot.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div className='app-container'>
      <div className='header'>
        <h1>Personas Conectadas</h1>
      </div>
      <div className='app-content'>
        <Searchbox onSearch={onSearchChange} />
        <Cardlist robots={filteredRobots} loading={loading} />
      </div>
    </div>
  );
}

export default App;
