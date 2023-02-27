import { useMemo } from 'react';
import { useTable } from 'react-table';
import { Cliente } from '../interfaces/Modelos';
import { SingleValue } from 'react-select/dist/declarations/src';

interface Columns {
    Header: string;
    accessor: string;
}

interface DinamicTableProps {
    Cabecera: Columns[]
    Cuerpo: object[];
}


export const DinamicTable = ({ Cabecera, Cuerpo }: DinamicTableProps): JSX.Element => {


    const columns = useMemo(() => Cabecera, [])
    const data = useMemo(() => Cuerpo, [])

    const { getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow } = useTable({
            columns: columns,
            data: data
        })

    return (
        <table {...getTableProps()} className='table table-primary table-responsive table-striped table-bordered'>
            <thead >
                {
                    headerGroups.map(
                        headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps} key={headerGroup.id}>
                                {
                                    headerGroup.headers.map((column) => (
                                        <th {...column.getHeaderProps()} key={column.id}>
                                            {column.render('Header')}
                                        </th>
                                    ))}
                            </tr>
                        )
                    )
                }

            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()} key={row.id}>
                                {
                                    row.cells.map((cell) => {
                                        return (
                                            <td {...cell.getCellProps()} key={cell.value}>
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
    )
}