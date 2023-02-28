
interface GlobalFilterPropt{
    column:any;
}

export const ColumnFilter= ({column}:GlobalFilterPropt): JSX.Element => {
    
    const {filterValue,setFilter} = column;

    return (
        <span>
            Search:{' '}
            <input value={filterValue || ''}
                onChange={ e => setFilter(e.target.value)}/>
        </span>
    )
}