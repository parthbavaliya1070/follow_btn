let btn = document.querySelector('button');
let choice = 0;

btn.addEventListener("click",function(){
    if(choice == 0){
        btn.innerHTML="Unfollow";
        btn.style.backgroundColor="rgb(195, 195, 196)";
        btn.style.color="black"
        choice = 1;
        btn.style.fontWeight="500"
    }
    else{
        btn.innerHTML="Follow";
        btn.style.backgroundColor="rgb(23, 110, 251)"
        btn.style.color="white"
        choice = 0;
    }
})