function navigateTOC() {
	$("#embed").attr('data', "../public/0.%20Table%20of%20Contents.md.html");
	//window.location.href = "../public/0.%20Setting%20up%20client%20tools.md.html";
}

function navigate0() {
	$("#embed").attr('data', "../public/0.%20Setting%20up%20client%20tools.md.html");
    //window.location.href = "../public/0.%20Setting%20up%20client%20tools.md.html";
}

function navigate1() {
	$("#embed").attr('data', "../public/1.%20Create%20App%20From%20a%20Docker%20Image.md.html");
	//window.location.href = "../public/1.%20Create%20App%20From%20a%20Docker%20Image.md.html";
}
    
function navigate2() {
	$("#embed").attr('data',"../public/2.%20Create%20App%20Using%20Docker%20Build.md.html");
	// window.location.href = "../public/2.%20Create%20App%20Using%20Docker%20Build.md.html";
}

function navigate3() {
	$("#embed").attr('data',"../public/3.%20Using%20Web%20Console.md.html");
    //window.location.href = "../public/3.%20Using%20Web%20Console.md.html";
}
    
function navigate4() {
	$("#embed").attr('data',"../public/4.%20Creating%20an%20application%20using%20JBoss%20EAP%20builder%20image.md.html");
    //window.location.href = "../public/4.%20Creating%20an%20application%20using%20JBoss%20EAP%20builder%20image.md.html";
}

function navigate5() {
	$("#embed").attr('data',"../public/5.%20Using%20templates.md.html");
    //window.location.href = "../public/5.%20Using%20templates.md.html";
}
    
function navigate6() {
	$("#embed").attr('data',"../public/6.%20Scale%20up%20and%20Scale%20down%20the%20application%20instances.md.html");
    //window.location.href = "../public/6.%20Scale%20up%20and%20Scale%20down%20the%20application%20instances.md.html";
}

function navigate7() {
	$("#embed").attr('data',"../public/7.%20Binary%20Deployment%20of%20a%20war%20file.md.html");
    //window.location.href = "../public/7.%20Binary%20Deployment%20of%20a%20war%20file.md.html";
}
    
function navigate8() {
	$("#embed").attr('data', "../public/8.%20Using%20SSL%20In%20your%20Application.md.html");
    //window.location.href = "../public/8.%20Using%20SSL%20In%20your%20Application.md.html";
}

function navigate9() {
	$("#embed").attr('data',"../public/9.%20Blue%20Green%20Deployments.md.html");
	//window.location.href = "../public/9.%20Blue%20Green%20Deployments.md.html";
}

function navigate10() {
	$("#embed").attr('data',"../public/10.%20SCM%20Web%20Hooks.md.html");
    //window.location.href = "../public/10.%20SCM%20Web%20Hooks.md.html";
}

function navigate11() {
	$("#embed").attr('data',"../public/11.%20Rollback%20Applications.md.html");
    //window.location.href = "../public/11.%20Rollback%20Applications.md.html";
}
    
function navigate12() {
	$("#embed").attr('data',"../public/12.%20Code%20Promotion%20Across%20Environments.md.html");
    //window.location.href = "../public/12.%20Code%20Promotion%20Across%20Environments.md.html";
}

function navigate13() {
	$("#embed").attr('data',"../public/13.%20Using%20JBoss%20Development%20Studio.md.html");
    //window.location.href = "../public/13.%20Using%20JBoss%20Development%20Studio.md.html";
}

function navigate14() {
	$("#embed").attr('data',"../public/14.%20Using%20Fabric8%20Maven%20Archetypes.md.html");
    //window.location.href = "../public/14.%20Using%20Fabric8%20Maven%20Archetypes.md.html";
}

function navigate15() {
	$("#embed").attr('data',"../public/15.%20A%20Build%20Pipeline%20Using%20Jenkins.md.html");
    //window.location.href = "../public/15.%20A%20Build%20Pipeline%20Using%20Jenkins.md.html";
}

function navigate20() {
	$("#embed").attr('data',"../public/20.%20Links.md.html");
    //window.location.href = "../public/20.%20Links.md.html";
}

$("#menu-toc").click(function () {
	navigateTOC();
});

$("#menu-0").click(function () {
    navigate0();
});

$("#menu-1").click(function () {
    navigate1();
});

$("#menu-2").click(function () {
    navigate2();
});

$("#menu-3").click(function () {
    navigate3();
});

$("#menu-4").click(function () {
    navigate4();
});

$("#menu-5").click(function () {
    navigate5();
});

$("#menu-6").click(function () {
    navigate6();
});

$("#menu-7").click(function () {
    navigate7();
});

$("#menu-8").click(function () {
    navigate8();
});

$("#menu-9").click(function () {
    navigate9();
});

$("#menu-10").click(function () {
    navigate10();
});

$("#menu-11").click(function () {
    navigate11();
});

$("#menu-12").click(function () {
    navigate12();
});

$("#menu-13").click(function () {
    navigate13();
});

$("#menu-14").click(function () {
    navigate14();
});

$("#menu-15").click(function () {
    navigate15();
});

$("#menu-20").click(function () {
    navigate20();
});


// voice commands
if(voiceCmdr.isSupported()) {

	voiceCmdr.addCommand("home", function () {
		navigateTOC();
	});

	voiceCmdr.addCommand("table of contents", function () {
		navigateTOC();
	});

	voiceCmdr.addCommand("labsix", function () {
		navigate6();
	});

	voiceCmdr.addCommand("lab", function (param) {
		if (param === "0") {
			navigate0();
		} else if (param === "xero") {
			navigate0();
		} else if (param === "zero") {
			navigate0();
		} else if (param === "1") {
			navigate1();
		} else if (param === "2") {
			navigate2();
		} else if (param === "3") {
			navigate3();
		} else if (param === "4") {
			navigate4();
		} else if (param === "5") {
			navigate5();
		} else if (param === "6") {
			navigate6();
		} else if (param === "sex") {
			navigate6();
		} else if (param === "7") {
			navigate7();
		} else if (param === "8") {
			navigate8();
		} else if (param === "9") {
			navigate9();
		} else if (param === "10") {
			navigate10();
		} else if (param === "11") {
			navigate11();
		} else if (param === "12") {
			navigate12();
		} else if (param === "13") {
			navigate13();
		} else if (param === "14") {
			navigate14();
		} else if (param === "15") {
			navigate15();
		} else if (param === "20") {
			navigate20();
		}
	});

	voiceCmdr.start();
	voiceCmdr.debug(true);

} else {
	console.info("Sorry, your browser does not support the Web Speech API :(")
}
