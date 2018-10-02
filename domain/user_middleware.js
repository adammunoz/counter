define(['number-words','domain/store'],
  (numberWords, store) => {
  return {  
    incrementN: function() {
      store.n++;
    },
    incrementText: function() {
      store.text = numberWords.convert(store.n);
    }
  };
});
