//导航栏点击缓动跳转对应位置
let aTags = document.querySelectorAll('nav.menu > ul > li > a')
for (let i = 0; i < aTags.length; i++) {
    aTags[i].onclick = function (x) {
        x.preventDefault()
        let a = x.currentTarget
        let href = a.getAttribute('href')
        console.log(href)
        let element = document.querySelector(href)
        let top = element.offsetTop

        function animate(time) {
            requestAnimationFrame(animate);
            TWEEN.update(time);
        }
        requestAnimationFrame(animate);
        var targetTop = top - 80
        var currentTop = window.scrollY
        var s = targetTop - currentTop  //s 有时候是负数
        var t = Math.abs((s / 100) * 300)
        if (t >= 500) {
            t = 500
        }
        var coords = { y: currentTop }
        var tween = new TWEEN.Tween(coords)
            .to({ y: targetTop }, t)  //500ms 100像素 
            .easing(TWEEN.Easing.Quadratic.InOut)
            .onUpdate(function () {
                console.log(coords.y)
                window.scrollTo(0, coords.y)//coords.y是 Tween计算的
            })
            .start();
    }
}