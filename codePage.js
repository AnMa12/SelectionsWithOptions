window.onload = function () { 

	/* ------ Initializare optiuni select ------ */
		// adaugarea variantei "Toate"
		optionsAll("selectA"); 
		optionsAll("selectB"); 
		optionsAll("selectC"); 
		optionsGet();
	/* ------ Initializare optiuni select FIN ------ */	
	
	/* ---- Filter the options ---- */
	
	//filter();
	
	document.getElementById("selectA").onchange = function () {
		var arrSelections = document.getElementById("selectA");
			for(var i = 0; i < arrSelections.length; i++)
				if(arrSelections[i].selected == true) 
					var input = arrSelections[i].innerHTML;
				
		table = document.getElementById("myTable");
			tr = table.getElementsByTagName("tr");
				for (i = 0; i < tr.length; i++) {
					td = tr[i].getElementsByTagName("td")[0];
					if(td.innerHTML != input) {
						tr[i].style.display = "none";
						var options = tr[i].getElementsByTagName("td");
						for (var j = 0; j < 3; j++) 
							options[j].style.display = "none";
					}	
				}
		
		$("#selectB").empty();
		$("#selectC").empty();
		
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
			alert("*" + arrOptions[i].innerHTML + "*");
			}
		}	
	}
		
		
	
	/* ---- Filter the options FIN ---- */

	
	
	
	/*function filter() {
		table = document.getElementById("myTable");
			tr = table.getElementsByTagName("tr");
				for (i = 0; i < tr.length; i++) {
					td = tr[i].getElementsByTagName("td")[0];
					if (td) {
						if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
							tr[i].style.display = "";
					} else {
					
					}
			}       
		}
	}*/

}

function optionsGet() {
	/* pentru a afisa in select-uri optiunle de selectat inseamna ca aceste 
		optiuni trebuie sa fie completate dinamic, dupa ce valori au mai ramas in tabel*/
		var arrOptions = document.getElementsByTagName("td");
		
		for (var i = 0;i < arrOptions.length; i++) {
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

function optionsSet(selectId, arrOptions, i) {
	var option = document.createElement("option");
	option.text = arrOptions[i].innerHTML;
	if(alreadyAdded(selectId,option.text) == false)
		document.getElementById(selectId).add(option);
	///!!!!! pentru toate?!?!? add la inceput si luam contor
	}

function optionsAll(selectId) {
		
	var option = document.createElement("option");
	option.text = "Toate";
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