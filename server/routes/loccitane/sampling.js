const express = require('express');
const router = express.Router();

router.get('/sampling-v2', (req, res) => {
  res.json({
    // 活動狀態 1: 正常, 2: 兌換碼, 3: 已兌換, 4: 已結束
    status: 1,
    gallery: {
      gallery_list: [
        {
          seq: 1,
          anchor: 3,
          image: "img/01.jpg",
          actions: [
            {
              area: {
                x: '50%',
                y: '18%',
                width: "27%",
                height: "70%",
              },
              content: "https://tw.yahoo.com/"
            },
            {
              area: {
                x: '23%',
                y: '18%',
                width: "25%",
                height: "70%",
              },
              content: "https://www.gamer.com.tw/"
            },
          ]
        },
        {
          seq: 2,
          anchor: null,
          image: "img/02.jpg",
          actions: [
            {
              area: {
                x: '25%',
                y: '8%',
                width: "30%",
                height: "45%",
              },
              content: "https://www.google.com.tw/"
            },
          ]
        },
        {
          seq: 3,
          anchor: 2,
          image: "img/03.jpg",
          actions: [
            {
              area: {
                x: '13%',
                y: '35%',
                width: "20%",
                height: "55%",
              },
              content: "https://www.google.com.tw/"
            },
            {
              area: {
                x: '35%',
                y: '19%',
                width: "24%",
                height: "68%",
              },
              content: "https://www.google.com.tw/"
            },
            {
              area: {
                x: '63%',
                y: '63%',
                width: "28%",
                height: "25%",
              },
              content: "https://www.google.com.tw/"
            },
          ]
        },
      ],
    },
    info: {
      header: {
        image: "img/form_header.jpg",
        actions: []
      },
      body: {
        image: "img/form_body.jpg",
        actions: []
      },
      footer: {
        image: "img/form_footer.jpg",
        actions: []
      },
      form_list: [
        1, 1, 1, 1, 1
      ],
      form_custom_list: [
        {
          type: "textarea",
          label: "心得感想",
          name: "custom_1",
        },
        {
          type: "select",
          label: "你的評分",
          name: "custom_2",
          options: [
            {
              label: "很好",
              value: "good",
            },
            {
              label: "普通",
              value: "soso",
            },
            {
              label: "不好",
              value: "bad",
            },
          ],
        },
        {
          type: "textarea",
          label: "備註",
          name: "custom_3"
        },
        {
          type: "select",
          label: "下次會想再來消費嗎?",
          name: "custom_4",
          options: [
            {
              label: "好喔",
              value: "ok",
            },
            {
              label: "再考慮",
              value: "uh...",
            },
            {
              label: "打死不要",
              value: "nooooooooooo",
            },
          ],
        },
      ],
      store_options: [
        {
          label: "台北市", value: "台北市", 
          children: [
            {
              label: "新光三越店", value: "新光三越店",
              children: [
                { label: "2021-05-27", value: "2021-05-27",
                  children: [
                    { label: "11:00-13:00", value: "11:00-13:00" },
                    { label: "14:00-16:00", value: "14:00-16:00", disabled: true },
                    { label: "17:00-19:00", value: "17:00-19:00" },
                  ]
                },
                { label: "2021-06-30", value: "2021-06-30", 
                  children: [
                    { label: "12:00-15:00", value: "12:00-15:00", disabled: true },
                    { label: "18:00-20:00", value: "18:00-20:00", disabled: true },
                  ]
                },
              ]
            },
            {
              label: "台北101店", value: "台北101店",
              children: [
                { label: "2021-06-12", value: "2021-06-12",
                  children: [
                    { label: "11:00-13:00", value: "11:00-13:00", disabled: true },
                    { label: "14:00-16:00", value: "14:00-16:00", disabled: false },
                    { label: "17:00-19:00", value: "17:00-19:00", disabled: true },
                  ]
                },
                { label: "2022-01-01", value: "2022-01-01", 
                  children: [
                    { label: "12:00-15:00", value: "12:00-15:00", disabled: false },
                    { label: "18:00-20:00", value: "18:00-20:00", disabled: true },
                  ]
                },
              ]
            },
          ]
        },
        {
          label: "台南市", value: "台南市",
          children: [
            {
              label: "新光四越店", value: "新光四越店",
              children: [
                { label: "2021-05-27", value: "2021-05-27",
                  children: [
                    { label: "11:00-13:00", value: "11:00-13:00",},
                    { label: "14:00-16:00", value: "14:00-16:00",},
                    { label: "17:00-19:00", value: "17:00-19:00"},
                  ]
                },
                { label: "2021-06-30", value: "2021-06-30", 
                  children: [
                    { label: "12:00-15:00", value: "12:00-15:00"},
                    { label: "18:00-20:00", value: "18:00-20:00"},
                  ]
                },
              ]
            },
            {
              label: "台南102店", value: "台南102店",
              children: [
                { label: "2021-06-12", value: "2021-06-12",
                  children: [
                    { label: "11:00-13:00", value: "11:00-13:00"},
                    { label: "14:00-16:00", value: "14:00-16:00"},
                    { label: "17:00-19:00", value: "17:00-19:00"},
                  ]
                },
                { label: "2022-01-01", value: "2022-01-01", 
                  children: [
                    { label: "12:00-15:00", value: "12:00-15:00"},
                    { label: "18:00-20:00", value: "18:00-20:00"},
                  ]
                },
              ]
            },
          ]
        }
      ],
    },
  });
})

router.get('/sampling', (req, res) => {
  res.json({
    // 活動狀態 1: 正常, 2: 兌換碼, 3: 已兌換, 4: 已結束
    status: 1,
    gallery: {
      gallery_list: [
        {
          seq: 1,
          anchor: 3,
          image: "img/01.jpg",
          actions: [
            {
              area: {
                x: '50%',
                y: '18%',
                width: "27%",
                height: "70%",
              },
              content: "https://tw.yahoo.com/"
            },
            {
              area: {
                x: '23%',
                y: '18%',
                width: "25%",
                height: "70%",
              },
              content: "https://www.gamer.com.tw/"
            },
          ]
        },
        {
          seq: 2,
          anchor: 0,
          image: "img/02.jpg",
          actions: [
            {
              area: {
                x: '25%',
                y: '8%',
                width: "30%",
                height: "45%",
              },
              content: "https://www.google.com.tw/"
            },
          ]
        },
        {
          seq: 3,
          anchor: 2,
          image: "img/03.jpg",
          actions: [
            {
              area: {
                x: '13%',
                y: '35%',
                width: "20%",
                height: "55%",
              },
              content: "https://www.google.com.tw/"
            },
            {
              area: {
                x: '35%',
                y: '19%',
                width: "24%",
                height: "68%",
              },
              content: "https://www.google.com.tw/"
            },
            {
              area: {
                x: '63%',
                y: '63%',
                width: "28%",
                height: "25%",
              },
              content: "https://www.google.com.tw/"
            },
          ]
        },
      ],
    },
    info: {
      header: {
        image: "img/form_header.jpg",
        actions: []
      },
      body: {
        image: "img/form_body.jpg",
        actions: []
      },
      footer: {
        image: "img/form_footer.jpg",
        actions: []
      },
      form_list: [
        1, 1, 1, 1, 1, 1, 1
      ],
      custom_input_label: "心得感想",
      custom_select_label: "您的評分",
      custom_select_options: [
        {
          label: "很好",
          value: "a",
        },
        {
          label: "普通",
          value: "b",
        },
        {
          label: "不好",
          value: "c",
        },
      ],
      store_options: [
        {
          label: "新光三越店", value: "新光三越店",
          children: [
            { label: "2021-05-27", value: "2021-05-27",
              children: [
                { label: "11:00-13:00", value: "11:00-13:00"},
                { label: "14:00-16:00", value: "14:00-16:00"},
                { label: "17:00-19:00", value: "17:00-19:00"},
              ]
            },
            { label: "2021-06-30", value: "2021-06-30", 
              children: [
                { label: "12:00-15:00", value: "12:00-15:00"},
                { label: "18:00-20:00", value: "18:00-20:00"},
              ]
            },
          ]
        },
        {
          label: "台北101店", value: "台北101店",
          children: [
            { label: "2021-06-12", value: "2021-06-12",
              children: [
                { label: "11:00-13:00", value: "11:00-13:00"},
                { label: "14:00-16:00", value: "14:00-16:00"},
                { label: "17:00-19:00", value: "17:00-19:00"},
              ]
            },
            { label: "2022-01-01", value: "2022-01-01", 
              children: [
                { label: "12:00-15:00", value: "12:00-15:00"},
                { label: "18:00-20:00", value: "18:00-20:00"},
              ]
            },
          ]
        },
      ],
    },
  });
})

router.get('/exchange', (req, res) => {
  res.json({
    // 活動狀態 1: 正常, 2: 兌換碼, 3: 已兌換, 4: 已結束
    status: 2,
    info: {
      header: {
        image: "img/form_header.jpg",
        actions: []
      },
      body: {
        image: "img/form_body.jpg",
        actions: []
      },
      exchange: {
        image: "img/exchange.jpg",
        actions: []
      },
      footer: {
        image: "img/form_footer.jpg",
        actions: []
      },
      barcode: "12345678",
    },
  });
})

router.get('/result', (req, res) => {
  res.json({
    // 活動狀態 1: 正常, 2: 兌換頁, 3: 結果頁
    status: 3,
    gallery: {
      gallery_list: [
        {
          seq: 1,
          anchor: 3,
          image: "img/01.jpg",
          actions: [
            {
              area: {
                x: '50%',
                y: '18%',
                width: "27%",
                height: "70%",
              },
              content: "https://tw.yahoo.com/"
            },
            {
              area: {
                x: '23%',
                y: '18%',
                width: "25%",
                height: "70%",
              },
              content: "https://www.gamer.com.tw/"
            },
          ]
        },
        {
          seq: 2,
          anchor: 0,
          image: "img/02.jpg",
          actions: [
            {
              area: {
                x: '25%',
                y: '8%',
                width: "30%",
                height: "45%",
              },
              content: "https://www.google.com.tw/"
            },
          ]
        },
        {
          seq: 3,
          anchor: 2,
          image: "img/03.jpg",
          actions: [
            {
              area: {
                x: '13%',
                y: '35%',
                width: "20%",
                height: "55%",
              },
              content: "https://www.google.com.tw/"
            },
            {
              area: {
                x: '35%',
                y: '19%',
                width: "24%",
                height: "68%",
              },
              content: "https://www.google.com.tw/"
            },
            {
              area: {
                x: '63%',
                y: '63%',
                width: "28%",
                height: "25%",
              },
              content: "https://www.google.com.tw/"
            },
          ]
        },
      ],
    },
    info: {
      header: {
        image: "img/form_header.jpg",
        actions: []
      },
      result: {
        image: "img/result.jpg",
        actions: [
          {
            area: {
              x: '28%',
              y: '78%',
              width: "12%",
              height: "16%",
            },
            content: "https://www.facebook.com/"
          },
          {
            area: {
              x: '44%',
              y: '78%',
              width: "12%",
              height: "16%",
            },
            content: "https://line.me/zh-hant/"
          },
          {
            area: {
              x: '60%',
              y: '78%',
              width: "12%",
              height: "16%",
            },
            content: "https://www.instagram.com/"
          },
        ]
      },
      footer: {
        image: "img/form_footer.jpg",
        actions: []
      },
    },
  });
})

router.post('/submit', (req, res) => {
  res.json();
})

router.post('/exchange', (req, res) => {
  if(req.body.exchange_code == 1234) {
    res.json();
  }else {
    res.status(400).json({
      message: "兌換碼錯誤，請重新輸入"
    })
  }
})

module.exports = router;