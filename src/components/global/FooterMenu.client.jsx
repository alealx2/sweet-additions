// @ts-expect-error @headlessui/react incompatibility with node16 resolution
import {Disclosure} from '@headlessui/react';
import {Link} from '@shopify/hydrogen';

import {Heading, IconCaret} from '~/components';

/**
 * A server component that specifies the content of the footer on the website
 */
export function FooterMenu({menu}) {


  return (
      <div className='footer'>
          <div className="footer-row">
              <div className='footer-col foot-img'>
                  <img className='footer-img' src='public/imgs/logo_footer.svg' title='logo'></img>
                  <ul className='rrss'>
                      <li className='rrss-icon'><img src='public/imgs/facebook.png' title='logo'></img></li>
                      <li className='rrss-icon'><img src='public/imgs/instagram.png' title='logo'></img></li>
                      <li className='rrss-icon'><img src='public/imgs/linkedin.png' title='logo'></img></li>
                  </ul>
              </div>
              <div className='footer-col'>
                  <ul className='list-links'>
                      <li className='list-title'>Company</li>
                      <li>Responsability</li>
                      <li>Our Story</li>
                      <li>Our Facility</li>
                      <li>Sustainability</li>
                      <li>Blog</li>
                      <li>Connect</li>
                  </ul>
              </div>
              <div className='footer-col'>
                  <ul className='list-links'>
                      <li className='list-title'>Support</li>                    
                      <li >Terms of Services</li>
                      <li>FAQS</li>
                  </ul>
              </div> 
              <div className='footer-col'>
                  <ul className='list-links'>
                      <li className='list-title'>Address</li>                    
                      <li><a href="https://goo.gl/maps/UMJjWF9dxpjx7AD89" target="_blank">4440 PGA Blvd, Suite 600 Palm Beach Gardens, FL 33410</a></li>
                      <li>Phone: <a href="tel:5614720178">(561) 472-0178</a></li>
                      <li>Email: <a href="mailto:customerservice@sweetadditions-com">customerservice@sweetadditions-com</a></li>
                  </ul>
              </div>
          </div>

          <div className="footer-row">
              <div className='copy-right small-txt'>
                  Copyright Sweet Additions. All rirghts reserved | Privacy Policy | ADA Compliance
              </div>
              <div className='digital small-txt'>
              <p>Designed and Maintained by:<a target='_blank' href="https://www.yourdigitalresource.com/"> Digital Resource</a></p>
              </div>   
          </div>   
      </div>  
  );
}
