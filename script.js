// 1- Function to :

// select all checkboxes :
function selectAll(){  
  var ele=document.getElementsByName('name');  
  for(var i=0; i<ele.length; i++){  
      if(ele[i].type=='checkbox')  
          ele[i].checked=true;  
  }  
}
// de-select all checkboxes :
function deSelectAll(){  
  var ele=document.getElementsByName('name');  
  for(var i=0; i<ele.length; i++){  
      if(ele[i].type=='checkbox')  
          ele[i].checked=false;  
  }  
}


// 2- Function to return a randome name among the checked names :

document.getElementById('roll').onclick = function() {
// get the selected names :
var candidates=document.getElementsByName('name');
var selectedCandidates="";
for(var i=0; i<candidates.length; i++){
if(candidates[i].type=='checkbox' && candidates[i].checked==true)
selectedCandidates+=candidates[i].value+" ";
}
//console.log(selectedCandidates);
// create an array to be able to use Math.random :
var tableOfCandidates = selectedCandidates.split(' ');
//console.log(tableOfCandidates);
// selection :
var rand = Math.floor(Math.random() * tableOfCandidates.length);
var winner = tableOfCandidates[rand];
document.getElementById("prompt").innerHTML = winner;
}
