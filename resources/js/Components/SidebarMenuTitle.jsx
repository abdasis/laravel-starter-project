import React from 'react';

const SidebarMenuTitle = ({text}) => {
    return (
        <div>
            <h5 className={'ms-2 my-2 capitalize text-xs text-slate-500'}>{text}</h5>
        </div>
    );
};

export default SidebarMenuTitle;
