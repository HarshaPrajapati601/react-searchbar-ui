import React, { lazy } from 'react';

// Add a fixed delay so you can see the loading state
function delayForDemo(promise) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}

const HomeLazy = lazy(() => delayForDemo(import('./HomeLazy.jsx')));

export default HomeLazy;
