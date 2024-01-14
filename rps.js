const gameContainer = document.querySelector(".container"),
  userResult = document.querySelector(".user_result img"),
  compResult = document.querySelector(".comp_result img"),
  result = document.querySelector("#winText"),
  optionImages = document.querySelectorAll(".option_image img");

let userScore = 0;
optionImages.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    image.parentElement.classList.add("active");

    optionImages.forEach((image2, index2) => {
      index !== index2 && image2.parentElement.classList.remove("active");
    });

    gameContainer.classList.add("start");

    userResult.src = compResult.src = "images/rock2.svg";

    let time = setTimeout(() => {
      document.querySelector("#scoreText").innerHTML = `User = ${userScore}`;
      gameContainer.classList.remove("start");
      let imgSrc = e.target.src;
      userResult.src = imgSrc;

      let randomNum = Math.floor(Math.random() * 3);

      compImg = [
        "images/rock2.svg",
        "images/paper2.svg",
        "images/scissors2.svg",
      ];

      compResult.src = compImg[randomNum];

      let compVal = ["R", "P", "S"][randomNum];
      let userVal = ["R", "P", "S"][index];

      let printVal = {
        RR: "Draw",
        RP: "Comp",
        RS: "User",
        PP: "Draw",
        PR: "User",
        PS: "Comp",
        SS: "Draw",
        SR: "Comp",
        SP: "User",
      };

      let outcomeVal = printVal[userVal + compVal];

      //   result.textContent =
      //     userVal == compVal ? `Match Draw` : `${outcomeVal} Win!`;
      if (userVal == compVal) {
        result.textContent = "Draw";
      } else {
        if (outcomeVal == "Comp") {
          result.textContent = `${outcomeVal} Win!`;
        } else if (outcomeVal == "User") {
          userScore++;
          result.textContent = `${outcomeVal} Win!`;
          document.querySelector(
            "#scoreText"
          ).innerHTML = `User = ${userScore}`;
        }
      }
    }, 2500);
  });
});
