var slider = {
    //判斷裝置是否支援touch事件
    touch: ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch,
    slider: document.getElementById('slider_tab1'), //事件
    events: {
        index: 0, //顯示元素的索引
        slider: document.getElementById('slider_tab1'), //this為slider_tab1物件
        icons: document.getElementById('icons'),
        icon: this.icons.getElementsByTagName('span'),
        handleEvent: function (event) {
            var self = this; //this指events物件
            if (event.type == 'touchstart') {
                self.start(event);
            } else if (event.type == 'touchmove') {
                self.move(event);
            } else if (event.type == 'touchend') {
                self.end(event);
            }
        },
        //滑動開始
        start: function(event) {
            console.log("start");
            var touch = event.targetTouches[0]; //touches陣列物件獲得螢幕上所有的touch,取第一個touch
            startPos = {
                x: touch.pageX,
                y: touch.pageY,
                time: +new Date
            }; //取第一個touch的座標值
            isScrolling = 0; //這個引數判斷是垂直滾動還是水平滾動

            // console.log(this.slider_tab1);
            // console.log(this.slider_tab1.slider_tab1);

            document.getElementById('slider_tab1').addEventListener('touchmove', this, false);
            document.getElementById('slider_tab1').addEventListener('touchend', this, false);
        },
        //移動
        move: function (event) {
            //當螢幕有多個touch或者頁面被縮放過,就不執行move操作
            if (event.targetTouches.length > 1 || event.scale && event.scale !== 1) return;
            var touch = event.targetTouches[0];
            endPos = {
                x: touch.pageX - startPos.x,
                y: touch.pageY - startPos.y
            };
            isScrolling = Math.abs(endPos.x) < Math.abs(endPos.y) ? 1 :
                0; //isScrolling為1時,表示縱向滑動,0為橫向滑動
            if (isScrolling === 0) {
                event.preventDefault(); //阻止觸控事件的預設行為,即阻止滾屏
                document.getElementById('slider_tab1').className = 'slider_selection_slides';
                document.getElementById('slider_tab1').style.left = -this.index * 600 + endPos.x + 'px';
            }
        },
        //滑動釋放
        end: function (event) {
            var duration = +new Date - startPos.time; //滑動的持續時間
            if (isScrolling === 0) { //當為水平滾動時
                this.icon[this.index].className = '';
                if (Number(duration) > 10) {
                    //判斷是左移還是右移,當偏移量大於10時執行
                    if (endPos.x > 10) {
                        if (this.index !== 0) this.index -= 1;
                    } else if (endPos.x < -10) {
                        if (this.index !== this.icon.length - 1) this.index += 1;
                    }
                }
                this.icon[this.index].className = 'curr';
                document.getElementById('slider_tab1').className = 'cnt f-anim';
                document.getElementById('slider_tab1').style.left = -this.index * 600 + 'px';
            }
            //解綁事件
            document.getElementById('slider_tab1').removeEventListener('touchmove', this, false);
            document.getElementById('slider_tab1').removeEventListener('touchend', this, false);
        }
    }, //初始化
    init: function () {
        console.log("init");
        var self = this; //this指slider_tab1物件
        if (!!self.touch) self.slider.addEventListener('touchstart', self.events,
            false); //addEventListener第二個引數可以傳一個物件,會呼叫該物件的handleEvent屬性
    }
};
slider.init();