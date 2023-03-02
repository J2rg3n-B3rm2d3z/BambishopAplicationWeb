import { FC, useMemo } from 'react';
import { useTable, useSortBy, usePagination, useGlobalFilter } from 'react-table';
import { Columnas } from '../../interfaces';
import { GlobalFilter } from './GlobalFilter';

interface DinamicTableProps {
    Cabecera: Columnas[];
    Cuerpo: object[];
    Direccion: string;
}

export const DinamicTable: FC<DinamicTableProps> = ({ Cabecera, Cuerpo, Direccion }: DinamicTableProps): JSX.Element => {

    const columns = useMemo(() => Cabecera, []);
    const data = useMemo(() => Cuerpo, []);

    const Usetable: any = useTable({ columns: columns, data: data }, useGlobalFilter, useSortBy, usePagination);

    const { getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        state,
        gotoPage,
        pageCount,
        pageOptions,
        setGlobalFilter,
        prepareRow } = Usetable

    const { globalFilter, pageIndex } = state
    const element = document.getElementById(Direccion);

    const handleRowClick = (row: any) => {
        console.log(row.original); // Accede a los datos de la fila original
        element!.scrollIntoView({ behavior:"smooth" });
    };

    return (
        <div>
            <div className="row text-start">
                <div className='col-2' />
                <div className='col-8'>
                    <GlobalFilter filter={globalFilter} setfilter={setGlobalFilter} />
                </div>
                <div className='col-2' />
            </div>

            <br />

            <div className="row text-center">

                <table {...getTableProps()} className='table table-hover table-dark table-responsive table-striped table-bordered col-12'>
                    <thead >
                        {
                            headerGroups.map(
                                (headerGroup: any, key: number) => (
                                    <tr {...headerGroup.getHeaderGroupProps} key={key}>
                                        {
                                            headerGroup.headers.map((column: any, key: number) => (
                                                <th {...column.getHeaderProps(column.getSortByToggleProps())} key={key}>
                                                    {column.render('header')}
                                                    <span key={key}>
                                                        {column.isSorted ? (column.isSortedDesc ? ' 🡡' : ' 🡣') : ''}
                                                    </span>
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
                                    <tr {...row.getRowProps({ style: { cursor: "pointer" } })} key={key} onClick={() => handleRowClick(row)}>
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

            </div>

            <br />

            <div className='row'>
                <button
                    type="button"
                    className="btn btn-outline-dark col-2"
                    onClick={() => { gotoPage(0) }}
                    disabled={!canPreviousPage}>
                    {'<<'}
                </button>
                <button
                    type="button"
                    className="btn btn-outline-dark col-2"
                    onClick={() => { previousPage() }}
                    disabled={!canPreviousPage}>
                    {'<-'}
                </button>
                <div className='fs-5 col-4'>
                    Page{' '}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>{' '}
                </div>
                <button
                    type="button"
                    className="btn btn-outline-dark col-2"
                    onClick={() => { nextPage(); }}
                    disabled={!canNextPage}>
                    {'->'}
                </button>
                <button
                    type="button"
                    className="btn btn-outline-dark col-2"
                    onClick={() => { gotoPage(pageCount - 1) }}
                    disabled={!canNextPage}>
                    {'>>'}
                </button>
            </div>
        </div>
    )
}