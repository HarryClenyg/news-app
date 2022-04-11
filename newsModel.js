class NewsModel {
  constructor() {
     this.news = [];
  }

  getNews() {
     return this.news;
  }

  addNews(news) {
     this.news.push(news);
  }

  reset() {
     this.news = [];
  }
}

module.exports = NewsModel;