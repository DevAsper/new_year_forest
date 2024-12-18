document.addEventListener("DOMContentLoaded", () => {
  const squirrel = document.getElementById("squirrel-animation");
  const bird = document.getElementById("bird-animation");
  const rabbit = document.getElementById("rabbit-animation");
  const message = document.getElementById("message");

  // Загружаем анимации Lottie
  const squirrelAnimation = lottie.loadAnimation({
    container: squirrel,
    renderer: "svg",
    loop: true,
    autoplay: false,
    path: "squirrel.json", // JSON-анимация белки
  });

  const birdAnimation = lottie.loadAnimation({
    container: bird,
    renderer: "svg",
    loop: true,
    autoplay: false,
    path: "bird.json", // JSON-анимация снегиря
  });

  const rabbitAnimation = lottie.loadAnimation({
    container: rabbit,
    renderer: "svg",
    loop: true,
    autoplay: false,
    path: "rabbit.json", // JSON-анимация зайца
  });

  // Появление и воспроизведение анимаций с задержкой
  setTimeout(() => {
    squirrel.style.visibility = "visible";
    squirrel.style.opacity = 1;
    squirrelAnimation.play();
  }, 1000);

  setTimeout(() => {
    bird.style.visibility = "visible";
    bird.style.opacity = 1;
    birdAnimation.play();
  }, 3000);

  setTimeout(() => {
    rabbit.style.visibility = "visible";
    rabbit.style.opacity = 1;
    rabbitAnimation.play();
  }, 5000);

  // Появление сообщения
  setTimeout(() => {
    message.style.visibility = "visible";
    message.style.opacity = 1;
  }, 7000);
});
