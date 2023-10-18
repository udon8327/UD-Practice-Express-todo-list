const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const UserSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    create_at: {
      type: String,
    },
    update_at: {
      type: String,
    }
  }
)
const UserModel = mongoose.model('user', UserSchema);

router.get('/', async (req, res) => {
  console.log('req.query: ', req.query);
  for(query in req.query) {
    if (!req.query[query]) delete req.query[query];
  };
  console.log('req.query: ', req.query);
  const data = await UserModel.find(req.query);
  res.send({
    code: "200",
    data: data,
    message: "取得成功"
  });
});

router.get('/:id', async (req, res) => {
  const data = await UserModel.findById(req.params.id);
  res.send({
    code: "200",
    data: data,
    message: "取得成功"
  });
});

router.post('/create', async (req, res) => {
  req.body.create_at = Math.floor(Date.now() / 1000);
  const data = await UserModel.create(req.body);
  res.send({
    code: "200",
    data: data,
    message: "新增成功"
  });
});

router.get('/edit/:id', async (req, res) => {
  const data = await UserModel.findById(req.params.id);
  res.send({
    code: "200",
    data: data,
    message: "取得成功"
  });
});

router.put('/edit/:id', async (req, res) => {
  req.body.update_at = Math.floor(Date.now() / 1000);
  const data = await UserModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.send({
    code: "200",
    data: data,
    message: "編輯成功"
  });
});

router.delete('/delete/:id', async (req, res) => {
  const data = await UserModel.findByIdAndRemove(req.params.id);
  if (!data) {
    res.send({
      code: "200",
      data: data,
      message: "刪除失敗，找不到此id"
    });
    return;
  }
  res.send({
    code: "200",
    data: data,
    message: "刪除成功"
  });
});

module.exports = router;