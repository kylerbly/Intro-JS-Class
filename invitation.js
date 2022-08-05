function myClicker() {
	var w = document.getElementByName("recipientName").value;
	var f = document.getElementByName("organizationName").value;
	var g = document.getElementByName("eventDate").value;
	var h = document.getElementByName("websiteURL").value;
	var j = document.getElementByName("hostName").value;
	document.getElementById("recipientName").innerHTML = w;
	document.getElementById("organizationName").innerHTML = f;
	document.getElementById("eventDate").innerHTML = g;
	document.getElementById("websiteURL").innerHTML = h;
	document.getElementById("hostName").innerHTML = j;
}