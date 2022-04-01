$(function () {
    $(".hamburger").click(function () {
        $(".main-menu").toggleClass("not-active");
    });
    $(".main-menu-item a").click(function (e) {
        e.preventDefault();
        const path = $(this).attr("href");
        $(".out-animation-wrapper").fadeOut(2000, function () {
            window.location.href = path;
        });
    });
});
