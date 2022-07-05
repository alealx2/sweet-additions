import {Text} from '~/components';
import {Drawer} from './Drawer.client';
import {Link} from '@shopify/hydrogen';

import {Image} from '@shopify/hydrogen';
import Logo from '../../../public/imgs/logo.svg';


export function MenuDrawer({isOpen, onClose, menu}) {
  return (
    <Drawer open={isOpen} onClose={onClose} openFrom="left" heading="">
      <Image
      className="menulogo"
      src={Logo}
      alt="search"
      width="150"
      height="50"
      />
      <div className="mobile-menu grid">
        <MenuMobileNav menu={menu} onClose={onClose} />
      </div>
    </Drawer>
  );
}

function MenuMobileNav({menu, onClose}) {

  //Custom Menu
  const navigationLinks = [
    {title: 'Home', link: '/'},
    {title: 'Ingredients', link: '/products', class: 'link'},
    {title: 'About', link: '/pages/about-us', class: 'link'},
    {title: 'Carrers', link: '/pages/carrers', class: 'link'},
    {title: 'Contact', link: '/pages/contact', class: 'link'},
    {title: 'Call Us', link: '/pages/contact', class: 'link'},
  ];

  return (
    <nav className="grid gap-4 p-6 sm:gap-6 sm:px-12 sm:py-8">
      {navigationLinks.map((el, i) => (
            <Link key={el.class} key={`m-item-${i}`} to={el.link} onClick={onClose}>
              <Text as="span" size="copy">
                {el.title}
              </Text> 
            </Link>
          ))}
    </nav>
  );
}