hideElement("makemsg");
hideElement("missmsg");


onEvent("image2", "click", function(event) {
  setScreen("tipOffScn");
});
onEvent("jumpballbtn", "click", function(event) {
  setScreen("offenseWarriors");
});
onEvent("button7", "click", function(event) {
  setScreen("resultWarriors");
});
onEvent("drivebtn", "click", function(event) {
  var chance = randomNumber(1,100);
  console.log(chance);
  setScreen("warriorsscore");
  if (chance <= 90) {
    showElement("makemsg");
  } else {
    showElement("missmsg");}
});

onEvent("jumpshotbtn", "click", function(event) {
  var chance = randomNumber(1,100);
  console.log(chance);
  setScreen("warriorsscore");
  if (chance <= 50) {
    showElement("makemsg");
  } else {
    showElement("missmsg");}
});
onEvent("turnoverbtn", "click", function(event) {
  setScreen("defend")
});
onEvent("threepointbtn", "click", function(event) {
  var chance = randomNumber(1,100);
  console.log(chance);
  setScreen("warriorsscore");
  if (chance <= 40) {
    showElement("makemsg");
  } else {
    showElement("missmsg");}
});
