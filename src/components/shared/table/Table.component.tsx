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
import { IoBookOutline, IoChevronBack, IoChevronForward, IoHomeOutline, IoPlayForwardOutline } from 'react-icons/io5';

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
    <div className={styles.table_container}>
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

      {/* table */}
      <table className={styles.table}>
        {/* head */}
        <thead className={styles.table_head}>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className={styles.row}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} onClick={header.column.getToggleSortingHandler()} className={styles.cell}>
                  {flexRender(header.column.columnDef.header, header.getContext())}

                  {header.column.getIsSorted() === 'asc' ? ' ⬆' : header.column.getIsSorted() === 'desc' ? ' ⬇' : null}
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

      {/* buttons */}
      <div className={styles.buttons}>
        <button type='button' className={styles.button} onClick={() => table.setPageIndex(0)}>
          <i className={styles.icon}>
            <IoHomeOutline />
          </i>
        </button>

        <div className={styles.page}>
          <i className={styles.icon}>
            <IoBookOutline />
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
            <IoChevronBack />
          </i>
        </button>

        <button
          type='button'
          className={`${styles.button} ${!table.getCanNextPage() ? styles.disable : ''}`}
          onClick={() => table.nextPage()}
        >
          <i className={styles.icon}>
            <IoChevronForward />
          </i>
        </button>

        <button type='button' className={styles.button} onClick={() => table.setPageIndex(table.getPageCount() - 1)}>
          <i className={styles.icon}>
            <IoPlayForwardOutline />
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
