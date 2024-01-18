const input = document.querySelectorAll('#regist');
const input1 = document.querySelector('.inp-1');
const input2 = document.querySelector('.inp-2');

// input.forEach(function(item){
//     item.addEventListener('click', function() {
//         //console.log('click!!');
//         input1.value = '';
//         input2.value = '';
//     })
// })

// input1.addEventListener('click', function(){
//     input1.value = '';
// })
// input1.addEventListener('mouseout', function(){
//     input1.value = 'Email or phone number';
// })

// input2.addEventListener('click', function(){
//     input2.value = '';
// })
// input2.addEventListener('mouseout', function(){
//     input2.value = 'Password';
// })


const svg1 = document.querySelector('#svg-1');
const svg2 = document.querySelector('#svg-2');
const change1 = document.querySelector('#passw');

svg1.addEventListener('click', function(){
    svg1.classList.toggle('hidden');
    svg2.classList.toggle('hidden');
    change1.type = 'text';
});

svg2.addEventListener('click', function(){
    svg2.classList.toggle('hidden');
    svg1.classList.toggle('hidden');
    change1.type = 'password';
});