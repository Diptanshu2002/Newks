def tweets():    
    import sys
    # print('hello from python')


    import twint
    import csv
    import json

    open("twitterData.json", "w").close()
    open("twitterData.csv", "w").close()
    with open("twitterData.csv", newline="") as f:
        r = csv.reader(f)
        data = [line for line in r]
    with open("twitterData.csv", "w", newline="") as f:
        w = csv.writer(f)
        w.writerow(["Username", "Name", "Tweet"])
        w.writerows(data)
    # with open("twitterData.csv", "a") as file:
    #     file.write("username,name")
    # Configure
    tweets = []
    c = twint.Config()
    c.Verified = True
    c.Lang = "en"
    c.Store_csv = True
    c.Output = "twitterData.csv"
    c.Hide_output = True
    c.Limit = 10
    c.Custom = {}
    c.Custom["tweet"] = ["username", "name", "tweet"]

    # taking input of stock
    # stock = input("Enter the name of the stock you want to search tweets for: ")
    # variable = sys.argv[1]
    # print(f"First name: {variable}")
    stock = 'mrf'
    if stock == "":
        stock = "stock"

    # removing spaces from stock
    stock = stock.replace(" ", "")

    c.Search = "#" + stock + " lang:en"

    # Run

    var = twint.run.Search(c)


    def csv_to_json(csvFilePath, jsonFilePath):
        jsonArray = []

        # read csv file
        with open(csvFilePath, encoding="utf-8") as csvf:
            # load csv file data using csv library's dictionary reader
            csvReader = csv.DictReader(csvf)

            # convert each csv row into python dict
            for row in csvReader:
                # add this python dict to json array
                jsonArray.append(row)

        # convert python jsonArray to JSON String and write to file
        with open(jsonFilePath, "w", encoding="utf-8") as jsonf:
            jsonString = json.dumps(jsonArray, indent=4)
            jsonf.write(jsonString)


    csvFilePath = r"twitterData.csv"
    jsonFilePath = r"twitterData.json"
    csv_to_json(csvFilePath, jsonFilePath)

    f = open("twitterData.json", "r")
    content = f.read()
    f.close()
    return (content)
    
