import sys
# print('hello from python')
# variable = sys.argv[1]
# print(f"First name: {variable}")

import twint

# Configure
c = twint.Config()
c.Verified = True
c.Lang = "en"
c.Limit = 20
c.Store_json = True
c.Output = "twitterData.json"

# taking input of stock
stock = 'mrf'

if stock == "":
    stock = "stock"

# removing spaces from stock
stock = stock.replace(" ", "")

c.Search = "#" + stock + " lang:en"

# Run


twint.run.Search(c)