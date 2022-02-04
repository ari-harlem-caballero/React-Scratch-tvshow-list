import React from 'react';

export default function Actor(props) {
  return <div className='actor'>
    <p>{props.tvshow.actor}</p>
  </div>;
}
