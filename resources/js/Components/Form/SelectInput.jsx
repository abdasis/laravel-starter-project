import React from 'react';
import {Popover, PopoverContent, PopoverTrigger} from "@/Components/ui/popover.jsx";
import {Button} from "@/Components/ui/button.jsx";
import {cn} from "@/Lib/Utils.jsx.js";
import {CaretSortIcon, CheckIcon} from "@radix-ui/react-icons";
import {CommandEmpty, CommandGroup, CommandInput, CommandItem, Command} from "@/Components/ui/command.jsx";
import LabelHelp from "@/Components/Form/LabelHelp.jsx";
import {Label} from "@/Components/ui/label.jsx";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/Components/ui/select.jsx";

const SelectInput = ({options = [], label, placeholder, name, variant, help, onSelect, ...props}) => {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")

    return (
        <div className={'form-group'}>
            <Label htmlFor={name} className="flex items-center gap-1 mb-1">
                <span>{label}</span>
                {help && (
                    <LabelHelp text={help}/>
                )}
            </Label>
            {variant == 'simple' ? (
                <Select  onValueChange={onSelect != null ? (value) => onSelect(value) : null} >
                    <SelectTrigger className="w-full select-none ">
                        <SelectValue placeholder={placeholder} />
                    </SelectTrigger>
                    <SelectContent>
                        {options.map((option) => (
                            <SelectItem className={'cursor-pointer'} key={option.value} value={option.value}>
                                {option.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            ) : (
                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={open}
                            className="w-[100%] h-9 font-normal justify-between"
                        >
                            {value
                                ? options.find((option) => option.value === value)?.label
                                : placeholder}
                            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="min-w-full p-0">
                        <Command>
                            <CommandInput placeholder={placeholder} className="h-9" />
                            <CommandEmpty>No framework found.</CommandEmpty>
                            <CommandGroup>
                                {options.map((option) => (
                                    <CommandItem
                                        key={option.value}
                                        value={option.value}
                                        className={'cursor-pointer'}
                                        onSelect={(currentValue) => {
                                            setValue(currentValue === value ? "" : currentValue)
                                            setOpen(false)
                                            onSelect(currentValue)
                                        }}
                                    >
                                        {option.label}
                                        <CheckIcon
                                            className={cn(
                                                "ml-auto h-4 w-4",
                                                value === option.value ? "opacity-100" : "opacity-0"
                                            )}
                                        />
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </Command>
                    </PopoverContent>
                </Popover>
            )}
        </div>
    );
};

export default SelectInput;
