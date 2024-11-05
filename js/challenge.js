
function timerInit(){
    h1 = document.getElementById("counter")
    count = 0
    setInterval(function() {
        count++
        h1.innerText = count
    }, 1000)
    minus = document.getElementById("minus")
    minus.addEventListener("click",()=> {
        h1.innerText = count--
    })
    plus = document.getElementById("plus")
    plus.addEventListener("click",()=> {
        h1.innerText = count++
    })
    likes = document.getElementById("likes")
    heart = document.getElementById("heart")
    countLikes = 0
    heart.addEventListener("click", ()=> {
        countLikes++
        const newLikeEntry = document.createElement("li");
        newLikeEntry.innerText = `Total likes: ${countLikes}`;
        likes.appendChild(newLikeEntry)

    })
    
}




document.addEventListener("DOMContentLoaded", timerInit)