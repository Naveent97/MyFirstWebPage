
function clickClear(){
  alert("Cleared");
}

function getValueFromTextArea()
{
  var val = document.getElementById("dairyArea").value;
  var tab = document.getElementById("mainTable");

  var nodeTr = document.createElement('tr');
 var newLabel = document.createElement("label");
 newLabel.setAttribute("for","newData");
 newLabel.innerHTML = val;
 nodeTr.appendChild(newLabel);
 tab.insertBefore(newLabel,tab.childNodes[0]);

}
