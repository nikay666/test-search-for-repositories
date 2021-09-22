import gql from "graphql-tag";

export const SEARCH_REPOSITORIES = gql`query SearchRepositoriesByName($repositoryName: String!){ 
  search(query: $repositoryName, type: REPOSITORY, first: 10){
    repositoryCount
    edges{
      node{
        ... on Repository{
          owner {
            id
            login
          }
          name
          description
          languages(first: 1){
              nodes {
                name
                color
            }
          }
          stargazers{
            totalCount
          }
        }
      }
    }
  }
}`


export const GET_REPOSITORY = gql`query GetRepositoryById($repositoryID: ID!) { 
  node(id: $repositoryID){
    ... on Repository{
			id
      name
      nameWithOwner
    	description
      primaryLanguage{
        name
        color
      }
      languages(first: 100){
        totalSize
        edges{
          size
          node {
            id
            name
            color
          }
        }
      }
      stargazers{
        totalCount
      }
      issues{
        totalCount
      }
      pullRequests{
        totalCount
      }
    }
  }
}`

