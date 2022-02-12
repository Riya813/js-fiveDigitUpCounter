document.getElementById('upper-div-input');
var a = document.getElementById('upper-div-input');
var b = document.getElementById('counter-button');
b.addEventListener('click', function(){
   var num = Number(a.value);
   if(num > 99999 || num < 0){
       a.value = 0;
       return;
   }
    for(let i=1; i<=num; i++){
        setTimeout(function(){
            
            if(i >= 10000){
                var thous = i/10000;
                tenthous = Math.floor(tenthous);
                i = i%10000;
                document.getElementById('flex-div-5').innerText = tenthous;
            }else{
                document.getElementById('flex-div-5').innerText = 0;
            }

            if(i >= 1000){
                var thous = i/1000;
                thous = Math.floor(thous);
                i = i%1000;
                document.getElementById('flex-div-4').innerText = thous;
            }else{
                document.getElementById('flex-div-4').innerText = 0;
            }

            if(i >= 100){
                var hundr = i/100;
                hundr = Math.floor(hundr);
                i = i%100;
                document.getElementById('flex-div-3').innerText = hundr;
            }else{
                document.getElementById('flex-div-3').innerText = 0;
            }

            if(i>=10){
                var tens = i/10;
                tens = Math.floor(tens);
                i = i%10;
                document.getElementById('flex-div-2').innerText = tens;
            }else{
                document.getElementById('flex-div-2').innerText = 0;
            }
            
            var ones = i%10
            document.getElementById('flex-div-1').innerText = i;
           
            console.log(i);
        }, i*200);
    }
});

// var current = document.querySelector('.current');
// var next = document.querySelector('.next');
// var input = document.getElementById('upper-div-input');
// function newNum(){
//     for(var i=0; i<input; i++){
//         var num = i;
//     }
// }

// function startCounter(){
//     var interval = setInterval(animate, 1000);
// }

// function animate(){
//     next.classList.add('animate');
//     setTimeout(function(){
//         next.classList.remove('animate');
//     },500)
// }