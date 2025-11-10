import SelectorGrup from '../../Selector/SelectorGrup'
import { FaLocationDot } from 'react-icons/fa6'
import SelectorOption from '../../Selector/SelectorOption';


const cidades = [
    { id: 1, nome: "São Paulo" },
    { id: 2, nome: "Rio de Janeiro" },
    { id: 3, nome: "Belo Horizonte" },
    { id: 4, nome: "Curitiba" },
    { id: 5, nome: "Porto Alegre" },
];

const HeaderFormFilters = () => {
  return (
  <form>
    <SelectorGrup id="cidade" icon={<FaLocationDot />} >
      <SelectorOption value="" label="Escolha sua cidade..." />
      {cidades.map((cidade) => {
        return (
        <SelectorOption 
        key={cidade.id} 
        value={cidade.nome} 
        label={cidade.nome} 
        />
      );
      })}
    </SelectorGrup>
  </form>
  );
};

export default HeaderFormFilters;
