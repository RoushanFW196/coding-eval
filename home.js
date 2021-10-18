
   async function newshome(){
   
    let res= await fetch(`http://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=4c16ccefc2524a2dad09158632f7861d`);
     let news_data= await res.json();
   let newsarr=news_data.articles;
    // return newsarr;
   // shownews(news_data)
   
    console.log(newsarr)

    shownews(newsarr)

   }

  newshome()
 

 


  // 4c16ccefc2524a2dad09158632f7861d

   function shownews(newsarr){

    //newsdiv.innerHtml==null;

    newsarr.forEach(element => {
    
     let newsdiv=document.createElement("div");

     let p1=document.createElement("h3");
     p1.textContent=element.title;

     let p2=document.createElement("p");
     p2.textContent=element.content;

     let p3=document.createElement("p");
     p3.textContent=element.content;

     let image=document.createElement("img");
     image.src=element.urlToImage;


     let p4=document.createElement("a");
     p4.href=element.url;
       p4.textContent="Read More"
     newsdiv.append(p1,image,p2,p3,p4)
  
 



  document.getElementById("newscontainer").append(newsdiv)


});


   }


 






   




