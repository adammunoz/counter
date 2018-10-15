requirejs.config({
	paths: {
          'react': 'https://unpkg.com/react@15.3.2/dist/react',
          'react-dom': 'https://unpkg.com/react-dom@15.3.2/dist/react-dom',
          'number-words': 'https://unpkg.com/number-words@1.1.0/dist/number-words'}});

requirejs(['react', 'react-dom', 'view/counter', 
           'domain/store', 'domain/user_middleware'], 
          (React, ReactDOM, Counter, store, userMw) => {

  console.debug('starting app ...'); 

  function render(state) {
    console.debug('rendering ...'); 
    ReactDOM.render(React.createElement(Counter, 
                                        {n: state.n, text: state.text,
                                          onClickIncrement: () => {
                                            setTimeout(userMw.incrementN, 1000);
                                            setTimeout(userMw.incrementText, 2000);
                                            render(state);}
                                        }),
                    document.getElementById('app'));
  };
  render(store);
  setInterval(() => { 
    userMw.incrementN();
    userMw.incrementText()
  }, 2500);
});
