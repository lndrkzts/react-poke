export function getUrl(url){
  return fetch(url)
    .then(function(response){
      return response.json();
    });
}