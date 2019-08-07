export default {
    name: 'Fire Districts',
  
    visible: false,
  
    cartocss: `
    #layer {
        polygon-fill: #826dba;
        polygon-opacity: 0;
      }
      #layer::outline {
        line-width: 2;
        line-color: #ffc0c0;
        line-opacity: 1;
      }
      #layer::labels [fire_dist != 'OUT'] {
        text-name: [fire_dist];
        text-face-name: 'Lato Bold';
        text-size: 12;
        text-fill: #858585;
        text-label-position-tolerance: 0;
        text-halo-radius: 1;
        text-halo-fill: #ffffff;
        text-dy: 0;
        text-allow-overlap: false;
        text-placement: point;
        text-placement-type: dummy;
      }
    `,
  
    query: `
    SELECT * FROM fire_districts`,
  
    options: {
      featureClickColumns: []
    }
  };
  