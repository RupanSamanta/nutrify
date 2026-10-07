"use client"

import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import { PopoverContent } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";

const DateSelector = () => {
    const [open, setOpen] = useState(false);
    const [date, setDate] = useState(new Date());
    const incrementDate = () => { setDate(new Date(date.setDate(date.getDate() + 1))); };
    const decrementDate = () => { setDate(new Date(date.setDate(date.getDate() - 1))); };
    return (
        <div className="date-changer flex justify-between items-center text-lg px-2 [&>button]:outline-none [&>button]:border-none [&>button]:disabled:opacity-30">
            <Button size="icon" variant="outline" onClick={decrementDate}><ChevronLeft /></Button>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger render={<Button variant="outline" className="font-medium text-md">{date.toDateString()}</Button>} />
                <PopoverContent className="ring-gray-100">
                    <Calendar mode="single" selected={date} disabled={(date) => date > new Date()}
                        onSelect={(date) => { setDate(date); setOpen(false); }} 
                        className="w-full"
                        captionLayout="dropdown" />
                </PopoverContent>
            </Popover>
            <Button size="icon" variant="outline" onClick={incrementDate} disabled={date.toLocaleDateString() >= new Date().toLocaleDateString()}><ChevronRight /></Button>
        </div>
    )
}

export default DateSelector