import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head} from '@inertiajs/react';
import {Fragment} from "react";

const Dashboard = () => {
    return (
        <Fragment>
            <Head title="Dashboard"/>
            <div className="p-6 text-gray-900">You're logged in!</div>
        </Fragment>
    );
}

Dashboard.layout = page => <AuthenticatedLayout children={page}/>

export default Dashboard
