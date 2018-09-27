define(['react'], React =>
  function Counter({n, text}) {
    return  React.createElement('p', {}, `counter is ${n} - ${text}`);});
