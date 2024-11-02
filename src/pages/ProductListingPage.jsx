import styled from "styled-components";
import FilterGroup from "../components/FilterGroup";
import OrderBy from "../components/OrderBy";
import ProductListing from "../components/ProductListing";
import Section from "../components/Section";

const StyledProductContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 60px;
`;

const produtos = [
  {
    name: "K-Swiss V8 - Masculino",
    image: "/tenisv8.png",
    category: "Tênis",
    price: 200,
    priceDiscount: 149.9,
    ref: 38416711,
    stars: 4.7,
    rating: 90,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lobortis dolor et volutpat blandit. Sed id felis ornare, porta nisl sit amet, semper libero. Nullam accumsan imperdiet ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce id faucibus erat, eget egestas magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam aliquet volutpat eros vel gravida. Maecenas maximus nec diam vitae malesuada. Pellentesque tempus dui eu turpis blandit tempus. Maecenas condimentum laoreet augue nec porta. Donec commodo luctus eleifend. Sed rutrum semper commodo. Cras euismod arcu sit amet est finibus, quis congue lectus ultrices. Curabitur sed sem elit. Sed imperdiet euismod arcu.",
  },
  {
    name: "K-Swiss V8 - Masculino",
    image: "/tenisv8.png",
    category: "Tênis",
    price: 200,
    priceDiscount: 149.9,
    ref: 38416711,
    stars: 4.7,
    rating: 90,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lobortis dolor et volutpat blandit. Sed id felis ornare, porta nisl sit amet, semper libero. Nullam accumsan imperdiet ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce id faucibus erat, eget egestas magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam aliquet volutpat eros vel gravida. Maecenas maximus nec diam vitae malesuada. Pellentesque tempus dui eu turpis blandit tempus. Maecenas condimentum laoreet augue nec porta. Donec commodo luctus eleifend. Sed rutrum semper commodo. Cras euismod arcu sit amet est finibus, quis congue lectus ultrices. Curabitur sed sem elit. Sed imperdiet euismod arcu.",
  },
  {
    name: "K-Swiss V8 - Masculino",
    image: "/tenisv8.png",
    category: "Tênis",
    price: 200,
    priceDiscount: 149.9,
    ref: 38416711,
    stars: 4.7,
    rating: 90,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lobortis dolor et volutpat blandit. Sed id felis ornare, porta nisl sit amet, semper libero. Nullam accumsan imperdiet ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce id faucibus erat, eget egestas magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam aliquet volutpat eros vel gravida. Maecenas maximus nec diam vitae malesuada. Pellentesque tempus dui eu turpis blandit tempus. Maecenas condimentum laoreet augue nec porta. Donec commodo luctus eleifend. Sed rutrum semper commodo. Cras euismod arcu sit amet est finibus, quis congue lectus ultrices. Curabitur sed sem elit. Sed imperdiet euismod arcu.",
  },
  {
    name: "K-Swiss V8 - Masculino",
    image: "/tenisv8.png",
    category: "Tênis",
    price: 200,
    priceDiscount: 149.9,
    ref: 38416711,
    stars: 4.7,
    rating: 90,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lobortis dolor et volutpat blandit. Sed id felis ornare, porta nisl sit amet, semper libero. Nullam accumsan imperdiet ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce id faucibus erat, eget egestas magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam aliquet volutpat eros vel gravida. Maecenas maximus nec diam vitae malesuada. Pellentesque tempus dui eu turpis blandit tempus. Maecenas condimentum laoreet augue nec porta. Donec commodo luctus eleifend. Sed rutrum semper commodo. Cras euismod arcu sit amet est finibus, quis congue lectus ultrices. Curabitur sed sem elit. Sed imperdiet euismod arcu.",
  },
  {
    name: "K-Swiss V8 - Masculino",
    image: "/tenisv8.png",
    category: "Tênis",
    price: 200,
    priceDiscount: 149.9,
    ref: 38416711,
    stars: 4.7,
    rating: 90,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lobortis dolor et volutpat blandit. Sed id felis ornare, porta nisl sit amet, semper libero. Nullam accumsan imperdiet ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce id faucibus erat, eget egestas magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam aliquet volutpat eros vel gravida. Maecenas maximus nec diam vitae malesuada. Pellentesque tempus dui eu turpis blandit tempus. Maecenas condimentum laoreet augue nec porta. Donec commodo luctus eleifend. Sed rutrum semper commodo. Cras euismod arcu sit amet est finibus, quis congue lectus ultrices. Curabitur sed sem elit. Sed imperdiet euismod arcu.",
  },
  {
    name: "K-Swiss V8 - Masculino",
    image: "/tenisv8.png",
    category: "Tênis",
    price: 200,
    priceDiscount: 149.9,
    ref: 38416711,
    stars: 4.7,
    rating: 90,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lobortis dolor et volutpat blandit. Sed id felis ornare, porta nisl sit amet, semper libero. Nullam accumsan imperdiet ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce id faucibus erat, eget egestas magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam aliquet volutpat eros vel gravida. Maecenas maximus nec diam vitae malesuada. Pellentesque tempus dui eu turpis blandit tempus. Maecenas condimentum laoreet augue nec porta. Donec commodo luctus eleifend. Sed rutrum semper commodo. Cras euismod arcu sit amet est finibus, quis congue lectus ultrices. Curabitur sed sem elit. Sed imperdiet euismod arcu.",
  },
  {
    name: "K-Swiss V8 - Masculino",
    image: "/tenisv8.png",
    category: "Tênis",
    price: 200,
    priceDiscount: 149.9,
    ref: 38416711,
    stars: 4.7,
    rating: 90,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lobortis dolor et volutpat blandit. Sed id felis ornare, porta nisl sit amet, semper libero. Nullam accumsan imperdiet ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce id faucibus erat, eget egestas magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam aliquet volutpat eros vel gravida. Maecenas maximus nec diam vitae malesuada. Pellentesque tempus dui eu turpis blandit tempus. Maecenas condimentum laoreet augue nec porta. Donec commodo luctus eleifend. Sed rutrum semper commodo. Cras euismod arcu sit amet est finibus, quis congue lectus ultrices. Curabitur sed sem elit. Sed imperdiet euismod arcu.",
  },
  {
    name: "K-Swiss V8 - Masculino",
    image: "/tenisv8.png",
    category: "Tênis",
    price: 200,
    priceDiscount: 149.9,
    ref: 38416711,
    stars: 4.7,
    rating: 90,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lobortis dolor et volutpat blandit. Sed id felis ornare, porta nisl sit amet, semper libero. Nullam accumsan imperdiet ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce id faucibus erat, eget egestas magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam aliquet volutpat eros vel gravida. Maecenas maximus nec diam vitae malesuada. Pellentesque tempus dui eu turpis blandit tempus. Maecenas condimentum laoreet augue nec porta. Donec commodo luctus eleifend. Sed rutrum semper commodo. Cras euismod arcu sit amet est finibus, quis congue lectus ultrices. Curabitur sed sem elit. Sed imperdiet euismod arcu.",
  },
  {
    name: "K-Swiss V8 - Masculino",
    image: "/tenisv8.png",
    category: "Tênis",
    price: 200,
    priceDiscount: 149.9,
    ref: 38416711,
    stars: 4.7,
    rating: 90,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lobortis dolor et volutpat blandit. Sed id felis ornare, porta nisl sit amet, semper libero. Nullam accumsan imperdiet ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce id faucibus erat, eget egestas magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam aliquet volutpat eros vel gravida. Maecenas maximus nec diam vitae malesuada. Pellentesque tempus dui eu turpis blandit tempus. Maecenas condimentum laoreet augue nec porta. Donec commodo luctus eleifend. Sed rutrum semper commodo. Cras euismod arcu sit amet est finibus, quis congue lectus ultrices. Curabitur sed sem elit. Sed imperdiet euismod arcu.",
  },
];

function ProductListingPage() {
  return (
    <>
      <Section color={"#F5F5F5"} padd={"60px 0 20px"}>
        <OrderBy />
      </Section>
      <Section color={"#F5F5F5"} padd={"20px 0 120px"}>
        <StyledProductContainer>
          <FilterGroup />
          <ProductListing produtos={produtos} cols={"repeat(3, 1fr)"} />
        </StyledProductContainer>
      </Section>
    </>
  );
}

export default ProductListingPage;
