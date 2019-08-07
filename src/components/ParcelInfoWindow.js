import React from 'react';
import PropTypes from 'prop-types';

const ParcelInfoWindow = ({ parcel_id, c, subclass, record, sub_name }) => (
  <as-infowindow>
    <h1 className="as-title">{parcel_id}</h1>
    <br />
    <h4 className="as-subheader">Parcel Information</h4>
    <p className="as-body">Class: {c}</p>
    <p className="as-body">Subclass Updated: {subclass}</p>
    <p className="as-body">Record: {record}</p>
    <p className="as-body">Sub-Name: {sub_name}</p>
</as-infowindow>
);

export default ParcelInfoWindow;
