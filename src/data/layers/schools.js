export default {
    name: 'Schools',
  
    visible: false,
  
    cartocss: `
    #layer {
        polygon-fill: #826dba;
        polygon-opacity: 0;
      }
      #layer::outline {
        line-width: 3;
        line-color: #c4c4c4;
        line-opacity: 0.5;
      }
      #layer::labels {
        text-name: [elementary];
        text-face-name: 'DejaVu Sans Book';
        text-size: 10;
        text-fill: #FFFFFF;
        text-label-position-tolerance: 0;
        text-halo-radius: 1;
        text-halo-fill: #6F808D;
        text-dy: -10;
        text-allow-overlap: true;
        text-placement: point;
        text-placement-type: dummy;
      }
    `,
  
    query: `
    SELECT * FROM school_districts`,
  
    options: {
      featureClickColumns: []
    }
  };
  