
   async function newshome(){
   
    let res= await fetch(`http://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=4c16ccefc2524a2dad09158632f7861d`);
     let news_data= await res.json();
     console.log(news_data.articles)
    // return news_data;
   
   }


   newshome();




  // 4c16ccefc2524a2dad09158632f7861d

   function shownews(arrnews){


arrnews.forEach(element => {
    
     let newsdiv=document.createElement("div");

     let p1=document.createElement("h3");
     p1.textContent=element.title;

     let p2=document.createElement("p");
     p2.textContent=element.content;

     let p3=document.createElement("p");
     p3.textContent=element.content;

     let image=document.createElement("img");
     image.src=element.urlToImage;

     newsdiv.append(p1,image,p2,p3)


  document.getElementById("newscontainer").append(newsdiv)


});


   }



   



   




