import styled from "styled-components";
import starIcon from "../assets/starIcon.svg";

const StyledBuyBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  & h2 {
    font-size: 2rem;
    color: var(--dark-grey);
  }
  .ref {
    font-size: 0.75rem;
    color: var(--dark-grey-3);
  }
  .stars {
    display: flex;
    gap: 12px;

    & spam {
      font-size: 0.875rem;
      font-weight: bold;
      color: var(--white);
      background-color: var(--warning);
      border-radius: 4px;
      max-width: max-content;
      padding: 4px 8px;
    }

    & img {
      transform: scale(1.2);
    }

    .rating {
      background-color: transparent;
      color: var(--light-grey);
      font-weight: 400;
      font-size: 0.875rem;
    }
  }
  .price-container {
    font-size: 1.5rem;
    display: flex;
    align-items: end;
    gap: 10px;
    .price {
      color: var(--dark-grey-2);
      .price-new {
        font-size: 3rem;
      }
    }
    .price-old {
      color: var(--light-grey-2);
      text-decoration: line-through;
      padding-bottom: 6px;
    }
  }
`;

const StyledButtonPrimary = styled.button`
  border: none;
  border-radius: 4px;
  padding: 16px 52px;
  margin-top: 20px;
  background-color: var(--warning);
  font-weight: bold;
  font-size: 1rem;
  color: var(--white);
  cursor: pointer;
  transition: all ease-in-out 0.2s;
  width: max-content;

  &:hover {
    background-color: #e49607;
  }
`;

function BuyBox({
  name,
  reference,
  stars,
  rating,
  price,
  priceDiscount,
  description,
  children,
}) {
  return (
    <>
      <StyledBuyBox>
        <h2>{name.replace("-", " ").replace("-", " ")}</h2>
        <span className="ref">Casual | Nike | REF: {reference}</span>
        <div className="stars">
          <spam>{stars}</spam>
          <img src={starIcon} alt="" />
          <spam className="rating">{"(" + rating + " avaliações)"}</spam>
        </div>
        <div className="price-container">
          <span className="price">
            R$
            <strong className="price-new">
              {priceDiscount.replace(".", ",")}
            </strong>
          </span>
          <span className="price-old">R${price.replace(".", ",")}</span>
        </div>
        <p>{description}</p>
        {children}
        <StyledButtonPrimary>COMPRAR</StyledButtonPrimary>
      </StyledBuyBox>
    </>
  );
}

export default BuyBox;
