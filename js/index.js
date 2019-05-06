// fadeIn动画
function fadeIn(obj, opacity, speed) {

    var go = setInterval(function () {

        opacity = opacity + speed / 1000

        obj.style.opacity = opacity
        obj.style.filter = 'alpha(opacity:' + opacity * 100 + ')' //lte IE 9

        if (opacity >= 1) { clearInterval(go) }
    }, 16)
}

// 焦点图
(function () {
    
    var banner = document.getElementsByClassName('index-banner')[0]
    var buttons = document.getElementsByClassName('index-banner-button')[0].getElementsByClassName('item')
    var images = document.getElementsByClassName('index-banner-img')
    var index = 0
    var auto = setInterval(function () { carousel() }, 3000)
    
    // 鼠标控制  
    banner.onmouseover = function () { clearInterval(auto) }
    banner.onmouseout = function () { auto = setInterval(function () { carousel() }, 3000) }

    // 轮播
    function carousel() {
        index < images.length - 1 ? index++ : index = 0
        for (var i = 0; i < images.length; i++) {
            remove(i)
        }
        add(index)
        fadeIn(images[index], .2, 15)
    }
    
    // 按钮点击
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].index = i
        buttons[i].onclick = function () {
            for (var j = 0; j < buttons.length; j++) {
                remove(j)
            }
            add(this.index)
            if(this.index !== index){ fadeIn(images[this.index], .2, 40) }
            index = this.index
        }
    }  

    // 状态
    function add(n) {
        buttons[n].className = 'item active'
        images[n].style.display = 'block'
    }
    function remove(n) {
        buttons[n].className = 'item'
        images[n].style.display = 'none'
    } 
})()


// 搜索框提示
var selectBar = document.getElementsByClassName('search-bar')[0]

selectBar.onfocus = function () {
    if(this.value == '请输入您想搜素的内容'){
        this.value = ''
        this.style.color = '#222'
    } 
}

selectBar.onblur = function () {
    if(this.value === ''){
        this.style.color = '#acb2bf'
        this.value = '请输入您想搜素的内容'
    }
}









