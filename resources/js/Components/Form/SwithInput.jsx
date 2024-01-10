import React from 'react';
import {Switch} from "@/Components/ui/switch.jsx";
import {Label} from "@/Components/ui/label.jsx";

const SwitchInput = ({label, value, name, errors, placeholder, onCheck, help, ...props}) => {
    return (
        <>
            <Label className={'mb-10'} htmlFor={name}>{label}</Label>
            <div className="flex items-center space-x-2">
                <Switch onCheckedChange={(e) => !onCheck ? null : onCheck(e)} id={name}/>
                <Label htmlFor={name}>{value}</Label>
            </div>
        </>
    );
};

export default SwitchInput;
