interface Props {
    node?: any;
}

const MarkdownTransforms = {
    h1: ({ node, ...props }: Props) => <h1 className="title title-1" {...props} />,
    h2: ({ node, ...props }: Props) => <h2 className="title title-2" {...props} />,
    h3: ({ node, ...props }: Props) => <h3 className="title title-3" {...props} />,
    h4: ({ node, ...props }: Props) => <h4 className="title title-4" {...props} />,
    h5: ({ node, ...props }: Props) => <h5 className="title title-5" {...props} />,
    h6: ({ node, ...props }: Props) => <h6 className="title title-6" {...props} />,
    a: ({ node, ...props }: Props) => <a className="link" {...props} />,
    pre: ({ node, ...props }: Props) => <pre className="pre-code" {...props} />,
    code: ({ node, ...props }: Props) => <code className="code" {...props} />,
    blockquote: ({ node, ...props }: Props) => <blockquote className="blockquote" {...props} />,
    em: ({ node, ...props }: Props) => <span className="text-italic" {...props} />,
    strong: ({ node, ...props }: Props) => <span className="text-medium" {...props} />,
};

type Heading = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

const MarkdownTransformsLimitHeadings = (heading: Heading = "h1", baseTranforms = MarkdownTransforms as any) => {
    const num = parseInt(heading.replace("h", ""));
    const newTs: any = Object.assign({}, baseTranforms);

    for (let i = 1; i <= 6; i++) {
        const headingToReplace = "h" + i;
        const headingToUse = "h" + Math.min(Math.max(num + i - 1, 1), 6);
        newTs[headingToReplace] = baseTranforms[headingToUse];
    }
    return newTs;
};

export { MarkdownTransforms, MarkdownTransformsLimitHeadings };
