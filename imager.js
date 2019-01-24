
export  const getPhoto = function(name) {
	switch(name) {
		case "Bogdan": {
			return require("./assets/profiles/bogdan.jpg");
		}
		case "Kateryna": {
			return require("./assets/profiles/kateryna.jpg");
		}
		case "Odara": {
			return require("./assets/profiles/odara.jpg");
		}
		case "Emma": {
			return require("./assets/profiles/emma.jpg");
		}

	}
}