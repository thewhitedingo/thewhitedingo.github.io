// model
var bio = { // bio object to add to page
	"name": "Tyler Despain",
	"role": "Web Developer",
	"contacts": {
		"mobile": "480-825-8705",
		"email": "tylermdespain@gmail.com",
		"github": "<a class='white-text bioLink' href='https://github.com/thewhitedingo'>thewhitedingo</a>",
		"location": "<a class='white-text bioLink' href='https://www.google.com/maps/place/San+Tan+Valley,+AZ/@33.1910111,-111.6250443,12z/data=!3m1!4b1!4m2!3m1!1s0x872a4ecae0bd15ad:0x58dfdb4271bf76ea'>San Tan Valley, AZ</a>"
	},
	"welcomeMessage": "Welcome to my online resume. You'll find what you need here. Feel free to contact me with questions.",
	"skills": [
		"HTML5", "CSS3", "Javascript", "Jquery", "Knockout", "Determination", "Discipline"
	],
	"bioPic": "images/me.jpg",
}

var education = {
	"schools": [
		{
			"name": "Poston Butte High School",
			"degree": " HS Diploma",
			"location": "San Tan Valley, AZ",
			"date": "2009-2012",
			"major": "Generals",
		},
		{
			"name": "Norther Arizona University",
			"degree": " ",
			"location": "Flagstaff, AZ",
			"date": "2012-2013",
			"major": "1 Year Generals",
		},
	],
	"onlineCourses": [
		{
			"name": "Front-End Web Developer",
			"school": "Udacity",
			"date": "Winter 2015",
			"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001",
		},
	],
}

var work = {
	"jobs": [
		{
			"employer": "Florence Unified School District",
			"title": "Bus Driver",
			"dates": "May 2015 to Present",
			"location": "San Tan Valley, AZ",
			"description": "Operated a school bus to transport children to and from school and school events."
		},
		{
			"employer": "Lauren's Institute for Education",
			"title": "Habilitation and Respite Provider",
			"dates": "June 2013 to October 2014",
			"location": "Mesa, AZ",
			"description": "Provided individual learning, and occasional care, of several autistic children."
		},
		{
			"employer": "The Church of Jesus Christ of Latter-day Saints",
			"title": "Missionary",
			"dates": "June 2013 to October 2014",
			"location": "San Diego, CA",
			"description": "Facilited the growth of the LDS church in the San Diego area by street-contacting people\
			and providing information about the church, teaching lessons on church history and doctrine, and finding\
			interested people through a variety of means."
		},
		{
			"employer": "Fry's Food and Drug",
			"title": "Courtesy Clerk",
			"dates": "September 2011 through February 2013",
			"location": "San Tan Valley, AZ",			
			"description": "Provided customer service and maintenance in order to help keep a friendly and clean store."
		}
	],
}

var projects = {
	"projects": [
		{ 
			"title": "<a href='http://thewhitedingo.github.io/eleagues/'>eLeagues</a>",
			"dates": "Started August 2015, Currently in Progress",
			"description": "A website dedicated to helping set up local esports leagues..",
			"images": ""
		},
		{
			"title": "<a href='http://thewhitedingo.github.io/jsPokeBattle/'>Pokemon Battle JS</a>",
			"dates": "Completed January 2016",
			"description": "A small app to battle two Pokemon. Made to demonstrate object oriented Javascript.",
			"images": ""
		},
		{
			"title": "<a href='http://thewhitedingo.github.io/catClicker/'>Cat Clicker</a>",
			"dates": "Completed January 2016",
			"description": "A small web app that counts the click on multiple cats, while displaying only a single cat, and having\
			 options to change the cat's name, image, and amount of clicks. Made for Udacity's Front End Web Developer program to\
			 demonstrate MVC coding.",
			"images": ""
		},
		{
			"title": "<a href='http://thewhitedingo.github.io/NeighborhoodMap/'>Neighborhood Map</a>",
			"dates": "Completed February 2016",
			"description": "A map of a local neighborhood with locations that everyone should visit if they are in the area. Created to show\
			an understanding of APIs and AJAX.",
			"images": ""
		}
	],
}
//controller
var controller = {
	init: function() {
		view.init();
	},
	bio: function() {
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
			$("#header").prepend(formattedRole);
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
			$("#header").prepend(formattedName);
		var formattedImage = HTMLbioPic.replace("%data%", bio.bioPic);
			$("#header").prepend(formattedImage);
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
			$("#topContacts:last").append(formattedMobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
			$("#topContacts:last").append(formattedEmail);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
			$("#topContacts:last").append(formattedGithub);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
			$("#topContacts:last").append(formattedLocation);
		
		$("#header").append(HTMLskillsStart);
		
		for (skill in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
				$("#skills:last").append(formattedSkill);
		};
		
		var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
			$("#header").append(formattedMessage);
	},
	education: function() {
		for (school in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var formattedNameDegree = formattedName + formattedDegree;
				$(".education-entry:last").append(formattedNameDegree);
			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
				$(".education-entry:last").append(formattedLocation);
			var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].date);
				$(".education-entry:last").append(formattedDates);
			var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
				$(".education-entry:last").append(formattedMajor);
		};
		$("#education").append(HTMLonlineClasses);

		for (course in education.onlineCourses) {
			$("#education").append(HTMLschoolStart);

			var onlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].name);
			var onlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
			var onlineTitleSchool = onlineTitle + onlineSchool;
				$(".education-entry:last").append(onlineTitleSchool);
			var onlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
				$(".education-entry:last").append(onlineDate);
			var onlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
				$(".education-entry:last").append(onlineURL);
		};
	},
	work: function() {
		for (job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);

			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
				$(".work-entry:last").append(formattedEmployer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
				$(".work-entry:last").append(formattedTitle);
			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
				$(".work-entry:last").append(formattedLocation);
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
				$(".work-entry:last").append(formattedDates);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
				$(".work-entry:last").append(formattedDescription);
		};

	},
	projects: function() {
		$("#projects").append(HTMLprojectStart);
		
		for (project in projects.projects) {
			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
				$(".project-entry").append(formattedTitle);
			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
				$(".project-entry").append(formattedDates);
			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
				$(".project-entry").append(formattedDescription);

			if (projects.projects[project].images.length > 0) {
				for (image in projects.projects[project]) {
					var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
					$(".project-entry").append(formattedImage);
				};
			};
		};
	}
}
//view
var view = {
	init: function() {
		view.bioDisplay();
	},
	// view method to display bio on page
	bioDisplay: function() {
		controller.bio();
		view.educationDisplay();
	},
	// view method to display education on page
	educationDisplay: function() {
		controller.education();
		view.workDisplay();
	},
	workDisplay: function() {
		controller.work();
		view.projectsDisplay();
	 },
	projectsDisplay: function() {
		controller.projects();
	}
};

controller.init();

$("#mapDiv").append(googleMap);
