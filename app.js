var XMLHttpRequest = require('xhr2');
function run(){
	// Creating Our XMLHttpRequest object
	var xhr = new XMLHttpRequest();
	// Making our connection
	var url = 'https://manraj.pythonanywhere.com/question';
	xhr.open("GET", url, true);
	// function execute after request is successful
	xhr.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			// console.log(this.responseText);
      var data = JSON.parse(this.responseText);
      // console.log(data[0]['question'])
      console.log(Object.keys(data));
      var array = Object.keys(data);
      for (let index = 0; index < array.length - 1; index++) {

        var table = document.getElementById("main-table");
        const element = array[index];
        console.log(element)
        var row = table.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        cell1.innerHTML = "<td> <input type=\"checkbox\" name=\"\" id=\"\"></td>";
        cell2.innerHTML = "<td>"  +"<a target=\"_blank\" href=\""+data[element]['question'] + "\">"+ data[element]['name'] +"</a>" + "</td>";
        cell3.innerHTML = "<td>" +data[element]['category']+ "</td>";
        cell4.innerHTML = "<td>" +data[element]['tags']+ "</td>";
        cell5.innerHTML = "<td>" +data[element]['company']+ "</td>";
        cell6.innerHTML = "<td>"  +"<a target=\"_blank\" href=\""+data[element]['solution']+ "\">"+ "Solution" +"</a>" + "</td>";
        // document.reload();
      }
  
		}
	}
	// Sending our request
	xhr.send();
    
}


// run();
