window.onload = function(){
    const btn = document.getElementById("btn");
    const image = document.getElementById("img");
    const jokes_div = document.getElementById("jokes");

    btn.onclick = function(){

        image.style.animationName = "shake";
        
        image.style.animationPlayState ="running";

        setTimeout(function(){

            image.style.animationPlayState ="paused";                        

        },700)

        fetch("http://api.icndb.com/jokes/random?escape=javascript")
        .then(response => response.json())
        .then(data => jokes_div.innerHTML =data["value"]["joke"]  )
        .catch(err => console.log(err));


    }



}



