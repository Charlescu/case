

// 手机号验证
// function doValidate() {
//     var chineseReg = /^[\u4E00-\u9FA5]{2,4}$/;
//     if(!chineseReg.test(document.forma.name.value)) {
//         alert('用户名称有误，请重填');
//         document.forma.name.focus();
//         return false;
//     }
//     var phoneNumReg = /^1[3|4|5|7|8]\d{9}$/
//     <!--表示以1开头，第二位可能是3/4/5/7/8等的任意一个，在加上后面的\d表示数字[0-9]的9位，总共加起来11位结束。-->
//     if(!phoneNumReg.test(document.forma.phoneNum.value)) {
//         alert('手机号码有误，请重填，手机号码11位数字，目前支持前两位13、14、15、16、17、18手机号码');
//         document.forma.phoneNum.focus();
//         return false;
//     }
//     return true;
// }
var mobileReg = /^1(3[0-9]|4[57]|5[0-35-9]|7[0135678]|8[0-9])\d{8}$/; //手机正则




//倒计时
var countdown=60;
function settime(val) {
    if (countdown == 0) {
        val.removeAttribute("disabled");
        val.value="获取验证码";
        countdown = 60;
        return false;
    } else {
        val.setAttribute("disabled", true);
        val.value="重新发送(" + countdown + ")";
        countdown--;
    }
    setTimeout(function() {
        settime(val);
    },1000);
}
