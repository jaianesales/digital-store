import styled from "styled-components";

const StyledOrderBy = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    .resultados {
        display: flex;
        color: var(--dark-grey-2);
        font-size: 0.875rem;
    }

`;

const StyledFormSelect = styled.select`
    width: 300px;
    height: 60px;
    padding: 0 6px;
    border-radius: 3px;
    color: var(--dark-grey-2);
    font-size: 1rem;
`;

function OrderBy() {
    return (
        <>
            <StyledOrderBy>
                <div className="resultados">
                    <span><strong>Resultados para “Tênis”</strong> - 389 produtos</span>
                </div>
                <div className="ordenar">
                    <StyledFormSelect aria-label="Ordernar por:">
                        <option>Ordenar por:</option>
                        <option value="high">Maior preço</option>
                        <option value="low">Menor preço</option>
                    </StyledFormSelect>
                </div>
            </StyledOrderBy>
        </>
    );
}

export default OrderBy;