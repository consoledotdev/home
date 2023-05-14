"use client";

import React, { useEffect, useLayoutEffect, useState } from "react";

import { useMediaQuery } from "@/components/effects/use-media-query";
import scrollAppearance from "@/app/badges/scroll-appearance";

import Link from "next/link";
import PageSection from "@/components/elements/page-section";
import IconProvider from "@/components/elements/icon-provider";
import LaunchSubscribe from "@/components/compositions/launch-subscribe";
import ImageProvider from "@/components/elements/image-provider";
import AboutConsole from "@/components/compositions/about-console";
import InputRadios, { Radio as InputRadioProps } from "@/components/elements/form/input-radios";
import InputToggle from "@/components/elements/form/input-toggle";
import SegmentedControl, { Radio as SegmentedControlRadioProps } from "@/components/elements/segemented-control";
import Button from "@/components/elements/button";

import styles from "@/app/badges/client-page.scss";

interface Props extends React.HTMLAttributes<HTMLElement> {
    page: { meta: any };
}

const typeRadios: InputRadioProps[] = [
    { label: "Pick", value: "pick", checked: true },
    { label: "Logo", value: "logo", checked: false },
    { label: "Ribbon", value: "ribbon", checked: false },
];

const themeRadios: InputRadioProps[] = [
    { label: "Dark", value: "dark", checked: true },
    { label: "Light", value: "light", checked: false },
];

const colorRadios: InputRadioProps[] = [
    { label: "Accent green", value: "green1", color: "triad-03", checked: true },
    { label: "Accent blue", value: "blue1", color: "triad-01", checked: false },
    {
        label: "Accent purple",
        value: "purple1",
        color: "triad-02",
        checked: false,
    },
    { label: "Full green", value: "green2", color: "triad-03", checked: false },
    { label: "Full blue", value: "blue2", color: "triad-01", checked: false },
    { label: "Full purple", value: "purple2", color: "triad-02", checked: false },
    { label: "B/W", value: "bw", checked: false },
];

const previewRadios: SegmentedControlRadioProps[] = [
    { label: "Split", value: "split", checked: true },
    { label: "Black", value: "black", checked: false },
    { label: "White", value: "white", checked: false },
];

const embedRadios: SegmentedControlRadioProps[] = [
    { label: "png", value: "png", checked: true },
    { label: "svg", value: "svg", checked: false },
];

const previewExtension = "svg";

export default function Page({ page, ...props }: Props) {
    const max768 = useMediaQuery({
        w: 768,
        op: "max",
        undefAtInit: true, // avoids flash of header on mobile nav
    });

    const max560 = useMediaQuery({
        w: 560,
        op: "max",
        undefAtInit: true, // avoids flash of header on mobile nav
    });

    const [previewType, setPreviewType] = useState<string>(previewRadios.find((r) => r.checked)?.value || "");

    const [embedType, setEmbedType] = useState<string>(embedRadios.find((r) => r.checked)?.value || "");

    const [embedCodeChanged, setEmbedCodeChanged] = useState<boolean>(false);
    const [copiedCodeToClipboard, setCopiedCodeToClipboard] = useState<boolean>(false);

    const [badgeType, setBadgeType] = useState<string>(typeRadios.find((r) => r.checked)?.value || "");
    const [badgeTheme, setBadgeTheme] = useState<string>(themeRadios.find((r) => r.checked)?.value || "");
    const [badgeColor, setBadgeColor] = useState<string>(colorRadios.find((r) => r.checked)?.value || "");
    const [badgeVertical, setBadgeVertical] = useState<boolean>(false);
    const [badgeBorder, setBadgeBorder] = useState<boolean>(false);

    const [badgeColorDisabled, setBadgeColorDisabled] = useState<boolean>(false);
    const [badgeBorderDisabled, setBadgeBorderDisabled] = useState<boolean>(false);

    const composeFilename = (extension?: string) => {
        let fn;
        fn = "console-badge";
        if (badgeVertical) fn += "-vertical";
        fn += "-" + badgeType;
        if (!badgeColorDisabled) fn += "-" + badgeColor;
        fn += "-" + badgeTheme;
        if (!badgeBorderDisabled && badgeBorder) fn += "-border";
        if (extension) fn += "." + extension;
        else fn += "." + previewExtension;
        return fn;
    };

    const badgePreviewPath = () => {
        const src = "/img/badges/1.0/svg/";
        return src + composeFilename();
    };

    const badgeEmbedCode = () => {
        const src = "https://console.dev/img/badges/1.0/" + embedType + "/";
        const code = `<a href="https://console.dev" title="Visit Console - the best tools for developers"><img src="${src + composeFilename(embedType)}" alt="Console - Developer Tool of the Week" /></a>`;
        return code;
    };

    const download = (extension: string) => {
        let src = "/img/badges/1.0/" + extension + "/";
        let downloadAnchorNode = document.createElement("a");
        downloadAnchorNode.setAttribute("href", src + composeFilename(extension));
        downloadAnchorNode.setAttribute("download", composeFilename(extension));
        document.body.appendChild(downloadAnchorNode); // required for firefox
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(badgeEmbedCode());
        setCopiedCodeToClipboard(true);
        setTimeout(() => {
            setCopiedCodeToClipboard(false);
        }, 5000);
        setEmbedCodeChanged(true);
        setTimeout(() => {
            setEmbedCodeChanged(false);
        }, 100);
    };

    useEffect(() => {
        if (badgeType == "logo") setBadgeColorDisabled(true);
        else setBadgeColorDisabled(false);
    }, [badgeType]);

    useEffect(() => {
        if (badgeColor == "green2" || badgeColor == "blue2" || badgeColor == "purple2") setBadgeBorderDisabled(true);
        else setBadgeBorderDisabled(false);
    }, [badgeColor]);

    useEffect(() => {
        setEmbedCodeChanged(true);
        setTimeout(() => {
            setEmbedCodeChanged(false);
        }, 100);
    }, [embedType]);

    useLayoutEffect(scrollAppearance, []);

    return (
        <>
            <PageSection classes={["opening"]}>
                <div className="top">
                    <div className="left">
                        <h2 className="title title-1">{page.meta.title}</h2>
                        <p className="description">Console only features the best tools for developers.</p>
                        <p className="intro">
                            Add a custom{" "}
                            <span>
                                <IconProvider group="generic" name="badges" /> badge
                            </span>{" "}
                            to your website to showcase you&apos;ve been featured as a Console Developer Tool of the Week.
                        </p>
                    </div>
                    <div className="right"></div>
                </div>
            </PageSection>

            <PageSection classes={["page-section-plane selector"]}>
                <div className="top">
                    <h3 className="title title-2">Get your badge</h3>
                </div>
                <div data-selector-ui className="selector-ui">
                    <div className="top">
                        <div>
                            <div className="selector-ui-group">
                                <h6 className="title title-5">Type</h6>
                                <div className="selector-ui-options">
                                    <InputRadios data-badge-option classes={["badge-type"]} layout="block" name="badge-type" valueChanged={setBadgeType} value={badgeType} radios={typeRadios} />
                                </div>
                            </div>
                            <div className="selector-ui-group">
                                <h6 className="title title-5">Theme</h6>
                                <div className="selector-ui-options">
                                    <InputRadios data-badge-option classes={["badge-theme"]} layout="block" name="badge-theme" valueChanged={setBadgeTheme} value={badgeTheme} radios={themeRadios} />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="selector-ui-group badge-color">
                                <h6 className="title title-5">Color</h6>
                                <div className="selector-ui-options">
                                    <InputRadios data-badge-option classes={["badge-color"]} layout="block" name="badge-color" valueChanged={setBadgeColor} value={badgeColor || undefined} radios={colorRadios} disabled={badgeColorDisabled} />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="selector-ui-group">
                                <h6 className="title title-5">Compact</h6>
                                <div className="selector-ui-options">
                                    <InputToggle data-badge-option classes={["badge-vertical"]} layout="block" name="badge-vertical" valueChanged={setBadgeVertical} value="badge-vertical" checked={badgeVertical} text={{ checked: "Disable", unchecked: "Enable" }} />
                                </div>
                            </div>
                            <div className="selector-ui-group">
                                <h6 className="title title-5">Border</h6>
                                <div className="selector-ui-options">
                                    <InputToggle data-badge-option classes={["badge-border"]} layout="block" name="badge-border" valueChanged={setBadgeBorder} value="badge-border" checked={badgeBorder} text={{ checked: "Disable", unchecked: "Enable" }} disabled={badgeBorderDisabled} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="selector-ui-preview">
                            <p className="small">Preview:</p>
                            <SegmentedControl classes={["preview-type"]} name="preview-type" valueChanged={setPreviewType} value={previewType || undefined} radios={previewRadios} />
                        </div>
                        <div data-split-planes className={"split-planes is-" + previewType}>
                            <div className="section-plane left"></div>
                            <div className="section-plane right"></div>
                            <ImageProvider data-badge-preview classes={["console-badge"]} src={badgePreviewPath()} alt="Console Badge" />
                        </div>
                    </div>
                </div>

                <div className="selector-actions">
                    <div className="left">
                        <p>Download:</p>
                        <div className="selector-ctas">
                            <Button
                                data-download-png
                                data-onclickblur
                                icon={{
                                    group: "generic",
                                    name: "download",
                                }}
                                iconPos="left"
                                title="Download .png"
                                cnslSize="medium"
                                onClick={() => download("png")}
                            >
                                .png
                            </Button>
                            <Button
                                data-download-svg
                                data-onclickblur
                                icon={{
                                    group: "generic",
                                    name: "download",
                                }}
                                iconPos="left"
                                title="Download .svg"
                                cnslSize="medium"
                                onClick={() => download("svg")}
                            >
                                .svg
                            </Button>
                        </div>
                    </div>
                    <div className="right">
                        <p>Embed:</p>
                        <div className="selector-actions-embed-type">
                            <p className="small">Format:</p>
                            <SegmentedControl classes={["embed-type"]} name="embed-type" valueChanged={setEmbedType} value={embedType || undefined} radios={embedRadios} />
                        </div>
                        <div className="embed-code-wrapper">
                            <pre id="embed-code-pre" data-embed-code className={"pre" + (embedCodeChanged ? " is-changed" : "")}>
                                {badgeEmbedCode()}
                            </pre>
                            <Button
                                data-clipboard-copy
                                data-clipboard-target="#embed-code-pre"
                                data-onclickblur
                                icon={{
                                    group: "generic",
                                    name: copiedCodeToClipboard ? "checkmark" : "copy",
                                }}
                                iconPos="left"
                                title="Copy code"
                                cnslSize="small"
                                appearance="text"
                                onClick={copyToClipboard}
                                disabled={copiedCodeToClipboard}
                            >
                                {copiedCodeToClipboard ? "Copied" : "Copy"}
                            </Button>
                        </div>
                    </div>
                </div>
            </PageSection>

            <PageSection classes={["selection-criteria content-max-width"]}>
                <div className="top">
                    <h3 className="title title-2">Selection criteria</h3>
                </div>
                <span data-checkpoint-selection-criteria></span>
                <p>
                    Visit the{" "}
                    <Link href="/selection-criteria" className="link">
                        selection criteria
                    </Link>{" "}
                    page to read how to choose what appears in the Console newsletter each week.
                </p>
            </PageSection>

            <PageSection classes={["about content-max-width"]}>
                <AboutConsole />
            </PageSection>

            <PageSection classes={["signup content-max-width"]}>
                <LaunchSubscribe
                    layout={max768 ? "block" : "inline"}
                    formSubscribeProps={{
                        layout: max768 ? (max560 ? "block" : "inline") : "block",
                    }}
                >
                    <h3 className="title title-3">Discover the best tools for developers</h3>
                    <p>
                        Our free weekly email features a digest of the best new tools and beta releases for developers.{" "}
                        <Link className="link" href="/latest">
                            See the latest email
                        </Link>
                    </p>
                </LaunchSubscribe>
            </PageSection>

            <style jsx global>
                {styles}
            </style>
        </>
    );
}
