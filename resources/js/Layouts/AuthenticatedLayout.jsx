import {useState} from 'react';
import Header from "@/Components/Header.jsx";
import Sidebar from "@/Components/Sidebar.jsx";
import {Toaster} from "react-hot-toast";
import 'simplebar-react/dist/simplebar.min.css';

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    return (
        <div className="min-h-screen bg-white">
            <Header/>
            <div className="main-wrapper flex justify-start gap-1">
                <Sidebar/>
                <main className={'w-full mt-16 md:ms-72 p-5'}>
                    {children}
                </main>
                <Toaster/>
            </div>
        </div>
    );
}
