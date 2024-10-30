import styled from "styled-components";

const StyledFiltro = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--dark-grey-2);
  gap: 12px;
  margin-top: 20px;

  & h4 {
    color: var(--dark-grey-2);
    font-size: 0.875rem;
  }

  .item {
    display: flex;
    gap: 8px;

    & input[type="checkbox"] {
      transform: scale(1.5);
      accent-color: var(--primary); /* muda a cor do checkbox */
    }
    & input[type="radio"] {
      transform: scale(1.5);
      accent-color: var(--primary); /* muda a cor do checkbox */
    }
  }
`;

function Filter({ title, inputType, options }) {
  return (
    <StyledFiltro>
      <h4>{title}</h4>
      {options.name
        ? options.map((option) => {
            return (
              <>
                <div className="item">
                  <input
                    type={inputType}
                    name={option.text}
                    id={option.text}
                    value={
                      // Usa value se existir, caso contrário usa o texto da label
                      option.value ||
                      option.text.toLowerCase().replace(" ", "-")
                    }
                  />
                  <label htmlFor={option.text}>{option.text}</label>
                </div>
              </>
            );
          })
        : options.map((option) => {
            return (
              <>
                <div className="item">
                  <input
                    type={inputType}
                    name={option.name}
                    id={option.text}
                    value={
                      // Usa value se existir, caso contrário usa o texto da label
                      option.value ||
                      option.text.toLowerCase().replace(" ", "-")
                    }
                  />
                  <label htmlFor={option.text}>{option.text}</label>
                </div>
              </>
            );
          })}
    </StyledFiltro>
  );
}

export default Filter;
