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
  return result;
};

const getCategories = async () => {
  const query = gql`
    query GetCategory {
      categories(first: 15) {
        id
        name
        icon {
          url
        }
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

const getPartnersList = async () => {
  const query = gql`
    query getPartners {
      partners(first: 10) {
        id
        name
        rate
        location
        isActive
        image {
          url
        }
        category {
          name
        }
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

export default {
  getBanner,
  getCategories,
  getPartnersList,
};
