//great lesson from code.org use this link to play https://studio.code.org/projects/applab/hxXJIEGg2yza_Q7t9W04xg/view 

var initMessage = "I have a theory that if you keep the first letter of every word and then remove all the vowels that the text is still readable by a person. Is that true?"
var allTextTokens = initMessage.split("");
var oneTimeStr = "";
animateTypingInitMessage();


onEvent("inputTxt", "keydown", function() {
  doIt();
});

function animateTypingInitMessage(){
  if(allTextTokens.length>0){
    setTimeout(function() {
      var temp = allTextTokens.shift();
      oneTimeStr += temp;
      setText("inputTxt", oneTimeStr);
      animateTypingInitMessage();
      doIt();
    }, 35);
  }
}
function doIt(){
  var compressed = compress(getText("inputTxt"));
  var original = getText("inputTxt");
  setText("outputTxt", compressed);
  var amt = (original.length - compressed.length) / original.length;
  setText("compressedLbl", "Compressed: "+(parseInt((amt*1000))/10.0)+"%");
  
}

function compress(txt){
  var str ="";
  var tokens = txt.split(" ");
  var word = "";
  for(var i=0; i<tokens.length; i++){
    var token = tokens[i];
    
    word = tokens[i];
 
    if(token.length > 2){
      word = token[0]; //first char
      word += removeVowels(token.substring(1,token.length));
      //word += token[token.length-1];
    }
   str += word+" ";

    
  }
  
  return str;
}


function removeVowels(txt){
  
  var str = "";
  for(var i=0; i<txt.length; i++){
    if(txt[i].match(/[aeiou]/gi) == null){
      str+=txt[i];
    }
  }
  return str;
}
