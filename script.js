const drugariIzSkole = [
  "NikolaV91",
  "anamarelja",
  "nesawesly",
  "danzrlq",
  "ivana02m",
  "dachoist",
];

const containerZaDrugare = document.querySelector("#drugariContainer");
const containerZaRandomLjude = document.querySelector("#randomItLjudi");

const input = document.querySelector("input");
const button = document.querySelector(".btn-search");

function createRandom(user) {
  user.items.forEach((e, i, arr) => {
    const containerZaRandom = document.createElement("div");
    containerZaRandom.classList.add("pojedinacniContainer");

    const userImage = document.createElement("img");
    userImage.setAttribute("src", e.avatar_url);
    
    userImage.classList.add("userImage");
    userImage.addEventListener("click", () => {
        localStorage.setItem('user',e.login);
        window.location.href = "./user.html";
      });


    const userID = document.createElement("h3");
    userID.innerHTML = `User: ${e.login}`;
    userID.classList.add("userID");

    containerZaRandomLjude.append(containerZaRandom);
    containerZaRandom.append(userImage, userID);
  });
}

function createDrugar(user) {
  const containerZaDruga = document.createElement("div");
  containerZaDruga.classList.add("pojedinacniContainer");

  const userImage = document.createElement("img");
  userImage.setAttribute("src", user.avatar_url);
  userImage.classList.add("userImage");
  userImage.addEventListener("click", () => {
    localStorage.setItem('user',user.login);
    window.location.href = "./user.html";
  });

  const userID = document.createElement("h3");
  userID.innerHTML = `${user.login}`;
  userID.classList.add("userID");

  containerZaDrugare.append(containerZaDruga);
  containerZaDruga.append(userImage, userID);
}

window.addEventListener("load", () => {
  drugariIzSkole.forEach((e, i, arr) => {
    fetch(`https://api.github.com/users/${e}`)
      .then((res) => res.json())
      .then((data) => {
        createDrugar(data);
      });
  });
});

button.addEventListener("click", (event) => {
  event.preventDefault();
  fetch(`https://api.github.com/search/users?per_page=${9}&q=${input.value}`)
    .then((res) => res.json())
    .then((data) => {
      containerZaRandomLjude.innerHTML = "";
      console.log(data);
      createRandom(data);
    });
});
