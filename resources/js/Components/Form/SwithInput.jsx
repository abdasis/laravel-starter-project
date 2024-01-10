import React from 'react';
import {Switch} from "@/Components/ui/switch.jsx";
import {Label} from "@/Components/ui/label.jsx";

const SwitchInput = ({label, name, errors, placeholder, help, ...props}) => {
    return (
        <div className="flex items-center space-x-2">
            <Switch id={name}/>
            <Label htmlFor={name}>{label}</Label>
        </div>
    );
};

export default SwitchInput;
