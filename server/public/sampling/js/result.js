var vm = new Vue({
    el: "#app",
    data: {
        isInit: 0,
        // 活動狀態 1: 首頁, 2: 兌換頁, 3: 結果頁
        status: 1,
        gallery: {
            gallery_list: [
                {
                    seq: 0,
                    anchor: 0,
                    image: "",
                    actions: [
                        {
                            area: {
                                x: "",
                                y: "",
                                width: "",
                                height: "",
                            },
                            content: ""
                        },
                    ]
                },
            ],
        },
        info: {
            header: {
                image: "",
                actions: []
            },
            result: {
                image: "",
                actions: []
            },
            footer: {
                image: "",
                actions: []
            },
        },
    },
    mounted: function () {
        this.init();
    },
    methods: {
        init: function () {
            var _this = this;
            udAxios.get('/result')
                .then(function (res) {
                if (res.status === 1) {
                    location.href = 'sampling.html';
                    return;
                }
                if (res.status === 2) {
                    location.href = 'exchange.html';
                    return;
                }
                _this.status = res.status;
                _this.gallery = res.gallery;
                _this.info = res.info;
                _this.isInit = 1;
            });
        },
        toAnchor: function (target) {
            if (!target)
                return;
            scrollTo("#anchor-" + target);
        },
    }
});
//# sourceMappingURL=result.js.map