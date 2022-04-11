const NewsModel = require('./newsModel');

describe('news model class', () => {
   it('starts with no news', () => {
      const news = new NewsModel;

      expect(news.getNews()).toEqual([]);
   });

   it('adds news article', () => {
      const news = new NewsModel;
      news.addNews('Dog found!');

      expect(news.getNews()).toEqual(['Dog found!']);
   });

   it('resets the list of news', () => {
      const news = new NewsModel;
      news.addNews('Dog found!');
      news.reset();

      expect(news.getNews()).toEqual([]);
   });
});