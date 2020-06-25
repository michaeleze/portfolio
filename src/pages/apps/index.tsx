import React, { useEffect, useState } from 'react';


async function apiLocaHost() {
  const data = await fetch('http://localhost:8003');

  if (!data) {
    return Promise.reject(Error('could not retrieve data'));
  }

  return Promise.resolve(data);
}

const Apps: React.FC = () => {
  const [state, setState] = useState(null as any);

  useEffect(() => {
    apiLocaHost()
      .then((response) => response?.text()
            .then((res) => {
              console.log(JSON.parse(res));
              setState(res);
            }))
      .catch((error) => { throw Error(error); });
  }, [state]);

  return (
    <h1 style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      minHeight: '100vh',
      whiteSpace: 'pre-line',
      textAlign: 'center',
    }}
    >
      {state}
    </h1>
  );
};

export default Apps;
