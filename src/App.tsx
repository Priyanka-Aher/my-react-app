import * as React from 'react';
import { data } from './data/data.js';
import { Card } from './common/components/Card';

function App() {
  if (!data) {
    return null;
  }

  const { cards } = data;

  return (
    <div className="card-wrapper">
    {
      Array.isArray(cards) && cards.map((card, index) => {
        return (
            <Card cardHeader={card.cardHeader} cardBody={card.cardBody} cardFooter={card.cardFooter} />
        )
      })
    }
    </div>
  );
}


export default App;