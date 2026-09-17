'use client'
import { dados } from "../../components/funcaoGetDAdos/function"
import './dummy.css';
import { motion } from "motion/react";

export default function Dummy() {
    const { lista, msgErro } = dados()

    return (
        <main className="mainDum">
            <div className="row-1">
                <h1 className="titulo">Puxando os dados de uma API</h1>
                <p className="tituloSecundario">Usando useEffect</p>
            </div>
            {msgErro != "" && <p>Erro:{msgErro}</p>}
            {lista?.length > 0 ?
                <div className="conteiner-dum">
                    {lista.map((u, idx) => {
                        return (
                            <motion.div key={idx} className="card"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.15)" }}
                                transition={{
                                    type: "spring",
                                    delay: idx * 0.05,
                                    duration: .5,
                                }}>
                                <div className="top">
                                    <img src={u.image} />
                                </div>
                                <div className="body">
                                    <h2 className="introduction">{u.firstName}{""}{u.lastName}</h2>
                                    <p className="email">email:{" "}<span>{u.email}</span></p>
                                    <div className="row">
                                        <p>Gênero:{" "}<span>{u.gender}</span></p>
                                        <p>Cor de Cabelo:{" "}<span>{u.hair.color}</span></p>
                                    </div>
                                    <p className="age">Idade:{" "}<span>{u.age}</span></p>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
                :
                <div>
                    <p>N há usuários</p>
                </div>}

        </main>
    )
}