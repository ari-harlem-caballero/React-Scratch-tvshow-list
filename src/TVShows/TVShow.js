import React from 'react';

export default function TVShow(props) {
  return (
    <div 
      className='tv-show' 
      style={{ backgroundColor: props.tvshow.color }}
      onClick={() => props.handleDeleteShow && props.handleDeleteShow(props.tvshow.id)}>
      <h3>{props.tvshow.title}</h3>
      <p>Seasons: {props.tvshow.seasons}</p>
      <p>Creator: {props.tvshow.creator}</p>
    </div>
  );
}
