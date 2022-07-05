import {Link, Image} from '@shopify/hydrogen';
import Arrow from '../../../public/imgs/arrowdown.png';
import Cup from '../../../public/imgs/bgcup.png';
import CornLeft from '../../../public/imgs/obg_right.png';
import CornRight from '../../../public/imgs/obg_left.png';
import Video from '../../../public/media/video.mp4';


export function OurStorySection(){
    return (
      <div className='story-wrap'>

          <div className='story'>
          <h3 className='subtitle'>Our Story</h3>
          <Image
          className="arrow"
          src={Arrow}
          alt="oasts"
          width="auto"
          height="auto"
          />

          <Image
          className="cornr"
          src={CornRight}
          alt="CornRight"
          width="auto"
          height="auto"
          />

          <video src={Video} width="800" height="400" autoplay="true" />
          <div>
            <p>
              At Sweet Additions, we are an ingredient company and maltodextrin
              supplier that produces and markets organic and natural sweeteners to
              food and beverage manufacturers.
            </p>
            <Link to='/about-us'>
              <button className='btn'>Who we are</button>
            </Link>
          </div>
        </div>

        <Image
          className="cornl"
          src={CornLeft}
          alt="CornLeft"
          width="auto"
          height="auto"
          />
          
        <div className='graybg'></div>

        <div className='sweetbg'>
          <h3>Oats (Avena Sativa L)</h3>
          <div className='story-title'>
            <h1>Nam aliquam sem et tortor</h1>
          </div>
          <Image
            className="sweetcup"
            src={Cup}
            alt="sweetbg"
            width="100%"
            height="auto"
            />
        </div>
        
        <div className='graybg-bottom'></div>

      </div>
    );
  }

