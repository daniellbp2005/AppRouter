import './cardBlog.css';

export default function CardBlog({ titulo, imagem, hora, desc, subTitulo }) {
    return (
        <div className="card-wrap">
            <div className="left">
                <img src={imagem} />
            </div>
            <div className="right">
                <h3>{subTitulo}</h3>
                <h1>{titulo}</h1>
                <p>{desc}</p>
                <p className="menor"><i>Hora: {hora}</i></p>
            </div>
        </div>
    )
}