import { useState, useEffect } from "react";

export function dados() {
    const [lista, setLista] = useState([]);
    const [msgErro, setMsgErro] = useState("");

    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then(data => {
                setLista(data.users);
                setMsgErro("");
            })
            .catch(e => setMsgErro(e.message));
    }, [])

    return { lista, msgErro };
}