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
		
		
		
		
		
		
	function optionsAll(selectId) {
		
		var option = document.createElement("option");
		option.text = "Toate";
		document.getElementById(selectId).add(option);	
		
	}
	   
	function optionsSet(selectId) {
		var option = document.createElement("option");
		option.text = arrOptions[i].innerHTML;
		document.getElementById(selectId).add(option);
		///!!!!! pentru toate?!?!? add la inceput si luam contor
        ///!!!! de adaugat doar daca nu exista 
	}


}