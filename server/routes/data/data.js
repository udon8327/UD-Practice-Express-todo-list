const express = require('express');
const router = express.Router();

router.get('/store', (req, res) => {
  // console.log(`post from ${req.ip}:${req.port}`);
  res.json({
    code: "000",
    data: {
      store: [
        { 
          label: "台北市", value: "001",
          children: [
            { label: "新光三越台北店", value: "s001", },
            { label: "大遠百台北店", value: "s002", },
            { label: "台北旗艦店", value: "s003", },
          ]
        },
        { 
          label: "台中市", value: "002",
          children: [
            { label: "新光三越台中店", value: "s004", },
            { label: "大遠百台中店", value: "s005", },
            { label: "台中旗艦店", value: "s006", },
          ]
        },
        { 
          label: "台南市", value: "003",
          children: [
            { label: "新光三越台南店", value: "s007", },
            { label: "大遠百台南店", value: "s008", },
            { label: "台南旗艦店", value: "s009", },
          ]
        },
        { 
          label: "高雄市", value: "004",
          children: [
            { label: "新光三越高雄店", value: "s010", },
            { label: "大遠百高雄店", value: "s011", },
            { label: "高雄旗艦店", value: "s012", },
          ]
        },
      ]
    },
    message: "取得櫃點成功"
  });
});

module.exports = router;