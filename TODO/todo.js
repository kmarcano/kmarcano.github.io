'use strict'

const $ = document.querySelector.bind(document);

function createNewTodo(){
    var d = document.createElement('div'); // create div, d
    $('.items').appendChild( d );          // add d to place
    d.innerHTML = $('.newtodo').value; // 
    // add on click functionality to d
    d.onclick = function(){
        d.className = 'done';          // change d clas
    };

}