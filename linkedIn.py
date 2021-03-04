import requests
from bs4 import BeautifulSoup
import json

result = requests.get('https://quicktest.prakshal.repl.co/yo.html')
content = result.content
all_data = []
soup = BeautifulSoup(content, 'lxml')
overall = soup.find("ul", class_="experience__list")
all_experiences = overall.find_all("div", class_="result-card__contents")
for experiences in all_experiences:
    title = experiences.find("h3", class_="result-card__title").text.strip()

    place = experiences.find("h4", class_="result-card__subtitle").text.strip()

    duration = (experiences.find("span", class_="date-range")).find_all("time")
    start = str(duration[0].text)
    end = str(duration[1]) if(len(duration) == 2) else "Present"

    information = "<p>" + experiences.find("p", class_="show-more-less-text__text--less").text.strip() + "</p>"
    if(experiences.find("p", class_="show-more-less-text__text--more") != None):
        information += "<p>" + experiences.find("p", class_="show-more-less-text__text--more").text.strip() + "</p>"
    dict = {"title": title, "place": place, "duration": [start, end], "information": information}
    all_data.append(dict)

retData = json.dumps(all_data, indent=1)
f = open("experiences.json", "w")
f.write(retData)
f.close()