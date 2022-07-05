import {Image} from '@shopify/hydrogen';
import Addition from '../../../public/imgs/addition.png';

export function LastSection() {
  return (
    <div className='last'>
        <h2> Taking What The Earth Provides</h2>
        <p>turning plants and grains into natural, nutritive ingredients.</p>    
        <button className='btn'>Call Us</button>
        <Image
        className="addition"
        src={Addition}
        alt="addition"
        width="auto"
        height="auto"
        />  
    </div>
  );
}
