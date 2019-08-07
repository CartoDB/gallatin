export default {
    name: 'Parcels',
  
    visible: true,
  
    cartocss: `
    #layer {
        polygon-fill: ramp([class], (#66C5CC, #F6CF71, #F89C74, #DCB0F2, #87C55F, #9EB9F3, #FE88B1, #C9DB74, #8BE0A4, #B3B3B3), ("MAJOR SUBDIVISION", "COS", "DEED", "MINOR SUBDIVISION", "UNPATENTED FEDERAL", "UNKNOWN", "DEED OR COS", "PARCEL", ), "=");
        polygon-opacity: 0.3;
      }
      #layer::outline {
        line-width: 0.25;
        line-color: #ffffff;
        line-opacity: 0.5;
      }
    `,
  
    query: `
    SELECT *, class as c FROM parcels_1`,
  
    options: {
      featureClickColumns: ['parcel_id', 'c', 'subclass', 'record', 'sub_name']
    }
  };
  