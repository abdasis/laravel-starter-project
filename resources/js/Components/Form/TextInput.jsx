import React, {forwardRef, Fragment} from 'react';
import {IconHelp} from '@tabler/icons-react';
import {Popover, PopoverContent, PopoverTrigger} from "@/Components/ui/popover.jsx";
import {Button} from "@/Components/ui/button.jsx";
import {Label} from "@/Components/ui/label.jsx";
import {Input} from "@/Components/ui/input.jsx";
import {cn} from "@/Lib/Utils.jsx.js";
import LabelHelp from "@/Components/Form/LabelHelp.jsx";

const TextInput = forwardRef(function TextInput(props, ref) {
    const {label, name, errors, placeholder, help, icon, className, iconPosition = 'start', ...otherProps} = props;

    return (
        <>
            <Label htmlFor={name} className="flex items-center gap-1 mb-1">
                <span>{label}</span>
                {help && (
                    <LabelHelp text={help}/>
                )}
            </Label>
            {icon != null ? (
                <>
                    {iconPosition == 'end' ? (
                        <div className={cn('flex h-9 focus-within:border-1 focus-within:border-primary shadow-sm focus-within:shadow-none border rounded-md pe-3 items-center gap-1' + className)}>
                            <Input
                                placeholder={placeholder}
                                className={'border-0 focus-visible:ring-0 shadow-none'}
                                id={name}
                                name={name}
                                {...otherProps}
                            />
                            <span className="input-icon-addon">{icon}</span>
                        </div>
                    ) : (
                        <div className={cn('flex h-9  focus-within:border-1 focus-within:border-primary shadow-sm focus-within:shadow-none border rounded-md ps-3 items-center gap-1' + className)}>
                            <span className="input-icon-addon">{icon}</span>
                            <Input
                                placeholder={placeholder}
                                className={'border-0 focus-visible:ring-0 shadow-none'}
                                id={name}
                                name={name}
                                {...otherProps}
                            />
                        </div>
                    )}
                </>
            ) : (
                <div>
                    <Input
                        className={'h-9'}
                        placeholder={placeholder}
                        id={name}
                        name={name}
                        {...otherProps}
                    />
                </div>
            )}
            {errors && <small className="text-danger">{errors}</small>}
        </>
    );
});

export default TextInput;
