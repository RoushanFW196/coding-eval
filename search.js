


   //var newsquery=document.getElementById("newssearch").value;


  async   function searchnews(newsquery){
  
    var newsquery=document.getElementById("newssearch").value;
    

    let res= await fetch(`http://newsapi.org/v2/everything?q=${newsquery}&apiKey=4c16ccefc2524a2dad09158632f7861d `)


      //  https://newsapi.org/v2/everything?q=bitcoin&apiKey=4c16ccefc2524a2dad09158632f7861d
   
let data= await res.json();
  console.log(data.articles)

    appendnews(data.articles);

}





   function appendnews(newsarr){

   
    newsarr.forEach(element => {
        
        let  newsdiv= document.createElement("div");

       let p1=document.createElement("h3");
       p1.textContent=element.title;

       let image=document.createElement("img");
       image.src=element.urlToImage;
       
       let p2=document.createElement("p");
       p2.textContent=element.description;

       let p3=document.createElement("p");
       p3.textContent=element.content;


       newsdiv.append(p1,image,p2,p3)





  document.getElementById("searchedcontainer").append(newsdiv)



    });


   }
 