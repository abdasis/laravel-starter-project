import React from 'react';
import {cn} from "@/Lib/Utils.jsx.js";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/Components/ui/accordion";
import {IconDashboard, IconReportMoney, IconUser} from "@tabler/icons-react";
import DropdownItem from "@/Components/DropdownItem.jsx";
import {Link} from "@inertiajs/react";
import NavItem from "@/Components/NavItem.jsx";
import SidebarMenuTitle from "@/Components/SidebarMenuTitle.jsx";


const Sidebar = () => {
    return (
        <div className={cn(`fixed hidden mt-16 bg-white h-screen border-r border-e-slate-100 pt-16 p-3 md:block w-72`)}>
            <Accordion type="single" collapsible className="w-full">
                <NavItem text={'Dashboard'} url={route('dashboard')}/>
                <DropdownItem icon={<IconReportMoney className={'text-slate-800'} stroke={1.1}/>} text={'Laporan'} target={'dashboard'}>
                    <DropdownItem.Content>
                        <Link>Naraca</Link>
                    </DropdownItem.Content>
                    <DropdownItem.Content>
                        <Link>Rugi Laba</Link>
                    </DropdownItem.Content>
                </DropdownItem>
                <SidebarMenuTitle text={'Sistem'}/>
                <DropdownItem icon={<IconUser stroke={1.2}/>} text={'Pengguna'} target={'pengguna'}>
                    <DropdownItem.Content>
                        <Link>Pengguna Baru</Link>
                    </DropdownItem.Content>
                    <DropdownItem.Content>
                        <Link>Data Pengguna</Link>
                    </DropdownItem.Content>
                </DropdownItem>

            </Accordion>
        </div>
    );
};

export default Sidebar;
