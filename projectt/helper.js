
const themes = document.querySelectorAll('[data-name="accordeon-title"]');

themes.forEach(function(item){
    item.addEventListener('click', function() {
        // console.log('click!!');
        this.nextElementSibling.classList.toggle('hidden');
    })
})


const start = document.querySelector('#starter-button');
const precontent = document.querySelectorAll('#precont');

start.addEventListener('click', function(){
    start.nextElementSibling.classList.toggle('start-this');

    precontent.forEach(function (item){
        item.classList.toggle('hidden');
    })

    // start.classList.toggle('new-text-content');
    
    // if(precontent.classList.contains('new-text-content')){
    //     start.textContent = "Click to start reading";
    // }
    // else {
    //     start.textContent = "Click to hide content";
    // }

})

start.addEventListener('click', function(){
    start.classList.toggle('hidden-1')

    if(start.classList.contains('hidden-1')){
        start.textContent = "Click to start reading";
    }
    else {
        start.textContent = "Click to hide content";
    }
})


// const men = document.querySelectorAll('#menushka');

// console.log(men);

