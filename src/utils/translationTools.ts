import { getLocale } from 'astro-i18n-aut';

import tr from './translations/tr.json';
import en from './translations/en.json';
import nl from './translations/nl.json';

export const defaultLocale = 'en';
export const locales = {
    en: 'en', // the `defaultLocale` value must present in `locales` keys
    tr: 'tr',
    nl: 'nl',
};

export default function t(astroUrl: URL): Translations {
    let locale = getLocale(astroUrl);
    switch (locale) {
        case 'tr':
            return tr as Translations;
        case 'nl':
            return nl as Translations;
        default:
            return en as Translations;
    }
}

export function localeLink(link: string, astroUrl: URL): string {
    let locale = getLocale(astroUrl);
    let localizedLink: string = "";
    if (locale) {
        let localeLink = `/${getLocale(astroUrl) ?? ""}/${link}`.replaceAll('//', '/') ?? "";
        localizedLink = localeLink;
    } else {
        localizedLink = link;
    }

    return (localizedLink.endsWith('/') && localizedLink.length > 1) ? localizedLink.slice(0, -1) : localizedLink;
}

export function convertPageTitle(pageTitle: string, siteTitle: string): string {
    let titleSeperator = ' - ';
    return pageTitle + titleSeperator + siteTitle;
}