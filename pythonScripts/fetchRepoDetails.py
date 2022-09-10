import json
import requests
from bs4 import BeautifulSoup

with open('repositories.json') as fp:
    file = json.load(fp)

len(file)


def repo_details(repoList):
    pullRequests_list = []
    contributors_list = []
    stars_count = []
    fork_count = []
    issue_count = []

    count = 0
    for i in range(len(repoList)):
        repo_url = f"https://github.com/{repoList[i]}"

        data = requests.get(url=repo_url)
        soup = BeautifulSoup(data.content, "html.parser")

        # Fetching Pull Request numbers
        try:
            pullCount = soup.find(id='pull-requests-repo-tab-count')
            pullValue = int(pullCount.string)
            pullValue = int(pullValue)
            pullRequests_list.append(pullValue)
        except:
            pullRequests_list.append(0)

        # Fetching Contributors numbers
        try:
            con = soup.find_all(class_='Counter')
            contributorsValue = int(con[-1].string)
            contributors_list.append(contributorsValue)
        except:
            contributors_list.append(0)

        # Fetching Stars count
        try:
            starCount = soup.find(id='repo-stars-counter-star')
            starValue = int(starCount.string)
            stars_count.append(starValue)
        except:
            stars_count.append(0)

        # Fetching Forks count
        try:
            forks = soup.find(id='repo-network-counter')
            forkValue = int(forks.string)
            fork_count.append(forkValue)
        except:
            fork_count.append(0)

        # Fetching issue count
        try:
            issues = soup.find(id='issues-repo-tab-count')
            issueValue = int(issues.string)
            issue_count.append(issueValue)
        except:
            issue_count.append(0)

        count += 1
        print(f"Data of the repo {repoList[i]} have been fetched")
        print(f"------  Count = {count}  ------\n")

    return (pullRequests_list, contributors_list, stars_count, fork_count,
            issue_count, len(pullRequests_list), len(contributors_list),
            len(starCount), len(fork_count), len(issue_count))


# test_users = ['nikhil25803/LearnCPP', 'coding-geek21/classDeck']
result = repo_details(file)
print(result)

with open('pull_requests.json', 'w') as fp:
    json.dump(result[0], fp)

with open('contributors.json', 'w') as fp:
    json.dump(result[1], fp)

with open('stars.json', 'w') as fp:
    json.dump(result[2], fp)

with open('forks.json', 'w') as fp:
    json.dump(result[3], fp)

with open('issues.json', 'w') as fp:
    json.dump(result[4], fp)
