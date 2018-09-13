
//滚动头部事件
function scroll(id) {
    var scrollTop = 0;
    var oTop = $(id).offset().top;
    $(document).scroll(function () {
        scrollTop = $(this).scrollTop();
        if (scrollTop >= oTop) {
            $('.header').addClass('head_bgc')
        } else {
            $('.header').removeClass('head_bgc')
        }
    })

}

// 点击关闭事件
function closeInfo() {
    $('.mask_box').hide();
}