var vm = new Vue({
    el: "#app",
    data: {
        isInit: 0,
        // 活動狀態 1: 首頁, 2: 兌換頁, 3: 結果頁
        status: 1,
        info: {
            header: {
                image: "",
                actions: []
            },
            body: {
                image: "",
                actions: []
            },
            exchange: {
                image: "",
                actions: []
            },
            footer: {
                image: "",
                actions: []
            },
            barcode: "",
        },
        exchange_code: "",
    },
    mounted: function () {
        this.init();
    },
    methods: {
        init: function () {
            var _this = this;
            udAxios.get('/exchange')
                .then(function (res) {
                if (res.status === 1) {
                    location.href = 'sampling.html';
                    return;
                }
                if (res.status === 3) {
                    location.href = 'result.html';
                    return;
                }
                _this.status = res.status;
                _this.info = res.info;
                _this.$nextTick(function () {
                    JsBarcode("#barcode", _this.info.barcode, {
                        format: "CODE39",
                        width: 2,
                        height: 60,
                        fontSize: 20
                    });
                });
                _this.isInit = 1;
            });
        },
        checkExchange: function () {
            isEmpty(this.exchange_code) ? udAlert('請先輸入兌換碼') : this.exchange();
        },
        exchange: function () {
            var _this = this;
            udAxios.post('/exchange', {
                exchange_code: this.exchange_code
            })
                .then(function (res) {
                udAlert("恭喜您兌換成功")
                    .then(function () { return location.href = "result.html"; });
            })
                .catch(function () { return _this.exchange_code = ""; });
        }
    }
});
//# sourceMappingURL=exchange.js.map