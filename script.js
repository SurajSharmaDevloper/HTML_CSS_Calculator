let InputScreen = document.getElementById('input-screen');

function KeyToDisplay(tag){
    InputScreen.value += tag.innerHTML;
}
function KeyToAllClear(){
    InputScreen.value = "" ;
}
function KeyToClear(){
    InputScreen.value = InputScreen.value.slice(0 , -1);
}
function KeyToCalc(){
    InputScreen.value = eval(InputScreen.value);
}