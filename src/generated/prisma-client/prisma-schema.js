module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.3). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateSong {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

scalar Long

type Mutation {
  createSong(data: SongCreateInput!): Song!
  updateSong(data: SongUpdateInput!, where: SongWhereUniqueInput!): Song
  updateManySongs(data: SongUpdateManyMutationInput!, where: SongWhereInput): BatchPayload!
  upsertSong(where: SongWhereUniqueInput!, create: SongCreateInput!, update: SongUpdateInput!): Song!
  deleteSong(where: SongWhereUniqueInput!): Song
  deleteManySongs(where: SongWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  song(where: SongWhereUniqueInput!): Song
  songs(where: SongWhereInput, orderBy: SongOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Song]!
  songsConnection(where: SongWhereInput, orderBy: SongOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SongConnection!
  node(id: ID!): Node
}

type Song {
  id: ID!
  createdAt: DateTime!
  title: String!
  description: String
  url: String!
  composer: String
  conductedBy: String!
}

type SongConnection {
  pageInfo: PageInfo!
  edges: [SongEdge]!
  aggregate: AggregateSong!
}

input SongCreateInput {
  id: ID
  title: String!
  description: String
  url: String!
  composer: String
  conductedBy: String!
}

type SongEdge {
  node: Song!
  cursor: String!
}

enum SongOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  title_ASC
  title_DESC
  description_ASC
  description_DESC
  url_ASC
  url_DESC
  composer_ASC
  composer_DESC
  conductedBy_ASC
  conductedBy_DESC
}

type SongPreviousValues {
  id: ID!
  createdAt: DateTime!
  title: String!
  description: String
  url: String!
  composer: String
  conductedBy: String!
}

type SongSubscriptionPayload {
  mutation: MutationType!
  node: Song
  updatedFields: [String!]
  previousValues: SongPreviousValues
}

input SongSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SongWhereInput
  AND: [SongSubscriptionWhereInput!]
  OR: [SongSubscriptionWhereInput!]
  NOT: [SongSubscriptionWhereInput!]
}

input SongUpdateInput {
  title: String
  description: String
  url: String
  composer: String
  conductedBy: String
}

input SongUpdateManyMutationInput {
  title: String
  description: String
  url: String
  composer: String
  conductedBy: String
}

input SongWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  composer: String
  composer_not: String
  composer_in: [String!]
  composer_not_in: [String!]
  composer_lt: String
  composer_lte: String
  composer_gt: String
  composer_gte: String
  composer_contains: String
  composer_not_contains: String
  composer_starts_with: String
  composer_not_starts_with: String
  composer_ends_with: String
  composer_not_ends_with: String
  conductedBy: String
  conductedBy_not: String
  conductedBy_in: [String!]
  conductedBy_not_in: [String!]
  conductedBy_lt: String
  conductedBy_lte: String
  conductedBy_gt: String
  conductedBy_gte: String
  conductedBy_contains: String
  conductedBy_not_contains: String
  conductedBy_starts_with: String
  conductedBy_not_starts_with: String
  conductedBy_ends_with: String
  conductedBy_not_ends_with: String
  AND: [SongWhereInput!]
  OR: [SongWhereInput!]
  NOT: [SongWhereInput!]
}

input SongWhereUniqueInput {
  id: ID
}

type Subscription {
  song(where: SongSubscriptionWhereInput): SongSubscriptionPayload
}
`
      }
    