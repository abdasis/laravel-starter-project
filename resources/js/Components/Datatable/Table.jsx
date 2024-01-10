import React, {Fragment, useEffect, useMemo, useRef, useState} from 'react';
import {flexRender, getCoreRowModel, getSortedRowModel, useReactTable} from '@tanstack/react-table';
import {IconChevronDown, IconChevronUp} from '@tabler/icons-react';
import {router, usePage} from '@inertiajs/react';
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/Components/ui/table.jsx";

const Datatable = ({ data, columns, actions = [], onAction, filters = [] }) => {
    const [sorting, setSorting] = useState([]);
    const [columnFilters, setColumnFilters] = useState({});
    const [globalFilter, setGlobalFilter] = useState('');
    const [perPage, setPerPage] = useState(10); // [10, 25, 50, 100, false]
    const page = usePage().props;
    const isFirstRender = useRef(true);
    const [{ pageIndex, pageSize }, setPagination] = useState({
        pageIndex: 0,
        pageSize: 10
    });

    const pagination = useMemo(
        () => ({
            pageIndex,
            pageSize
        }),
        [pageIndex, pageSize]
    );

    const requestBody = {};

    if (globalFilter.length > 0) {
        requestBody.search = globalFilter;
    }

    if (columnFilters.length != '') {
        requestBody.filter = columnFilters;
    }

    if (pagination.pageIndex > 0) {
        requestBody.page = pagination.pageIndex;
    }

    if (perPage > 10) {
        requestBody.per_page = perPage;
    }

    const fetchData = () => {
        router.visit(page.ziggy.location, {
            preserveState: true,
            preserveScroll: true,
            method: 'get',
            data: requestBody,
            replace: true
        });
    };

    const handleFilter = (e) => {
        const newFilter = {
            ...columnFilters, // Menyalin filter yang sudah ada
            [e.target.name]: e.target.value // Menambah filter baru dari event
        };
        setColumnFilters(newFilter);
    };

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false; // Menandai bahwa ini bukan lagi pemanggilan pertama kali
        } else {
            fetchData(); // Memanggil fetchData untuk pembaruan selanjutnya
        }
    }, [pageIndex, globalFilter, columnFilters, perPage]);

    const resetFilter = () => {
        setGlobalFilter('');
        setColumnFilters({});
    };

    const table = useReactTable({
        data: data.data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        enableMultiRemove: true,
        enableSortingRemoval: true,
        manualPagination: true,
        manualSorting: true,
        manualFiltering: true,
        state: {
            sorting: sorting,
            globalFilter: globalFilter,
            pagination
        },
        pageCount: 10,
        onSortingChange: setSorting,
        onGlobalFilterChange: setGlobalFilter,
        onPaginationChange: setPagination,
        initialState: {
            pagination: {
                pageSize: 10
            }
        },
        sortDescFirst: setSorting,
        debugTable: true
    });
    return (
        <div className={'rounded-md border'}>
            <Table>
                <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
                            <TableHead key={header.id} colSpan={header.colSpan} className={'fs-5'}>
                                {header.isPlaceholder ? null : (
                                    <div
                                        {...{
                                            className: header.column.getCanSort()
                                                ? 'flex items-center cursor-pointer select-none'
                                                : 'flex items-center',
                                            onClick: header.column.getToggleSortingHandler()
                                        }}
                                    >
                                        {flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                        {{
                                            asc: <IconChevronUp className={'ms-2'} size={15}/>,
                                            desc: <IconChevronDown className={'ms-2'} size={15}/>
                                        }[header.column.getIsSorted()] ?? null}
                                    </div>
                                )}
                            </TableHead>
                        ))}
                    </TableRow>
                ))}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => (
                            <TableRow
                                key={row.id}
                                data-state={row.getIsSelected() && "selected"}
                            >
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={columns.length} className="h-24 text-center">
                                No results.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
                <tfoot>
                {table.getFooterGroups().map((footerGroup) => (
                    <tr key={footerGroup.id}>
                        {footerGroup.headers.map((header) => (
                            <th key={header.id}>
                                {header.isPlaceholder
                                    ? null
                                    : flexRender(header.column.columnDef.footer, header.getContext())}
                            </th>
                        ))}
                    </tr>
                ))}
                </tfoot>
            </Table>
        </div>
    );
};

export default Datatable;
