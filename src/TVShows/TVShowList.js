import React from 'react';
import TVShow from './TVShow';

export default function TVShowList(props) {
  return <div className='tv-show-list'>
    {props.tvshow.map((tvshow, i) => 
      <TVShow key={`${tvshow}-${i}`} 
        tvshow={tvshow} />
    )}
  </div>;
}
