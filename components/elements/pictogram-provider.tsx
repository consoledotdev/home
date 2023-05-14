import * as pictogramsGeneric from "@/components/pictograms";

/**
 * Generates a pictogram.
 *
 * @param group - Specifies what group the pictogram belongs to.
 * @param name - Specifies the pictogram name.
 * @returns The pictogram element.
 */
export interface Props extends React.HTMLAttributes<HTMLElement> {
    group: string;
    name: string;
}

function formatName(name: string) {
    return "pictogram" + (name.charAt(0).toUpperCase() + name.slice(1)).replace(/-/g, "");
}

export default function PictogramProvider({ group, name, ...props }: Props) {
    const formattedName = formatName(name) as keyof object;
    let pictogram = (pictogramProps?: any) => {
        return <div></div>;
    };

    if (group === "generic") pictogram = pictogramsGeneric[formattedName];

    return pictogram(props);
}
