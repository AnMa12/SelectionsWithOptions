window.onload = function () {
			var select = document.getElementById("selectA");
			sortSelect(select);
		}
		
		function sortSelect(selElem) {
			var tmpAry = new Array();
			for (var i = 0; i < selElem.options.length; i++) {
				tmpAry[i] = new Array();
				tmpAry[i][0] = selElem.options[i].text;
				tmpAry[i][1] = selElem.options[i].value;
			}
			tmpAry.sort();
			/*function(a, b) {
				var aNr = parseInt(a.substring(1));
				var bNr = parseInt(b.substring(2));
				return aNr - bNr;
				}*/
			while (selElem.options.length > 0) {
				selElem.options[0] = null;
			}
			
			var nr = tmpAry.length;
			var op = new Option(tmpAry[nr-1][0], tmpAry[nr-1][1]);
				selElem.options[0] = op;
			for (var i = 0 ; i < tmpAry.length - 1; i++) {
				var op = new Option(tmpAry[i][0], tmpAry[i][1]);
				selElem.options[i+1] = op;
			}
		}