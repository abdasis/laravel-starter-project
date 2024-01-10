import {Popover, PopoverContent, PopoverTrigger} from "@/Components/ui/popover.jsx";
import {Button} from "@/Components/ui/button.jsx";
import {IconHelp} from "@tabler/icons-react";

const LabelHelp = ({text}) => (
    <Popover>
        <PopoverTrigger asChild>
            <Button variant="ghost" className={'p-0 h-0'}>
                <IconHelp size={14} stroke={1}/>
            </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80 p-0 border-slate-100 shadow-sm">
            <div
                className="pop-header text-xs font-semibold p-2 px-3 flex gap-1 border-b border-slate-100 items-center">
                <IconHelp size={16}/>
                <span>Bantuan</span>
            </div>
            <div className="pop-body p-2 px-3">
                <small>{text}</small>
            </div>
        </PopoverContent>
    </Popover>
);

export default LabelHelp;
