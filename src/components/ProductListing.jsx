import styled from "styled-components";
import ProductCard from "./ProductCard";

const StyledProductListingContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
`;

function ProductListing({ produtos, cols }) {
  return (
    <>
      <StyledProductListingContainer style={{ gridTemplateColumns: cols }}>
        {produtos.map((produto, indice) => {
          if (produto.priceDiscount) {
            return (
              <div key={indice} className="product-container">
                <ProductCard
                  image={produto.image}
                  category={produto.category}
                  name={produto.name}
                  price={produto.price}
                  priceDiscount={produto.priceDiscount}
                  id={produto.name.toLowerCase().replace(" ", "-")}
                  reference={produto.ref}
                  stars={produto.stars}
                  rating={produto.rating}
                  description={produto.description}
                />
              </div>
            );
          } else {
            return (
              <div key={indice} className="product-container">
                <ProductCard
                  image={produto.image}
                  category={produto.category}
                  name={produto.name}
                  price={produto.price}
                  id={produto.name.toLowerCase().replace(" ", "-")}
                  reference={produto.reference}
                  stars={produto.stars}
                  rating={produto.rating}
                  description={produto.description}
                />
              </div>
            );
          }
        })}
      </StyledProductListingContainer>
    </>
  );
}

export default ProductListing;
