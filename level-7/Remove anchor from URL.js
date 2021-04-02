// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// returns 'www.codewars.com'
// removeUrlAnchor('www.codewars.com#about')

// returns 'www.codewars.com?page=1' 
// removeUrlAnchor('www.codewars.com?page=1') 

function removeUrlAnchor(url){
  const positionAnchor = url.indexOf('#')
  if(positionAnchor <= 0) {
    return url;
  }
  
  return url.slice(0, positionAnchor)
}

console.log(removeUrlAnchor('www.codewars.com#about'));
console.log(removeUrlAnchor('www.codewars.com/katas/?page=1#about'));