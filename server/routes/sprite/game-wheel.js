const express = require('express');
const router = express.Router();
const Utils = require('../../utils');

router.get('/init', (req, res) => {
  res.json({
    user: {
      status: 1,
      count: 3,
    },
    event: {
      prizeAmount: 8,
      prizeList: [
        {
          name: "精美化妝品組 A",
          image: "img/prize_01.jpg"
        },
        {
          name: "精美化妝品組 B",
          image: "img/prize_02.jpg"
        },
        {
          name: "精美化妝品組 C",
          image: "img/prize_03.jpg"
        },
        {
          name: "精美化妝品組 D",
          image: "img/prize_04.jpg"
        },
        {
          name: "精美化妝品組 E",
          image: "img/prize_01.jpg"
        },
        {
          name: "精美化妝品組 F",
          image: "img/prize_02.jpg"
        },
        {
          name: "精美化妝品組 G",
          image: "img/prize_03.jpg"
        },
        {
          name: "精美化妝品組 H",
          image: "img/prize_04.jpg"
        },
      ],
      date: "2021/06/01 ~ 2021/08/31",
      info: "<p>1. 得獎者同意，酷必資訊得將其部分姓名及居住縣市公佈於本活動網站或相關行銷活動宣傳物中。</p><p>2. 個別得獎者之獎項內容及相關權利義務等注意事項以「得獎通知」信函說明為準。若得獎者未依酷必資訊之程序或期限內完成領獎手續，即視同自願放棄得獎資格，原獎項由主辦單位自行處理。</p><p>3. 提醒您：得獎名單以酷必資訊網站公告及得獎通知email為準；若您接獲類似通知，請務必主動與酷必資訊再次確認，切勿逕自匯款、操作ATM，以維護您的權益。</p><p>4. 參加者於參加本活動同時，即視為同意接受本活動規範，酷必資訊得將其部分姓名及居住縣市公佈於本活動網站或相關行銷活動宣傳物中，並有權決定取消、終止、修改或暫停本活動。</p><p>5. 得獎名單自網站公布日起十五日內，如聯繫未果將視同放棄，或其他不可抗力之因素，酷必資訊有權決定取消、終止、修改或暫停本活動及相關獎項。</p><p>6. 本活動獎項之寄送地點僅限台本島及離島地區。</p>"
    },
  });
})

router.get('/play', (req, res) => {
  res.json({
    user: {
      status: 1,
      isWinning: Utils.getRandom(0, 1),
      count: 2,
      prize: {
        index: Utils.getRandom(0, 8),
        name: "頭獎MARSHALL藍芽音響(市價:17,900元)",
        image: "img/prize_01.jpg",
      },
    },
  });
})

module.exports = router;