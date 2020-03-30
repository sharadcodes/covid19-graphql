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
                countryInfo {
                  lat
                  long
                }
                cases
                todayCases
                deaths
                todayDeaths
                recovered
                active
                critical
                casesPerOneMillion
                deathsPerOneMillion
            } 
        }
`
})
}
)
.then(res => res.json())
.then(res => console.log(res.data));
```
## FOR SORTING DATA

Use `sortBy` followed by the key name and `order` folowed by either `desc` or `aesc`. 

`sortBy` is `cases` by default & `order` is `desc` by default.

```js
fetch(
"https://sharad-gql-covid19.herokuapp.com/graphql",
{
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({
query: `{
              countries(sortBy: "cases", order: "desc") {
                country
                countryInfo {
                  lat
                  long
                }                
                cases
                todayCases
                deaths
                todayDeaths
                recovered
                active
                critical
                casesPerOneMillion
                deathsPerOneMillion
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


