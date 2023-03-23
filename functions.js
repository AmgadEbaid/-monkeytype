const stringtoarr = string =>{ return words =string.split(" ") };


function appendlitters(word,wordtemp){
    wordarry=word.split("")
    wordarry.forEach(lit => {
        litter=document.importNode(litter)
        litter.textContent=lit
        litter.dataset.index=indexOfLitter
        wordtemp.appendChild(litter)
        indexOfLitter++
        
    });
}

//
function appendword(string,texbody){
    arrWord=stringtoarr(string);
    let words=temp.content.querySelector("word")
      arrWord.forEach(word => {
          wordtemp=document.importNode(words)
          
          
          appendlitters(word,wordtemp)
          if(word!=''){
              texbody.appendChild(wordtemp)
  
          }
  
      });
  }

  function correctword(word){
 
    word.forEach(element => {
    // console.log(element )
     //console.log(element.hasAttribute("class"))
     let word=element.parentElement
     eleclass= element.className
     console.log("there is letter with out class",element.hasAttribute("class")==false)
     
         if(element.hasAttribute("class")==false || eleclass==="incorrect" ) 
          word.setAttribute("id", "incorrectword");
         
     });
 }


 function isModfied(word){
    modfied=false
   word.forEach(element => {
   // console.log(element )
    //console.log(element.hasAttribute("class"))
        if(element.hasAttribute("class")==true) 
        modfied=true
        
    });
    return modfied
} 


  
function removeclass(indxlet,word) {
    let litter
    word.forEach(ele => {
        console.log(parseInt(ele.dataset.index),indxlet)
    if(parseInt(ele.dataset.index) ===indxlet) litter= ele
   });
 
   litter.removeAttribute("class")
}


function lastmodifiedLitter(word){
    let index;
    word.forEach(element => {
             if(element.hasAttribute("class")==true) 
             index=element.dataset.index
         });
    return parseInt(index) 
}



function setcorrect(indxlet,word){
    console.log(" correct!")
     let litter
    word.forEach(ele => {
    if(parseInt(ele.dataset.index) ===indxlet) litter= ele
   });
   // litter= word.find(ele => {parseInt(ele.dataset.index) ===indxlet})
    litter.className = "correct"
    return word.indexOf(litter)
}


function setincorrect(indxlet,word){
    let litter
    word.forEach(ele => {
    if(parseInt(ele.dataset.index) ===indxlet) litter= ele
   });
   // litter= word.find(ele.dataset.index => {ele ===indxlet})
    litter.className = "incorrect"
    return word.indexOf(litter)

}




function setactive(wordindex){
    let word= texbody.children[wordindex]
    
  let  activenodes=texbody.querySelectorAll(".active")
  activeArray= Array.prototype.slice.call(activenodes )
 
  if(activeArray.length > 0){
      activenodes[0].removeAttribute("class")
  }
 
    word.setAttribute("class", "active");
 }



 
function setTimer(duration,display){
    let timer = duration, minutes, seconds;

    minutes = parseInt(timer / 60, 10)
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;
}





function getLitter(indxlet,word) {
    let litter
    word.forEach(ele => {
        console.log(parseInt(ele.dataset.index),indxlet)
    if(parseInt(ele.dataset.index) ===indxlet) litter= ele
   });
   return litter
}


function setActiveLitter(indxlet,word,wordindex){
   
 let litter=getLitter(indxlet,word)||null
  
/* if litter is null there will be not active litter
  one thing to fix this is make the border"cursur" to the right insted of the left
  on last litter 
*/

// remove active word if any
let activelitternodes= texbody.querySelectorAll("#activeLitter")
let activeLitterArr= Array.prototype.slice.call(activelitternodes)

  if(activeLitterArr.length > 0){
    activeLitterArr[0].removeAttribute("id")
  }
 litter.setAttribute("id", "activeLitter") 
 }
 
 function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    isStart=true
     myInterval= setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = 0;
            clearInterval(myInterval)
            timeout=true
            indxlet=0
            alert("your time has finished")
        }
    }, 1000);
}



export{
startTimer,
appendlitters,
appendword,
correctword,
getLitter,
isModfied,
lastmodifiedLitter,
removeclass,
setActiveLitter,
setTimer,
setactive,
setcorrect,
setincorrect,
stringtoarr,
}