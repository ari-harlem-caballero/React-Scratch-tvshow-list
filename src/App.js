import './App.css';
import { useState } from 'react';

function App() {
  // state: allShows, filteredShows, showTitle, showSeasons, showCreator, showColor, *showActors[]*
  const [allShows, setAllShows] = useState([]);
  const [filteredShows, setFilteredShows] = useState([]);
  const [showFormTitle, setShowFormTitle] = useState('');
  const [showFormSeasons, setShowFormSeasons] = useState(1);
  const [showFormCreator, setShowFormCreator] = useState('');
  const [showFormColor, setShowFormColor] = useState('yellow');

  // functions: filter, delete, submit(new)
  function handleFilterShows(search) {

  }

  function handleDeleteShow(id) {

  }

  function submitShow(e) {
    e.preventDefault();

    const newShow = {
      id: (Math.ceil(Math.random() * 100)),
      title: showFormTitle,
      seasons: showFormSeasons,
      creator: showFormCreator,
      color: showFormColor
    };
    // update array/add new, clear state
    setAllShows([...allShows, newShow]);

    setShowFormTitle('');
    setShowFormSeasons('1');
    setShowFormCreator('');
    setShowFormColor('yellow');
  }

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
