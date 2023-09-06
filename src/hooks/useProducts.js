import { useQuery } from "@tanstack/react-query";

const useProducts = () => {
  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await fetch(`http://localhost:5000/products`);
      return response.json();
    },
  });
  return [products]
};

export default useProducts;
