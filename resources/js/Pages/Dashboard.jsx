import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head} from '@inertiajs/react';
import {Fragment} from "react";
import TextInput from "@/Components/Form/TextInput.jsx";

const Dashboard = () => {
    return (
        <Fragment>
            <Head title="Dashboard"/>
            <div className="mb-10">You're logged in!</div>
            <div className="flex flex-row">
                <div className="form-wrapper w-72">
                    <TextInput help={'Kamu bisa menggunakan icon'} label={'Label'} placeholder={'Contoh Text Input'}/>
                </div>
            </div>
        </Fragment>
    );
}

Dashboard.layout = page => <AuthenticatedLayout children={page}/>

export default Dashboard
