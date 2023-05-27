let search = document.getElementById("search");
let searchBtn = document.getElementById("searchBtn");
let Comparison = document.getElementById("Comparison");
let navPic = document.getElementById("navPic");
let profilePic = document.getElementById("profilePic");
let userName = document.getElementById("userName");
let followers = document.getElementById("followers");
let following = document.getElementById("following");
let box1 = document.getElementById("box1");
let changeRepos1 = document.getElementById("changeRepos1");
let box2 = document.getElementById("box2");
let changeRepos2 = document.getElementById("changeRepos2");
let box3 = document.getElementById("box3");
let changeRepos3 = document.getElementById("changeRepos3");
let box4 = document.getElementById("box4");
let changeRepos4 = document.getElementById("changeRepos4");
let box5 = document.getElementById("box5");
let changeRepos5 = document.getElementById("changeRepos5");
let box6 = document.getElementById("box6");
let changeRepos6 = document.getElementById("changeRepos6");


searchBtn.addEventListener("click", getData);

    function getData(){
        fetch(`https://api.github.com/users/${search.value}`)
        .then((response)=> response.json())
        .then((data)=>{
            userName.innerHTML= data.name,
            document.getElementById("navPic").src =  `${data.avatar_url}`,
            document.getElementById("profilePic").src =  `${data.avatar_url}`,
            followers.innerHTML=`followers:${data.followers}`,
            following.innerHTML=`following:${data.following}`
        
        
        //get repos
        fetch(`https://api.github.com/users/${search.value}/repos`)
        .then((response) => response.json())
        .then((data) => {
            div_id = document.getElementById("inside_cards")
            div_id.innerHTML=''
            for (let index = 0; index < 6; index++) {
                if(data[index]){
                    div_id.innerHTML+=`<div class="card1" >
                <div class="firstCol">
                    <h5>${data[index].name}</h5>
                    <div class="type">
                    <div class="circleColor" id="circle${index}"></div> <p class="language">${data[index].language}</p></div></div>
                    <button>Public</button>
                </div>`
            if (data[index].language == "HTML") {
                document.getElementById(`circle${index}`).style.background = "red";
            }
            else if( data[index].language == "JavaScript") {
                document.getElementById(`circle${index}`).style.background = "yellow";
            }
            else if( data[index].language == "CSS") {
                document.getElementById(`circle${index}`).style.background = "#563d7c";
            }
                }
                else{
                    break
                }
            }
            })
        })}
        
        
        window.onload=()=>{
        
            fetch(`https://api.github.com/users/YousefBQaisi`)
            .then((response)=> response.json())
            .then((data)=>{
            userName.innerHTML= data.name,
            document.getElementById("navPic").src =  `${data.avatar_url}`,
            document.getElementById("profilePic").src =  `${data.avatar_url}`,
            followers.innerHTML=`followers:${data.followers}`,
            following.innerHTML=`following:${data.following}`
        
        
        //get repos
        fetch(`https://api.github.com/users/YousefBQaisi/repos`)
        .then((response) => response.json())
        .then((data) => {
            div_id = document.getElementById("inside_cards")
            div_id.innerHTML=''
            for (let index = 0; index < 6; index++) {
                if(data[index]){
                    div_id.innerHTML+=`<div class="card1" >
                    <div class="firstCol">
                    <h5>${data[index].name}</h5>
                    <div class="type">
                    <div class="circleColor" id="circle${index}"></div> <p class="language">${data[index].language}</p></div></div>
                    <button>Public</button>
                    </div>`
                if (data[index].language == "HTML") {
                    document.getElementById(`circle${index}`).style.background = "red";
                }
                else if( data[index].language == "JavaScript") {
                    document.getElementById(`circle${index}`).style.background = "yellow";
                }
                else if( data[index].language == "CSS") {
                    document.getElementById(`circle${index}`).style.background = "#563d7c";
                }}
                else{
                    break
                }
        }
        })
        })}