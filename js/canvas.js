$(document).ready(function() {



	window.addEventListener('message', function(event) {

		var coursePositionHeight = 442;
		var namePositionHeight = 510;
		var datePositionHeight = 585;
		var xPosition = 308;


		var course = {
			text: event.data.course,
			height: coursePositionHeight
		}
		var name = {
			text: event.data.name,
			height: namePositionHeight,
		}
		var date = {
			text: event.data.date,
			height: datePositionHeight
		}

		var canvas = document.getElementById('target');
		var ctx = canvas.getContext('2d');
		var imageObj = new Image();

		imageObj.onload = function() {
			ctx.drawImage(imageObj, 10, 10);
			ctx.font = "14pt Calibri";
			ctx.textAlign="center";
			ctx.fillText(name.text, xPosition, name.height);
			ctx.textAlign="center";
			ctx.fillText(course.text, xPosition, course.height);
			ctx.textAlign="center";
			ctx.fillText(date.text, xPosition, date.height);
		};

		imageObj.src = "images/certificate.png";

	})
})