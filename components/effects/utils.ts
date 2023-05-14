import { BadgeColor } from "@/components/elements/badge";

/**
 * Console ISO Date display.
 *
 * @param dateStr - A date string or date object.
 *
 * Returns a date in the format YYYY-MM-DD.
 */
const consoleISODate = (dateStr: string | Date) => {
    if (!dateStr) return null;
    return new Date(dateStr).toISOString().split("T")[0];
};

/**
 * Extract Twitter handle.
 * From: https://www.seancdavis.com/posts/extract-twitter-handle-from-url-with-javascript/
 *
 * @param url - A twitter profile URL.
 *
 * Returns the Twitter handle string.
 */
const extractTwitterHandle = (url: string) => {
    if (!url) return null;
    const match = url.match(/^https?:\/\/(www\.)?twitter.com\/@?(?<handle>\w+)/);
    return match?.groups?.handle ? `@${match.groups.handle}` : null;
};

/**
 * Extract hostname
 *
 * @param url - A URL.
 *
 * Returns only the hostname portion fo the URL.
 */
const extractHostname = (url: string) => {
    if (!url) return null;
    const parsed = new URL(url);
    return parsed.hostname;
};

/**
 * Get random badge color.
 *
 * @param colorType - 1 for colored glyph and neutral bg, 2 for neutral glyph and color bg.
 * @param includeBw - Include/exlcude b&w from returned colors.
 *
 * Returns a random badge color.
 */
const getRandomBadgeColor = (colorType: 1 | 2 = 1, includeBw: boolean = false): BadgeColor => {
    let color = "green" + colorType.toString();

    let range = 3;
    if (includeBw) range = 4;
    const rnd = Math.floor(Math.random() * range);

    if (rnd == 0) color = "purple" + colorType.toString();
    if (rnd == 1) color = "green" + colorType.toString();
    if (rnd == 2) color = "blue" + colorType.toString();
    if (rnd == 3) color = "bw";

    return color as BadgeColor;
};

const formatPodcastSeasonEpisode = (season: number, episode: number) => {
    const s = season.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
    });
    const e = episode.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
    });
    return "S" + s + " E" + e;
};

const getDurationParts = (duration: string = "00:00") => {
    const parts = duration.split(":");
    const mm = (parts[0] || 0).toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
    });
    const ss = (parts[1] || 0).toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
    });
    return {
        minutes: mm,
        seconds: ss,
    };
};

export { consoleISODate, extractTwitterHandle, extractHostname, getRandomBadgeColor, formatPodcastSeasonEpisode, getDurationParts };
