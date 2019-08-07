import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { setNeighbourhoods } from '../../actions/actions';
import carto, { filter, source, style, layer  } from '@carto/carto.js';
import Category from '.././widgets/Category'
import CategoryVL from '.././vlwidgets/CategoryVL'
import Histogram from '.././widgets/Histogram'
import Formula from '.././widgets/Formula'
import Range from '.././widgets/Range'
import Export from '.././widgets/Export'
import '@carto/airship-style';

class RightBar extends Component {

  constructor(props) {
    super(props);
      this.state = {
        ...props
      }
  }

  state = {
    size: null
  };

  componentDidMount() {
    const z = `as-sidebar as-sidebar--${this.props.size} as-sidebar--right ${this.props.background}`;
    this.setState({size: z})
  }

  render() {

    return (
      <aside className={this.state.size} data-name={this.props.name}>
      <div className="as-m--24">
      <Category
        title='Parcel Class'
        description='Count of each parcel class in view'
        categoryLayer={this.props.layers.parcels.source}
        column='class'
        operation={carto.operation.COUNT}
    />
      <Category
        title='Parcel Sub-Class'
        description='Count of each parcel sub-class in view'
        categoryLayer={this.props.layers.parcels.source}
        column='subclass'
        operation={carto.operation.COUNT}
    />
      <Category
        title='Strucutre City'
        description='Filter structures by city'
        categoryLayer={this.props.layers.structures.source}
        column='jurisdicti'
        operation={carto.operation.COUNT}
    />
      <Category
        title='Structure Type'
        description='Count of each structure type in view'
        categoryLayer={this.props.layers.structures.source}
        column='type'
        operation={carto.operation.COUNT}
    />
      </div>
      </aside>

    )
  }
}

const mapStateToProps = state => ({
  client: state.client,
  map: state.map,
  layers: state.layers,
  viewport: state.viewport,
  boundingbox: state.boundingbox
});

const mapDispatchToProps = dispatch => ({
  setNeighbourhoods: selected => dispatch(setNeighbourhoods(selected)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RightBar);
