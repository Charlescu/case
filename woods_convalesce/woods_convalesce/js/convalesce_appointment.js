window.onload = function () {

    var show = document.getElementById('show');
    var show1 = document.getElementById('show1');
    var show2 = document.getElementById('show2');
    var hide = document.getElementById('hide');

    show.onclick = function () {
        hide.style.display = "none";
    }
    show1.onclick = function () {
        hide.style.display = "none";
    }
    show2.onclick = function () {
        hide.style.display = "block";
    }

}