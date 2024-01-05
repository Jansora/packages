import {ListItemProps} from "../../../../lib/declares";
import {IconFont} from "../../ui/iconfont/IconFont";


export function ListItem({title, description, icon}: ListItemProps) {

    return (
        <div className="flex items-center justify-between h-8 w-full px-3 rounded-sm hover:bg-secondary dark:hover:bg-secondary">
            <div className="flex items-center mr-2 ">
                {
                    !!icon && <IconFont name={icon} className="h-5 w-5 mr-2" />
                }
                <span className="text-sm">{title}</span>
            </div>
            <div className="">
                <p className="text-muted-foreground text-sm">{description}</p>
            </div>
        </div>
    )
}
