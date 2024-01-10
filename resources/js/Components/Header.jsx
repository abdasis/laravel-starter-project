import React from 'react';
import {Link} from "@inertiajs/react";
import {IconBell, IconChevronDown, IconDropletDollar, IconHelp, IconMenu, IconSettings} from "@tabler/icons-react";
import {cn} from "@/Lib/Utils.jsx.js";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu"
import {Button} from "@/Components/ui/button.jsx";
import {Avatar, AvatarFallback} from "@/Components/ui/avatar.jsx";

const Header = () => {
    return (
        <div
            className="fixed top-0 left-0 right-0 supports-backdrop-blur:bg-background/60 border-b border-b-slate-150 bg-background/95 backdrop-blur z-20">
            <nav className="h-16 flex items-center justify-between px-5">
                <div className="hidden md:block">
                    <Link
                        href={"https://github.com/Kiranism/next-shadcn-dashboard-starter"}
                        target="_blank"
                        className={'inline-flex items-center gap-1'}
                    >
                        <IconDropletDollar/>
                        <h1 className={'font-semibold'}>Laravel Starter<span className={'text-xl leading-none font-bold text-rose-600'}>.</span> </h1>
                    </Link>
                </div>
                <div className={cn("block sm:!hidden")}>
                    <IconMenu/>
                </div>
                <div className="flex items-center gap-0.5 p-4">
                    <Button variant={'ghost'}>
                        <IconSettings className={'text-slate-400'} stroke={1} size={26}/>
                    </Button>
                    <Button variant={'ghost'}>
                        <IconBell className={'text-slate-400'} stroke={1} size={26}/>
                    </Button>
                    <Button variant={'ghost'} className={'text-slate-400'}>
                        <IconHelp className={'text-slate-400'} stroke={1} size={26}/>
                    </Button>
                    <div className="profile-wrapper">
                        <DropdownMenu>
                            <DropdownMenuTrigger className={'select-none'} asChild>
                                <Button variant="ghost" className="flex group items-center focus-visible:ring-0 outline-0 py-7 px-4 rounded-md hover:bg-slate-50 hover:border-slate-100 gap-2">
                                    <Avatar>
                                        <AvatarFallback className={'bg-slate-50 group-hover:border group-hover:border-slate-300'}>AS</AvatarFallback>
                                    </Avatar>
                                    <div className="user-wrapper hidden md:flex items-center justify-center gap-0 flex-col">
                                        <h1 className={'leading-none'}>Abd. Asis</h1>
                                        <small className={'font-normal text-slate-400'}>Superadmin</small>
                                    </div>
                                    <IconChevronDown className={'hidden md:block'} size={16}/>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56 border-slate-100">
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    <DropdownMenuItem>
                                        Profile
                                        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        Billing
                                        <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        Settings
                                        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        Keyboard shortcuts
                                        <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    <DropdownMenuItem>Team</DropdownMenuItem>
                                    <DropdownMenuSub>
                                        <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
                                        <DropdownMenuPortal>
                                            <DropdownMenuSubContent>
                                                <DropdownMenuItem>Email</DropdownMenuItem>
                                                <DropdownMenuItem>Message</DropdownMenuItem>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem>More...</DropdownMenuItem>
                                            </DropdownMenuSubContent>
                                        </DropdownMenuPortal>
                                    </DropdownMenuSub>
                                    <DropdownMenuItem>
                                        New Team
                                        <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>GitHub</DropdownMenuItem>
                                <DropdownMenuItem>Support</DropdownMenuItem>
                                <DropdownMenuItem disabled>API</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className={'text-rose-600 font-semibold'}>
                                    Log out
                                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
