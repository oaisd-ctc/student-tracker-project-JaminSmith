// ES6 class
class EasyHTTP {
  
  // Make an HTTP PUT Request
  async put(url, data) {
 
   // Awaiting fetch which contains method,
   // headers and content-type and body
   const response = await fetch(url, {
     method: 'PUT',
     headers: {
       'Content-type': 'application/json'
     },
     body: JSON.stringify(data)
   });
     
   // Awaiting response.json()
   const resData = await response.json();
 
   // Return response data 
   return resData;
 }
}