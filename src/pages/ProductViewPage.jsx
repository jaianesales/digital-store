import styled from "styled-components";
import ProductGallery from "../components/ProductGallery";
import ProductListing from "../components/ProductListing";
import Section from "../components/Section";
import BuyBox from "../components/BuyBox";
import { useParams } from "react-router-dom";
import ProductOptions from "../components/ProductOptions";

const StyledProductContainer = styled.div`
  display: grid;
  grid-template-columns: 700px 1fr;
  gap: 60px;
`;

const StyledCaminho = styled.span`
  width: 100%;
  color: var(--dark-grey-2);
  font-size: 0.875rem;
  display: block;
  margin-bottom: 40px;
`;

const productImages = [
  { src: "/product-image-1.jpg" },
  { src: "/product-image-2.jpg" },
  { src: "/product-image-3.jpg" },
  { src: "/product-image-4.jpg" },
  { src: "/product-image-5.jpg" },
];

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
];

function ProductViewPage() {
  const { id, reference, stars, rating, price, priceDiscount, description } =
    useParams();

  return (
    <>
      <Section padd="20px 0 60px" color={"#F5F5F5"}>
        <StyledCaminho><strong>Home</strong> / Produtos / Tênis / Tênis Nike Revolution 6 Next Nature Masculino</StyledCaminho>
        <StyledProductContainer>
          <ProductGallery images={productImages} />
          <BuyBox
            name={id}
            reference={reference}
            stars={stars}
            rating={rating}
            price={price}
            priceDiscount={priceDiscount}
            description={description}
          >
            <ProductOptions />
          </BuyBox>
        </StyledProductContainer>
      </Section>
      <Section
        title={"Produtos Relacionados"}
        link={"/productlisting"}
        padd={"60px 0 120px"}
        titleAlign="space-between"
        color={"#F5F5F5"}
      >
        <ProductListing produtos={produtos} />
      </Section>
    </>
  );
}

export default ProductViewPage;
