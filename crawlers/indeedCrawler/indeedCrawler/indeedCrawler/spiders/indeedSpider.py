import scrapy




class IndeedSpider(scrapy.Spider):
    name = "indeed"
    pages = 1

    def start_requests(self):
        urls = [
            'https://www.hespress.com/politique/index.'+str(p)+'.html'
            for p in range(1, 2)
        ]
        for url in urls:
            yield scrapy.Request(url=url, callback=self.parse)

    def parse(self, response):
        items = response.css('.category_headline h1 a ::attr(href)').extract() + response.css('.short h2 a::attr(href)').extract()

        for item in items:
            yield {
                'url': "https://www.hespress.com"+item,
                'id': item.strip('/').strip('.html').replace('/', '_')
            }


class IndeedDetailsSpider(scrapy.Spider):

    name = "indeed-details"

    def start_requests(self):

        self.start_urls = [
                            'https://www.hespress.com/politique/474621.html'
                        ]
        for url in self.start_urls:
            yield scrapy.Request(url=url, callback=self.parse)

    def parse(self, response):
        item = {}
        item['articleId'] = response.url.replace('https://www.hespress.com/', '').strip('.html').replace('/', '_')
        item['title'] = response.css('#article_holder .page_title ::text').extract()[0]
        item['author'] = response.css('#article_holder .story_author ::text').extract()[0]
        item['date'] = ' '.join(response.css('#article_holder .story_stamp ::text').extract())
        item['content'] = ' '.join(response.css('#article_holder p ::text').extract())
        yield {'details': item}