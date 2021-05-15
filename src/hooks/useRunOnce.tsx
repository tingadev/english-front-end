import React from 'react';

const useRunOnce = (func: React.EffectCallback): void => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(func, []);
};

export default useRunOnce;
