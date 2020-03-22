const axios = require("axios");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQNonNull
} = require("graphql");

// root query

const CountryType = new GraphQLObjectType({
  name: "Country",
  fields: () => ({
    country: { type: GraphQLString },
    cases: { type: GraphQLInt },
    todayCases: { type: GraphQLInt },
    deaths: { type: GraphQLInt },
    todayDeaths: { type: GraphQLInt },
    recovered: { type: GraphQLInt },
    active: { type: GraphQLInt },
    critical: { type: GraphQLInt },
    casesPerOneMillion: { type: GraphQLInt }
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
          .get("https://corona.lmao.ninja/countries/" + args.name)
          .then(res => res.data);
      }
    },
    countries: {
      type: new GraphQLList(CountryType),
      resolve(parentValue, args) {
        return axios
          .get("https://corona.lmao.ninja/countries")
          .then(res => res.data);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: Covid19
});
