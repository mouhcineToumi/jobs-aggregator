import scrapy




class IndeedSpider(scrapy.Spider):
    name = "indeed"
    pages = 1

    def start_requests(self):
        urls = [
            'https://ma.indeed.com/jobs?q=%22d%C3%A9veloppeur%22&sort=date'
        ]
        for url in urls:
            yield scrapy.Request(url=url, callback=self.parse)

    def parse(self, response):
        items = response.css('.jobsearch-SerpJobCard h2 a::attr(href)').extract()

        for item in items:
            yield {
                'url': "https://ma.indeed.com"+item,
                'id': item.replace('/rc/clk?jk=', '').replace('&vjs=3', '').replace('&fccid=', '_')
            }


class IndeedDetailsSpider(scrapy.Spider):

    name = "indeed-details"

    def start_requests(self):

        self.start_urls = [
                            'https://www.indeed.com/rc/clk?jk=aae2e94e1afa6e83&fccid=dd616958bd9ddc12&vjs=3',
                            'https://www.indeed.com/rc/clk?jk=84dcdf06141e0df1&fccid=8ae7f42a9b7285b6&vjs=3'
                        ]
        for url in self.start_urls:
            yield scrapy.Request(url=url, callback=self.parse)

    def parse(self, response):
        item = {}
        item['title'] = response.css('.jobsearch-JobInfoHeader-title ::text').extract()[0]
        item['source'] = ' '.join(response.css('.jobsearch-InlineCompanyRating ::text').extract())
        item['description'] = ' '.join(response.css('#jobDescriptionText ::text').extract())
        item['date'] = response.css('.jobsearch-JobMetadataFooter ::text').extract()[1]

        yield {'details': item }