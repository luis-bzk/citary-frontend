import { useState, useId } from 'react';

import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  ColumnDef,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  getFilteredRowModel,
} from '@tanstack/react-table';

import styles from './styles.module.css';
import {
  LuArrowDownAZ,
  LuArrowUpZA,
  LuBookOpen,
  LuChevronLeft,
  LuChevronRight,
  LuChevronsRight,
  LuHouse,
} from 'react-icons/lu';

interface Props<T> {
  labelText: string;
  inputText: string;
  columns: ColumnDef<T>[];
  rows: T[];
}

export function TableComponent<T>({ labelText, inputText, columns, rows }: Props<T>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [filtering, setFiltering] = useState<string>('');
  const inputID = useId();

  // const data = categories;

  const table = useReactTable({
    data: rows,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting: sorting,
      globalFilter: filtering,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
  });

  return (
    <div className={styles.component_container}>
      {/* input */}
      <div className={styles.input_container}>
        <label htmlFor={inputID} className={styles.label}>
          {labelText}
        </label>
        <input
          id={inputID}
          type='text'
          value={filtering}
          onChange={(e) => setFiltering(e.target.value)}
          placeholder={inputText}
          className={styles.input_search}
        />
      </div>

      <div className={styles.table_container}>
        {/* table */}
        <table className={styles.table}>
          {/* head */}
          <thead className={styles.table_head}>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className={styles.row}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} onClick={header.column.getToggleSortingHandler()} className={styles.cell}>
                    <div className={styles.cell_container}>
                      {flexRender(header.column.columnDef.header, header.getContext())}

                      {header.column.getIsSorted() === 'asc' ? (
                        <i className={styles.cell_icon}>
                          <LuArrowDownAZ />
                        </i>
                      ) : header.column.getIsSorted() === 'desc' ? (
                        <i className={styles.cell_icon}>
                          <LuArrowUpZA />
                        </i>
                      ) : null}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          {/* body */}

          <tbody className={styles.table_body}>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className={styles.row}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className={styles.cell}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* buttons */}
      <div className={styles.buttons}>
        <button type='button' className={styles.button} onClick={() => table.setPageIndex(0)}>
          <i className={styles.icon}>
            <LuHouse />
          </i>
        </button>

        <div className={styles.page}>
          <i className={styles.icon}>
            <LuBookOpen />
          </i>
          <p>
            {table.getState().pagination.pageIndex + 1} de {table.getPageCount()}
          </p>
        </div>

        <button
          type='button'
          className={`${styles.button} ${!table.getCanPreviousPage() ? styles.disable : ''}`}
          onClick={() => table.previousPage()}
        >
          <i className={styles.icon}>
            <LuChevronLeft />
          </i>
        </button>

        <button
          type='button'
          className={`${styles.button} ${!table.getCanPreviousPage() ? styles.disable : ''}`}
          onClick={() => table.nextPage()}
        >
          <i className={styles.icon}>
            <LuChevronRight />
          </i>
        </button>

        <button
          type='button'
          className={`${styles.button} ${!table.getCanNextPage() ? styles.disable : ''}`}
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
        >
          <i className={styles.icon}>
            <LuChevronsRight />
          </i>
        </button>

        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
          className={styles.selector}
        >
          {[10, 20, 30, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize} className={styles.Option}>
              Mostrar {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
