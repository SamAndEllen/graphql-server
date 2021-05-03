export default `
  type Mutation {
    createAgency(name: String!, ceo: String!, address: String!, img: String!): Results
    updateAgency(id: Int!, name: String!, ceo: String!, address: String!, img: String!): Results
    destroyAgency(id: Int!): Results
    createArtist(name: String!, debut_date: String!, agency_id: Int!, img: String!, description: String!): Results
    updateArtist(id: Int!, name: String!, debut_date: String!, agency_id: Int!, img: String!, description: String!): Results
    destroyArtist(id: Int!): Results
    createMember(name: String!, age: Int!, gender: String!, position: String!, artist_id: Int!, img: String!): Results
    updateMember(id: Int!, name: String!, age: Int!, gender: String!, position: String!, artist_id: Int!, img: String!): Results
    destroyMember(id: Int!): Results
    createAlbum(name: String!, release_date: String!, artist_id: Int!, img: String!): Results
    updateAlbum(id: Int!, name: String!, release_date: String!, artist_id: Int!, img: String!): Results
    destroyAlbum(id: Int!): Results
    createMusic(track: Int!, name: String!, title: Boolean!, play_time: String!, album_id: Int!): Results
    updateMusic(id: Int!, track: Int!, name: String!, title: Boolean!, play_time: String!, album_id: Int!): Results
    destroyMusic(id: Int!): Results
  }
`;