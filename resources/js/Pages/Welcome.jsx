import React from 'react';
import Guest from "@/Layouts/GuestLayout.jsx";
import {Head, Link, usePage} from "@inertiajs/react";
import {Button} from "@/Components/ui/button.jsx";

const Welcome = ({}) => {
    const {auth} = usePage().props
    return (
        <div>
            <Head title="Welcome"/>
            <div className="welcome-content flex flex-col gap-2 items-center">
                <h1>Selamat Datang</h1>
                <div className="btn-group flex gap-2">
                    <Link href={route('login')}>
                        <Button>Login</Button>
                    </Link>
                    <Link href={route('register')}>
                        <Button>Register</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
Welcome.layout = page => (
    <Guest
        children={page}
    />
);
export default Welcome;
