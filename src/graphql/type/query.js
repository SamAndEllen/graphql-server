export default `
  type Query {
    agencies(id: Int): [Agencies]!
    artists(id: Int): [Artists]!
    members(id: Int): [Members]!
    albums(id: Int): [Albums]!
    music(id: Int): [Music]!
  }
`;