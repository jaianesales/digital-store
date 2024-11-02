import styled from "styled-components";

const StyledProductOptions = styled.div`
  width: max-content;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 0;

  & h3 {
    color: var(--light-grey);
  }

  .tamanho-container {
    display: flex;
    gap: 8px;

    label {
      input[type="radio"] {
        display: none;
      }
      span {
        display: inline-block;
        padding: 12px;
        border-radius: 4px;
        cursor: pointer;
        border: 1px solid var(--light-grey);
        transition: all ease-in-out 0.2s;

        &:hover {
          border: 1px solid var(--primary);
        }
      }
      input[type="radio"]:checked + span {
        border: 1px solid var(--primary);
        background-color: var(--primary);
        color: var(--white);
        font-weight: bold;
      }
    }
  }

   /* cores */
   .cor-container {
      display: flex;
      gap: 16px;
      label {
        input[type="radio"] {
          display: none;
        }
        span {
          display: inline-block;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          cursor: pointer;
          position: relative;
          z-index: 1;

          &::before {
            content: ""; /* Garante que o ::before apareça */
            background-color: transparet;
            width: 34px;
            height: 34px;
            border-radius: 50%;
            position: absolute;
            top: -5px; /* Ajuste para centralizar o ::before */
            left: -5px;
            z-index: -1; /* Coloca atrás do span */
          }
        }
        input[type="radio"]:checked + span::before {
          border: 2px solid var(--primary);
        }
      }

      label[for="azul"] span {
        background-color: #6feeff;
      }

      label[for="rosa"] span {
        background-color: #ff6969;
      }

      label[for="cinza"] span {
        background-color: #5e5e5e;
      }

      label[for="roxo"] span {
        background-color: #6d70b7;
      }
    }
`;

function ProductOptions() {
  return (
    <>
      <StyledProductOptions>
        <h3>Tamanho</h3>
        <div className="tamanho-container">
          <label htmlFor="39">
            <input type="radio" name="tamanho" id="39" value="39" />
            <span>39</span>
          </label>
          <label htmlFor="40">
            <input type="radio" name="tamanho" id="40" value="40" />
            <span>40</span>
          </label>
          <label htmlFor="41">
            <input type="radio" name="tamanho" id="41" value="41" />
            <span>41</span>
          </label>
          <label htmlFor="42">
            <input type="radio" name="tamanho" id="42" value="42" />
            <span>42</span>
          </label>
          <label htmlFor="43">
            <input type="radio" name="tamanho" id="43" value="43" />
            <span>43</span>
          </label>
        </div>
        <h3>Cores</h3>
        <div className="cor-container">
          <label htmlFor="azul">
            <input type="radio" name="cor" id="azul" value="azul" />
            <span></span>
          </label>
          <label htmlFor="rosa">
            <input type="radio" name="cor" id="rosa" value="rosa" />
            <span></span>
          </label>
          <label htmlFor="cinza">
            <input type="radio" name="cor" id="cinza" value="cinza" />
            <span></span>
          </label>
          <label htmlFor="roxo">
            <input type="radio" name="cor" id="roxo" value="roxo" />
            <span></span>
          </label>
        </div>
      </StyledProductOptions>
    </>
  );
}

export default ProductOptions;
