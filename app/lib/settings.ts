type Settings = {
    subscribersCount: string;
    forceNewsletterDate: string | null; // YYYY-MM-DD
    returnNewsletterDate: string | null; // YYYY-MM-DD
};

export const settings: Settings = {
    subscribersCount: "30k",

    /**
     * For the annual end of year countdown, set the forceNewsletterDate to the last
     * newsletter date of the year and the returnNewsletterDate to the first
     * newsletter date of the next year. Comment out when not in use.
     */
    forceNewsletterDate: null,
    returnNewsletterDate: null,
};
