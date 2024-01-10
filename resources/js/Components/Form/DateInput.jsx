import React, {useState} from 'react';
import {Popover, PopoverContent, PopoverTrigger} from "@/Components/ui/popover.jsx";
import {Button} from "@/Components/ui/button.jsx";
import {CalendarIcon} from "@radix-ui/react-icons";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/Components/ui/select.jsx";
import {addDays, format, startOfYear} from "date-fns";
import {cn} from '@/Lib/Utils.jsx.js';
import {Calendar} from "@/Components/ui/calendar.jsx";

const DateInput = () => {
    const [date, setDate] = useState();
    const [selectedYear, setSelectedYear] = useState('');
    const currentYear = new Date().getFullYear();
    const startYear = 1947; // Anda dapat mengganti tahun awal sesuai kebutuhan
    const years = [];
    for (let year = currentYear; year >= startYear; year--) {
        years.push(year);
    }

    const handleYearChange = (value) => {
        const selectedValue = parseInt(value);
        setSelectedYear(selectedValue);
        const selectedDate = startOfYear(new Date(selectedValue, 0, 1));
        setDate(selectedDate)
    }

    let footer = <p>Please pick a day.</p>;
    if (date) {
        footer = <p>You picked {format(date, 'PP')}.</p>;
    }

    return (
        <div>
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        variant={"outline"}
                        className={cn(
                            "w-full justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                        )}
                    >
                        <CalendarIcon className="mr-2 h-4 w-4"/>
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                </PopoverTrigger>
                <PopoverContent
                    align="start"
                    className="flex w-auto items-start flex-row gap-2"
                >
                    <div className="option-section">
                        <div className="option-kriteria mb-2">
                            <Select
                                onValueChange={(value) =>
                                    setDate(addDays(new Date(), parseInt(value)))
                                }
                            >
                                <SelectTrigger className={'w-40'}>
                                    <SelectValue placeholder="Pilih Kriteria"/>
                                </SelectTrigger>
                                <SelectContent position="popper">
                                    <SelectItem value="0">Today</SelectItem>
                                    <SelectItem value="1">Tomorrow</SelectItem>
                                    <SelectItem value="3">In 3 days</SelectItem>
                                    <SelectItem value="7">In a week</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="option-year">
                            <Select
                                onValueChange={event => handleYearChange(event)}
                            >
                                <SelectTrigger className={'w-40'}>
                                    <SelectValue placeholder="Pilih Tahun"/>
                                </SelectTrigger>
                                <SelectContent position="popper">
                                    {years.map((year) => (
                                        <SelectItem key={year} value={year}>{year}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="rounded-md border">
                        <Calendar
                            mode="single" selected={date} onSelect={setDate}
                            footer={footer}
                            fromYear={startYear}
                            toYear={currentYear}
                            initialFocus
                        />
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    );
};

export default DateInput;
