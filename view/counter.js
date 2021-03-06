define(['react'], React =>
  function Counter({n, text, onClickIncrement}) {

    function onClickButton(e) {
      console.debug(`click ${e.target.innerText}`);
      onClickIncrement();
    }
    return  React.createElement('div', {}, [
              React.createElement('p',{key: 1}, `counter is ${n} - ${text}`),
              React.createElement('button',
                {key: 2, onClick: onClickButton}, 'increment')])});
