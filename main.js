
// DEMO


var displayarray = document.querySelector(".display");

var input = document.querySelectorAll(".button");

var array = Array.from(input);
var song = document.querySelector(".fuong");
array.forEach(function display(item) {
    item.addEventListener('click',function() {
        if(displayarray.innerHTML === '0')
        displayarray.innerHTML ='';
        if(item.innerHTML == 'AC')
        displayarray.innerHTML=0;
        else if(item.innerHTML =='DEL')
        {
            var array_display = Array.from(displayarray.innerHTML);
            array_display.splice(array_display.length-1, 2);
            if(array_display.length !=0)
            displayarray.innerHTML = array_display.join('');
            else
            displayarray.innerHTML = 0;
        }
        else if(item.innerHTML == "=")
        displayarray.innerHTML = eval(displayarray.innerHTML);
        
        else {

            displayarray.innerHTML += item.innerHTML;
            song.play();
        }
    })
})




