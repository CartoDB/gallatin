export default {
    name: 'Water Rights',
  
    visible: false,
  
    cartocss: `
    #layer {
        marker-width: 5;
        marker-fill: #7eb171;
        marker-fill-opacity: 0.9;
        marker-allow-overlap: true;
        marker-line-width: 1;
        marker-line-color: #FFFFFF;
        marker-line-opacity: 1;
      }
    `,
  
    query: `
    SELECT * FROM matt`,
  
    options: {
      featureClickColumns: ['wrid', 'podnumber', 'wrnumber', 'allowners', 'wrtype', 'histrgttyp', 'wr_status', 'srctype', 'srcname', 'meanofodiv', 'abstract']
    }
  };
  