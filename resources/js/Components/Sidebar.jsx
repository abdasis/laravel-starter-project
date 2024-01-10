import React from 'react';
import {cn} from "@/Lib/Utils.jsx.js";
import {Accordion} from "@/Components/ui/accordion";
import {IconDatabase, IconSettings, IconUserCog} from "@tabler/icons-react";
import DropdownItem from "@/Components/DropdownItem.jsx";
import {Link} from "@inertiajs/react";
import NavItem from "@/Components/NavItem.jsx";
import SidebarMenuTitle from "@/Components/SidebarMenuTitle.jsx";
import SimpleBar from "simplebar-react";


const Sidebar = () => {
    return (
        <div className={cn(`fixed hidden mt-16 bg-white overflow-hidden h-screen border-r border-e-slate-150  md:block w-60`)}>
            <SimpleBar forceVisible="y" className={'max-h-[85vh] min-h-screen p-3 border-b border-b-slate-100'} autoHide={true}>
                <Accordion type="single" collapsible className="w-full">
                    <NavItem text={'Dashboard'} url={route('dashboard')}/>
                    <DropdownItem icon={<IconDatabase size={18} className={'text-slate-800'} stroke={1.1}/>} text={'Data Master'} target={'dashboard'}>
                        <DropdownItem.Content>
                            <Link>Menu 1</Link>
                        </DropdownItem.Content>
                        <DropdownItem.Content>
                            <Link>Menu 2</Link>
                        </DropdownItem.Content>
                    </DropdownItem>
                    <SidebarMenuTitle text={'Sistem'}/>
                    <DropdownItem icon={<IconUserCog size={18} stroke={1.2}/>} text={'Pengguna'} target={'pengguna'}>
                        <DropdownItem.Content>
                            <Link>Pengguna Baru</Link>
                        </DropdownItem.Content>
                        <DropdownItem.Content>
                            <Link href={route('users.index')} >Data Pengguna</Link>
                        </DropdownItem.Content>
                    </DropdownItem>
                    <DropdownItem icon={<IconSettings size={18} stroke={1.2}/>} text={'Pengaturan'} target={'setting'}>
                        <DropdownItem.Content>
                            <Link>General</Link>
                        </DropdownItem.Content>
                        <DropdownItem.Content>
                            <Link href={route('users.index')} >Preferensi</Link>
                        </DropdownItem.Content>
                    </DropdownItem>
                </Accordion>
            </SimpleBar>
        </div>
    );
};

export default Sidebar;
