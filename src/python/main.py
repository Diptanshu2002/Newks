import twint

# Configure
c = twint.Config()
c.Verified = True
c.Lang = "en"

# taking input of stock
stock = input("Enter the name of the stock you want to search tweets for: ")

# removing spaces from stock
stock = stock.replace(" ", "")

c.Search = "#" + stock + " lang:en"

# Run
twint.run.Search(c)
