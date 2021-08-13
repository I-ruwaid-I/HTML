function menuBar() {
    var x = document.getElementById("links");
    if (x.style.display == "none"){ 
        x.style.display = "block";
        document.getElementById('bar').style.transform = "rotate(90deg)";
        document.getElementById('bar').style.transition = "1s ease";
        document.getElementById("close").innerText = 'close';
    }else{
        x.style.display = 'none';
        document.getElementById('bar').style.transform = "rotate(0deg)";
        document.getElementById('bar').style.transition = "1s ease";
        document.getElementById("close").innerText = 'menu';
    }
}

function rotateImg() {
    var x = document.getElementById('img-rot');
    if(x.style.transform == "rotate(0deg)"){
        document.getElementById('img-rot').style.transform = "rotate(180deg)";
        document.getElementById('img-rot').style.transition = "1s ease";
    }else{
        document.getElementById('img-rot').style.transform = "rotate(0deg)";
        document.getElementById('img-rot').style.transition = "1s ease";
    }    
}

function rotateImgtwo() {
    var x = document.getElementById('img-rot-two');
    if(x.style.transform == "rotate(0deg)"){
        document.getElementById('img-rot-two').style.transform = "rotate(180deg)";
        document.getElementById('img-rot-two').style.transition = "1s ease";
    }else{
        document.getElementById('img-rot-two').style.transform = "rotate(0deg)";
        document.getElementById('img-rot-two').style.transition = "1s ease";
    }    
}

function rotateImgtwo() {
    var x = document.getElementById('img-rot-two');
    if(x.style.transform == "rotate(0deg)"){
        document.getElementById('img-rot-two').style.transform = "rotate(180deg)";
        document.getElementById('img-rot-two').style.transition = "1s ease";
    }else{
        document.getElementById('img-rot-two').style.transform = "rotate(0deg)";
        document.getElementById('img-rot-two').style.transition = "1s ease";
    }    
}

function rotateImgthree() {
    var x = document.getElementById('img-rot-three');
    if(x.style.transform == "rotate(0deg)"){
        document.getElementById('img-rot-three').style.transform = "rotate(180deg)";
        document.getElementById('img-rot-three').style.transition = "1s ease";
    }else{
        document.getElementById('img-rot-three').style.transform = "rotate(0deg)";
        document.getElementById('img-rot-three').style.transition = "1s ease";
    }    
}

function likeButton() {
    var x = document.getElementById("like");
    if(x.style.color == 'black'){
        x.style.color = 'red';
    }else{
        x.style.color = 'black';
    }
    
}

function likeButtontwo() {
    var x = document.getElementById("like_two");
    if(x.style.color == 'black'){
        x.style.color = 'red';
    }else{
        x.style.color = 'black';
    }
    
}

function likeButtonthree() {
    var x = document.getElementById("like_three");
    if(x.style.color == 'black'){
        x.style.color = 'red';
    }else{
        x.style.color = 'black';
    }
    
}

function displayDetailstwo() {
    var x = document.getElementById("det-2");
    if(x.style.display == 'none'){
        x.style.display = 'block';
    }else{
        x.style.display = 'none';
    }
    
}

function displayDetails() {
    var x = document.getElementById("det-1");
    if(x.style.display == 'none'){
        x.style.display = 'block';
    }else{
        x.style.display = 'none';
    }
    
}

function displayDetailsthree() {
    var x = document.getElementById("det-3");
    if(x.style.display == 'none'){
        x.style.display = 'block';
    }else{
        x.style.display = 'none';
    }
    
}