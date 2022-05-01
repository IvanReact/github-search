const getter = localStorage.getItem('user');
const main = document.querySelector('main');

window.addEventListener("load", () => {
      fetch(`https://api.github.com/users/${getter}`)
        .then((res) => res.json())
        .then((data) => {
          createDrugar(data);
        });
  });

  function createDrugar(user) {
    const containerZaSlikuDruga = document.createElement('div');
    containerZaSlikuDruga.classList.add('containerZaSlikuDruga');
 
    const userImage = document.createElement("img");
    userImage.setAttribute("src", user.avatar_url);
    
// ===========================================================
    const containerZaKorisnika = document.createElement("div");
    containerZaKorisnika.classList.add('containerZaKorisnika');

    const containerZaDruga = document.createElement("div");
    containerZaDruga.classList.add('containerZaDruga');
  
    const userID = document.createElement("h2");
    userID.innerHTML = `${user.name}`;
    userID.classList.add("userID");
  
    const numberOfFollowers = document.createElement("h3");
    numberOfFollowers.innerHTML = `Followers: ${user.followers}`;

    const following = document.createElement("h3");
    following.innerHTML = `Following: ${user.following}`;

    const bio = document.createElement("h3");
    bio.innerHTML = `Bio: ${user.bio}`;

 //===========================================================
    main.append(containerZaKorisnika)
    
    containerZaKorisnika.append(containerZaSlikuDruga);
    containerZaSlikuDruga.append(userImage);
    containerZaKorisnika.append(containerZaDruga);
    containerZaDruga.append( userID, numberOfFollowers,following,bio);

  }