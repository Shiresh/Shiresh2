var APP = APP || {};

(function () {
	// Data objecten
	APP.game = {
		title:'Pagina 1',
		game:[
		{ score: "1", team1: "Boomsquad", team1Score: "1", team2: "Burning Snow", team2Score: "0"},
		{ score: "2", team1: "Boomsquad", team1Score: "2", team2: "Burning Snow", team2Score: "0"},
		{ score: "3", team1: "Boomsquad", team1Score: "2", team2: "Burning Snow", team2Score: "1"},
		{ score: "4", team1: "Boomsquad", team1Score: "2", team2: "Burning Snow", team2Score: "2"},
		{ score: "5", team1: "Boomsquad", team1Score: "3", team2: "Burning Snow", team2Score: "2"},
		{ score: "6", team1: "Boomsquad", team1Score: "4", team2: "Burning Snow", team2Score: "2"},
		{ score: "7", team1: "Boomsquad", team1Score: "5", team2: "Burning Snow", team2Score: "2"},
		{ score: "8", team1: "Boomsquad", team1Score: "5", team2: "Burning Snow", team2Score: "3"},
		{ score: "9", team1: "Boomsquad", team1Score: "6", team2: "Burning Snow", team2Score: "3"},
		{ score: "10", team1: "Boomsquad", team1Score: "7", team2: "Burning Snow", team2Score: "3"},
		{ score: "11", team1: "Boomsquad", team1Score: "7", team2: "Burning Snow", team2Score: "4"},
		{ score: "12", team1: "Boomsquad", team1Score: "8", team2: "Burning Snow", team2Score: "4"},
		{ score: "13", team1: "Boomsquad", team1Score: "8", team2: "Burning Snow", team2Score: "5"},
		{ score: "14", team1: "Boomsquad", team1Score: "8", team2: "Burning Snow", team2Score: "6"},
		{ score: "15", team1: "Boomsquad", team1Score: "9", team2: "Burning Snow", team2Score: "6"},
		{ score: "16", team1: "Boomsquad", team1Score: "9", team2: "Burning Snow", team2Score: "7"},
		{ score: "17", team1: "Boomsquad", team1Score: "10", team2: "Burning Snow", team2Score: "7"},
		{ score: "18", team1: "Boomsquad", team1Score: "11", team2: "Burning Snow", team2Score: "7"},
		{ score: "19", team1: "Boomsquad", team1Score: "12", team2: "Burning Snow", team2Score: "7"},
		{ score: "20", team1: "Boomsquad", team1Score: "13", team2: "Burning Snow", team2Score: "7"},
		{ score: "21", team1: "Boomsquad", team1Score: "14", team2: "Burning Snow", team2Score: "7"},
		{ score: "22", team1: "Boomsquad", team1Score: "14", team2: "Burning Snow", team2Score: "8"},
		{ score: "23", team1: "Boomsquad", team1Score: "15", team2: "Burning Snow", team2Score: "8"}
		]
	};

	APP.schedule = {
		title:'Pagina 2',	
		schedule:[
		{ date: "Monday, 9:00am", team1: "Chasing", team1Score: "13", team2: "Amsterdam Money Gang", team2Score: "9"},
		{ date: "Monday, 9:00am", team1: "Boomsquad", team1Score: "15", team2: "Beast Amsterdam", team2Score: "11"},
		{ date: "Monday, 10:00am", team1: "Beast Amsterdam", team1Score: "14", team2: "Amsterdam Money Gang", team2Score: "12"},
		{ date: "Monday, 10:00am", team1: "Chasing", team1Score: "5", team2: "Burning Snow", team2Score: "15"},
		{ date: "Monday, 11:00am", team1: "Boomsquad", team1Score: "11", team2: "Amsterdam Money Gang", team2Score: "15"},
		{ date: "Monday, 11:00am", team1: "Burning Snow", team1Score: "15", team2: "Beast Amsterdam", team2Score: "6"},
		{ date: "Monday, 12:00pm", team1: "Chasing", team1Score: "8", team2: "Beast Amsterdam", team2Score: "15"},
		{ date: "Monday, 12:00pm", team1: "Boomsquad", team1Score: "15", team2: "Burning Snow", team2Score: "8"},
		{ date: "Monday, 1:00pm", team1: "Chasing", team1Score: "15", team2: "Boomsquad", team2Score: "14"},
		{ date: "Monday, 1:00pm", team1: "Burning Snow", team1Score: "15", team2: "Amsterdam Money Gang", team2Score: "11"}
		]
	};

	APP.ranking = {
		title:'Pagina 3',
		ranking:[
		{ team: "Chasing", Win: "2", Lost: "2", Sw: "7", Sl: "9", Pw: "35", Pl: "39"},
		{ team: "Boomsquad", Win: "2", Lost: "2", Sw: "9", Sl: "8", Pw: "36", Pl: "34"},
		{ team: "Burning Snow", Win: "3", Lost: "1", Sw: "11", Sl: "4", Pw: "36", Pl: "23"},
		{ team: "Beast Amsterdam", Win: "2", Lost: "2", Sw: "6", Sl: "8", Pw: "30", Pl: "34"},
		{ team: "Amsterdam Money Gang", Win: "1", Lost: "3", Sw: "6", Sl: "10", Pw: "30", Pl: "37"}
		]
	};
	
	// Controller Init
	APP.controller = {
		init: function () {
			// Initialize router
			APP.router.init();
		}
	};

	// Router
	APP.router = {
		init: function () {
	  		routie({
				//property /schedule
			    '/schedule': function() {
			    	APP.page.schedule();
				},
			    '/game': function() {
			    	APP.page.game();
			    },

			    '/ranking': function() {
			    	APP.page.ranking();
			    },
				//default page *
			    '*': function() {
			    	APP.page.schedule();
			    }
			});
		},

		change: function () {
		//
            var route = window.location.hash.slice(2),
			//var sections roept de sections aan met de data routes
                sections = qwery('section[data-route]'),
				//var section roept alleen de eerste section data route aan. Dmv +route+ wordt bijvoorbeeld game aangeroepen. De eerste array wordt aangeroepen.
                section = qwery('[data-route=' + route + ']')[0];  

            // Show active section, hide all other
			//Er wordt gekeken hoeveel sections er zijn 
            if (section) {
			//als het een section is wordt gekeken hoeveel sections er zijn. Als 0 kleiner is dan het aantal sections gaat het met 1 omhoog.
            	for (var i=0; i < sections.length; i++){
				//Vervolgens wordt de class 'active' weggehaald bij alle sections.
            		sections[i].classList.remove('active');
            	}
				//De huidige (specifieke) section krijgt de class 'active' mee.
            	section.classList.add('active');
            }

            // Default route
            if (!route) {
            	sections[0].classList.add('active');
            }

		}
	};

	// Pages
	APP.page = {
		schedule: function () {
			//transparency zorgt ervoor dat de data geladen wordt. Hiervoor worden de data-binds gebruikt.
			//query is de selector, hier wordt data-rout=game geselecteerd. Deze wordt uit de array gehaald.
			Transparency.render(qwery('[data-route=game')[0], APP.game);
			APP.router.change();
		},

		game: function () {
			Transparency.render(qwery('[data-route=schedule')[0], APP.schedule);
			APP.router.change();
		},

		ranking: function () {
			Transparency.render(qwery('[data-route=ranking')[0], APP.ranking);
			APP.router.change();
		}
	}
	// DOM ready
	// Hiermee wordt ervoor gezorgd dat de html en css geladen is, en daarna wordt het script (js) pas uitgevoerd.
	domready(function () {
		// Kickstart application
		APP.controller.init();
	});
	
})();