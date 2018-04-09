window.onload = function () { 

	
	/* ------ Initializare optiuni select ------ */
	
		// adaugarea variantei "Toate"
		optionsAll("selectA"); 
		optionsAll("selectB"); 
		optionsAll("selectC"); 
		
		/* pentru a afisa in select-uri optiunle de selectat 
		inseamna ca aceste optiuni trebuie sa fie completate
		dinamic, dupa ce valori au mai ramas in tabel*/
		var arrOptions = document.getElementsByTagName("td");
		
		for (var i = 0;i < arrOptions.length; i++) {
			//pentru A, o sa fie pozitiile 0 3 6 9 - conditie i % 3 == 0
			if (i % 3 == 0) 
				optionsSet("selectA");
			//pentru B, o sa fie pozitiile 1 4 7 10 - conditie (i-1) % 3 == 0
			else if (i % 3 == 1) 
				optionsSet("selectB");
			//pentru C, o sa fie pozitiile 2 5 8 11 - conditie (i-2) % 3 == 0
			else if (i % 3 == 2) 
				optionsSet("selectC");
		}		
	
	/* ------ --------------------------- ------ */	
	function optionsSet(selectId) {
	var option = document.createElement("option");
	option.text = arrOptions[i].innerHTML;
	if(alreadyAdded(selectId,option.text) == false)
		document.getElementById(selectId).add(option);
	///!!!!! pentru toate?!?!? add la inceput si luam contor
}
	/* ------ */
	
	//filter();
	
	
	/* ------ */

	
	
	
	/*function filter() {
		var arrSelections = document.getElementById("selectA");
			for(var i = 0; i < arrSelections.length; i++)
				if(arrSelections[i].selected == true) 
					var input = arrSelections[i].innerHTML;
		
		table = document.getElementById("myTable");
			tr = table.getElementsByTagName("tr");
				for (i = 0; i < tr.length; i++) {
					td = tr[i].getElementsByTagName("td")[0];
					if (td) {
						if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
							tr[i].style.display = "";
					} else {
					tr[i].style.display = "none";
					}
			}       
		}
		
	}*/

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