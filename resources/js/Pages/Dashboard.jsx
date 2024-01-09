import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import {Fragment} from "react";
import {IconRocket} from "@tabler/icons-react";
import {Button} from "@/Components/ui/button.jsx";
import {Input} from "@/Components/ui/input.jsx";

const Dashboard = () => {
    return (
        <Fragment>
            <Head title="Dashboard" />
            <div className="py-12">
                <div className="p-6 text-gray-900">You're logged in!</div>
                <Input placeholder={'Masukan Username'} className={'mb-5'}/>
                <Button>
                    <IconRocket size={18} className={'me-1'} stroke={1.5}/>
                    Click me
                </Button>
            </div>
        </Fragment>
    );
}

Dashboard.layout = page => <AuthenticatedLayout children={page}/>

export default Dashboard
