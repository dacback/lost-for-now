function showTime() {

	var currentTime = new Date();
	var hours = currentTime.getHours();
	var mins = currentTime.getMinutes();
	var secs = currentTime.getSeconds();	

	var amPM = "AM";  // default time of day is AM


	// Eastern Standard Time 
	if (hours > 12) {
		hours = hours - 12;
		amPM = "PM";
	}	

	if (secs < 10 ) {
		secs = "0" + secs;
	}

	if (hours < 10 ) {
		hours = "0" + hours;
	}

	if (mins < 10) {
		mins = "0" + mins;
	}

	// Central Standard Time (Hour) adjustment
	var cstHours = hours -1;

		if (cstHours > 12) {
			cstHours = cstHours - 12;
			amPM = "PM";
		}


	// Mountanin Standard Time (Hour) adjustment
	var mstHours = hours -2;

		if (mstHours > 12) {
			mstHours = mstHours - 12;
			amPM = "PM";
		}


	// Pacific Standard Time (Hour) adjustment
	var pstHours = hours -3;

		if (pstHours > 12) {
			pstHours = pstHours - 12;
			amPM = "PM";
		}

	// Posting times to DOM via innerText
	var localTimeZone = document.getElementById('localTime');
	localTimeZone.innerText = (hours + ":" + mins  + ":" + secs + " " + " " + amPM);

	var cstTimeZone = document.getElementById('csTime');
	cstTimeZone.innerText = (cstHours + ":" + mins  + ":" + secs + " " + " " + amPM);

	var mstTimeZone = document.getElementById('msTime');
	mstTimeZone.innerText = (mstHours + ":" + mins  + ":" + secs + " " + " " + amPM);


	var pstTimeZone = document.getElementById('psTime');
	pstTimeZone.innerText = (pstHours + ":" + mins  + ":" + secs + " " + " " + amPM);


};
showTime();
setInterval(showTime,1000);
