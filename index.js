console.log('this is working so far')

const NewsModel = require("./newsModel");

const model = new NewsModel();
console.log(model.getNews());
