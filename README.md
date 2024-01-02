# Add to Cart

* <a href="https://add-to-cart-user.netlify.app/">Live Preview</a>

* <a href="https://scrimba.com/scrim/caGkqRH9?pl=pMQBqbdhb">View Scrim</a>

## Welcome! 👋


Thanks for viewing my project, this is `my another solo project` in my journey to become a `front-end developer.`

#frontendcareerpath #newbiechallenge #scrimba

## What learned 

* How to use `Local Storage`
* How to work with `Firebase`
* a new css property `Position: absolute;`
* Create `favicon image` first time
* learned how to create `Web App`

## Set up Firebase in JavaScript

  * Import
    
    ```
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
    import { getDatabase, ref, push, onValue, remove, } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
    ```
    
  * Create App Setting

    ```
    const appSettings = {
        databaseURL: "Enter Firebase realtime database url",
    };
    ```

  * Initialize App

    ```
    const app = initializeApp(appSettings);
    ```

  * Create Database

    ```
    const database = getDatabase(app);
    ```

  * Create Variable to store data in Firebase

    ```
    const yourVariableName = ref(database, "variableName");
    ```

  * Push data

    ```
    push(yourVariableName, "Data that you want to store");
    ```

  * Display Data

    ```
    onValue(userPath, function (snapshot) {
      if (snapshot.exists()) {
        let itemsArray = Object.entries(snapshot.val());

        for (let i = 0; i < itemsArray.length; i++) {
          console.log(itemsArray[i];
        }
      }
    };
    ```

  * Remove Data

    ```
    let exactLocationDb = ref(database, "Path to Variable");
    remove(exactLocationDb);
    ```

## Preview Gif

 ![demo](https://github.com/MrSandeepSharma/Add-to-Cart/assets/142038020/016d2389-e6ba-443f-a5f2-3ca575f8103a)
