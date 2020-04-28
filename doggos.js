//define wrapper and buttons
const doggos = document.querySelector(".doggos");
const addDog = document.querySelector(".add-dog");
const resetDog = document.querySelector(".reset-dog");

//function adding new dog or replacing existing picture with the new one
function addNewDog() {
  let breed = document.querySelector("#dogs").value;
  //before pulling data we must check user want random dog or specific breed
  let DOG_URL = "";
  if (breed === "random") {
    DOG_URL = "https://dog.ceo/api/breeds/image/random";
  } else {
    //replace dash to fetch API properly
    breed = breed.replace("-", "/");
    DOG_URL = "https://dog.ceo/api/breed/" + breed + "/images/random";
  }
  //as we know now selected option let's get some data
  const promise = fetch(DOG_URL);
  promise
    .then(function (response) {
      const processingPromise = response.json();
      return processingPromise;
    })
    .then(function (processedResponse) {
      //if picture exist we replacing existing one
      if (document.querySelector(".dogPic")) {
        document.querySelector(".dogPic").src = processedResponse.message;
        img.alt = "cute doggy";
      } else {
        img = document.createElement("img");
        img.className = "dogPic";
        img.src = processedResponse.message;
        img.alt = "cute doggy";
        doggos.appendChild(img);
      }
    });
}

//remove picture and reset selection list
function clearWrapper() {
  doggos.innerHTML = "";
  document.querySelector("#dogs").value = "random";
}

//click listeners
addDog.addEventListener("click", addNewDog);
resetDog.addEventListener("click", clearWrapper);
