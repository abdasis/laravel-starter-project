import React from 'react';
import {Link} from "@inertiajs/react";
import {IconHelpCircle, IconQuestionMark} from "@tabler/icons-react";

const NavItem = ({icon, text, url}) => {
    return (
        <div className={'py-2 px-3 rounded-md hover:no-underline  hover:bg-accent'}>
            <Link href={url} className={'flex gap-1'}>
                {icon ?? <IconHelpCircle stroke={1.3}/>}
                <span>{text}</span>
            </Link>
        </div>
    );
};

export default NavItem;
