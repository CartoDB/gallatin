import React from 'react';
import PropTypes from 'prop-types';

const ZoningInfoWindow = ({ innerzone, district_n, landuse, zoned }) => (
  <as-infowindow>
    <h4 className="as-subheader">Zoning Information</h4>
    <p className="as-body">Inner Zone: {innerzone}</p>
    <p className="as-body">District: {district_n}</p>
    <p className="as-body">Land Use: {landuse}</p>
    <p className="as-body">Zone Ed: {zoned}</p>
</as-infowindow>
);

export default ZoningInfoWindow;

