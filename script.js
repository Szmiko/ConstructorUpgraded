function CarPrototype() {
	this.make = "SieMoCorp";
	this.year = 2013;
	this.started = false;
	this.start = function() {
		this.started = true;
		alert("Brum wrrr!");
	};
	this.stop = function() {
		this.started = false;
		alert("Pufff csss!");
	};
	this.drive = function() {
		if (this.started) {
			alert("Wrrrrrrrrrrrr");
		} else {
			alert("Proszę włączyć silnik!")
		};
	};
};

var NewCar = new CarPrototype();

NewCar.audio = "Bose";
NewCar.color = "Yellow";