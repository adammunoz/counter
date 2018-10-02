requirejs.config({
	paths: {
          'react': 'https://unpkg.com/react@15.3.2/dist/react',
          'react-dom': 'https://unpkg.com/react-dom@15.3.2/dist/react-dom',
          'number-words': 'https://unpkg.com/number-words@1.1.0/dist/number-words'}});

requirejs(['react', 'react-dom', 'view/counter', 
           'domain/store', 'domain/user_middleware'], 
          (React, ReactDOM, Counter, store, userMw) => {

  console.debug('starting app ...'); 

  function render() {
    console.debug('rendering ...'); 
    ReactDOM.render(React.createElement(Counter, 
                                        {n: store.n, text: store.text,
                                          onClickIncrement: () => {
                                          userMw.incrementN();
                                          userMw.incrementText();
                                          render();}
                                        }),
                    document.getElementById('app'));
  };
  render();
});
