# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html

import pymongo

class IndeedcrawlerPipeline:
    def process_item(self, item, spider):
        return item



class MongoPipeline:
    collection_name = 'indeed'
    def __init__(self, mongo_uri, mongo_db):
        self.mongo_uri = mongo_uri
        self.mongo_db = mongo_db

    @classmethod
    def from_crawler(cls, crawler):
        return cls(
            mongo_uri=crawler.settings.get('MONGO_URI'),
            mongo_db=crawler.settings.get('MONGO_DATABASE', 'hespress')
        )

    def open_spider(self, spider):
        self.client = pymongo.MongoClient(self.mongo_uri)
        self.db = self.client[self.mongo_db]

        if spider.name == 'indeed-details':
            spider.start_urls = [ x['url'] for x in list(self.db[self.collection_name].find({'title': {"$exists": False}})) ]

    def close_spider(self, spider):
        self.client.close()

    def process_item(self, item, spider):
        if spider.name == 'indeed':
            if self.db[self.collection_name].count_documents({'id': item.get('id')}) == 0:
                self.db[self.collection_name].insert_one(dict(item))
            return item

        if spider.name == 'indeed-details':
            self.db[self.collection_name].update_one({'url': item.get('details').get('url')}, {'$set': item.get('details')})
            return item