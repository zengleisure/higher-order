;
(function() {
    'use strict';

    // Fastclick.attach(document.body);

    /**
     * @constructor
     * @param {Element} layer 是要监听的图层 ele元素 比如document.body
     * @param {object} options    
     */
    function Fastclick(layer, option) {
        var oldClick;
        var option = option || {};

        /**
         * 是否正在跟踪当前点击
         * @type Boolean
         */
        this.trackingClick = false;

        /**
         * 点击开始的跟踪时间戳
         * @type number
         */
        this.trackingClickStart = 0;

        /** 被点击跟踪的元素
         * @type eventTarget 
         */
        this.targetElement = null;

        /**
         * 触摸开始事件的坐标
         * @type number
         */
        this.touchStartX = 0;
        this.touchStartY = 0;

        /* 从ID标识符里面检索出最后一次ID */
        this.lastTouchIdentifier = 0;

        // 触摸边界 超出这个边界将会被取消
        this.touchBoundary = options.touchBoundary || 10;

        // fastclick element
        this.layer = layer;

        // 轻敲的最小时间
        this.tapDelay = option.tapDelay || 200;

        // tap 的最大时间
        this.tapTimeout = option.tapTimeout || 700;


    }

}())