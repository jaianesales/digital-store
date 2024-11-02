import { useState } from "react";
import styled from "styled-components";
import chevronLeft from "../assets/chevronLeft.svg";
import chevronRight from "../assets/chevronRight.svg";

const StyledGalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .main-image-container {
    position: relative;
    width: 700px;
    height: 570px;

    .main-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 4px;
    }

    .arrow {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      border: none;
      cursor: pointer;
      padding: 10px;
      font-size: 18px;
    }

    .left-arrow {
      left: 10px;
    }

    .right-arrow {
      right: 10px;
    }
  }

  .thumbnails-container {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    width: 100%;
    

    .thumbnail {
      width: 120px;
      height: 120px;
      object-fit: cover;
      border-radius: 4px;
      margin: 0 5px;
      cursor: pointer;
      opacity: 0.6;
      transition: opacity 0.3s;

      &:hover,
      &.active {
        opacity: 1;
        border: 2px solid var(--primary);
      }
    }
  }
`;

const ProductGallery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Função para navegar para a próxima imagem
  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Função para navegar para a imagem anterior
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Função para selecionar a imagem clicando na thumbnail
  const selectImage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <StyledGalleryContainer>
      <div className="main-image-container">
        <button className="arrow left-arrow" onClick={prevImage}>
          <img src={chevronLeft} alt="voltar" />
        </button>

        <img
          src={images[currentIndex].src}
          alt={`Product Image ${currentIndex + 1}`}
          className="main-image"
        />

        <button className="arrow right-arrow" onClick={nextImage}>
          <img src={chevronRight} alt="próximo" />
        </button>
      </div>

      <div className="thumbnails-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={`Thumbnail ${index + 1}`}
            className={`thumbnail ${index === currentIndex ? "active" : ""}`}
            onClick={() => selectImage(index)}
          />
        ))}
      </div>
    </StyledGalleryContainer>
  );
};

export default ProductGallery;
