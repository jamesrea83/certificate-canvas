


	function generate() {

		var course = document.getElementsByClassName('course')[0].value;
		var name = document.getElementsByClassName('name')[0].value;
		//var date = document.getElementsByClassName('date')[0].value;

		var d = new Date();
		var date = d.toLocaleDateString("en-GB");


		console.log(course);

		var domain = "http://localhost:8888";
		var popup = window.open(domain + "/certificate-project/canvas.html")

		var message = {
			"course": course,
			"name": name,
			"date": date
		}


		setTimeout(function() {
			popup.postMessage(message, domain);
		}, 100)

	}


