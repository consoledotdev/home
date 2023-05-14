"use client";

import MenuItem from "@/components/elements/menu-item";

import IconProvider from "@/components/elements/icon-provider";

export default function Footer() {
    let cls = "wide-block footer-block";

    return (
        <div className={cls}>
            <footer className="footer">
                <nav className="footer-nav-left">
                    <IconProvider group="generic" name="console-mini" />
                    <ul className="footer-pages">
                        <li>
                            <MenuItem href="/tools" rank="secondary">
                                Tools
                            </MenuItem>
                        </li>
                        <li>
                            <MenuItem href="/betas" rank="secondary">
                                Betas
                            </MenuItem>
                        </li>
                        <li>
                            <MenuItem href="/interviews" rank="secondary">
                                Interviews
                            </MenuItem>
                        </li>
                        <li>
                            <MenuItem href="/podcast" rank="secondary">
                                Podcast
                            </MenuItem>
                        </li>
                        <li>
                            <MenuItem href="/advertise" rank="secondary">
                                Advertise
                            </MenuItem>
                        </li>
                        <li>
                            <MenuItem href="/badges" rank="secondary">
                                Badges
                            </MenuItem>
                        </li>
                    </ul>
                </nav>
                <nav className="footer-nav-right">
                    <ul className="footer-phatic">
                        <li>
                            <MenuItem href="/about" rank="tertiary">
                                About
                            </MenuItem>
                        </li>
                        <li>
                            <MenuItem external href="mailto:hello@console.dev" rank="tertiary">
                                Contact
                            </MenuItem>
                        </li>
                        <li>
                            <MenuItem href="/privacy" rank="tertiary">
                                Privacy
                            </MenuItem>
                        </li>
                    </ul>
                    <ul className="footer-social">
                        <li>
                            <MenuItem external href="https://twitter.com/consoledotdev" rank="secondary" iconPos="left" aria-label="Twitter">
                                <IconProvider group="external" name="twitter" />
                                <span>Twitter</span>
                            </MenuItem>
                        </li>
                        <li>
                            <MenuItem external href="https://github.com/consoledotdev" rank="secondary" iconPos="left" aria-label="GitHub">
                                <IconProvider group="external" name="github" />
                                <span>GitHub</span>
                            </MenuItem>
                        </li>
                        <li>
                            <MenuItem external href="https://mastodon.online/@console" rank="secondary" iconPos="left" aria-label="Mastodon">
                                <IconProvider group="external" name="mastodon" />
                                <span>Mastodon</span>
                            </MenuItem>
                        </li>
                    </ul>
                </nav>
            </footer>
        </div>
    );
}
