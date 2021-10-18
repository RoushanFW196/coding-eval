


 var newsquery=document.getElementById("newssearch").value;


  async   function searchnews(newsquery){
  
   // var newsquery=document.getElementById("newssearch").value;
    

    let res= await fetch(` http://newsapi.org/v2/everything?q=${newsquery}&sortBy=popularity&apiKey=4c16ccefc2524a2dad09158632f7861d`)
   
let data= await res.json();
  console.log(data)



}





   function appendnews(newsarr){

   
    newsarr






   }
 