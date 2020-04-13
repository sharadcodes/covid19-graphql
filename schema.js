const axios = require("axios");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLSchema,
  GraphQLList,
  GraphQNonNull
} = require("graphql");

// root query

const meta = new GraphQLObjectType({
  name: "meta",
  fields: () => ({
    lat: { type: GraphQLFloat },
    long: { type: GraphQLFloat }
  })
});

const CountryType = new GraphQLObjectType({
  name: "Country",
  fields: () => ({
    country: { type: GraphQLString },
    countryInfo: {type: meta},
    cases: { type: GraphQLInt },
    todayCases: { type: GraphQLInt },
    deaths: { type: GraphQLInt },
    todayDeaths: { type: GraphQLInt },
    recovered: { type: GraphQLInt },
    active: { type: GraphQLInt },
    critical: { type: GraphQLInt },
    casesPerOneMillion: { type: GraphQLFloat },
    deathsPerOneMillion: { type: GraphQLFloat }
  })
});

const Covid19 = new GraphQLObjectType({
  name: "Covid19",
  fields: {
    country: {
      type: CountryType,
      args: {
        name: { type: GraphQLString }
      },
      resolve(parentValue, args) {
        return axios
          .get(
            "https://sharadcodes.github.io/c-data/data/countries/" +
              args.name +
              ".json"
          )
          .then(res => res.data);
      }
    },
    countries: {
      type: new GraphQLList(CountryType),
      args: {
        sortBy: { type: GraphQLString, defaultValue: "cases" },
        order: { type: GraphQLString, defaultValue: "desc" }
      },
      resolve(parentValue, args) {
        return axios
          .get("https://sharadcodes.github.io/c-data/data//world.json")
          .then(res => {
            return res.data.sort((a, b) => {
              if (args.order === "desc") {
                return b[args.sortBy] - a[args.sortBy];
              } else {
                return a[args.sortBy] - b[args.sortBy];
              }
            });
          });
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: Covid19
});
