import React from 'react';

export default function TVShowForm(props) {
  return (
    <div className='left'>
      <form className='tv-show-form' onSubmit={props.submitShow}>
        <label>
          Title:
          <input required value={props.showFormTitle} onChange={(e) => props.setShowFormTitle(e.target.value)}/>
        </label>
        <label>
          Seasons:
          <input required type="number" value={props.showFormSeasons} onChange={(e) => props.setShowFormSeasons(e.target.value)}/>
        </label>
        <label>
          Creator:
          <input required value={props.showFormCreator} onChange={(e) => props.setShowFormCreator(e.target.value)} />
        </label>
        <label>
          Color:
          <select required value={props.showFormColor} onChange={(e) => props.setShowFormColor(e.target.value)}>
            <option value="yellow">Yellow</option>
            <option value="red">Red</option>
            <option value="lightblue">Blue</option>
            <option value="lightseagreen">Green</option>
            <option value="yellowgreen">Bright</option>
          </select>
        </label>
        <button>Add Movie</button>
      </form>
    </div>
  );
}
