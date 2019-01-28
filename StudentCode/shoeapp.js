//I wanted to save this students code as an ex. for others, she has 500 lines of buttons but here I have the start and finish of her app
//with each of the projects requirements ie variables, functions, an algorithm

var score=0;
var scoreNum=0;
onEvent("startbtn", "click", function(event) {
  var score= 0;
  var scoreNum= 0; 
  setScreen("Question1");
});
onEvent("button2", "click", function(event) {
  setScreen("RightAnswer1");
  score = score + 1;
  setText(scoreNum = score);
});
onEvent("button3", "click", function(event) {
  setScreen("WrongAnswer1");
});
// 500 lines later she has her algorithm :) 
onEvent("button155", "click", function(event) {
  var opinion = getText("text_input1");

if (opinion=="yes"){
  setScreen("SurveyScn2");
}
 else {
  setScreen("Why?");
}
});
