export default {
  name: 'Major Subdivisions',

  visible: false,

  cartocss: `
  #layer {
    polygon-fill: #cfcfcf;
    polygon-opacity: 0.5;
  }
  #layer::outline {
    line-width: 1;
    line-color: #FFFFFF;
    line-opacity: 0.5;
  }
  #layer::labels [st_area > 0.00006]{
    text-name: [sub_name];
    text-face-name: 'DejaVu Sans Book';
    text-size: 10;
    text-fill: #FFFFFF;
    text-label-position-tolerance: 0;
    text-halo-radius: 1;
    text-halo-fill: #6F808D;
    text-dy: 0;
    text-allow-overlap: false;
    text-placement: point;
    text-placement-type: dummy;
  }
  `,

  query: `
  SELECT *, st_area(the_geom) FROM mbforrcdb.major_subs  `,

  options: {
    featureClickColumns: ['sub_name']
  }
};
