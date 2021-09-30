const helloWorldResolvers = {
  Query: {
    myFirstEndpoint: (_parent, _args, _ctx, _info) => {
      return 'Hello World! 🎃 This is coming from GraphQL server ✈'
    }
  }
}
module.exports = helloWorldResolvers
