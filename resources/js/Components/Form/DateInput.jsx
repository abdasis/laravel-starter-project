import React, {useEffect, useState} from 'react';
import {Popover, PopoverContent, PopoverTrigger} from "@/Components/ui/popover.jsx";
import {Button} from "@/Components/ui/button.jsx";
import {ButtonIcon, CalendarIcon} from "@radix-ui/react-icons";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/Components/ui/select.jsx";
import {addDays, format, startOfYear} from "date-fns";
import {cn} from '@/Lib/Utils.jsx.js';
import {Calendar} from "@/Components/ui/calendar.jsx";
import {useNavigation} from "react-day-picker";
import {IconArrowRight, IconChevronLeft, IconChevronRight} from "@tabler/icons-react";


const CustomCaption = (props) => {
    const {goToMonth, nextMonth, previousMonth, goToDate, isDateDisplayed} = useNavigation();
    const currentYear = new Date().getFullYear();
    const startYear = 1947; // Anda dapat mengganti tahun awal sesuai kebutuhan
    const years = [];
    for (let year = currentYear; year >= startYear; year--) {
        years.push(year);
    }
    const [month, setMonth] = useState('');

    return (
        <div className={'flex justify-between items-center gap-1'}>
            <Button
                size={'icon'}
                className={'h-7'}
                variant={'outline'}
                disabled={!previousMonth}
                onClick={
                    () => {
                        previousMonth && goToMonth(previousMonth);
                        setMonth(new Date(previousMonth).getMonth());
                    }
                }
            >
                <IconChevronLeft size={14}/>

            </Button>
            <div className="option-year flex items-center gap-1">
                <Button className={'h-7'} variant={'outline'}>{month+1}</Button>
                <Select
                    onValueChange={(value) => goToDate(new Date(value, 0, 1))}
                >
                    <SelectTrigger className={'w-auto h-7 text-center'}>
                        <SelectValue placeholder={new Date().getFullYear()}/>
                    </SelectTrigger>
                    <SelectContent position="popper">
                        {years.map((year) => (
                            <SelectItem key={year} value={year}>{year}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
            <Button
                className={'h-7'}
                size={'icon'}
                variant={'outline'}
                disabled={!nextMonth}
                onClick={() => {
                    nextMonth && goToMonth(nextMonth);
                    setMonth(new Date(nextMonth).getMonth());
                }}
            >
                <IconChevronRight size={14}/>
            </Button>
        </div>
    );
};

const DateInput = () => {
    const [date, setDate] = useState();
    const [selectedYear, setSelectedYear] = useState('');
    const currentYear = new Date().getFullYear();
    const startYear = 1947; // Anda dapat mengganti tahun awal sesuai kebutuhan
    const years = [];
    for (let year = currentYear; year >= startYear; year--) {
        years.push(year);
    }



    let footer = <p className={'mt-3 text-xs font-medium text-slate-800'}>Belum Memilih Tanggal</p>;
    if (date) {
        footer = <p className={'mt-3 text-xs font-medium text-slate-800'}>Tanggal
            Dipilih <strong>{format(date, 'PP')}</strong>.</p>;
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
                        {date ? format(date, "PPP") : <span>Pilih Tanggal</span>}
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
                                <SelectTrigger className={'w-40 focus-visible:ring-0'}>
                                    <SelectValue placeholder="Pilih Cepat"/>
                                </SelectTrigger>
                                <SelectContent position="popper">
                                    <SelectItem value="0">Hari Ini</SelectItem>
                                    <SelectItem value="1">Besok</SelectItem>
                                    <SelectItem value="3">3 Hari Lagi</SelectItem>
                                    <SelectItem value="7">Satu Minggu Lagi</SelectItem>
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
                            components={{
                                Caption: CustomCaption
                            }}
                        />
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    );
};

export default DateInput;
