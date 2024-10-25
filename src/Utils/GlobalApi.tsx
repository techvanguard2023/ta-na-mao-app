import { gql, request } from "graphql-request";
const MASTER_URL: any = process.env.EXPO_PUBLIC_HYGRAPH_API;

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

const getPartnerById = async (id: string) => {
  const query = gql`
    query getPartnerById($id: ID!) {
      partner(where: { id: $id }) {
        id
        name
        rate
        createdAt
        location
        isActive
        image {
          url
        }
        category {
          name
        }
        description
        contact
      }
    }
  `;
  const result = await request(MASTER_URL, query, { id });
  return result;
};

const getCustomer = async (customerId: string) => {
  console.log("customerId", customerId);
  const query = gql`
    query getCustomer {
      customers(where: { customerId: $customerId }, stage: DRAFT) {
        id
        fullName
        email
        customerId
        createdBy {
          createdAt
        }
      }
    }
  `;
  const result = await request(MASTER_URL, query, { customerId });
  return result;
};

const postCustomer = async (data: any) => {
  const mutation = gql`
    mutation createCustomer($data: CustomerCreateInput!) {
      createCustomer(data: $data) {
        fullName
        email
        customerId
      }
    }
  `;
  const result = await request(MASTER_URL, mutation, { data });
  return result;
};

export default {
  getBanner,
  getCategories,
  getPartnersList,
  getPartnerById,
  getCustomer,
  postCustomer,
};
