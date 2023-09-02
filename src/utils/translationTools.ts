import { getLocale } from 'astro-i18n-aut';

import tr from './translations/tr.json';
import en from './translations/en.json';
import nl from './translations/nl.json';

const handler = {
    get(target: any, prop: any, receiver: any) {
        return target[prop].replaceAll('\n', '<br/>');
    },
};

const tr_proxy = new Proxy(tr, handler);
const en_proxy = new Proxy(en, handler);
const nl_proxy = new Proxy(nl, handler);

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
            return tr_proxy as Translations;
        case 'nl':
            return nl_proxy as Translations;
        default:
            return en_proxy as Translations;
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

    // localizedLink add last slash
    if (!localizedLink.endsWith('/')) {
        localizedLink += '/';
    }

    return localizedLink;
}

export function convertPageTitle(pageTitle: string, siteTitle: string): string {
    let titleSeperator = ' - ';
    return pageTitle + titleSeperator + siteTitle;
}