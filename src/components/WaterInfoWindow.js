import React from 'react';
import PropTypes from 'prop-types';

const WaterInfoWindow = ({ wrid, podnumber, wrnumber, allowners, wrtype, histrgttyp, wr_status, srctype, srcname, meanofodiv, abstract }) => (
  <as-infowindow>
    <h1 className="as-title">{wrid}</h1>
    <br />
    <h4 className="as-subheader">Well Information</h4>
    <p className="as-body">Pod Number: {podnumber}</p>
    <p className="as-body">WR Number {wrnumber}</p>
    <p className="as-body">Owners: {allowners}</p>
    <p className="as-body">WR Type: {wrtype}</p>
    <p className="as-body">WR Status: {wr_status}</p>

    <p className="as-body">Source Type: {srctype}</p>

    <p className="as-body">Source Name: {srcname}</p>

    <p className="as-body">Meaning: {meanofodiv}</p>
    <p className="as-body">Abstract Link: {abstract}</p>


</as-infowindow>
);

export default WaterInfoWindow;
