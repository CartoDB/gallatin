export default {
    name: 'Minor Subdivisions',
  
    visible: false,
  
    cartocss: `
    #layer {
        polygon-fill: #acc2f4;
        polygon-opacity: 0.3;
      }
      #layer::outline {
        line-width: 1;
        line-color: #acc2f4;
        line-opacity: 0.5;
      }
    `,
  
    query: `
    SELECT * FROM minor_subs`,
  
    options: {
      featureClickColumns: []
    }
  };
  