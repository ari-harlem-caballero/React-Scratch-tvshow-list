import './App.css';
import { useState } from 'react';
import TVShow from './TVShows/TVShow';
import TVShowForm from './TVShows/TVShowForm';
import TVShowList from './TVShows/TVShowList';

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
    const filterShows = allShows.filter(tvshow => tvshow.title.includes(search));

    search ? setFilteredShows(filterShows)
      : setFilteredShows(allShows);
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
      <h1>Create a TV Show</h1>
      <section className='top'>
        <TVShowForm
          submitShow={submitShow}
          showFormTitle={showFormTitle}
          setShowFormTitle={setShowFormTitle}
          showFormSeasons={showFormSeasons}
          setShowFormSeasons={setShowFormSeasons}
          showFormCreator={showFormCreator}
          setShowFormCreator={setShowFormCreator}
          showFormColor={showFormColor}
          setShowFormColor={setShowFormColor}
        />
        {/* form, current show */}
        <TVShow tvshow={{
          title: showFormTitle,
          seasons: showFormSeasons,
          creator: showFormCreator,
          color: showFormColor
        }} />
      </section>
      <section className='bottom'>
        {/* filter, list */}
        <div>
        Filter Tv Shows: 
          <input onChange={(e) => handleFilterShows(e.target.value)} />
        </div>
        {/* <TVShowList
          tvshows={} /> */}
      </section>
    </div>
  );
}

export default App;
