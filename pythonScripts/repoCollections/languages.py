import json
import requests
from bs4 import BeautifulSoup

with open('./reportLang.json') as fp:
    file = json.load(fp)

print(len(file))


def repo_details(repoList):
    languages_used = []

    count = 0
    for i in range(len(repoList)):
        repo_url = f"https://github.com/{repoList[i]}"

        

        # Fetching the most used language
        try:
            data = requests.get(url=repo_url)
            soup = BeautifulSoup(data.content, "html.parser")
            lang = soup.find(class_="color-fg-default text-bold mr-1")
            if lang != None:
                lang_value = lang.string
                languages_used.append(lang_value)
            else:
                languages_used.append('NULL')
        except:
            languages_used.append('NULL')

        count += 1
        print(f"Data of the repo {repoList[i]} have been fetched")
        print(f"------  Count = {count}  ------\n")

    return (languages_used ,len(languages_used))

test_users = ['nikhil25803/LearnCPP', 'emersonsoares/ask']
result = repo_details(file)

with open('languages.json', 'w') as fp:
    json.dump(result[0], fp)