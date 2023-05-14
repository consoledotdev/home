/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        appDir: true,
        mdxRs: true,
        typedRoutes: true,
    },
    images: {
        unoptimized: true,
    },
    async redirects() {
        return [
            {
                source: "/beta",
                destination: "/betas",
                permanent: true,
            },
            {
                source: "/qa",
                destination: "/interviews",
                permanent: true,
            },
            {
                source: "/qa/stackhawk-scott-gerlach",
                destination: "/interviews/stackhawk-scott-gerlach",
                permanent: true,
            },
            {
                source: "/qa/gitpod-christian-weichel",
                destination: "/interviews/gitpod-christian-weichel",
                permanent: true,
            },
            {
                source: "/qa/oso-sam-scott",
                destination: "/interviews/oso-sam-scott",
                permanent: true,
            },
            {
                source: "/qa/infracost-ali-khajeh-hosseini",
                destination: "/interviews/infracost-ali-khajeh-hosseini",
                permanent: true,
            },
            {
                source: "/qa/vmcli-yifan-gu",
                destination: "/interviews/vmcli-yifan-gu",
                permanent: true,
            },
            {
                source: "/qa/bit-chris-walz",
                destination: "/interviews/bit-chris-walz",
                permanent: true,
            },
            {
                source: "/qa/seed-jay-v",
                destination: "/interviews/seed-jay-v",
                permanent: true,
            },
            {
                source: "/qa/earthly-adam-gordon-bell",
                destination: "/interviews/earthly-adam-gordon-bell",
                permanent: true,
            },
            {
                source: "/qa/starship-matan-kushner",
                destination: "/interviews/starship-matan-kushner",
                permanent: true,
            },
            {
                source: "/qa/stork-search-james-little",
                destination: "/interviews/stork-search-james-little",
                permanent: true,
            },
            {
                source: "/qa/vantage-ben-schaechter",
                destination: "/interviews/vantage-ben-schaechter",
                permanent: true,
            },
            {
                source: "/qa/rsync-john-kozubik",
                destination: "/interviews/rsync-john-kozubik",
                permanent: true,
            },
            {
                source: "/qa/raycast-petr-nikolaev",
                destination: "/interviews/raycast-petr-nikolaev",
                permanent: true,
            },
            {
                source: "/qa/wayscript-jesse-orshan",
                destination: "/interviews/wayscript-jesse-orshan",
                permanent: true,
            },
            {
                source: "/qa/temporal-manu-srivastava",
                destination: "/interviews/temporal-manu-srivastava",
                permanent: true,
            },
            {
                source: "/qa/typesense-jason-bosco",
                destination: "/interviews/typesense-jason-bosco",
                permanent: true,
            },
            {
                source: "/qa/codesee-shanea-leven",
                destination: "/interviews/codesee-shanea-leven",
                permanent: true,
            },
            {
                source: "/qa/keydb-john-sully",
                destination: "/interviews/keydb-john-sully",
                permanent: true,
            },
            {
                source: "/qa/akita-jean-yang",
                destination: "/interviews/keydb-john-sully",
                permanent: true,
            },
            {
                source: "/zero",
                destination: "https://davidmytton.blog/investments/",
                permanent: true,
            },
        ];
    },
};

module.exports = nextConfig;

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
