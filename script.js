function tossCoin() {

    let coin = document.getElementById("coin");
    let result = document.getElementById("result");

    coin.style.transform = "rotateY(720deg)";

    setTimeout(function () {

        let random = Math.ceil(Math.random() * 2);

        if (random === 1) {
            coin.src = "Head.png";
            result.innerHTML = "Head";
        } else {
            coin.src = "Tail.png";
            result.innerHTML = "Tail";
        }

        coin.style.transform = "rotateY(0deg)";

    }, 1000);
}