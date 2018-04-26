const flickrImages = () => {
   return fetch('/pizza.json')
    .then(response => {
      return response.json()
    })
    .then((findResponse) => {
      return findResponse.pizzas;
    })
    .catch(function (exception) {
      console.log('Parsing Failed', exception)
    })

};
export default flickrImages;



