var myVar = setInterval(up, 500);
var myVar = setInterval(up1, 500);
var myVar = setInterval(up2, 500);
var myVar = setInterval(up3, 500);




function up1() {
    "use strict";
    if (document.getElementById("text1").className === "text1_end") {
        document.getElementById("text1").className = "text1";
    }
}

function up2() {
    "use strict";
    if (document.getElementById("text2").className === "text2_end") {
        document.getElementById("text2").className = "text2";
    }
}

function up3() {
    "use strict";
    if (document.getElementById("text3").className === "text3_end") {
        document.getElementById("text3").className = "text3";
    }
}

function up() {
    "use strict";
    if (document.getElementById("text").className === "text_end") {
        document.getElementById("text").className = "text";
    }
}



document.getElementById("b1").onclick = function () {
    "use strict";
    if (document.getElementById("b2").className === "b2") {
        document.getElementById("b2").className = "b2_up";
        document.getElementById("b3").className = "b3_up";
        document.getElementById("b4").className = "b4_up";
        document.getElementById("b5").className = "b5_up";
        b1.style.webkitAnimation = "none";
        b1.style.animation = "none";
    }
};

document.getElementById("b2").onclick = function () {
    "use strict";
    if (document.getElementById("b2").className === "b2_up") {
        document.getElementById("b2").style.background = "#6ea2dd";
        document.getElementById("b2").style.boxShadow = "0 0 0 10px rgba(110, 162, 221, 0)";
        document.getElementById("text1").className = "text1_up";
        document.getElementById("text").className = "text_end";
        document.getElementById("text2").className = "text2_end";
        document.getElementById("text3").className = "text3_end";
        document.getElementById("b3").style.background = "#b2ceed";
        document.getElementById("b4").style.background = "#b2ceed";
        document.getElementById("b5").style.background = "#b2ceed";
        document.getElementById("b3").style.boxShadow = "0 0 0 0px rgba(110, 162, 221, 0.7)";
        document.getElementById("b4").style.boxShadow = "0 0 0 0px rgba(110, 162, 221, 0.7)";
        document.getElementById("b5").style.boxShadow = "0 0 0 0px rgba(110, 162, 221, 0.7)";
    }
};



document.getElementById("b3").onclick = function () {
    "use strict";
    if (document.getElementById("b3").className === "b3_up") {
        document.getElementById("b3").style.background = "#6ea2dd";
        document.getElementById("b3").style.boxShadow = "0 0 0 10px rgba(110, 162, 221, 0)";
        document.getElementById("text2").className = "text2_up";
        document.getElementById("text1").className = "text1_end";
        document.getElementById("text").className = "text_end";
        document.getElementById("text3").className = "text3_end";
        document.getElementById("b2").style.background = "#b2ceed";
        document.getElementById("b4").style.background = "#b2ceed";
        document.getElementById("b5").style.background = "#b2ceed";
        document.getElementById("b2").style.boxShadow = "0 0 0 0px rgba(110, 162, 221, 0.7)";
        document.getElementById("b4").style.boxShadow = "0 0 0 0px rgba(110, 162, 221, 0.7)";
        document.getElementById("b5").style.boxShadow = "0 0 0 0px rgba(110, 162, 221, 0.7)";
    }
};

document.getElementById("b4").onclick = function () {
    "use strict";
    if (document.getElementById("b4").className === "b4_up") {
        document.getElementById("b4").style.background = "#6ea2dd";
        document.getElementById("b4").style.boxShadow = "0 0 0 10px rgba(110, 162, 221, 0)";
        document.getElementById("text3").className = "text3_up";
        document.getElementById("text1").className = "text1_end";
        document.getElementById("text2").className = "text2_end";
        document.getElementById("text").className = "text_end";
        document.getElementById("b3").style.background = "#b2ceed";
        document.getElementById("b2").style.background = "#b2ceed";
        document.getElementById("b5").style.background = "#b2ceed";
        document.getElementById("b3").style.boxShadow = "0 0 0 0px rgba(110, 162, 221, 0.7)";
        document.getElementById("b2").style.boxShadow = "0 0 0 0px rgba(110, 162, 221, 0.7)";
        document.getElementById("b5").style.boxShadow = "0 0 0 0px rgba(110, 162, 221, 0.7)";
    }
};

document.getElementById("b5").onclick = function () {
    "use strict";
    if (document.getElementById("b5").className === "b5_up") {
        document.getElementById("b5").style.background = "#6ea2dd";
        document.getElementById("b5").style.boxShadow = "0 0 0 10px rgba(110, 162, 221, 0)";
        document.getElementById("text").className = "text_up";
        document.getElementById("text1").className = "text1_end";
        document.getElementById("text3").className = "text3_end";
        document.getElementById("text2").className = "text2_end";
        document.getElementById("b3").style.background = "#b2ceed";
        document.getElementById("b4").style.background = "#b2ceed";
        document.getElementById("b2").style.background = "#b2ceed";
        document.getElementById("b3").style.boxShadow = "0 0 0 0px rgba(110, 162, 221, 0.7)";
        document.getElementById("b4").style.boxShadow = "0 0 0 0px rgba(110, 162, 221, 0.7)";
        document.getElementById("b2").style.boxShadow = "0 0 0 0px rgba(110, 162, 221, 0.7)";
    }
};