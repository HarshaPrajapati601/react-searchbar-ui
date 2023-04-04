import React, { Suspense } from 'react';
import React from 'react';
import Loading from './Loading';

const HomeLazy = () => {
  return (
    <Suspense fallback={<Loading />}>
      <h2> Hi im finally loaded</h2>
    </Suspense>
  );
};

export default HomeLazy;
