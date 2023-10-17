var vm = new Vue({
    el: "#app",
    data: {
        isInit: 0,
        // 活動狀態 1: 首頁, 2: 兌換頁, 3: 結果頁
        status: 1,
        // 圖庫
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
        // 資訊
        info: {
            header: {
                image: "",
                actions: []
            },
            body: {
                image: "",
                actions: []
            },
            footer: {
                image: "",
                actions: []
            },
            // 固定欄位
            form_list: [0, 0, 0, 0, 0],
            // 自定義欄位
            form_custom_list: [
                {
                    type: "",
                    label: "",
                    name: "",
                    options: [
                        {
                            label: "",
                            value: "",
                        },
                    ],
                },
            ],
            store_options: [
                {
                    label: "", value: "",
                    children: [
                        { label: "", value: "",
                            children: [
                                { label: "", value: "",
                                    children: [
                                        { label: "", value: "" }
                                    ]
                                },
                            ]
                        },
                    ]
                },
            ],
        },
        form: {
            name: "",
            phone: "",
            store: ["", "", "", ""],
            birth: ["", "", ""],
            email: "",
        },
        rules: {
            name: [{ type: "required" }, { type: "name" }],
            phone: [{ type: "required" }, { type: "phone" }],
            email: [{ type: "email" }],
        }
    },
    mounted: function () {
        this.init();
    },
    methods: {
        init: function () {
            var _this = this;
            udAxios.get('/sampling-v2')
                .then(function (res) {
                if (res.status === 2) {
                    location.href = 'exchange.html';
                    return;
                }
                if (res.status === 3) {
                    location.href = 'result.html';
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
        submit: function () {
            var _this = this;
            this.$refs.form.validate(function () {
                udAxios.post('/submit', _this.form)
                    .then(function (res) { return location.href = "exchange.html"; });
            });
        },
    }
});
//# sourceMappingURL=sampling.js.map