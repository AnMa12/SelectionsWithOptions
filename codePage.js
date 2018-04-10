var slctOptionA  = "";
var slctOptionB  = "";
var slctOptionC  = "";

window.onload = function () { 
	/* --- Initialisation --- */
	optionsDynamic();
	
	/* --- Filter the options --- */
	document.getElementById("selectA").setAttribute("onchange",
		"optionChanged('selectA','selectB','selectC',0)");
	document.getElementById("selectB").setAttribute("onchange",
		"optionChanged('selectB','selectA','selectC',1)");
	document.getElementById("selectC").setAttribute("onchange",
		"optionChanged('selectC','selectB','selectA',2)");
	
	/* --- Remove filter --- */
	document.getElementById("btnA").setAttribute("onclick","removeFilter('selectA',0)");
	document.getElementById("btnB").setAttribute("onclick","removeFilter('selectB',1)");
	document.getElementById("btnC").setAttribute("onclick","removeFilter('selectC',2)");
}

function removeFilter(currentSelectId, currentIndex) {
	var input = getSelectedOption(currentSelectId);
	table = document.getElementById("myTable");
		tr = table.getElementsByTagName("tr");
			for (i = 0; i < tr.length; i++) {
				tdA = tr[i].getElementsByTagName("td")[0];
				tdB = tr[i].getElementsByTagName("td")[1];
				tdC = tr[i].getElementsByTagName("td")[2];
				if(currentSelectId == "selectA") {
					if(tdA.innerHTML != slctOptionA && 
					  (tdB.innerHTML == slctOptionB || slctOptionB=="") &&
					  (tdC.innerHTML == slctOptionC || slctOptionC=="")) {
							tr[i].style.display = "";
							var options = tr[i].getElementsByTagName("td");
							for (var j = 0; j < 3; j++) 
								options[j].style.display = "";
						}
				} else if(currentSelectId == "selectB") {
					if(tdB.innerHTML != slctOptionB &&
					  (tdA.innerHTML == slctOptionA || slctOptionA=="") &&
					  (tdC.innerHTML == slctOptionC || slctOptionC=="")) {
							tr[i].style.display = "";
							var options = tr[i].getElementsByTagName("td");
							for (var j = 0; j < 3; j++) 
								options[j].style.display = "";
						}
				} else if(currentSelectId == "selectC") {
					if(tdC.innerHTML != slctOptionC &&
					  (tdA.innerHTML == slctOptionA || slctOptionA=="") && 
					  (tdB.innerHTML == slctOptionB || slctOptionB=="")) {
							tr[i].style.display = "";
							var options = tr[i].getElementsByTagName("td");
							for (var j = 0; j < 3; j++) 
								options[j].style.display = "";
						}
				}
		}
	setOption(currentSelectId, "");
	$("#" + currentSelectId).empty();
	optionsDynamic();
}

function optionChanged(currentSelectId, secondSelectId, thirdSelectId, currentIndex) {
	var input = getSelectedOption(currentSelectId);
	setOption(currentSelectId, input);
	table = document.getElementById("myTable");
		tr = table.getElementsByTagName("tr");
			for (i = 0; i < tr.length; i++) {
				tdA = tr[i].getElementsByTagName("td")[0];
				tdB = tr[i].getElementsByTagName("td")[1];
				tdC = tr[i].getElementsByTagName("td")[2];
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
			
	//alert(slctOptionA + " " + slctOptionB + " " + slctOptionC);
	$("#" + secondSelectId).empty();
	$("#" + thirdSelectId).empty();
	optionsDynamic();
	setSelected("selectA", slctOptionA);
	setSelected("selectB", slctOptionB);
	setSelected("selectC", slctOptionC);
}

function optionsDynamic() {
	addAllOption()
	/* pentru a afisa in select-uri optiunle de selectat inseamna ca aceste 
	optiuni trebuie sa fie completate dinamic, dupa ce valori au mai ramas in tabel*/
	var arrOptions = document.getElementsByTagName("td");
	for (var i = 0; i < arrOptions.length; i++) {
		if(arrOptions[i].style.display !== "none") {
		//pentru A, sunt pozitiile 0 3 6 9 - conditie i % 3 == 0
		if (i % 3 == 0) 
			optionsSet("selectA", arrOptions, i);
		//pentru B, sunt pozitiile 1 4 7 10 - conditie (i-1) % 3 == 0
		else if (i % 3 == 1) 
			optionsSet("selectB", arrOptions, i);
		//pentru C, sunt pozitiile 2 5 8 11 - conditie (i-2) % 3 == 0
		else if (i % 3 == 2) 
			optionsSet("selectC", arrOptions, i);
		}
	}	
}

function getSelectedOption(currentSelectId) {
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
	// adaugarea variantei "Toate"
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
	//functie pentru a avea optiunile o singura data in select
	var arrSelections = document.getElementById(selectId);
	for(var i = 0; i < arrSelections.length; i++)
		if(arrSelections[i].innerHTML == option) 
			return true;
	return false;	
}