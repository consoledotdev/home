import type { MDXComponents } from "mdx/types";

export const h1 = (props: any) => {
    return <h1 className="title title-1" {...props} />;
};
export const h2 = (props: any) => {
    return <h2 className="title title-2" {...props} />;
};
export const h3 = (props: any) => {
    return <h3 className="title title-3" {...props} />;
};
export const h4 = (props: any) => {
    return <h4 className="title title-4" {...props} />;
};
export const h5 = (props: any) => {
    return <h5 className="title title-5" {...props} />;
};
export const h6 = (props: any) => {
    return <h6 className="title title-6" {...props} />;
};
export const a = (props: any) => {
    return <a className="link" {...props} />;
};
export const pre = (props: any) => {
    return <pre className="pre-code" {...props} />;
};
export const code = (props: any) => {
    return <code className="code" {...props} />;
};
export const blockquote = (props: any) => {
    return <blockquote className="blockquote" {...props} />;
};
export const em = (props: any) => {
    return <span className="text-italic" {...props} />;
};
export const strong = (props: any) => {
    return <span className="text-regular" {...props} />;
};

export const customMDXComponents = {
    h1: (props: any) => h1(props),
    h2: (props: any) => h2(props),
    h3: (props: any) => h3(props),
    h4: (props: any) => h4(props),
    h5: (props: any) => h5(props),
    h6: (props: any) => h6(props),
    a: (props: any) => a(props),
    pre: (props: any) => pre(props),
    code: (props: any) => code(props),
    blockquote: (props: any) => blockquote(props),
    em: (props: any) => em(props),
    strong: (props: any) => strong(props),
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        h1: (props) => h1(props),
        h2: (props) => h2(props),
        h3: (props) => h3(props),
        h4: (props) => h4(props),
        h5: (props) => h5(props),
        h6: (props) => h6(props),
        a: (props) => a(props),
        pre: (props) => pre(props),
        code: (props) => code(props),
        blockquote: (props) => blockquote(props),
        em: (props) => em(props),
        strong: (props) => strong(props),
        ...components,
    };
}
