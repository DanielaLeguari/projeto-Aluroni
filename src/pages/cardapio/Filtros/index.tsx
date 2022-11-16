import filtros from "./filtros.json";
import styles from './Filtros.module.scss';
import classNames from 'classnames'; //npm  install classnames

type IOpcao = typeof filtros[0];

interface Props {
    filtro: number | null;
    setFiltro: React.Dispatch<React.SetStateAction<number | null>>
}

const Filtros = ({ filtro, setFiltro }: Props) => {

    function selecionarFiltro(opcao: IOpcao) {
        //desselecionar o botao
        if (filtro === opcao.id) return setFiltro(null);
        return setFiltro(opcao.id);

    }
    return (
        <div className={styles.filtros}>
            {filtros.map(opcao => (
                <button
                    //  [''] para pegar o valor ativo
                    // classNames é uma função que recebe um objeto classNames= {classNames({})}
                    className={classNames({
                        //retirando a concatenação  com classNames->
                    //     `
                    // ${styles.filtros__filtro} 
                    // ${filtro === opcao.id ? styles['filtros__filtro--ativo'] : ""}`

                        [styles.filtros__filtro]: true,
                        [styles['filtros__filtro--ativo']]: filtro === opcao.id

                    })}
                    key={opcao.id}
                    onClick={() => selecionarFiltro(opcao)}
                >
                    {opcao.label}
                </button>
            ))}
        </div>
    )
}

export default Filtros;