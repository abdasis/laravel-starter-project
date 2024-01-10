import React from 'react';
import Authenticated from "@/Layouts/AuthenticatedLayout";
import {Head} from "@inertiajs/react";
import Datatable from "@/Components/Datatable/Table.jsx";
import {IconEdit, IconTrash} from "@tabler/icons-react";

const Index = ({users}) => {
    const columns = [
        {
            header: 'Nama Lengkap',
            accessorKey: 'name'
        },
        {
            header: 'Email',
            accessorKey: 'email'
        },
        {
            header: 'Tanggal Dibuat',
            accessorKey: 'created_at'
        },
        {
            header: 'Aksi',
            accessorKey: 'id',
            cell: ({ row }) => (
                <div className="btn-group flex gap-1">
                    <button className="hover:bg-orange-100 p-0.5 rounded-sm text-orange-500">
                        <IconEdit size={16} stroke={1.8} />
                    </button>
                    <button className="hover:bg-rose-100 p-0.5 rounded-sm text-rose-500">
                        <IconTrash size={16} stroke={1.8} />
                    </button>
                </div>
            )
        }
    ];

    return (
        <div>
            <Head title={'Data Pengguna'}/>
            <Datatable columns={columns} data={users}/>
        </div>
    );
};
Index.layout = page => (
    <Authenticated
        children={page}
    />
);
export default Index;
