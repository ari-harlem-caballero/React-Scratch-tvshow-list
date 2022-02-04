import './App.css';
import { useEffect, useState } from 'react';
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
  const [showFormActors, setShowFormActors] = useState('');
  const [showFormColor, setShowFormColor] = useState('gold');
  const [query, setQuery] = useState('');

  // functions: filter, delete, submit(new)
  function handleFilterShows() {
    const filterShows = allShows.filter((tvshow) => 
      tvshow.title.includes(query));

    setFilteredShows(filterShows);
  }

  useEffect(handleFilterShows, [query, allShows]);

  function handleDeleteShow(id) {
    const index = allShows.findIndex(tvshow => 
      tvshow.id === id);

    allShows.splice(index, 1);

    setAllShows([...allShows]);
  }

  function submitShow(e) {
    e.preventDefault();

    const newShow = {
      id: (Math.ceil(Math.random() * 100)),
      title: showFormTitle,
      seasons: showFormSeasons,
      creator: showFormCreator,
      actors: showFormActors,
      color: showFormColor
    };
    // update array/add new, clear state
    setAllShows([...allShows, newShow]);

    setShowFormTitle('');
    setShowFormSeasons('1');
    setShowFormCreator('');
    setShowFormActors('');
    setShowFormColor('gold');
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
          showFormActors={showFormActors} 
          setShowFormActors={setShowFormActors}
          showFormColor={showFormColor}
          setShowFormColor={setShowFormColor}
        />
        {/* form, current show */}
        <TVShow tvshow={{
          title: showFormTitle,
          seasons: showFormSeasons,
          creator: showFormCreator,
          actors: showFormActors,
          color: showFormColor
        }} />
      </section>
      <section className='bottom'>
        {/* filter, list */}
        <div className='filter-tv-shows'>
        Filter Tv Shows: 
          <input onChange={(e) => setQuery(e.target.value)} />
        </div>
        <TVShowList
          tvshows={filteredShows.length 
            ? filteredShows 
            : allShows} 
          handleDeleteShow={handleDeleteShow}  
        />
      </section>
    </div>
  );
}

export default App;
