window.onload = function () { 

	/* pentru a afisa in select-uri optiunle de selectat 
	   inseamna ca aceste optiuni trebuie sa fie completate
	   dinamic, dupa ce valori au mai ramas in tabel*/
	
	//var c = document.tr.children;
    //var txt = "";
    //var i;
    //    txt = txt + c[0].innerHTML + "<br>";
    

    //document.getElementById("demo").innerHTML = txt;
	var option = document.createElement("option");
	option.text = "Toate";
	document.getElementById("selectA").add(option);
	
	var option = document.createElement("option");
	option.text = "Toate";
	document.getElementById("selectB").add(option);
	
	var option = document.createElement("option");
	option.text = "Toate";
	document.getElementById("selectC").add(option);	
		
		
		
	var arrOptions = document.getElementsByTagName("td");
	
	for (var i = 0;i < arrOptions.length; i++){
		 //pentru A, o sa fie pozitiile 0 3 6 9 - conditie i % 3 == 0
		 if (i % 3 == 0) {
			 var option = document.createElement("option");
			 option.text = arrOptions[i].innerHTML;
			 document.getElementById("selectA").add(option);
			 ///!!!!! pentru toate?!?!? add la inceput si luam contor
			 ///!!!! de adaugat doar daca nu exista 
		 }
		 //pentru B, o sa fie pozitiile 1 4 7 10 - conditie (i-1) % 3 == 0
		 else if (i % 3 == 1) {
			var option = document.createElement("option");
			 option.text = arrOptions[i].innerHTML;
			 document.getElementById("selectB").add(option);
		 }
		 else if (i % 3 == 2) {
			 var option = document.createElement("option");
			 option.text = arrOptions[i].innerHTML;
			document.getElementById("selectC").add(option);
		 }
		 //pentru C, o sa fie pozitiile 2 5 8 11 - conditie (i-2) % 3 == 0
	}		
		
		
	function optionsInitialisation 
		
	   
	function optionsGet(typeX) {
		
	}


}