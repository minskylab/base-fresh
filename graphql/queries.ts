export const usersGraphql = /* GraphQL */ `
  query ListUsers {
    users {
      data {
        id
        name
        email
      }
    }
  }
`;
