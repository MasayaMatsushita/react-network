import React from 'react';
import CytoscapeComponent from 'react-cytoscapejs';
import networkData from '../data/network.json';

function SimpleGraph() {
  console.log('SimpleGraph');
  const elements = networkData.element;
  return (
    <div>
      <h1>単純なグラフ</h1>
      <CytoscapeComponent elements={elements} style={{ width: '600px', height: '600px' }} />
    </div>
  );
}

export default SimpleGraph;
