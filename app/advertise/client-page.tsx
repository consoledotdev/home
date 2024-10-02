"use client";

import React, { useLayoutEffect } from "react";

import { settings } from "@/app/lib/settings";

import { GetTheme } from "@/components/providers/theme-provider";

import FadeOutGrid from "@/app/advertise/fade-out-grid";
import scrollAppearance from "@/app/advertise/scroll-appearance";

import PodcastLinks from "@/components/compositions/podcast-links";
import Button from "@/components/elements/button";
import FramedSection from "@/components/elements/framed-section";
import IconProvider from "@/components/elements/icon-provider";
import ImageProvider from "@/components/elements/image-provider";
import NeonPlanes from "@/components/elements/neon-planes";
import PageSection from "@/components/elements/page-section";
import RichTitle from "@/components/elements/rich-title";
import { Illustration as ConsoleSponsorIllustration } from "@/components/illustrations/console-sponsor";
//import { Illustration as ConsoleSponsoredJobsIllustration } from "@/components/illustrations/console-sponsored-jobs";

import styles from "@/app/advertise/client-page.scss";

interface Props extends React.HTMLAttributes<HTMLElement> {
    page: {
        meta: any;
    };
}

export default function Page({ page, ...props }: Props) {
    // get theme provider info
    const theme = GetTheme();

    const audienceFacts = {
        converting: 68,
        qualified: 77,
        locations: {
            usa: 36,
            eu: 30,
            uk: 12,
            global: 22,
        },
    };

    useLayoutEffect(() => {
        const fadeoutGrid = new FadeOutGrid("[data-logo-cloud]");
        scrollAppearance();
    });

    return (
        <>
            <PageSection classes={["opening"]}>
                <div className="top">
                    <h5 className="title title-4">
                        <span>Advertise</span> with Console
                    </h5>
                    <h2 className="title title-1">Discover the best tools for developers</h2>
                    <p className="description">Console is the place developers go to find the best tools. Each week we pick out the most interesting tools and new releases to help experienced developers stay up-to-date with what matters.</p>
                    <p>
                        <b>In a crowded market, our audience trusts our recommendations.</b>
                    </p>
                    <Button
                        appearance="text"
                        cnslColor="yellow"
                        icon={{
                            group: "generic",
                            name: "scroll-down",
                        }}
                        iconPos="right"
                        el="anchor"
                        href="#work-with-us"
                        title="How to work with us"
                    >
                        How to work with us
                    </Button>
                </div>
                <div className="bottom">
                    <div className="artwork-wrapper">
                        <div className="advertise-artwork">
                            <div className="col triad-01">
                                <div className="plane">
                                    <IconProvider group="generic" name="prompt-to-slant" />
                                </div>
                                <div className="trail"></div>
                            </div>
                            <div className="col triad-02">
                                <div className="plane"></div>
                                <div className="trail"></div>
                            </div>
                            <div className="col triad-03">
                                <div className="plane"></div>
                                <div className="trail"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </PageSection>

            <PageSection classes={["page-section-plane newsletter"]}>
                <div className="top">
                    <RichTitle tag="h3" icon={{ group: "generic", name: "console-mini" }}>
                        <span>console</span>
                        <br />
                        weekly newsletter
                    </RichTitle>
                    <p className="intro">
                        <b>Trusted</b> / We only feature tools that meet our selection criteria.
                    </p>
                    <p className="intro">
                        <b>Concise</b> / 2-3 tools and 3-5 betas per newsletter, giving your tool the attention it deserves.
                    </p>
                    <p className="intro">
                        <b>Technical</b> / Written for experienced developers. 77% of our audience have been coding for 5+ years.
                    </p>
                    <Button
                        appearance="text"
                        icon={{
                            group: "generic",
                            name: "arrow-right",
                        }}
                        iconPos="right"
                        el="anchor"
                        href="/latest"
                        title="See the latest email"
                    >
                        See the latest email
                    </Button>
                </div>
                <div className="bottom">
                    {theme == "dark" && <ImageProvider src="/img/advertise/newsletter-dark.png" alt="Console Newsletter" />}
                    {theme == "light" && <ImageProvider src="/img/advertise/newsletter-light.png" alt="Console Newsletter" />}
                </div>
            </PageSection>

            <span data-checkpoint-site></span>

            <PageSection classes={["site"]}>
                <div className="neon-planes-wrapper">
                    <NeonPlanes cnslType="all" />
                </div>
                <RichTitle tag="h3" icon={{ group: "generic", name: "link" }} text="console.dev" />
                <div data-checkpoint-neon-planes className="advertise-site-item advertise-site-tools">
                    <div className="top">
                        <RichTitle tag="h4" icon={{ group: "generic", name: "tool" }} text="Developer tools reviews" />
                        <p className="intro">An archive of every tool featured in the newsletter. A go-to resource to discover the best developer tools.</p>
                        <p className="intro">Our reviews are made through years of experience and research, bringing a deep practical understanding of the needs of experienced developers looking to try new tools.</p>
                        <Button
                            appearance="text"
                            icon={{
                                group: "generic",
                                name: "arrow-right",
                            }}
                            iconPos="right"
                            el="anchor"
                            href="/tools"
                            title="See tool reviews"
                        >
                            See tool reviews
                        </Button>
                    </div>
                    <div className="bottom">
                        {theme == "dark" && <ImageProvider src="/img/advertise/ui-tools-dark.png" alt="Developer tools reviews" />}
                        {theme == "light" && <ImageProvider src="/img/advertise/ui-tools-light.png" alt="Developer tools reviews" />}
                    </div>
                </div>
                {/*<div className="advertise-site-item advertise-site-interviews">
                    <div className="top">
                        <RichTitle tag="h4" icon={{ group: "generic", name: "console-interview" }} text="Developer interviews" />
                        <p className="intro">Tell your story in our series of interviews with leading founders and CTOs.</p>
                        <Button
                            appearance="text"
                            icon={{
                                group: "generic",
                                name: "arrow-right",
                            }}
                            iconPos="right"
                            el="anchor"
                            href="/interviews"
                            title="See developer interviews"
                        >
                            See developer interviews
                        </Button>
                    </div>
                    <div className="bottom">
                        {theme == "dark" && <ImageProvider src="/img/advertise/ui-interviews-dark.png" alt="Developer interviews" />}
                        {theme == "light" && <ImageProvider src="/img/advertise/ui-interviews-light.png" alt="Developer interviews" />}
                    </div>
                </div>*/}
                <div className="advertise-site-item advertise-site-betas">
                    <div className="top">
                        <RichTitle tag="h4" icon={{ group: "generic", name: "beta" }} text="Beta Console" />
                        <p className="intro">The latest beta release and early access programs for developers. Relied on by early-adopters to be the first to try new tools.</p>
                        <Button
                            appearance="text"
                            icon={{
                                group: "generic",
                                name: "arrow-right",
                            }}
                            iconPos="right"
                            el="anchor"
                            href="/betas"
                            title="See Beta Console"
                        >
                            See Beta Console
                        </Button>
                    </div>
                    <div className="bottom">
                        {theme == "dark" && <ImageProvider src="/img/advertise/ui-betas-dark.png" alt="Beta Console" />}
                        {theme == "light" && <ImageProvider src="/img/advertise/ui-betas-light.png" alt="Beta Console" />}
                    </div>
                </div>
                {/*<div className="advertise-site-item advertise-site-jobs">
                    <div className="top">
                        <RichTitle tag="h4" icon={{ group: "generic", name: "jobs" }} text="DevTools company profiles" />
                        <p className="intro">Profiles of the best devtool companies currently hiring.</p>
                        <p className="intro">Profiles reveal insider details about how engineering is run at devtool companies, including the tech stack, company mission, how the hiring process works and the benefits.</p>
                        <Button
                            appearance="text"
                            icon={{
                                group: "generic",
                                name: "arrow-right",
                            }}
                            iconPos="right"
                            el="anchor"
                            href="/profiles"
                            title="See company profiles"
                        >
                            See company profiles
                        </Button>
                    </div>
                    <div className="bottom">
                        {theme == "dark" && <ImageProvider src="/img/advertise/ui-jobs-dark.png" alt="DevTools company profiles" />}
                        {theme == "light" && <ImageProvider src="/img/advertise/ui-jobs-light.png" alt="DevTools company profiles" />}
                    </div>
                </div>*/}
            </PageSection>

            <span data-checkpoint-podcast></span>

            <PageSection classes={["podcast"]}>
                <div className="top">
                    <IconProvider group="generic" name="podcast" />
                    <h3 className="title title-2">DevTools Podcast</h3>
                    <p className="intro">A discussion about devtools related topics ranging from the philosophy of open source and how developers adopt new tools to how to decentralize your tech stack.</p>
                    <PodcastLinks title="Listen on" only={["apple", "spotify"]} />
                </div>
                <div className="bottom" data-podcast-embed-frame>
                    <iframe
                        data-podcast-embed
                        height="464px"
                        width="350px"
                        frameBorder="no"
                        scrolling="no"
                        seamless
                        src={(() => {
                            let url = "https://player.simplecast.com/10488ddf-3ca4-4300-9391-c2967d806334?show=true";
                            if (theme == "dark") url += "&dark=true&color=0A0A0B";
                            if (theme == "light") url += "&dark=false&color=F1F2F6";
                            return url;
                        })()}
                    ></iframe>
                </div>
            </PageSection>

            <PageSection classes={["page-section-plane audience"]}>
                <h2 className="title title-1">Audience</h2>
                <p className="intro">Launched in early 2021, Console has quickly become a trusted resource for CTOs, engineering managers, technical architects and experienced developers.</p>
                <div className="advertise-audience-facts">
                    <div className="advertise-audience-fact converting">
                        <div className="advertise-audience-fact-head">
                            <div className="audience-fact-number">{audienceFacts.converting}%</div>
                            <div className="future-heads">
                                <div className="future-head">
                                    <div className="future-head-fill"></div>
                                </div>
                                <div className="future-head">
                                    <div className="future-head-fill"></div>
                                </div>
                                <div className="future-head">
                                    <IconProvider group="generic" name="future-head" />
                                    <div className="future-head-fill"></div>
                                </div>
                            </div>
                        </div>
                        <div className="advertise-audience-fact-body">
                            <p>
                                <span>2 in 3</span> of our readers have signed-up to a tool featured by Console.
                            </p>
                        </div>
                    </div>
                    <div className="advertise-audience-fact qualified">
                        <div className="advertise-audience-fact-head">
                            <div>
                                <div className="audience-fact-number">{audienceFacts.qualified}%</div>
                                <p>5+ years dev experience</p>
                            </div>
                            <div className="console-bar-chart blue always-show-border">
                                <div className="console-bar-chart-item" style={{ width: audienceFacts.qualified + "%" }}>
                                    <div className="console-bar-chart-item-bar" style={{ width: audienceFacts.qualified + "%" }}></div>
                                </div>
                            </div>
                        </div>
                        <div className="advertise-audience-fact-body">
                            <p>
                                <span>4 in 5</span> have been coding for 5+ years.
                            </p>
                        </div>
                    </div>
                    <div className="advertise-audience-fact engaged">
                        <div className="advertise-audience-fact-head">
                            <IconProvider group="generic" name="email" />
                            <div className="audience-fact-number">{settings.subscribersCount}</div>
                        </div>
                        <div className="advertise-audience-fact-body">
                            <span>
                                <IconProvider group="generic" name="checkmark" />
                                <IconProvider group="generic" name="checkmark" />
                            </span>
                            <p>All double opt-in subscribers.</p>
                        </div>
                    </div>
                </div>
                <div className="advertise-audience-locations">
                    <h3 className="title title-2">Locations</h3>
                    <div className="console-bar-chart blue">
                        <div className="console-bar-chart-item" style={{ width: audienceFacts.locations.usa + "%" }}>
                            <h4 className="title title-3">{audienceFacts.locations.usa}% USA</h4>
                            <div className="console-bar-chart-item-bar" style={{ width: audienceFacts.locations.usa + "%" }}></div>
                        </div>
                        <div className="console-bar-chart-item" style={{ width: audienceFacts.locations.eu + "%" }}>
                            <h4 className="title title-3">{audienceFacts.locations.eu}% Europe</h4>
                            <div className="console-bar-chart-item-bar" style={{ width: audienceFacts.locations.eu + "%" }}></div>
                        </div>
                        <div className="console-bar-chart-item" style={{ width: audienceFacts.locations.uk + "%" }}>
                            <h4 className="title title-3">{audienceFacts.locations.uk}% UK</h4>
                            <div className="console-bar-chart-item-bar" style={{ width: audienceFacts.locations.uk + "%" }}></div>
                        </div>
                        <div className="console-bar-chart-item" style={{ width: audienceFacts.locations.global + "%" }}>
                            <h4 className="title title-3">{audienceFacts.locations.global}% Global</h4>
                            <div className="console-bar-chart-item-bar" style={{ width: audienceFacts.locations.global + "%" }}></div>
                        </div>
                    </div>
                </div>
            </PageSection>

            <span data-checkpoint-work-with-us id="work-with-us"></span>

            <PageSection classes={["work-with-us"]} inPageAnchor="work-with-us">
                <div className="neon-planes-wrapper" data-neon-planes-wrapper data-packages>
                    <NeonPlanes cnslType="one-three" />
                </div>
                <h2 className="title title-1">
                    How to work <br />
                    with us
                </h2>
                <p className="intro">Planning a new release or product launch? Looking to reach new customers? We put you in front of experienced developers specifically looking to try new tools..</p>
                <div className="work-with-us-packages">
                    <FramedSection
                        appearance="triad-01"
                        top={[
                            <React.Fragment key="work-with-us-packages-top-1">
                                <div className="left">
                                    <h3 className="title title-2">
                                        <span>Console sponsor</span>
                                        <ConsoleSponsorIllustration />
                                    </h3>
                                    <p>
                                        Sponsor one or more editions of the weekly newsletter to promote your product, tool, release, or announcement. We'll help you write the right ad text (max 2 lines) which appears underneath the issue contents before the main reviews. Partners must meet our{" "}
                                        <a href="/selection-criteria/" className="link">
                                            selection criteria
                                        </a>
                                        .
                                    </p>
                                </div>
                                <ConsoleSponsorIllustration />
                            </React.Fragment>,
                        ]}
                        items={[
                            <React.Fragment key="work-with-us-packages-item-1">
                                {/*<p>The benefits of our sponsored package include:</p>
                                <div className="benefits">
                                    <div>
                                        <RichTitle tag="h5" icon={{ group: "generic", name: "console-starred" }} text="Top spot" />
                                        <p className="small">Sponsored reviews appear at the top of the newsletter as the lead recommendation.</p>

                                        <RichTitle tag="h5" icon={{ group: "generic", name: "console-mini-filled" }} text="Schedule" />
                                        <p className="small">Schedule when your product review appears in the Console Weekly newsletter.</p>

                                        <RichTitle tag="h5" icon={{ group: "generic", name: "link" }} text="Context" />
                                        <p className="small">Include a link to a blog post or technical article to go deeper into your release.</p>
                                    </div>
                                    <div>
                                        <RichTitle tag="h5" icon={{ group: "generic", name: "tool" }} text="Website" />
                                        <p className="small">Inclusion of your tool in the Console Tools list.</p>

                                        <RichTitle tag="h5" icon={{ group: "generic", name: "social" }} text="Social" />
                                        <p className="small">Promotion of the launch on social media.</p>

                                        <RichTitle tag="h5" icon={{ group: "generic", name: "console-offer" }} text="Offer" />
                                        <p className="small">Opportunity to provide an exclusive offer to our audience e.g. early access, invite codes, bonus credits, discounts.</p>

                                        <RichTitle tag="h5" icon={{ group: "generic", name: "badges" }} text="Badges" />
                                        <p className="small">Access to custom badges for your website and marketing materials to showcase that you’ve been featured as a Console Developer Tool of the Week.</p>
                                    </div>
                                </div>
                                <p>Tell us about your tool and campaign goals.</p>*/}

                                <Button
                                    icon={{
                                        group: "generic",
                                        name: "send",
                                    }}
                                    iconPos="left"
                                    el="anchor"
                                    href="mailto:hello@console.dev"
                                    target="_blank"
                                    title="Get in touch"
                                >
                                    Get in touch
                                </Button>
                            </React.Fragment>,
                        ]}
                    ></FramedSection>
                </div>
            </PageSection>

            <span data-checkpoint-campaigns></span>

            <PageSection classes={["sponsors"]} fullWidth>
                <div className="page-section-heading">
                    <h3 className="title title-2">Previous sponsors</h3>
                    <p className="intro">We&apos;ve helped many companies reach experienced developers.</p>
                </div>
                <div className="logo-cloud-artwork">
                    <div data-logo-cloud className="logo-cloud">
                        {theme == "dark" && (
                            <>
                                <span className="grid-item">
                                    <ImageProvider src="/img/landing/company-logo-ably-dark.png" alt="Ably" />
                                </span>
                                <span className="grid-item">
                                    <ImageProvider src="/img/landing/company-logo-airplane-dark.png" alt="Airplane" />
                                </span>
                                <span className="grid-item">
                                    <ImageProvider src="/img/landing/company-logo-firehydrant-dark.png" alt="FireHydrant" />
                                </span>
                                <span className="grid-item">
                                    <ImageProvider src="/img/landing/company-logo-incident-dark.png" alt="Incident.io" />
                                </span>
                                <span className="grid-item">
                                    <ImageProvider src="/img/landing/company-logo-semgrep-dark.png" alt="r2c" />
                                </span>
                                <span className="grid-item">
                                    <ImageProvider src="/img/landing/company-logo-retool-dark.png" alt="Retool" />
                                </span>
                                <span className="grid-item">
                                    <ImageProvider src="/img/landing/company-logo-revenuecat-dark.png" alt="RevenueCat" />
                                </span>
                                <span className="grid-item">
                                    <ImageProvider src="/img/landing/company-logo-sonar-dark.png" alt="SonarSource" />
                                </span>
                                <span className="grid-item">
                                    <ImageProvider src="/img/landing/company-logo-swimm-dark.png" alt="Swimm" />
                                </span>
                                <span className="grid-item">
                                    <ImageProvider src="/img/landing/company-logo-teleport-dark.png" alt="Teleport" />
                                </span>
                                <span className="grid-item">
                                    <ImageProvider src="/img/landing/company-logo-warp-dark.png" alt="Warp" />
                                </span>
                                <span className="grid-item">
                                    <ImageProvider src="/img/landing/company-logo-workos-dark.png" alt="WorkOS" />
                                </span>
                                <span className="grid-item">
                                    <ImageProvider src="/img/landing/company-logo-zigi-dark.png" alt="Zigi" />
                                </span>
                                <span className="grid-item">
                                    <ImageProvider src="/img/landing/company-logo-autocloud-dark.png" alt="AutoCloud" />
                                </span>
                                <span className="grid-item">
                                    <ImageProvider src="/img/landing/company-logo-budibase-dark.png" alt="Budibase" />
                                </span>
                                <span className="grid-item">
                                    <ImageProvider src="/img/landing/company-logo-codesee-dark.png" alt="CodeSee" />
                                </span>
                                <span className="grid-item">
                                    <ImageProvider src="/img/landing/company-logo-coherence-dark.png" alt="Coherence" />
                                </span>
                                <span className="grid-item">
                                    <ImageProvider src="/img/landing/company-logo-dodgeball-dark.png" alt="DodgeballHQ" />
                                </span>
                                <span className="grid-item">
                                    <ImageProvider src="/img/landing/company-logo-helios-dark.png" alt="Helios" />
                                </span>
                                <span className="grid-item">
                                    <ImageProvider src="/img/landing/company-logo-immudb-dark.png" alt="immudb" />
                                </span>
                                <span className="grid-item">
                                    <ImageProvider src="/img/landing/company-logo-firefly-dark.png" alt="Firefly" />
                                </span>
                                <span className="grid-item">
                                    <ImageProvider src="/img/landing/company-logo-judo-dark.png" alt="Judo" />
                                </span>
                                <span className="grid-item">
                                    <ImageProvider src="/img/landing/company-logo-knock-dark.png" alt="Knock Labs" />
                                </span>
                                <span className="grid-item">
                                    <ImageProvider src="/img/landing/company-logo-lambdatest-dark.png" alt="Lambda Test" />
                                </span>
                                <span className="grid-item">
                                    <ImageProvider src="/img/landing/company-logo-mergify-dark.png" alt="Mergify" />
                                </span>
                                <span className="grid-item">
                                    <ImageProvider src="/img/landing/company-logo-metrist-dark.png" alt="Metrist" />
                                </span>
                                <span className="grid-item">
                                    <ImageProvider src="/img/landing/company-logo-packagecloud-dark.png" alt="Package Cloud" />
                                </span>
                                <span className="grid-item">
                                    <ImageProvider src="/img/landing/company-logo-saleor-dark.png" alt="Saleor" />
                                </span>
                                <span className="grid-item">
                                    <ImageProvider src="/img/landing/company-logo-signadot-dark.png" alt="Signadot" />
                                </span>
                                <span className="grid-item">
                                    <ImageProvider src="/img/landing/company-logo-slimai-dark.png" alt="Slim.AI" />
                                </span>
                                <span className="grid-item">
                                    <ImageProvider src="/img/landing/company-logo-soda-dark.png" alt="Soda" />
                                </span>
                                <span className="grid-item">
                                    <ImageProvider src="/img/landing/company-logo-speakeasy-dark.png" alt="Speakeasy" />
                                </span>
                                <span className="grid-item">
                                    <ImageProvider src="/img/landing/company-logo-stepsize-dark.png" alt="Stepsize" />
                                </span>
                                <span className="grid-item">
                                    <ImageProvider src="/img/landing/company-logo-stepzen-dark.png" alt="StepZen" />
                                </span>
                                <span className="grid-item">
                                    <ImageProvider src="/img/landing/company-logo-strapi-dark.png" alt="Strapi" />
                                </span>
                                <span className="grid-item">
                                    <ImageProvider src="/img/landing/company-logo-tonic-dark.png" alt="Tonic.ai" />
                                </span>
                            </>
                        )}
                        {theme == "light" && (
                            <>
                                <span className="grid-item">
                                    <ImageProvider src="/img/landing/company-logo-ably-light.png" alt="Ably" />
                                </span>
                                <span className="grid-item">
                                    <ImageProvider src="/img/landing/company-logo-airplane-light.png" alt="Airplane" />
                                </span>
                                <span className="grid-item">
                                    <ImageProvider src="/img/landing/company-logo-firehydrant-light.png" alt="FireHydrant" />
                                </span>
                                <span className="grid-item">
                                    <ImageProvider src="/img/landing/company-logo-incident-light.png" alt="Incident.io" />
                                </span>
                                <span className="grid-item">
                                    <ImageProvider src="/img/landing/company-logo-semgrep-light.png" alt="r2c" />
                                </span>
                                <span className="grid-item">
                                    <ImageProvider src="/img/landing/company-logo-retool-light.png" alt="Retool" />
                                </span>
                                <span className="grid-item">
                                    <ImageProvider src="/img/landing/company-logo-revenuecat-light.png" alt="RevenueCat" />
                                </span>
                                <span className="grid-item">
                                    <ImageProvider src="/img/landing/company-logo-sonar-light.png" alt="SonarSource" />
                                </span>
                                <span className="grid-item">
                                    <ImageProvider src="/img/landing/company-logo-swimm-light.png" alt="Swimm" />
                                </span>
                                <span className="grid-item">
                                    <ImageProvider src="/img/landing/company-logo-teleport-light.png" alt="Teleport" />
                                </span>
                                <span className="grid-item">
                                    <ImageProvider src="/img/landing/company-logo-warp-light.png" alt="Warp" />
                                </span>
                                <span className="grid-item">
                                    <ImageProvider src="/img/landing/company-logo-workos-light.png" alt="WorkOS" />
                                </span>
                                <span className="grid-item">
                                    <ImageProvider src="/img/landing/company-logo-zigi-light.png" alt="Zigi" />
                                </span>
                                <span className="grid-item">
                                    <ImageProvider src="/img/landing/company-logo-autocloud-light.png" alt="AutoCloud" />
                                </span>
                                <span className="grid-item">
                                    <ImageProvider src="/img/landing/company-logo-budibase-light.png" alt="Budibase" />
                                </span>
                                <span className="grid-item">
                                    <ImageProvider src="/img/landing/company-logo-codesee-light.png" alt="CodeSee" />
                                </span>
                                <span className="grid-item">
                                    <ImageProvider src="/img/landing/company-logo-coherence-light.png" alt="Coherence" />
                                </span>
                                <span className="grid-item">
                                    <ImageProvider src="/img/landing/company-logo-dodgeball-light.png" alt="DodgeballHQ" />
                                </span>
                                <span className="grid-item">
                                    <ImageProvider src="/img/landing/company-logo-helios-light.png" alt="Helios" />
                                </span>
                                <span className="grid-item">
                                    <ImageProvider src="/img/landing/company-logo-immudb-light.png" alt="immudb" />
                                </span>
                                <span className="grid-item">
                                    <ImageProvider src="/img/landing/company-logo-firefly-light.png" alt="Firefly" />
                                </span>
                                <span className="grid-item">
                                    <ImageProvider src="/img/landing/company-logo-judo-light.png" alt="Judo" />
                                </span>
                                <span className="grid-item">
                                    <ImageProvider src="/img/landing/company-logo-knock-light.png" alt="Knock Labs" />
                                </span>
                                <span className="grid-item">
                                    <ImageProvider src="/img/landing/company-logo-lambdatest-light.png" alt="Lambda Test" />
                                </span>
                                <span className="grid-item">
                                    <ImageProvider src="/img/landing/company-logo-mergify-light.png" alt="Mergify" />
                                </span>
                                <span className="grid-item">
                                    <ImageProvider src="/img/landing/company-logo-metrist-light.png" alt="Metrist" />
                                </span>
                                <span className="grid-item">
                                    <ImageProvider src="/img/landing/company-logo-packagecloud-light.png" alt="Package Cloud" />
                                </span>
                                <span className="grid-item">
                                    <ImageProvider src="/img/landing/company-logo-saleor-light.png" alt="Saleor" />
                                </span>
                                <span className="grid-item">
                                    <ImageProvider src="/img/landing/company-logo-signadot-light.png" alt="Signadot" />
                                </span>
                                <span className="grid-item">
                                    <ImageProvider src="/img/landing/company-logo-slimai-light.png" alt="Slim.AI" />
                                </span>
                                <span className="grid-item">
                                    <ImageProvider src="/img/landing/company-logo-soda-light.png" alt="Soda" />
                                </span>
                                <span className="grid-item">
                                    <ImageProvider src="/img/landing/company-logo-speakeasy-light.png" alt="Speakeasy" />
                                </span>
                                <span className="grid-item">
                                    <ImageProvider src="/img/landing/company-logo-stepsize-light.png" alt="Stepsize" />
                                </span>
                                <span className="grid-item">
                                    <ImageProvider src="/img/landing/company-logo-stepzen-light.png" alt="StepZen" />
                                </span>
                                <span className="grid-item">
                                    <ImageProvider src="/img/landing/company-logo-strapi-light.png" alt="Strapi" />
                                </span>
                                <span className="grid-item">
                                    <ImageProvider src="/img/landing/company-logo-tonic-light.png" alt="Tonic.ai" />
                                </span>
                            </>
                        )}
                    </div>
                    <div className="vapor-globe"></div>
                </div>
            </PageSection>

            <span data-checkpoint-contact></span>

            <PageSection classes={["contact"]}>
                <div className="neon-planes-wrapper">
                    <NeonPlanes cnslType="one" />
                </div>
                <h2 className="title title-1">Plan your campaign</h2>
                <p className="description">We&apos;ll help you launch your tool and find new customers the right way.</p>
                <div className="bottom">
                    <Button
                        icon={{
                            group: "generic",
                            name: "send",
                        }}
                        iconPos="left"
                        el="anchor"
                        href="mailto:hello@console.dev"
                        target="_blank"
                        title="Get in touch"
                    >
                        Get in touch
                    </Button>
                </div>
            </PageSection>

            <PageSection classes={["social"]}>
                <div className="neon-planes-wrapper">
                    <NeonPlanes cnslType="two" />
                </div>
                <h2 className="title title-1">
                    Loved by the world&apos;s <br />
                    best developers
                </h2>
                <div className="quotes">
                    <div className="future-heads">
                        <IconProvider group="generic" name="future-head" />
                        <IconProvider group="generic" name="future-head" />
                        <IconProvider group="generic" name="future-head" />
                        <IconProvider group="generic" name="future-head" />
                    </div>
                    <p className="quote icon-left">
                        <IconProvider group="generic" name="email" />
                        <span>I look forward to it every week. Thanks for keeping me up to date with the latest dev tool ecosystem!</span>
                    </p>
                    <p className="quote icon-left">
                        <IconProvider group="generic" name="email" />
                        <span>
                            A lot of love for the newsletter, website and Q&As. Thanks for the hard and super good work, big up folks!! <span>❤️❤️</span>
                        </span>
                    </p>
                    <p className="quote icon-left">
                        <IconProvider group="generic" name="email" />
                        <span>
                            Console is one of my favorite newsletters <span>😍</span>
                        </span>
                    </p>
                    <p className="quote icon-left">
                        <IconProvider group="external" name="twitter" />
                        <span>Really like the format — console.dev has been an interesting subscription, but complementing the newsletter with short-ish podcasts is a great idea.</span>
                    </p>
                </div>
            </PageSection>

            <style jsx global>
                {styles}
            </style>
        </>
    );
}
