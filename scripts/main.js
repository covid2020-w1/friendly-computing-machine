//we want two features: image swapper and personalized greeter
//for image swapper, we want it so that when the user clicks on the image, it toggles between the first image and a second image. First, the user clicks. Then., the browser checks the img src. If the src = to path of the first photo, then it should change the src to the second photo. Otherwise, change the src to the path of the first photo

myImage = document.querySelector("img");

function changeImage(){
    mySrc = myImage.getAttribute("src");
    if(mySrc === "images/wayne.png"){
        myImage.setAttribute("src", "images/tyler.png")
    } else {
        myImage.setAttribute("src", "images/wayne.png")
    }
}

myImage.onclick = () => {
    changeImage();
};

//sweet!!!! now let's do the custom greeter. when the user enters the webpage, the browser should prompt them to enter their name. The browser then stores it and changes the text of the h1 to include their name. However, if the user is returning, the browser should retrieve and insert the user's previously entered name. Another way of saying this is that when the user visits, the browser should check to see if there's already a stored name. If their isn't, then guide them through the name entering process. If there is, then just insert that previously stored name.

let myHeader = document.querySelector("h1");
let myButton = document.querySelector("button")

function setName() {
    const myName = prompt("Enter your name");
    localStorage.setItem("name", myName);
    myHeader.textContent = `Let's learn about rappers, ${myName}`;
}
    
if(!localStorage.getItem("name")){
    setName();
}else{
    const storedName = localStorage.getItem("name");
    myHeader.textContent = `Let's learn about rappers, ${storedName}`;
}


myButton.onclick = () => {
    setName();
}
