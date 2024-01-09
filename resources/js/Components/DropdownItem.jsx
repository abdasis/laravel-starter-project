import React from 'react';
import {AccordionContent, AccordionItem, AccordionTrigger} from "@/Components/ui/accordion.jsx";
import {IconDashboard, IconHelpCircle, IconQuestionMark} from "@tabler/icons-react";

const DropdownItem = ({text, target, icon, children}) => {
    return (
        <div>
            <AccordionItem className={'border-transparent '} value={target}>
                <AccordionTrigger className={'py-2 px-3 rounded-md hover:no-underline  hover:bg-accent'}>
                    <div className="menu-wrpaper flex gap-1 justify-start items-center">
                        {icon ?? <IconHelpCircle stroke={1.3}/>}
                        <span>{text}</span>
                    </div>
                </AccordionTrigger>
                {children}
            </AccordionItem>
        </div>
    );
};

const DropdownContent = ({children}) => {
    return(
        <AccordionContent className={'ms-5 ps-5 py-1.5 border-s-2 border-s-slate-100'}>
            {children}
        </AccordionContent>
    )
}

export default Object.assign(DropdownItem, {
    Content: DropdownContent
});
