import {Link, Image} from '@shopify/hydrogen';
import Oasts from '../../../public/imgs/logo_large.svg';
import Bg from '../../../public/imgs/oatsbg.png';

export function FeaturedSection() {
  return (
    <div className='featured'>
      <Image
      className="oasts"
      src={Oasts}
      alt="oasts"
      width="auto"
      height="auto"
      />
      <div className='featured-title'>
        <h1>Turn Plan-Based Ingredients Into Natural Foods</h1>
      </div>
      <Link to='/products'>
        <button className='btn find'>Find an Ingredient</button>
      </Link>
      <Image
      className="oasts"
      src={Bg}
      alt="oasts"
      width="auto"
      height="auto"
      />      
      <div className='graybg'></div>
    </div>
  );
}
