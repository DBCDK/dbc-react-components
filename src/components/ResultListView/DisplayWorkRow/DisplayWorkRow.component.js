'use strict';
import React from 'react';
import BibliographicData from './../DisplayBibliographicData/DisplayBibliographicData.component.js';

/**
 * Component for creating presentation a row of works
 */
const WorkRow = React.createClass({
  displayName: 'WorkRow.component - dbc-react-components',

  propTypes: {
    coverImage: React.PropTypes.object,
    noOfWorks: React.PropTypes.number,
    numRows: React.PropTypes.string,
    work: React.PropTypes.array.isRequired
  },
  render() {
    const workElement = this.props.work.map((work, i) => {
      let noOfWorks = this.props.noOfWorks;
      return (
        <BibliographicData
          coverImage={this.props.coverImage}
          creator={work.creator}
          identifiers={work.identifiers}
          key={i}
          noOfWorks={noOfWorks}
          title={work.title}
          workType={work.workType}
          />);
    });

    return (
      <div className="row" >
        {workElement}
      </div>);
  }
});

export default WorkRow;
