import { request, gql } from 'graphql-request'
const MASTER_URL=process.env.EXPO_PUBLIC_HYGRAPH_API

const getSlider=async()=>{
    const query = gql`
        query GetSlider {
            sliders {
                id
                name
                image {
                    url
                }
            }
        }
    `
    const result = await request(MASTER_URL, query);
    return result;
}

const getCategories=async()=>{
    const query = gql`
        query GetCategory {
            categories(orderBy: name_ASC) {
                id
                name
                icon {
                    url
                }
            }
        }
    `
    const result = await request(MASTER_URL, query);
    return result;
}

const getProductList=async()=>{
    const query = gql`
        query getProduts {
            products {
                id
                name
                price
                isActive
                sku
                promoPrice
                publishedAt
                createdAt
                description
                images {
                    url
                }
                category {
                    name
                }
                carModels {
                    name
                    version
                    yearOfManufacture
                    yearOfModel
                }
            }
        }
    `
    const result = await request(MASTER_URL, query);
    return result;
}

const getBusinessListByCategory=async(category)=>{
    const query = gql`
        query getBusinessList {
            businessLists(where: {category: {name: "`+category+`"}}) {
                id
                name
                email
                category {
                    name
                }
                address
                about
                contactPerson
                images {
                    url
                }
            }
        }
    `
    const result = await request(MASTER_URL, query);
    return result;
}



//novo//

const getBanner=async()=> {
    const query = gql`
        query GetBanner {
            banners {
                id
                name
                isActive
                image {
                    url
                }
            }
        }
    `
    const result = await request(MASTER_URL, query);
    console.log(result)
    return result;
}

const getBrand=async()=> {
    const query = gql`
        query GetBrand {
            brands {
                id
                name
                isActive
                image {
                    url
                }
            }
        }
    `
    const result = await request(MASTER_URL, query);
    console.log(result)
    return result;
}

export default {
    getSlider,
    getCategories,
    getProductList,
    getBusinessListByCategory,
    getBanner,
    getBrand
}
