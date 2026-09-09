"use client"
import { useState } from "react";
import "./ordem.css";
import { motion } from "motion/react";

export default function Ordens() {
    const [ordens, setOrdens] = useState([]);
    const [cliente, setCliente] = useState("");
    const [equipamento, setEquipamento] = useState("");
    const [descricao, setDescricao] = useState("");
    const [erro, setErro] = useState("");
    console.log(ordens);

    function cadastrarOrdem(event) {
        event.preventDefault();

        //validações
        if (cliente.trim() === "" ||
            equipamento.trim() === "" ||
            descricao.trim() === ""
        ) {
            setErro("Preenceh os dados do form");
            return;
        }

        const novaOrdem = {
            id: Date.now(),
            cliente: cliente.trim(),
            equipamento: equipamento.trim(),
            descricao: descricao.trim(),
            status: "Aberta",
        }

        setOrdens([...ordens, novaOrdem]) // add item a lista
        console.log(ordens);

        setCliente("");
        setEquipamento("");
        setDescricao("");
        setErro("");
    }

    return (

        <main>
            <div className="form-content">
                <h1>Ordens de Serviço</h1>
                <form onSubmit={cadastrarOrdem}>
                    <div className="row">
                        <label htmlFor="cliente">Cliente:</label>
                        <input
                            type="text"
                            name="cliente"
                            id="cliente"
                            placeholder="Nome do Cliente"
                            value={cliente}
                            onChange={(event) => setCliente(event.target.value)}
                        />
                    </div>
                    <div className="row">
                        <label htmlFor="equipamento">Equipamento:</label>
                        <input
                            className="a"
                            type="text"
                            name="equipamento"
                            id="equipamento"
                            placeholder="Nome do Equipamento"
                            value={equipamento}
                            onChange={(event) => setEquipamento(event.target.value)}
                        />
                    </div>
                    <div className="row">
                        <div className="content-area">
                            <label htmlFor="descricao">Descriçaõ:</label>
                            <textarea
                                maxLength={100}
                                minLength={15}
                                id="descricao"
                                placeholder="Nome do Descriçaõ"
                                value={descricao}
                                onChange={(event) => setDescricao(event.target.value)}
                            />
                        </div>
                    </div>
                    {erro != "" && <p>{erro}</p>}
                    <button type="submit">Cadastrar Ordem</button>
                </form>
            </div>


            <table>
                {/* <button>fechar ordens d serviço</button> */}
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Equipamento</th>
                        <th>Descrição</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><p>Id:{ordens.map((p) => (p.id))}</p></td>
                        <td><p>Nome:{ordens.map((p) => (p.cliente))}</p></td>
                        <td><p>Equipameto:{ordens.map((p) => (p.equipamento))}</p></td>
                        <td><p>Descriçaõ:{ordens.map((p) => (p.descricao))}</p></td>
                    </tr>
                </tbody>
            </table>
        </main>
    );
}