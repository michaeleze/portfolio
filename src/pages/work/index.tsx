import React, { useEffect, useState } from 'react';


async function apiLocaHost() {
  const data = await fetch('https://us-central1-portfoliowebsite-23bb3.cloudfunctions.net/server/work');

  if (!data) {
    return Promise.reject(Error('could not retrieve data'));
  }

  return Promise.resolve(data);
}

const Work: React.FC = () => {
  const [state, setState] = useState(null as any);

  useEffect(() => {
    apiLocaHost()
      .then((response) => response!.json()
            .then((res) => {
              setState(res!.data);
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

export default Work;
