import styled from "styled-components";
import Filter from "./Filter";

const StyledFilterGroup = styled.div`
  padding: 30px;
  background-color: var(--white);
  height: fit-content;

  & h3 {
    color: var(--dark-grey-2);
    font-size: 1rem;
    border-bottom: 1px solid var(--light-grey-2);
    padding-bottom: 20px;
  }
`;

const marca = [
  { text: "Adidas", value: "adidas" },
  { text: "Balenciaga", value: "balenciaga" },
  { text: "K-Swiss", value: "k-Swiss" },
  { text: "Nike", value: "nike" },
  { text: "Puma", value: "puma" },
];
const categoria = [
  { text: "Esporte e lazer", value: "esporte e lazer" },
  { text: "Casual", value: "casual" },
  { text: "Utilitário", value: "utilitario" },
  { text: "Corrida", value: "corrida" },
];
const genero = [
  { text: "Masculino", value: "masculino" },
  { text: "Feminino", value: "feminino" },
  { text: "Unissex", value: "unissex" },
];
const estado = [
  { text: "Novo", value: "novo", name: "estado" },
  { text: "Usado", value: "usado", name: "estado" },
];

function FilterGroup() {
  return (
    <>
      <StyledFilterGroup>
        <h3>Filtrar por</h3>
        <Filter title={"Marca"} inputType={"checkbox"} options={marca} />
        <Filter
          title={"Categoria"}
          inputType={"checkbox"}
          options={categoria}
        />
        <Filter title={"Gênero"} inputType={"checkbox"} options={genero} />
        <Filter title={"Estado"} inputType={"radio"} options={estado} />

        {/* {
                    options.map((options) => {
                        if (options) {
                            return (
                                
                            )
                        }
                    })
                }
                
                <div className="filtros">
                    <h4>Marca</h4>
                    <div className="item">
                        <input type="checkbox" name="adidas" id="adidas" />
                        <label htmlFor="adidas"> Adidas</label>
                    </div>
                    <div className="item">
                        <input type="checkbox" name="balenciaga" id="balenciaga" />
                        <label htmlFor="balenciaga"> Balenciaga</label>
                    </div>
                    <div className="item">
                        <input type="checkbox" name="k-swiss" id="k-swiss" />
                        <label htmlFor="k-swiss"> K-Swiss</label>
                    </div>
                    <div className="item">
                        <input type="checkbox" name="nike" id="nike" />
                        <label htmlFor="nike"> Nike</label>
                    </div>
                    <div className="item">
                        <input type="checkbox" name="puma" id="puma" />
                        <label htmlFor="puma"> Puma</label>
                    </div>
                </div>
                <div className="filtros">
                    <h4>Categoria</h4>
                    <div className="item">
                        <input type="checkbox" name="esporte e lazer" id="esporte e lazer" />
                        <label htmlFor="esporte e lazer">Esporte e lazer</label>
                    </div>
                    <div className="item">
                        <input type="checkbox" name="casual" id="casual" />
                        <label htmlFor="casual">Casual</label>
                    </div>
                    <div className="item">
                        <input type="checkbox" name="utilitario" id="utilitario" />
                        <label htmlFor="utilitario">Utilitário</label>
                    </div>
                    <div className="item">
                        <input type="checkbox" name="corrida" id="corrida" />
                        <label htmlFor="corrida">Corrida</label>
                    </div>
                </div>
                <div className="filtros">
                    <h4>Gênero</h4>
                    <div className="item">
                        <input type="checkbox" name="masculino" id="masculino" />
                        <label htmlFor="masculino">Masculino</label>
                    </div>
                    <div className="item">
                        <input type="checkbox" name="feminino" id="feminino" />
                        <label htmlFor="feminino">Feminino</label>
                    </div>
                    <div className="item">
                        <input type="checkbox" name="unissex" id="unissex" />
                        <label htmlFor="unissex">Unissex</label>
                    </div>
                </div>
                <div className="filtros">
                    <h4>Estado</h4>
                    <div className="item">
                        <input type="radio" name="estado" id="novo" value="novo" />
                        <label htmlFor="novo">Novo</label>
                    </div>
                    <div className="item">
                        <input type="radio" name="estado" id="usado" value="usado" />
                        <label htmlFor="usado">Usado</label>
                    </div>
                </div> */}
      </StyledFilterGroup>
    </>
  );
}

export default FilterGroup;
