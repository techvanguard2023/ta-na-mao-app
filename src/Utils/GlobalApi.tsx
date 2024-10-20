import { gql, request } from "graphql-request";
const MASTER_URL = process.env.EXPO_PUBLIC_HYGRAPH_API;

const getBanner = async () => {
  const query = gql`
    query GetBanner {
      banners {
        id
        isActive
        name
        image {
          url
        }
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  console.log(result);
  return result;
};

export default {
  getBanner,
};
