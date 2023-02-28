import { useMemo, useState } from 'react';
import { useTable, useSortBy, usePagination, useGlobalFilter, useFilters } from 'react-table';

export interface Columnas {
    Header: string;
    accessor: string;
    Filter: any;
}

interface DinamicTableProps {
    Cabecera: Columnas[]
    Cuerpo: object[];
}

export const DinamicTable = ({ Cabecera, Cuerpo }: DinamicTableProps): JSX.Element => {


    const columns = useMemo(() => Cabecera, []);
    const data = useMemo(() => Cuerpo, []);

    const Usetable: any = useTable({ columns: columns, data: data }, useFilters, useGlobalFilter, useSortBy, usePagination);

    const [usepagestate, setpagestate] = useState(1)
    const { getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        state,
        setGlobalFilter,
        prepareRow } = Usetable
    const { globalFilter } = state
    return (
        <>
            {/* <GlobalFilter filter={globalFilter} setfilter={setGlobalFilter}/> */}

            <table {...getTableProps()} className='table table-hover table-dark table-responsive table-striped table-bordered'>
                <thead >
                    {
                        headerGroups.map(
                            (headerGroup: any, key: number) => (
                                <tr {...headerGroup.getHeaderGroupProps} key={key}>
                                    {
                                        headerGroup.headers.map((column: any, key: number) => (
                                            <th {...column.getHeaderProps(column.getSortByToggleProps())} key={key}>
                                                {column.render('Header')}
                                                <div key={column.id}>
                                                    <span key={key}>
                                                        {column.isSorted ? (column.isSortedDesc ? ' 🡡' : ' 🡣') : ''}
                                                    </span>
                                                    {column.canFilter ? column.render('Filter') : null}
                                                </div>
                                            </th>
                                        ))}
                                </tr>
                            )
                        )
                    }
                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        page.map((row: any, key: number) => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps({ style: { cursor: "pointer" } })} key={key} >
                                    {
                                        row.cells.map((cell: any, key: number) => {
                                            return (
                                                <td {...cell.getCellProps()} key={key}>

                                                    {cell.render('Cell')}
                                                </td>
                                            )
                                        })}
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <div className='row'>
                <button type="button" className="btn btn-outline-dark col-4" onClick={() => {
                    if (usepagestate - 1 > 0) {
                        setpagestate(usepagestate - 1)
                        previousPage()
                    }
                }}>Previous</button>
                <div className='fs-5 col-4'>
                    Page: {usepagestate} / {Math.ceil(Cuerpo.length / 10)}
                </div>
                <button type="button" className="btn btn-outline-dark col-4" onClick={() => {
                    if (usepagestate + 1 <= Math.ceil(Cuerpo.length / 10)) {
                        setpagestate(usepagestate + 1);
                        nextPage();
                    }
                }}>Next</button>
            </div>
        </>
    )
}