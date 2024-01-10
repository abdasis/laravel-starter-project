import React from 'react';
import {DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent} from "@/Components/ui/dropdown-menu.jsx";
import {DropdownMenuTrigger} from "@radix-ui/react-dropdown-menu";
import {Button} from "@/Components/ui/button.jsx";
import {IconSearch, IconTable} from "@tabler/icons-react";
import TextInput from "@/Components/Form/TextInput.jsx";

const Toolbar = ({table}) => {
    return (
        <div className={'flex items-center justify-between mb-3'}>
            <div className="right-section flex items-center ">
                <TextInput iconPosition={'start'} icon={<IconSearch size={16} stroke={1.5} className={'text-slate-600'}/>} placeholder={'Cari...'} className={'focus-visible:ring-0'} onChange={(e) => table.setGlobalFilter(e.target.value)}/>
            </div>
            <div className="left-section">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="ml-auto select-none focus-visible:ring-0 gap-1">
                            <IconTable size={14} stroke={1.5}/>
                            <span>Kolom</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className={'p-0 rounded-md w-40 shadow-sm border-slate-100'} align="end">
                        <div className="dropdown-header p-2 border-b border-slate-100">
                            <h5 className={'text-sm font-medium capitalize text-center'}>Pilih Kolom</h5>
                        </div>
                        {table
                            .getAllColumns()
                            .filter(
                                (column) => column.getCanHide()
                            )
                            .map((column) => {
                                return (
                                    <DropdownMenuCheckboxItem
                                        key={column.id}
                                        className="capitalize py-1"
                                        checked={column.getIsVisible()}
                                        onCheckedChange={(value) =>
                                            column.toggleVisibility(!!value)
                                        }
                                    >
                                        {column.columnDef.header}
                                    </DropdownMenuCheckboxItem>
                                )
                            })}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
};

export default Toolbar;
