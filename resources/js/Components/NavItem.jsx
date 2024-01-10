import React from 'react';
import {Link} from "@inertiajs/react";
import {IconHelpCircle, IconQuestionMark} from "@tabler/icons-react";

const NavItem = ({icon, text, url}) => {
    return (
        <div className={'py-1 px-2 rounded-md hover:no-underline  hover:bg-accent'}>
            <Link href={url} className={'flex text-sm text-slate-800 font-medium gap-1'}>
                {icon ?? <IconHelpCircle size={18} stroke={1.5}/>}
                <span>{text}</span>
            </Link>
        </div>
    );
};

export default NavItem;
