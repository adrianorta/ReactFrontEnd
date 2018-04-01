import React from 'react';
import PropTypes from 'prop-types';

const Container = props => {
  const results = props.data;
  let photos = results.map((image, index) =>
    <li key={index}>
      <img
        src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`}
        alt={image.title} />
    </li>
  );

  return (
    <div className="photo-container">
      <ul>
        {photos}
      </ul>
    </div>
  );
}

export default Container;
