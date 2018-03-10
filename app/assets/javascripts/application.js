// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require turbolinks
//= require_tree .

var string = [ "Good", "Right", "Correct", "Very Good", "Awesome"]
var gameCompleted = false;

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}


function mouseClickFn(img) {

    if (gameCompleted)
    {
        return;
    }
    

    var day = document.getElementById("h1Day").innerHTML.substr(-1);
    var string_index = day-1; 

    if (day == img)
    {
        document.getElementById("imgMas").src = ("/assets/creation/"+img+".jpg");
        if (day ==6)
        {
            gameCompleted = true;
             document.getElementById("h1Day").innerHTML = ('You Got It, Good Job!');
        }
        else 
        {
            
            day++; 
            
            document.getElementById("h1Day").innerHTML = (string[(string_index)] + ', How About Day ' + (day));
            
            //document.getElementById("imgMas").src ="";
        }
    }
    else
    {
        validateResult(false);
    }
    return;
    
    switch(img) {
    case 1:
        if (document.getElementById("h1Day").innerHTML.includes(img) )
        {
            validateResult(true);
            document.getElementById("imgMas").src = "creation.bmp";
            document.getElementById("h1Day").innerHTML = "Day 2";
            return;
        }
        break;
    case 2:
        if (document.getElementById("h1Day").innerHTML.includes(img))
        validateResult(true);
        return;
    default:
        break;
    }
    validateResult(false);
}

function validateResult (result) {
    if(result == false)
    {
       alert("It was wrong, try again");
    }
  
}
