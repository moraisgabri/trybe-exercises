import React from 'react';

class getImage extends React.Component {
  render () {
    return <img src={this.props.source} alt={this.props.alternativeText} />
  }
}

export default getImage;
