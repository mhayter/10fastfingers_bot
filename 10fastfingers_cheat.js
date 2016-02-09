//defeats http://10fastfingers.com/typing-test/english
function getText() {
	var spans = document.getElementsByTagName("span");
	for(var i = 0;i < spans.length;i++) {
		//console.log(spans[i].outerHTML); 
		if ((spans[i].outerHTML + "").indexOf("highlight") != -1) { 
			//console.log(spans[i].innerText); 
			var input = document.getElementById("inputfield"); 
			console.log("inner text " + input.innerText);
			input.value = spans[i].innerText;
		}
	}
}

setInterval(getText, 100);