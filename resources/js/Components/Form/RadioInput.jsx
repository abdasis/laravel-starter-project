import React from 'react';
import {RadioGroup, RadioGroupItem} from "@/Components/ui/radio-group.jsx";
import {Label} from "@/Components/ui/label.jsx";

const RadioInput = ({label, name, value, errors, defaultValue, onCheck, children , help, ...props}) => {
    return (
        <div>
            <Label className={'mb-10'} htmlFor={name}>{label}</Label>
            <RadioGroup defaultValue={defaultValue} onValueChange={(e) => !onCheck ? null : onCheck(e)} name={name}>
                {children}
            </RadioGroup>
        </div>
    );
};

const Item = ({value, label, name, onCheck}) => {
    return (
        <div className="flex items-center space-x-2">
            <RadioGroupItem value={value} id={name}/>
            <Label htmlFor={name}>{label}</Label>
        </div>
    )
}

export default Object.assign(RadioInput, {
    Item
});
