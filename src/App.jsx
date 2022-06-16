import React, { Suspense } from 'react';
import RemoteApp from 'app2/App';

const App = () => {
  console.log({ RemoteApp });
  return (
    <div>
      <div
        style={{
          margin: '10px',
          padding: '10px',
          textAlign: 'center',
          backgroundColor: 'greenyellow',
        }}
      >
        <h1>App1</h1>
      </div>
      <RemoteApp />
    </div>
  );
};

export default App;
