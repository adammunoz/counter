define(['number-words','domain/store'],
  (numberWords, store) => {
  return {  
    incrementN: function() {
      store.n++;
      console.debug('incrementN', store.n)
    },
    incrementText: function() {
      store.text = numberWords.convert(store.n);
      console.debug('incrementText', store.text)
    }
  };
});
