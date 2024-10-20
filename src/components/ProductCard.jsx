import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledCardContainer = styled.div`
  display: flex;
  flex-direction: column;

  .product-card {
    width: 25%;
    border-radius: 6px;
    box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.1);
    background: var(--white);
    display: flex;
    flex-direction: column;

    .product-img {
      & img {
        width: 100%;
        height: auto;
        display: block;
        object-fit: contain;
      }
    }

    .product-info {
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 8px;
      background-color: var(--light-grey-3);
      padding: 16px;

      .product-category {
        color: var(--light-grey);
        font-weight: bold;
        text-transform: capitalize;
      }

      .product-title {
        font-size: 1.5rem;
        color: var(--dark-grey-2);
        font-weight: 400;
      }

      .product-price {
        display: flex;
        justify-content: start;
        gap: 8px;
        font-size: 1.5rem;

        .price-original {
          color: var(--light-grey);
          text-decoration: line-through;
        }

        .price {
          color: var(--dark-grey);
          font-weight: 800;
        }
      }
    }
  }
`;

function ProductCard({ image, name, price, priceDiscount, category }) {
  return (
    <>
      <StyledCardContainer>
        {priceDiscount ? (
          <Link to={"/productview"}>
            <div className="product-card">
              <div className="product-img">
                <img src={image} alt="" />
              </div>
              <div className="product-info">
                <span className="product-category">{category}</span>
                <h3 className="product-title">{name}</h3>
                <div className="product-price">
                  <span className="price-original">R${price}</span>
                  <span className="price">R${priceDiscount}</span>
                </div>
              </div>
            </div>
          </Link>
        ) : (
          <Link to={"/productview"}>
            <div className="product-card">
              <div className="product-img">
                <img src={image} alt="" />
              </div>
              <div className="product-info">
                <span className="product-category">{category}</span>
                <h3 className="product-title">{name}</h3>
                <div className="product-price">
                  <span className="price">R${price}</span>
                </div>
              </div>
            </div>
          </Link>
        )}
      </StyledCardContainer>
    </>
  );
}

export default ProductCard;
