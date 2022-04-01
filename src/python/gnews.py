import requests, lxml
from bs4 import BeautifulSoup

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 Edge/18.19582"
}

params = {
    "q": "gta san andreas",
    "hl": "en",
    "tbm": "nws",
}

response = requests.get("https://www.google.com/search", headers=headers, params=params)
soup = BeautifulSoup(response.text, 'lxml')

for result in soup.select('.dbsr'):
    title = result.select_one('.nDgy9d').text
    link = result.a['href']
    source = result.select_one('.WF4CUc').text
    snippet = result.select_one('.Y3v8qd').text
    date_published = result.select_one('.WG9SHc span').text
    print(f'{title}\n{link}\n{snippet}\n{date_published}\n{source}\n')

