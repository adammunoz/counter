requirejs.config({
	paths: {
          'react': 'https://unpkg.com/react@15.3.2/dist/react',
          'react-dom': 'https://unpkg.com/react-dom@15.3.2/dist/react-dom'}});

requirejs(['react', 'react-dom', 'view/counter', 
           'domain/store', 'domain/user_middleware'], 
          (React, ReactDOM, Counter, store, userMw) => {

  console.debug('starting app ...'); 

  ReactDOM.render(React.createElement(Counter, 
                                      {n: store.n, text: store.text,
                                       onClickIncrement: userMw.incrementN}),
    document.getElementById('app'));});
