import React from 'react';
import PropTypes from 'prop-types';

const InfoWindow = ({ full, publicview, condo, datestring, type, elevation, comments }) => (
  <as-infowindow>
    <h1 className="as-title">{full}</h1>
    <br />
    <h4 className="as-subheader">Property Information</h4>
    <p className="as-body">Condo: {condo}</p>
    <p className="as-body">Date Updated: {datestring}</p>
    <p className="as-body">Type: {type}</p>
    <p className="as-body">Elevation: {elevation}</p>
    <p className="as-body">Comments: {comments}</p>
</as-infowindow>
);

export default InfoWindow;


