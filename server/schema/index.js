const graphql = require("graphql"); // express 能识别 graphql

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
} = graphql;

// dummy data
var books = [{
    name: "Name of the Wind",
    genre: "Fantasy",
    id: "1",
    authorId: "1"
  },
  {
    name: "The Final Empire",
    genre: "Fantasy",
    id: "2",
    authorId: "2"
  },
  {
    name: "The Long Earth",
    genre: "Sci-Fi",
    id: "3",
    authorId: "3"
  },
  {
    name: "The Hero of Ages",
    genre: "Fantasy",
    id: "4",
    authorId: "2"
  },
  {
    name: "The Colour of Magic",
    genre: "Fantasy",
    id: "5",
    authorId: "3"
  },
  {
    name: "The Light Fantastic",
    genre: "Fantasy",
    id: "6",
    authorId: "3"
  },
];

var authors = [{
    name: "Patrick Rothfuss",
    age: 44,
    id: "1"
  },
  {
    name: "Brandon Sanderson",
    age: 42,
    id: "2"
  },
  {
    name: "Terry Pratchett",
    age: 66,
    id: "3"
  },
];

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: {
      type: GraphQLID, // GraphQLID 忽略字符串还是数字类型
    },
    name: {
      type: GraphQLString,
    },
    genre: {
      type: GraphQLString,
    },
    author: {
      type: AuthorType,
      resolve: (parent, args) =>
        authors.filter((item) => item.id === parent.authorId)[0],
    },
  }),
});

const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: {
      type: GraphQLID, // GraphQLID 忽略字符串还是数字类型
    },
    name: {
      type: GraphQLString,
    },
    age: {
      type: GraphQLInt,
    },
    // 一个作者可能有很多本书
    books: {
      type: new GraphQLList(BookType),
      resolve: (parent, args) =>
        books.filter((item) => item.authorId === parent.id),
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    book: {
      type: BookType,
      args: {
        id: {
          type: GraphQLID,
        },
      },
      resolve: (parent, args) => books.filter((item) => item.id === args.id)[0],
    },
    books: {
      type: new GraphQLList(BookType),
      resolve: (parent, args) => books,
    },
    author: {
      type: AuthorType,
      args: {
        id: {
          type: GraphQLID,
        },
      },
      resolve: (parent, args) =>
        authors.filter((item) => item.id === args.id)[0],
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve: (parent, args) => authors,
    },
  }),
});

const getCurrentMaxId = (arr) => Math.max(...arr.map(item => item.id))

// 操作数据部分
const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addAuthor: {
      type: AuthorType,
      args: {
        name: {
          type: new GraphQLNonNull(GraphQLString),
        },
        age: {
          type: new GraphQLNonNull(GraphQLInt),
        },
      },
      resolve: (parent, args) => {
        let author = {
          name: args.name,
          age: args.age,
          id: String(getCurrentMaxId(authors) + 1)
        };
        authors.push(author)
        return author
      }
    },
    addBook: {
      type: BookType,
      args: {
        name: {
          type: new GraphQLNonNull(GraphQLString),
        },
        genre: {
          type: new GraphQLNonNull(GraphQLString),
        },
        authorId: {
          type: new GraphQLNonNull(GraphQLID),
        },
      },
      resolve: (parent, args) => {
        let book = {
          name: args.name,
          genre: args.genre,
          id: String(getCurrentMaxId(books) + 1),
          authorId: args.authorId,
        };
        books.push(book)
        return book
      }
    },
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});