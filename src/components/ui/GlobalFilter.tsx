
interface GlobalFilterPropt {
    filter: string;
    setfilter: React.Dispatch<React.SetStateAction<string>>;
}


export const GlobalFilter = ({ filter, setfilter }: GlobalFilterPropt): JSX.Element => {
    return (

        <div className="input-group">
            <span className="input-group-text" id="basic-addon1">
                <i className="bi bi-search" />
            </span>
            <input
                className="form-control" type="search" placeholder="Buscar" aria-label="Busca"
                value={filter || ''}
                onChange={e => setfilter(e.target.value)} />
        </div>

    )
}