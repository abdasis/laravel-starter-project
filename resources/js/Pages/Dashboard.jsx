import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head} from '@inertiajs/react';
import {Fragment} from "react";
import TextInput from "@/Components/Form/TextInput.jsx";
import {IconId} from "@tabler/icons-react";
import SelectInput from "@/Components/Form/SelectInput.jsx";
import SwithInput from "@/Components/Form/SwithInput.jsx";
import RadioInput from "@/Components/Form/RadioInput.jsx";
import FileInput from "@/Components/Form/FileInput.jsx";
import DateInput from "@/Components/Form/DateInput.jsx";

const Dashboard = () => {
    const frameworks = [
        {
            value: "next.js",
            label: "Next.js",
        },
        {
            value: "sveltekit",
            label: "SvelteKit",
        },
        {
            value: "nuxt.js",
            label: "Nuxt.js",
        },
        {
            value: "remix",
            label: "Remix",
        },
        {
            value: "astro",
            label: "Astro",
        },
    ]

    return (
        <Fragment>
            <Head title="Dashboard"/>
            <div className="mb-10">You're logged in!</div>
            <div className="flex flex-row">
                <div className="form-wrapper w-72">
                    <div className="my-5">
                        <TextInput help={'Kamu bisa menggunakan icon'} label={'Label'}
                                   placeholder={'Contoh Text Input'}/>
                    </div>
                    <div className="my-5">
                        <TextInput icon={<IconId size={16} stroke={1.5}/>} help={'Kamu bisa menggunakan icon'}
                                   label={'Label Icon Awal'} placeholder={'Contoh Text Input'}/>
                    </div>
                    <div className="my-5">
                        <TextInput iconPosition={'end'} icon={<IconId size={16} stroke={1.5}/>}
                                   help={'Kamu bisa menggunakan icon'}
                                   label={'Label Icon Akhir'} placeholder={'Contoh Text Input'}/>
                    </div>

                    <div className="my-5">
                        <SelectInput
                            help={'Kamu bisa menggunakan icon'}
                            label={'Label Select'} placeholder={'Pilih Framework'}
                            options={frameworks}
                        />
                    </div>

                    <div className="my-5">
                        <SelectInput
                            help={'Kamu bisa menggunakan icon'}
                            label={'Label Select Simple'} placeholder={'Pilih Framework'}
                            options={frameworks}
                            variant={'simple'}
                        />
                    </div>
                    <div className="my-5">
                        <SwithInput value={'Ingat Perangkat Ini'}/>
                    </div>
                    <div className="my-5">
                        <RadioInput label={'Jenis Kelamin'}>
                            <RadioInput.Item value={'Laki-Laki'} label={'Laki-Laki'}/>
                            <RadioInput.Item value={'Perempuan'} label={'Perempuan'}/>
                        </RadioInput>
                    </div>
                    <div className="my-5">
                        <FileInput onChange={(value) => console.log(value.target.value)} variant={'simple'}
                                   label={'Foto Profile'}/>
                    </div>
                    <div className="my-5">
                       <DateInput/>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

Dashboard.layout = page => <AuthenticatedLayout children={page}/>

export default Dashboard
