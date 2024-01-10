import React from 'react';
import {useDropzone} from "react-dropzone";
import {IconCloudUpload} from "@tabler/icons-react";
import {Label} from "@radix-ui/react-dropdown-menu";
import {Input} from "@/Components/ui/input.jsx";

const FileInput = ({label, name, errors, placeholder, variant, help, onChange, ...props}) => {
    const {acceptedFiles, getRootProps, getInputProps} = useDropzone();

    const files = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));

    return (
        <>
            <Label className={'mb-1'} htmlFor={name}>{label}</Label>
            {variant === 'simple' ? (
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="picture">Picture</Label>
                    <Input onChange={(e) => !onChange ? null : onChange(e.target.value)} id="picture" type="file"/>
                </div>
            ) : (
                <div className={'dropzone-wrapper'}>
                    <section
                        className="container upload-area w-full py-5 px-10 border-dashed bg-slate-50 border border-slate-200 rounded-md">
                        <div {...getRootProps({className: 'dropzone font-medium leading-0 items-center gap-2 text-center flex flex-col'})}>
                            <IconCloudUpload/>
                            <input {...getInputProps()} />
                            <p className={'text-sm text-slate-500 font-normal'}>Drag 'n' drop some files here, or click to select files</p>
                        </div>
                    </section>
                    <aside>
                        <h4>Files</h4>
                        <ul>{files}</ul>
                    </aside>
                </div>
            )}
        </>
    )
};

export default FileInput;
