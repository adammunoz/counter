define(['domain/store'], (store) => {
  return {  
    incrementN: function() {
      store.n++;
    }
  };
});
