import * as iconsGeneric from "@/components/icons";
import * as iconsExternal from "@/components/icons/external";
import * as iconsCategory from "@/components/icons/category";

import type { Props as IconMenuProps } from "@/components/icons/menu";

export interface Props extends React.HTMLAttributes<HTMLElement>, IconMenuProps {
    group?: string;
    name: string;
}

function formatName(name: string) {
    return "icon" + (name.charAt(0).toUpperCase() + name.slice(1)).replace(/-/g, "");
}

/**
 * Generates an icon.
 *
 * @param group - Specifies what group the icon belongs to.
 * @param name - Specifies the icon name.
 * @returns The icon element.
 */
export default function IconProvider({ group, name, ...props }: Props) {
    const formattedName = formatName(name) as keyof object;
    let icon = (iconProps?: any) => {
        return <div></div>;
    };

    if (group === "generic") icon = iconsGeneric[formattedName];
    if (group === "external") icon = iconsExternal[formattedName];
    if (group === "category") icon = iconsCategory[formattedName];

    return icon(props);
}
