import React, {forwardRef, Fragment} from 'react';
import {IconHelp} from '@tabler/icons-react';
import {Popover, PopoverContent, PopoverTrigger} from "@/Components/ui/popover.jsx";
import {Button} from "@/Components/ui/button.jsx";
import {Label} from "@/Components/ui/label.jsx";
import {Input} from "@/Components/ui/input.jsx";
import {cn} from "@/Lib/Utils.jsx.js";

const TextInput = forwardRef(function TextInput(props, ref) {
    const {label, name, errors, placeholder, help, icon, className, iconPosition = 'start', ...otherProps} = props;
    const FormHelp = (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline">Open popover</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
                <div className="grid gap-4">
                    <div className="space-y-2">
                        <h4 className="font-medium leading-none">Dimensions</h4>
                        <p className="text-sm text-muted-foreground">
                            Set the dimensions for the layer.
                        </p>
                    </div>
                    <div className="grid gap-2">
                        <div className="grid grid-cols-3 items-center gap-4">
                            <Label htmlFor="width">Width</Label>
                            <Input
                                id="width"
                                defaultValue="100%"
                                className="col-span-2 h-8"
                            />
                        </div>
                        <div className="grid grid-cols-3 items-center gap-4">
                            <Label htmlFor="maxWidth">Max. width</Label>
                            <Input
                                id="maxWidth"
                                defaultValue="300px"
                                className="col-span-2 h-8"
                            />
                        </div>
                        <div className="grid grid-cols-3 items-center gap-4">
                            <Label htmlFor="height">Height</Label>
                            <Input
                                id="height"
                                defaultValue="25px"
                                className="col-span-2 h-8"
                            />
                        </div>
                        <div className="grid grid-cols-3 items-center gap-4">
                            <Label htmlFor="maxHeight">Max. height</Label>
                            <Input
                                id="maxHeight"
                                defaultValue="none"
                                className="col-span-2 h-8"
                            />
                        </div>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    );
    return (
        <Fragment>
            <Label htmlFor={name} className="flex mb-1">
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
                    <div className={`border flex ${errors ? 'is-invalid' : ''}`}>
                        <Input
                            placeholder={placeholder}
                            className={`border-0 outline-0 ring-0 shadow-none ${errors ? 'is-invalid' : ''}`}
                            id={name}
                            name={name}
                            {...otherProps}
                        />
                    </div>
                </div>
            )}
            {errors && <small className="text-danger">{errors}</small>}
        </Fragment>
    );
});

export default TextInput;
