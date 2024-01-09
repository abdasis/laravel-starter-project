import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';
import Header from "@/Components/Header.jsx";
import Sidebar from "@/Components/Sidebar.jsx";

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="min-h-screen bg-white">
            <Header/>
            <div className="main-wrapper flex justify-start gap-1">
                <Sidebar/>
                <main className={'w-full ms-72 p-5'}>
                    {children}
                </main>
            </div>
        </div>
    );
}
