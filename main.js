function quoteSelector(){
  var quotes=[" You can do anything, but not everything.",
              "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.",
              "The richest man is not he who has the most, but he who needs the least.",
              "You miss 100 percent of the shots you never take.",
              "Courage is not the absence of fear, but rather the judgement that something else is more important than fear.",
              "Well done is better than well said.",
              "You must be the change you wish to see in the world.",
              "When hungry, eat your rice; when tired, close your eyes. Fools may laugh at me, but wise men will know what I mean.",
             "Those who dare to fail miserably can achieve greatly.",
              "To the man who only has a hammer, everything he encounters begins to look like a nail.",
              "We are what we repeatedly do; excellence, then, is not an act but a habit.",
              "A wise man gets more use from his enemies than a fool from his friends.",
              "Do not seek to follow in the footsteps of the men of old; seek what they sought.",
              "Get busy living or get busy dying.",
              "Everyone is a genius at least once a year. The real geniuses simply have their bright ideas closer together.",
              "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.",
              "Work like you don’t need money, love like you’ve never been hurt, and dance like no one’s watching",
              "The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.",
              "Even if you’re on the right track, you’ll get run over if you just sit there.",
              "People often say that motivation doesn’t last. Well, neither does bathing – that’s why we recommend it daily."];
  var author=["David Allen:","Antoine de Saint-Exupéry:","Unknown-","Wayne Gretzky:","John F. Kennedy:","Benjamin Franklin:","Gandhi:","A.A. Milne:","Abraham Maslow:","Aristotle:","Baltasar Gracian:","Basho:","Stephen King:","George Lichtenberg:","John Ruskin:","Mark Twain:","Unknown-","Mark Calne:","Will Rogers:","Zig Ziglar:"];
  /*var usedIndex=[];
  if(usedIndex.length==20){
    usedIndex.splice(0,usedIndex.length);
  }*/
  var index=(function(){
    var repeat=0,num;
   // while(1){
      num=Math.floor(Math.random()*20);
    /*for(var j=0;j<usedIndex.length;j++){
      if(num==usedIndex[j]){
        repeat=1;
        break;
      }          
    }
      if(repeat!=1)
        break;
    }
    usedIndex[i]=num;*/
    return num;
  })();
 var quote1=document.getElementById("quote");
  var author1=document.getElementById("Author");
  var id=setInterval(frame,100);
   var opa=0;
    quote.style.opacity=0;
    Author.style.opacity=0;
 quote1.textContent=quotes[index];
  author1.textContent=author[index];
  function frame(){
    if(quote.style.opacity==1){
       clearInterval(id);
    }else{
      opa+=0.1;
      quote.style.opacity=opa;
      Author.style.opacity=opa;
    }
  }
 
 console.log(quotes[index]);
 /* $(".text-align").animate({
          opacity: 0
        }, 50,
        function() {
          $(this).animate({
            opacity: 1
          }, 50);
          $('#spanquote').text(quotes[index]);
        });*/
}
var button=document.getElementById("quote-changer");
button.addEventListener("click",quoteSelector,false);

