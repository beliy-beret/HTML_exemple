// Profit value
const profit = $("#profit");
profit.css("background", `linear-gradient(94.78deg, #DF5950 0%, #451046 ${profit.val()/10000}%, #fff ${profit.val()/10000}%, white 100%)`);

// Taimer
const taimer = () => {
    let date = new Date(2022, 12, 31);
    let now = new Date();
    gap = date - now;
    let day = Math.floor(gap / 1000 / 60 / 60 / 24);
    let hour = Math.floor((gap / 1000 / 60 / 60) % 24);
    let min = Math.floor((gap / 1000 / 60) % 60);
    let sec = Math.floor((gap / 1000) % 60);
    let alert = $(`<p class="home__alert">Акция закончилась!</p>`)
    if(gap > 0){
        $("#days").text(day);
        $("#hours").text(hour);
        $("#minets").text(min);
        $("#seconds").text(sec);
    } else {
        $(".home__timer").html(alert);
    };
}
setInterval(taimer, 1000);

// Login
const log = () => {
    $(".login").css("display", "block");
};
const sub = (event) => {
    event.preventDefault();
    $(".login").css("display", "none");
};
$(".login__form").submit(sub);
$(".home__login").click(log);
