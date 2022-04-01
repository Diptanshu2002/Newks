import twint
import time

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

t_end = time.time() + 10
while time.time() < t_end:
    twint.run.Search(c)
