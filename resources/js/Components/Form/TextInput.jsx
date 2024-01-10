import React, {forwardRef, Fragment} from 'react';
import {IconHelp} from '@tabler/icons-react';
import {Popover, PopoverContent, PopoverTrigger} from "@/Components/ui/popover.jsx";
import {Button} from "@/Components/ui/button.jsx";
import {Label} from "@/Components/ui/label.jsx";
import {Input} from "@/Components/ui/input.jsx";
import {cn} from "@/Lib/Utils.jsx.js";
import {Alert, AlertDescription, AlertTitle} from "@/Components/ui/alert.jsx";
import {RocketIcon} from "@radix-ui/react-icons";

const TextInput = forwardRef(function TextInput(props, ref) {
    const {label, name, errors, placeholder, help, icon, className, iconPosition = 'start', ...otherProps} = props;
    const FormHelp = (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="ghost" className={'p-0 h-0'}>
                    <IconHelp size={14} stroke={1}/>
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-0 border-slate-100 shadow-sm">
                <div className="pop-header text-xs font-semibold p-2 px-3 flex gap-1 border-b border-slate-100 items-center">
                    <IconHelp size={16}/>
                    <span>Bantuan</span>
                </div>
                <div className="pop-body p-2 px-3">
                    <small>{help}</small>
                </div>
            </PopoverContent>
        </Popover>
    );
    return (
        <Fragment>
            <Label htmlFor={name} className="flex items-center gap-1 mb-1">
                <span>{label}</span>
                {help && (
                    FormHelp
                )}
            </Label>
            {icon != null ? (
                <Fragment>
                    {iconPosition == 'end' ? (
                        <div className={cn('flex focus-within:border-1 focus-within:border-rose-300 shadow-sm focus-within:shadow-none border rounded-md px-3 items-center gap-1' + className)}>
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
                        <div className={cn('flex focus-within:border-1 focus-within:border-rose-300 shadow-sm focus-within:shadow-none border rounded-md px-3 items-center gap-1' + className)}>
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
                </Fragment>
            ) : (
                <div>
                    <Input
                        placeholder={placeholder}
                        id={name}
                        name={name}
                        {...otherProps}
                    />
                </div>
            )}
            {errors && <small className="text-danger">{errors}</small>}
        </Fragment>
    );
});

export default TextInput;
