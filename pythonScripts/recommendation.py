
import pandas as pd


dataFrame = pd.read_csv('./githubDataset.csv')
dataFrame = dataFrame.dropna()


input = {
    "language": ["Python"]
}

inputFrame = pd.DataFrame(input)

inputId = dataFrame[dataFrame['language'].isin(
    inputFrame['language'].tolist())]

inputId = inputId.reset_index().iloc[:, 1:]

output = []
for i in range(len(inputId)):
    dict = {
        "repositories": inputId["repositories"][i],
        "stars_count": inputId["stars_count"][i],
        "forks_count": inputId["forks_count"][i],
        "issues_count": inputId["issues_count"][i],
        "pull_requests": inputId["pull_requests"][i],
        "contributors": inputId["contributors"][i],
    }
    output.append(dict)

print(output)
