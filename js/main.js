$("#burger").click(function() {
    $("nav ul").toggle('slow', 'swing');
});

var dateToCountDownTo = new Date("Dec 14, 2017 12:06    :00").getTime();

var counter = setInterval(function() {
    var currentTime = new Date().getTime();
    var length = dateToCountDownTo - currentTime;
    
    var hours = Math.floor((length % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((length % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((length % (1000 * 60)) / 1000);
    if(seconds < 10 && minutes < 10 && hours < 10) {
        seconds = '0' + seconds;
        minutes = '0' + minutes;
        hours = '0' + hours;
    } else if(seconds < 10 && minutes < 10) {
        seconds = '0' + seconds;
        minutes = '0' + minutes;
    }  else if(seconds < 10) {
        seconds = '0' + seconds;
    } else if(minutes < 10) {
        minutes = '0' + minutes;
    } else if(hours < 10) {
        hours = '0' + hours;
    }
    
    if(length < 0) {
        clearInterval(counter);
        hours = "00";
        minutes = "00";
        seconds = "00";
    }
    
    $('.hours').text(hours);
    $('.minutes').text(minutes);
    $('.seconds').text(seconds);
    
}, 1000);

/*DELEGATION EVENT LISTENER */
$(".question").on("click", ".textQuestion span", function() {
    var x = $(this).parents();
    var y = $(x[1]).children();
    $(y[0]).toggleClass('orange');
    $(this).toggleClass('fa-minus white');
    $(y[1]).toggle();
    
});
