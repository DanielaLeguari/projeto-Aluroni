import styles from './Ordenador.module.scss';
import opcoes from './opcoes.json';
import classNames from "classnames";
import { useState } from 'react';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

interface Props {
    ordenador: string,
    setOrdenador: React.Dispatch<React.SetStateAction<string>>;
}

const Ordenador = ({
    ordenador,
    setOrdenador
}:
    Props) => {

    const [aberto, setAberto] = useState(false);
    //pego o ordenador e percorro as opcoes até encontrar a opcao que correspondente ao ordenador
    const nomeOrdenador = ordenador && opcoes.find(opcao => opcao.value === ordenador)?.nome;

    return (
        <button
        //classNames funcao que espera um objeto
            className={classNames({
                [styles.ordenador]: true,
                [styles["ordenador--ativo"]]: ordenador !== ""
            })}
            onClick={() => setAberto(!aberto)}
            onBlur={() => setAberto(false)}>  {/*clicar fora d apcao e ele fechar*/}
            {/* span situacao atual */}
            <span>
                {nomeOrdenador || "Ordenar Por"}
            </span>
            {aberto ? (
                <MdKeyboardArrowUp size={20} />
            ) : (
                <MdKeyboardArrowDown size={20} />
            )}
            {/* div opcoes que vão aparecer */}
            <div
                className={classNames({
                    [styles.ordenador__options]: true,
                    [styles['ordenador__options--ativo']]: aberto
                })}>
                {
                    opcoes.map(opcao => (
                        <div
                            //react pede sempre uma key no map
                            className={styles.ordenador__option}
                            key={opcao.value}
                            onClick={() => setOrdenador(opcao.value)}
                        >
                            {opcao.nome}
                        </div>
                    ))
                }
            </div>
        </button>
    )
}

export default Ordenador