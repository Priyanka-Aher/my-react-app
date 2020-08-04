import * as React from 'react';
import { data } from './data/data.js';
import { Card } from './common/components/Card';

function App() {

  return (
    <div className="App card-wrapper">
      <Card cardHeader={data.cardHeader} cardBody={data.cardBody} cardFooter={data.cardFooter} />
      <Card cardHeader={data.cardHeader} cardBody={data.cardBody} cardFooter={data.cardFooter} />
      <Card cardHeader={data.cardHeader} cardBody={data.cardBody} cardFooter={data.cardFooter} />
      <Card cardHeader={data.cardHeader} cardBody={data.cardBody} cardFooter={data.cardFooter} />
      <Card cardHeader={data.cardHeader} cardBody={data.cardBody} cardFooter={data.cardFooter} />

    </div>
  );
}


export default App;