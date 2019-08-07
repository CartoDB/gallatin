export default {
    name: 'Structures',
  
    visible: true,
  
    cartocss: `
    #layer {
        marker-width: 4;
        marker-fill: #8baaca;
        marker-fill-opacity: 0.9;
        marker-allow-overlap: true;
        marker-line-width: 1;
        marker-line-color: #FFFFFF;
        marker-line-opacity: 1;
      }
    `,
  
    query: `
    SELECT *,
CONCAT(address, ' ', dirpre, ' ', roadname,  ' ', roadtype, ', ', jurisdicti, ', MT') as full,
to_char(updated, 'MM/DD/YY') as datestring
FROM mbforrcdb.structures`,
  
    options: {
      featureClickColumns: ['full', 'publicview', 'condo', 'datestring', 'type', 'elevation', 'comments']
    }
  };
  