from GoogleNews import GoogleNews
from newspaper import Config
import pandas as pd
import nltk

#TODO: change this to node input
stock = input("Enter stock name: "))

# config will allow us to access the specified url for which we are #not authorized. Sometimes we may get 403 client error while parsing #the link to download the article.
nltk.download("punkt")

user_agent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36"
config = Config()
config.browser_user_agent = user_agent
googlenews = GoogleNews(period=7)
googlenews.search(stock)
result = googlenews.result()
df = pd.DataFrame(result)
df = df.drop(['img',"date","datetime"],axis=1)
js = df.to_json(orient = "records")
print(js)
