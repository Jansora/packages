import React from "react";

import {cn} from "../../../lib/utils";

import {Accordion, AccordionContent, AccordionItem, AccordionTrigger,} from "@jansora/ui/esm/components/ui/accordion"
import {ListItemProps} from "../../../lib/declares";
import {NavLink} from "../next/NavLink";
import {IconFont} from "./iconfont/IconFont";

export interface TreeProps extends ListItemProps {
    title: string
    value: string,
    className: string
    defaultOpenValues?: string[]
    element?: React.ReactNode
    children?: TreeProps[]
}
export default function Tree({nodes, className}: {nodes: TreeProps[], className?: string}) {
    return <div className={cn("px-2",className)}>
        {RenderTree(nodes)}
    </div>
}

function RenderTree(nodes: TreeProps[]) {

    return nodes.map((node) => {
        if (!node.children || node.children.length == 0) {
            return RenderLeafNode(node)
        }

        return  <Accordion key={node.value} type="multiple" defaultValue={node.defaultOpenValues || []} className={cn("w-full pl-4", node.className)}>
                <AccordionItem value={node.value}>
                    {RenderNode(node)}

                    <AccordionContent>
                        { RenderTree(node.children) }
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
    })

}


/**
 *
 */
function RenderLeafNode(node: TreeProps) {
    const className = "w-full h-9 rounded-sm ml-4 mr-1"

    return <div key={node.href} className={className} >
        <NavLink href={node.href || "/"} >
            <div className="flex items-center justify-between h-5 w-full py-5 px-4 rounded-sm hover:bg-secondary dark:hover:bg-secondary">
                <div className="flex items-center mr-2 ">
                    {
                        !!node.icon && <IconFont name={node.icon} className="h-5 w-5 mr-2" />
                    }
                    <h3 className="text-sm" style={{marginLeft: "-0.25rem"}}>{node.title}</h3>
                </div>
            </div>
    </NavLink>
    </div>

}

function RenderNode(node: TreeProps) {
    const className = "w-full h-9 rounded-sm my-1"

    return <div key={node.href} className={className} >
        <AccordionTrigger className="h-5 py-5 pl-3 pr-1 hover:no-underline hover:bg-secondary dark:hover:bg-secondary" style={{}}>
            <div className="flex items-center mr-2 ">
                {
                    !!node.icon && <IconFont name={node.icon} className="h-5 w-5 mr-2" />
                }
                <h3 className="text-sm">
                    {node.title}
                </h3>
            </div>

        </AccordionTrigger>

    </div>

}
