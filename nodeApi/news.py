from newsapi import NewsApiClient

# Init
newsapi = NewsApiClient(api_key="c3ecb2e0a22549f6bbdeedd6fa760ac6")

# /v2/top-headlines
query = input("enter company name: ")
top_headlines = newsapi.get_top_headlines(q=query)


# /v2/top-headlines/sources
sources = newsapi.get_sources()

print(top_headlines)
