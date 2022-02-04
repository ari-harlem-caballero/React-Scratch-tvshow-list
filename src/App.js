import './App.css';
import { useState } from 'react';

function App() {
  // state: allShows, filteredShows, showSeasons, showCreator, showColor, *showActors[]*
  const [allShows, setAllShows] = useState([]);
  const [filteredShows, setFilteredShows] = useState([]);
  const [showFormSeasons, setShowFormSeasons] = useState(1);
  const [showFormCreator, setShowFormCreator] = useState('');
  const [showFormColor, setShowFormColor] = useState('yellow');

  // functions: filter, delete
  return (
    <div className="App">
      <section className='top'>
        {/* form, current show */}
        Hello world
      </section>
      <section className='bottom'>
        {/* filter, list */}
      </section>
    </div>
  );
}

export default App;
