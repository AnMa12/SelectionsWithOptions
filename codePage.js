var slctOptionA  = "";
var slctOptionB  = "";
var slctOptionC  = "";

window.onload = function () { 
	/* --- Initialisation --- */
	optionsDynamic();
	
	/* --- Filter the options --- */
	document.getElementById("selectA").setAttribute("onchange",
		"optionChanged('selectA','selectB','selectC')");
	document.getElementById("selectB").setAttribute("onchange",
		"optionChanged('selectB','selectA','selectC')");
	document.getElementById("selectC").setAttribute("onchange",
		"optionChanged('selectC','selectB','selectA')");
	
	/* --- Remove filter --- */
	document.getElementById("btnA").setAttribute("onclick","removeFilter('selectA')");
	document.getElementById("btnB").setAttribute("onclick","removeFilter('selectB')");
	document.getElementById("btnC").setAttribute("onclick","removeFilter('selectC')");
}

function optionChanged(currentSelectId, secondSelectId, thirdSelectId) {
	//get the new selected option
	var input = getSelectedOption(currentSelectId);
	if(input != "Toate") {
		setOption(currentSelectId, input);
		table = document.getElementById("myTable");
			tr = table.getElementsByTagName("tr");
				for (i = 0; i < tr.length; i++) {
					tdA = tr[i].getElementsByTagName("td")[0];
					tdB = tr[i].getElementsByTagName("td")[1];
					tdC = tr[i].getElementsByTagName("td")[2];
					//display:none all the rows that don t contain the 
					//selected option from all the three selects
					if((tdA.innerHTML != slctOptionA && slctOptionA != "") || 
					   (tdB.innerHTML != slctOptionB && slctOptionB != "") || 
					   (tdC.innerHTML != slctOptionC && slctOptionC != "")) {
							tr[i].style.display = "none";
							var options = tr[i].getElementsByTagName("td");
							for (var j = 0; j < 3; j++) 
								options[j].style.display = "none";
						} else {
							tr[i].style.display = "";
							var options = tr[i].getElementsByTagName("td");
							for (var j = 0; j < 3; j++) 
									options[j].style.display = "";
						}
				}
		
		//prepare for update the other possible selections
		$("#" + currentSelectId).empty();
		$("#" + secondSelectId).empty();
		$("#" + thirdSelectId).empty();
		//update the other possible selections
		optionsDynamic();
	}	
	
	//memorize the current three selections
	setSelected("selectA", slctOptionA);
	setSelected("selectB", slctOptionB);
	setSelected("selectC", slctOptionC);
}

function removeFilter(currentSelectId) {
	//get the option user wants to remove
	var input = getSelectedOption(currentSelectId);
	table = document.getElementById("myTable");
		tr = table.getElementsByTagName("tr");
			for (i = 0; i < tr.length; i++) {
				tdA = tr[i].getElementsByTagName("td")[0];
				tdB = tr[i].getElementsByTagName("td")[1];
				tdC = tr[i].getElementsByTagName("td")[2];
				//remove display:none from rows that don't contain the removed option
				//but contain the option from the other current two selections
				if(currentSelectId == "selectA") {
					if(tdA.innerHTML != slctOptionA && 
					  (tdB.innerHTML == slctOptionB || slctOptionB=="") &&
					  (tdC.innerHTML == slctOptionC || slctOptionC=="")) 
							removeDisplayNone(tr);
				} else if(currentSelectId == "selectB") {
					if(tdB.innerHTML != slctOptionB &&
					  (tdA.innerHTML == slctOptionA || slctOptionA=="") &&
					  (tdC.innerHTML == slctOptionC || slctOptionC==""))
							removeDisplayNone(tr);
				} else if(currentSelectId == "selectC") {
					if(tdC.innerHTML != slctOptionC &&
					  (tdA.innerHTML == slctOptionA || slctOptionA=="") && 
					  (tdB.innerHTML == slctOptionB || slctOptionB=="")) 
							removeDisplayNone(tr);		
				}
		}
	//memorize the removed selection
	setOption(currentSelectId, "");
	//update the selection
	$("#" + currentSelectId).empty();
	optionsDynamic();
}

function removeDisplayNone(tr) {
	//function that rome display:none from a row's elements
	tr[i].style.display = "";
	var options = tr[i].getElementsByTagName("td");
		for (var j = 0; j < 3; j++) 
		options[j].style.display = "";
}

function optionsDynamic() {
	addAllOption()
	//the values from options are completed dynamic
	//by reading the data that s left in the table
	var arrOptions = document.getElementsByTagName("td");
	for (var i = 0; i < arrOptions.length; i++) {
		if(arrOptions[i].style.display !== "none") {
		//for A, the positions are: 0 3 6 9 - condition % 3 == 0
		if (i % 3 == 0) 
			optionsSet("selectA", arrOptions, i);
		//for B, the positions are: 1 4 7 10 - condition (i-1) % 3 == 0
		else if (i % 3 == 1) 
			optionsSet("selectB", arrOptions, i);
		//for C, the positions are: 2 5 8 11 - condition (i-2) % 3 == 0
		else if (i % 3 == 2) 
			optionsSet("selectC", arrOptions, i);
		}
	}	
}

function getSelectedOption(currentSelectId) {
	//function that returns the selected option from select
	var arrSelections = document.getElementById(currentSelectId);
		for(var i = 0; i < arrSelections.length; i++)
			if(arrSelections[i].selected == true) 
				var input = arrSelections[i].innerHTML;
	return input;
}

function optionsSet(selectId, arrOptions, i) {
	var option = document.createElement("option");
	option.text = arrOptions[i].innerHTML;
	if(alreadyAdded(selectId,option.text) == false)
		document.getElementById(selectId).add(option);
		
	}

function addAllOption() {
	//adding the "Toate" option
	optionsAll("selectA"); 
	optionsAll("selectB"); 
	optionsAll("selectC"); 
}

function setSelected(selectId, slctOption) {
	if(slctOption != "")
		$("#" + selectId).val(slctOption);
	else 
		$("#" + selectId).val("Toate");
}

function setOption(currentSelectId, input) {
	if(currentSelectId == "selectA")
		slctOptionA = input;
	else if (currentSelectId == "selectB")
		slctOptionB = input;
	else 
		slctOptionC = input;	
}

function optionsAll(selectId) {
	var option = document.createElement("option");
	option.text = "Toate";
	if(alreadyAdded(selectId,option.text) == false)
		document.getElementById(selectId).add(option);	
}

function alreadyAdded(selectId, option) {
	//fuction that helps not having duplicates options
	var arrSelections = document.getElementById(selectId);
	for(var i = 0; i < arrSelections.length; i++)
		if(arrSelections[i].innerHTML == option) 
			return true;
	return false;	
}