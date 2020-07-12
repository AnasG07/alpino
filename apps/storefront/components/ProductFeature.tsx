import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';

interface Props {
  data: any;
}

const images = [
  '/animation/Speaker01_0001.png',
  '/animation/Speaker01_0002.png',
  '/animation/Speaker01_0003.png',
  '/animation/Speaker01_0004.png',
  '/animation/Speaker01_0005.png',
  '/animation/Speaker01_0006.png',
  '/animation/Speaker01_0007.png',
  '/animation/Speaker01_0008.png',
  '/animation/Speaker01_0009.png',
  '/animation/Speaker01_0010.png',
  '/animation/Speaker01_0011.png',
  '/animation/Speaker01_0012.png',
  '/animation/Speaker01_0013.png',
  '/animation/Speaker01_0014.png',
  '/animation/Speaker01_0015.png',
  '/animation/Speaker01_0016.png',
  '/animation/Speaker01_0017.png',
  '/animation/Speaker01_0018.png',
  '/animation/Speaker01_0019.png',
  '/animation/Speaker01_0020.png',
  '/animation/Speaker01_0021.png',
  '/animation/Speaker01_0022.png',
  '/animation/Speaker01_0023.png',
  '/animation/Speaker01_0024.png',
  '/animation/Speaker01_0025.png',
  '/animation/Speaker01_0026.png',
  '/animation/Speaker01_0027.png',
  '/animation/Speaker01_0028.png',
  '/animation/Speaker01_0029.png',
  '/animation/Speaker01_0030.png',
  '/animation/Speaker01_0031.png',
  '/animation/Speaker01_0032.png',
  '/animation/Speaker01_0033.png',
  '/animation/Speaker01_0034.png',
  '/animation/Speaker01_0035.png',
  '/animation/Speaker01_0036.png',
  '/animation/Speaker01_0037.png',
  '/animation/Speaker01_0038.png',
  '/animation/Speaker01_0039.png',
  // '/animation/Speaker01_0040.png',
  // '/animation/Speaker01_0041.png',
  // '/animation/Speaker01_0042.png',
  // '/animation/Speaker01_0043.png',
  // '/animation/Speaker01_0044.png',
  // '/animation/Speaker01_0045.png',
];

export default class ProductFeature extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      positionValue: false,
      fade: false,
    };
  }

  scrollController: any;
  scrollScene: any;

  componentDidMount() {
    if (!this.props.data.animation) {
      return;
    }
    const mobile = window.screen.availWidth <= 1024 ? true : false;

    if (process.browser) {
      const elements = document.getElementsByClassName('product-alignment');
      console.log(elements);
      if (!elements || !elements.length) {
        return;
      }

      window.addEventListener('scroll', () => {
        const scrollHeight = elements[2].getBoundingClientRect().top - window.screen.availHeight / 100;
        if (scrollY > scrollHeight) {
          this.setState({ positionValue: true });
        } else {
          this.setState({ positionValue: false });
        }

        if (scrollY > 20) {
          this.setState({ fade: true });
        } else {
          this.setState({ fade: false });
        }
      });
    }

    const { TweenMax, TimelineMax } = require('gsap');
    const ScrollMagic = require('scrollmagic');
    const { ScrollMagicPluginGsap } = require('scrollmagic-plugin-gsap');
    ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

    const obj = { curImg: 0 };
    let opacity = 1;
    const tween = TweenMax.to(obj, 0.5, {
      curImg: images.length - 1,
      roundProps: 'curImg',
      repeat: 1,
      immediateRender: true,
      onUpdate: function () {
        const img = document.getElementById('myImg');
        img.setAttribute('src', images[obj.curImg]);
        if (obj.curImg === 35) {
          img.style.opacity = '0.7';
        }
        if (obj.curImg === 36) {
          img.style.opacity = '0.3';
        }
        if (obj.curImg === 37) {
          img.style.opacity = '0.1';
        }
        if (obj.curImg === 38) {
          img.style.opacity = '0';
        }
      },
    });

    this.scrollController = new ScrollMagic.Controller();

    this.scrollScene = new ScrollMagic.Scene({
      triggerElement: '#trigger',
      duration: mobile ? 3200 : 3700,
    })
      .setTween(tween)
      .addTo(this.scrollController);
  }

  componentWillUnmount() {
    if (!this.props.data.animation) {
      return;
    }
    this.scrollScene.destroy();
    this.scrollController.destroy();
  }

  render() {
    const {
      data: { description, buttonText, image, animation, link },
    } = this.props;
    const { positionValue, fade } = this.state;

    return (
      <div className={classNames('product-alignment', { flex: !animation })} id={animation ? 'trigger' : ''}>
        <div
          className={classNames('flex-grow flex flex-col justify-center  lg:items-start items-center leading-12', {
            fade,
          })}
          id={animation ? 'animation-content' : ''}>
          <h1 className="pt-4 lg:pt-0 max-w-30 text-center lg:text-left text-white font-medium text-2xl md:text-5xl leading-7 md:leading-12">
            {description}
          </h1>
          <div className="pt-4 md:pt-16">
            <Link href="/collections/[tag]" as={link}>
              <a className="button button-transparent py-2 px-4 outline-none button-hover">{buttonText}</a>
            </Link>
          </div>
        </div>
        <div
          id={animation ? 'divId' : ''}
          className={classNames('w-full', {
            'absolute-feature': animation && positionValue,
            'fixed-feature': animation && !positionValue,
          })}>
          <img id="myImg" src={image} className="block mx-auto" />
        </div>

        {animation && (
          <div className="hidden">
            {images.map((i) => (
              <img key={i} src={i} alt="frame" />
            ))}
          </div>
        )}
      </div>
    );
  }
}
