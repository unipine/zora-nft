import { ApolloClient, gql, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.zora.co/graphql",
  cache: new InMemoryCache(),
});

export const getHighestNfts = () =>
  client
    .query({
      query: gql`
        query TopMonarchSales {
          sales(
            where: {
              collectionAddresses: "0xc729Ce9bF1030fbb639849a96fA8BBD013680B64"
            }
            pagination: { limit: 10 }
            sort: { sortKey: NATIVE_PRICE, sortDirection: DESC }
          ) {
            nodes {
              sale {
                saleType
                saleContractAddress
                buyerAddress
                sellerAddress
                tokenId
                transactionInfo {
                  blockTimestamp
                  transactionHash
                }
                price {
                  nativePrice {
                    decimal
                  }
                }
              }
              token {
                name
                image {
                  url
                }
              }
            }
          }
        }
      `,
    })
    .then((result) => result.data.sales.nodes);
