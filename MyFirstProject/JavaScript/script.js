
function clickClear(){
  alert("Cleared");
}

function getValueFromTextArea()
{
  var val = document.getElementById("dairyArea").value;
  var today = new Date();

  let tr1 = document.getElementById('firstRow');
  var tab = document.getElementById("mainTable");
  var nodeTr = document.createElement('tr');
  var newLabel = document.createElement("label");
  newLabel.setAttribute("for", "newData");
  newLabel.innerHTML = val;
  nodeTr.appendChild(newLabel);
  tab.insertBefore(newLabel, tr1);

}
