export default {
    name: 'Zoning',
  
    visible: false,
  
    cartocss: `
    #layer {
        polygon-fill: #e1e1e1;
        polygon-opacity: 0.3;
      }
      #layer::outline {
        line-width: 1;
        line-color: #c7c7c7;
        line-opacity: 0.5;
      }
    `,
  
    query: `
    SELECT * FROM zoning_districts_20180706_1`,
  
    options: {
      featureClickColumns: ['innerzone', 'district_n', 'landuse', 'zoned']
    }
  };
  