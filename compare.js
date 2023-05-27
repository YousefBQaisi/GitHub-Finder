let compImg1 = document.getElementById("compImg1");
let userName1 = document.getElementById("userName1");
let reposRes1 = document.getElementById("reposRes1");
let followersRes1 = document.getElementById("followersRes1");
let compImg2 = document.getElementById("compImg2");
let userName2 = document.getElementById("userName2");
let reposRes2 = document.getElementById("reposRes2");
let followersRes2 = document.getElementById("followersRes2");
let searchBtn1 = document.getElementById("searchBtn1");
let searchBtn2 = document.getElementById("searchBtn2");
let enterName1 = document.getElementById("enterName1");
let enterName2 = document.getElementById("enterName2");
let button = document.getElementById("button");

searchBtn1.addEventListener("click", getUser1);

function getUser1() {
  fetch(`https://api.github.com/users/${enterName1.value}`)
    .then((response) => response.json())
    .then((data) => {
      (document.getElementById("compImg1").src = `${data.avatar_url}`),
        (userName1.textContent = ` ${data.name}`),
        (reposRes1.textContent = ` ${data.public_repos}`),
        (followersRes1.textContent = ` ${data.followers}`);
    });
}

searchBtn2.addEventListener("click", getUser2);

function getUser2() {
  fetch(`https://api.github.com/users/${enterName2.value}`)
    .then((response) => response.json())
    .then((data) => {
      (document.getElementById("compImg2").src = `${data.avatar_url}`),
        (userName2.textContent = `${data.name}`),
        (reposRes2.textContent = `${data.public_repos}`),
        (followersRes2.textContent = ` ${data.followers}`);
    });
}

button.addEventListener("click", compare);

function compare() {
  let repoCount1 = parseInt(reposRes1.textContent);
  let repoCount2 = parseInt(reposRes2.textContent);
  let followersCount1 = parseInt(followersRes1.textContent);
  let followersCount2 = parseInt(followersRes2.textContent);

  if (repoCount1 > repoCount2) {
    userName1.style.backgroundColor = "green";
    userName2.style.backgroundColor = "red";
  } else if (repoCount1 < repoCount2) {
    userName1.style.backgroundColor = "red";
    userName2.style.backgroundColor = "green";
  } else if (repoCount1 == repoCount2) {
    if (followersCount1 > followersCount2) {
      userName1.style.color = "green";
      userName2.style.color = "red";
    } else if (followersCount1 < followersCount2) {
      userName1.style.color = "red";
      userName2.style.color = "green";
    } else {
      userName1.style.color = "yellow";
      userName2.style.color = "yellow";
    }
  }
}

