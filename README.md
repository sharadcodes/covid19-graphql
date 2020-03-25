# COVID19-Graphql
By sharadcodes

GOTO: https://sharad-gql-covid19.herokuapp.com/graphql

## HOW TO USE

**Example using fetch**

```js
fetch(
"https://sharad-gql-covid19.herokuapp.com/graphql",
{
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({
query: `{
            countries {
                country
                cases
                todayCases
                deaths
                todayDeaths
                recovered
                active
                critical
                casesPerOneMillion
            } 
        }
`
})
}
)
.then(res => res.json())
.then(res => console.log(res.data));
```

## SHOWCASE

| Project  | Github Repo | Live Demo |
| -------- |  ----------  | --------- |
| COVIDLIVE | https://github.com/giacomoalonzi/covidlive.it | https://covidlive.it/ |


