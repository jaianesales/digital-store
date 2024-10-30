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
    image: "../../public/tenisv8.png",
    category: "Tênis",
    price: 200,
    priceDiscount: 149.9,
  },
  {
    name: "K-Swiss V8 - Masculino",
    image: "../../public/tenisv8.png",
    category: "Tênis",
    price: 200,
  },
  {
    name: "K-Swiss V8 - Masculino",
    image: "../../public/tenisv8.png",
    category: "Tênis",
    price: 200,
  },
  {
    name: "K-Swiss V8 - Masculino",
    image: "../../public/tenisv8.png",
    category: "Tênis",
    price: 200,
    priceDiscount: 149.9,
  },
  {
    name: "K-Swiss V8 - Masculino",
    image: "../../public/tenisv8.png",
    category: "Tênis",
    price: 200,
    priceDiscount: 149.9,
  },
  {
    name: "K-Swiss V8 - Masculino",
    image: "../../public/tenisv8.png",
    category: "Tênis",
    price: 200,
    priceDiscount: 149.9,
  },
  {
    name: "K-Swiss V8 - Masculino",
    image: "../../public/tenisv8.png",
    category: "Tênis",
    price: 200,
    priceDiscount: 149.9,
  },
  {
    name: "K-Swiss V8 - Masculino",
    image: "../../public/tenisv8.png",
    category: "Tênis",
    price: 200,
  },
  {
    name: "K-Swiss V8 - Masculino",
    image: "../../public/tenisv8.png",
    category: "Tênis",
    price: 200,
  },
];

function ProductListingPage() {
  return (
    <>
      <Section color={"#F5F5F5"} padd={"60px 0 20px"}>
        <OrderBy />
      </Section>
      <Section color={"#F5F5F5"} padd={"20px 0 60px"}>
        <StyledProductContainer>
          <FilterGroup />
          <ProductListing produtos={produtos} cols={"repeat(3, 1fr)"}/>
        </StyledProductContainer>
      </Section>
    </>
  );
}

export default ProductListingPage;
