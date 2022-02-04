import React from 'react';
import Actor from './Actor';

export default function ActorsList({ actors }) {
  return <div className='actor-list'>
    {
      actors.map((actor, i) => <Actor key={`${actor.name}-${i}`} {...actor} />)
    }
  </div>;
}
