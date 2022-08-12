window.onload = function () {
    // 正则表达式
    var regmsg = /^\d{6}$/;
    var regtel = /^1[3|4|5|7|8]\d{9}$/;
    var regpwd = /^[a-zA-Z]\w{5,17}$/;
    // 获取元素
    var tel = document.querySelector('#tel');
    var msg = document.querySelector('#msg');
    var pwd = document.querySelector('#pwd');
    var surepwd = document.querySelector('#surepwd');
    regexp(tel, regtel); //手机号
    regexp(msg, regmsg); //短信
    regexp(pwd, regpwd); //密码 
    // 表单验证函数
    function regexp(ele, reg) {
        ele.onblur = function () {
            if (reg.test(this.value)) {
                // console.log('正确');
                this.nextElementSibling.className = 'success';
                this.nextElementSibling.innerHTML = '<i class="success_icon"></i>恭喜你输入正确';
            } else {
                // console.log('错误');
                this.nextElementSibling.className = 'error';
                this.nextElementSibling.innerHTML = '<i class="error_icon"></i>格式不正确，请重新输入';
            }
        }
    }
    // 确认密码部分
    surepwd.onblur = function () {
        if (this.value === pwd.value) {
            this.nextElementSibling.className = 'success';
            this.nextElementSibling.innerHTML = '<i class="success_icon"></i>恭喜你输入正确';
        } else {
            this.nextElementSibling.className = 'error';
            this.nextElementSibling.innerHTML = '<i class="error_icon"></i>两次密码输入不一致';
        }
    }
}