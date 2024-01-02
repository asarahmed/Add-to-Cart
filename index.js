import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
  remove,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
  databaseURL:
    "https://add-to-card-app-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
let shoppingListItem;

const userNameEl = document.getElementById("username-el");
const submitBtnEl = document.getElementById("submit-btn");
const popUpEl = document.getElementById("pop-up");
const heroEl = document.getElementById("hero");
const shoppingListEl = document.getElementById("shopping-list");
const heroInputFieldEl = document.getElementById("hero-input-field");
const addToCardBtnEl = document.getElementById("addtocard-btn");

let localName = localStorage.getItem("username");
let userPath = ref(database, `user/${localName}`);

// Login
submitBtnEl.addEventListener("click", function () {
  let userName = userNameEl.value;
  if (userName) {
    userNameEl.value = "";
    saveUserName(userName);
  } else {
    userNameEl.style.border = "2px solid red";
  }
});

function saveUserName(name) {
  shoppingListItem = ref(database, `user/${name}`);
  push(shoppingListItem, "no items there...");
  localStorage.setItem("username", name);
  popUpEl.style.display = "none";
  heroEl.style.display = "flex";
  logNoitem();
}

if (localName) {
  popUpEl.style.display = "none";
  heroEl.style.display = "flex";
} else {
  popUpEl.style.display = "block";
  heroEl.style.display = "none";
}

addToCardBtnEl.addEventListener("click", function () {
  let newItem = heroInputFieldEl.value;
  localName = localStorage.getItem("username");
  userPath = ref(database, `user/${localName}`);
  if (newItem) {
    heroInputFieldEl.value = "";
    push(userPath, newItem);
  } else {
    heroInputFieldEl.style.border = "2px solid red";
  }
  showData();
});

function showData() {
  onValue(userPath, function (snapshot) {
    if (snapshot.exists()) {
      let itemsArray = Object.entries(snapshot.val());
      shoppingListEl.innerHTML = "";

      for (let i = 0; i < itemsArray.length; i++) {
        let currentItem = itemsArray[i];

        if (itemsArray.length === 1) {
          logNoitem();
        } else {
          if (i === 0) {
            continue;
          }
          appedItemToShopingList(currentItem);
        }
      }
    }
  });
}

showData();

function appedItemToShopingList(item) {
  let itemId = item[0];
  let itemValue = item[1];

  let newEl = document.createElement("li");
  newEl.textContent = itemValue;

  newEl.addEventListener("click", function () {
    let exactLocationDb = ref(database, `user/${localName}/${itemId}`);
    remove(exactLocationDb);
  });

  shoppingListEl.append(newEl);
}

function logNoitem() {
  shoppingListEl.innerHTML += `
          <p> No items there... </p>
      `;
}
