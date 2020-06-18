import scrapy


def url_builder(term, age=14):
    url = "https://ma.indeed.com/jobs?q=%22" + term + "%22&sort=date&fromage=" + str(age)
    return url



class IndeedSpider(scrapy.Spider):
    name = "indeed"
    pages = 1



    def start_requests(self):
        urls = [
            url_builder('développeur', 14),
            url_builder('software', 14)
        ]
        for url in urls:
            yield scrapy.Request(url=url, callback=self.parse)

    def parse(self, response):
        items = response.css('.jobsearch-SerpJobCard h2 a::attr(href)').extract()
        for item in items:
            r = {
                'url': "https://ma.indeed.com"+item,
                'id': item.replace('/rc/clk?jk=', '').replace('&vjs=3', '').replace('&fccid=', '_')
            }
            if r['id'].startswith('/pagead'):
                continue
            yield r


class IndeedDetailsSpider(scrapy.Spider):

    name = "indeed-details"

    def start_requests(self):
        for url in self.start_urls:
            yield scrapy.Request(url=url, callback=self.parse)

    def parse(self, response):
        item = {}
        item['url'] = response.request.meta['redirect_urls'][0]
        item['title'] = response.css('.jobsearch-JobInfoHeader-title ::text').extract()[0]
        item['source'] = ' '.join(response.css('.jobsearch-InlineCompanyRating ::text').extract())
        item['description'] = ' '.join(response.css('#jobDescriptionText ::text').extract())
        item['date'] = response.css('.jobsearch-JobMetadataFooter ::text').extract()[1].strip(' - ')

        yield {'details': item }