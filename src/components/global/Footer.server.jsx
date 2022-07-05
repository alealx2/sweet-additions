import {useUrl} from '@shopify/hydrogen';

import {Section, Heading, FooterMenu, CountrySelector} from '~/components';

/**
 * A server component that specifies the content of the footer on the website
 */
export function Footer({menu}) {
  const {pathname} = useUrl();

  const localeMatch = /^\/([a-z]{2})(\/|$)/i.exec(pathname);
  const countryCode = localeMatch ? localeMatch[1] : null;

  const isHome = pathname === `/${countryCode ? countryCode + '/' : ''}`;
  const itemsCount = menu
    ? menu?.items?.length + 1 > 4
      ? 4
      : menu?.items?.length + 1
    : [];

  return (
      <FooterMenu menu={menu} />
  );
}
