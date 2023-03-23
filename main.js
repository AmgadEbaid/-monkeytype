
let temp = document.querySelector("template")
let litter=temp.content.querySelector("letter")
let texbody= document.querySelector("textbody")
let indexOfLitter=0
let timecontainer= document.querySelector(".time-container")
let rusltbord=document.querySelector("#rusltbord")

let time = document.querySelector(".time")

let duration = 15;
  
let Arreylitters;
let string = getrandomstring(100)
Arreylitters=string.split("");
filterdlitters=Arreylitters.filter(val=> val!==" ")
Arreylitters=filterdlitters



function getrandomstring(wordnum){
  let words ="the of off and a to tw too in is you that it he for four was on are as with his they at be bee this from I eye have or ore by bye buy one won had not knot but what all were where when we there their they  can an your you which witch said if do due will each about how who up out them then than she many some sum so sew these would wood other into has more her like him see sea time could no know make first been its its now people my made maid over did down done only way weigh find fined use used may water long little very after words called just most get through back much before go good new knew write right our hour me man men woman women any day same look think also around another came come work three word must because does part even place well such here hear take why things help put years different away again went old number great tell say small every found still between name should Mr  Mrs Ms  Miss home big give air line set own under read red last never us left end along while might next sound below saw something thought both few those always looked show large often together asked house dont world going want"
  let arraywords= words.split(" ")
  let string =""


for (let index = 0; index < wordnum; index++){
let randomINDEX=Math.floor(Math.random() * 233);
 string += " "+ arraywords[randomINDEX]

}



return string
}


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

appendword(string,texbody)
 function correctword(word){
 
    word.forEach(element => {
    // console.log(element )
     //console.log(element.hasAttribute("class"))
     let word=element.parentElement
     eleclass= element.className
     
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
     let litter
     console.log(word.length)

    word.forEach(ele => {
    if(parseInt(ele.dataset.index) ===indxlet) litter= ele
   });
   // litter= word.find(ele => {parseInt(ele.dataset.index) ===indxlet})
    litter.className = "correct"
    return word.length
}


function setincorrect(indxlet,word){
    let litter
    word.forEach(ele => {
    if(parseInt(ele.dataset.index) ===indxlet) litter= ele
   });
   // litter= word.find(ele.dataset.index => {ele ===indxlet})
    litter.className = "incorrect"
    return word.length

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


function isLetter(str) {
    if(str.match(/[a-z]/i) != null && str.length === 1 ) return true 
      else return false

  }
  let wordindex=0,litterindex=0;
  let  childerns = Array.prototype.slice.call( texbody.children )
  let word= Array.prototype.slice.call( childerns[wordindex].children)
  let activeWord= document.querySelector(".active")
  let indxlet=0;


// main event 

document.addEventListener('keydown', function(event) {
    const key = event.key;
    if(timeout===true) return 



    if(key.length === 1 && key!==" "  ){

      if(isStart===false) 
        startTimer(duration,timer)
        

        setactive(wordindex)
   
         if (Arreylitters[indxlet].toLowerCase()===key.toLowerCase()  ){
           setcorrect(indxlet,word)
           
         }


         else{
           setincorrect(indxlet,word)
            

         }
         
        indxlet++
        
        setActiveLitter(indxlet,word)
      
    }
    
    //press space ?  " " =space
    if( key===" " && isModfied(word)===true){
      correctword(word)
      word= Array.prototype.slice.call( childerns[++wordindex].children)
      indxlet=parseInt(word[0].dataset.index) ;
      setactive(wordindex)
      setActiveLitter(indxlet,word)
    }


    if( key=="Backspace" && indxlet !== 0){
  
      if(indxlet=== parseInt(word[0].dataset.index)){
        
        word= Array.prototype.slice.call( childerns[--wordindex].children)
        indxlet=lastmodifiedLitter(word) ;
        
        childerns[wordindex].removeAttribute("id")
        setactive(wordindex)
        removeclass(indxlet,word)
        setActiveLitter(indxlet,word)
      }else{
        indxlet--
        removeclass(indxlet,word)
        setActiveLitter(indxlet,word)
      }
  
    }
    

});





let timer=document.querySelector("timer")
let reset =document.querySelector(".reset")
let timeout = false;
let isStart=false


function startTimer(duration, display) {
  myInterval= setInterval(function () {
 

    display.textContent = timer;

    if (--timer < 0) {
        timer = 0;
        clearInterval(myInterval)
        timeout=true
        indxlet=0
        RenderRuslt(getStates(),rusltbord)

    }
}, 1000);
    let timer = duration
    isStart=true
    timer.textContent=duration

    
}


let myInterval=null


    reset.addEventListener("click",(e)=>{
        if(myInterval!==null)
        clearInterval(myInterval||null)
        timer.innerText="";
        timeout=false
        isStart=false
        indxlet=0;
        texbody.innerHTML=""
        indexOfLitter=0
        string=getrandomstring(100)
         Arreylitters=string.split("");
         filterdlitters=Arreylitters.filter(val=> val!==" ")
        Arreylitters=filterdlitters
         word= Array.prototype.slice.call( childerns[wordindex].children)
         appendword(string,texbody)
         wordindex=0,litterindex=0;
         childerns = Array.prototype.slice.call( texbody.children )
         word= Array.prototype.slice.call( childerns[wordindex].children)
         rusltbord.style.display="none"
         cart.style.display="block"
         timer.style.display="block"
         
        })





timer

function getLitter(indxlet,word) {
    let litter
    word.forEach(ele => {
    if(parseInt(ele.dataset.index) ===indxlet) litter= ele
   });
   return litter
}


function setActiveLitter(indxlet,word,wordindex){
   
 let litter=getLitter(indxlet,word)||null
  //if litter is null there will be not active litter 


// remove active word if any
let activelitternodes= texbody.querySelectorAll("#activeLitter")
let activeLitterArr= Array.prototype.slice.call(activelitternodes)

  if(activeLitterArr.length > 0){
    activeLitterArr[0].removeAttribute("id")
  }
 litter.setAttribute("id", "activeLitter") 
 }
 




//



function setactive(wordindex){
    let word= texbody.children[wordindex]
    
  let  activenodes=texbody.querySelectorAll(".active")
  activeArray= Array.prototype.slice.call(activenodes )
 
  if(activeArray.length > 0){
      activenodes[0].removeAttribute("class")
  }
 
    word.setAttribute("class", "active");
 }
isModfied


 
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



 time.addEventListener("click",function(e){
 })
 

 function getStates(){
    correctword(word)
    let ismodfie=  isModfied(word)
    console.log(ismodfie)
    if(ismodfie===false){
      wordindex--
     }
    let words = Array.prototype.slice.call(childerns)
    words=words.slice(0,++wordindex)
    let correctWord=0;
    let correctLitter=0;
    let LitterTotal=0;
    let wordTotal=0
    words.forEach(word => {
        wordTotal++
        if (word.id!=="incorrectword") {
            correctWord++
            
        } 
       let LetterNode=word.children
       let letterArrey =Array.prototype.slice.call(LetterNode)
       LitterTotal +=letterArrey.length
        letterArrey.forEach(litter => {
            if (litter.className==="correct") {
                correctLitter++
            }
        });
    }); 

    


    return [{wpm:correctWord*(60/duration)},
            {acc:correctLitter/LitterTotal*100},
            {raw:wordTotal*(60/duration)},
            [
            {cWord:correctWord},
            {Tword:wordTotal},
            ]
            ] 
 }





 timecontainer.addEventListener("click",function(event){
  let time = event.target;
  duration=parseInt(time.innerText)
 let nods= timecontainer.querySelectorAll(".time")
 if(time.className ==="time"){
nods.forEach(element => {
  element.removeAttribute("class")
  element.className="time"
});
time.classList.add("activeTime")

}


 })

 let wpmELE=document.querySelector(".wpm")
 let accELE=document.querySelector(".acc")
 let rawELE=document.querySelector(".raw")
 let timeONruslt=document.querySelector(".tmbord")
 let characters=document.querySelector(".characters")
 let cart=document.querySelector(".cart")
 function RenderRuslt(ruslt,display){
console.log(ruslt)
  let [{wpm},{acc},{raw},[{cWord},{Tword}]]=ruslt
 
  wpmELE.innerText =wpm
  accELE.innerText=parseInt(acc) +"%"
  rawELE.innerText=raw
  console.log("sdlfjksd" +document.querySelector(".activeTime").innerText)
  timeONruslt.innerText=document.querySelector(".activeTime").innerText
  characters.innerText=cWord +"/"+Tword
  display.style.display="grid"
   cart.style.display="none"
  timer.innerText=""
  console.log(wpmELE)

  
 }
document.querySelector(".close").addEventListener("click",function(e){
  e.target.parentElement.remove();
})