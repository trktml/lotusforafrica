import { sequence } from "astro/middleware";
import { onRequest as i18n } from "astro-i18n-aut/middleware";

export const onRequest = sequence(i18n);