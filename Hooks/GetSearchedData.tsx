import { UserProps } from "@/components/atoms/User";
import { gql, useQuery } from "@apollo/client";

export const LIST_CUSTOMERS = gql`
  query ListZellerCustomers($filter: TableZellerCustomerFilterInput) {
    listZellerCustomers(filter: $filter) {
      items {
        id
        name
        role
      }
    }
  }
`;
const useGetSearchedData = (str: string, roleType: string) => {
  const { data, loading, error, refetch } = useQuery(LIST_CUSTOMERS, {
    variables: {
      filter: {
        name: { contains: str },
        role: { eq: roleType },
      },
    },
  });

  const customers: UserProps[] = data?.listZellerCustomers?.items || [];
  return {
    customers,
    loading,
    error,
    refetch
  };
};

export default useGetSearchedData;
