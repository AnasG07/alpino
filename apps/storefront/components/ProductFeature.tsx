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
  '/animation/Speaker01_0040.png',
  '/animation/Speaker01_0041.png',
  '/animation/Speaker01_0042.png',
  '/animation/Speaker01_0043.png',
  '/animation/Speaker01_0044.png',
  '/animation/Speaker01_0045.png',
];

export default class ProductFeature extends React.Component<Props> {
  scrollController: any;
  scrollScene: any;

  componentDidMount() {
    if (!this.props.data.animation) {
      return;
    }
    const { TweenMax, TimelineMax } = require('gsap');
    const ScrollMagic = require('scrollmagic');
    const { ScrollMagicPluginGsap } = require('scrollmagic-plugin-gsap');
    ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

    const obj = { curImg: 0 };
    const tween = TweenMax.to(obj, 0.5, {
      curImg: images.length - 1,
      roundProps: 'curImg',
      repeat: 1,
      immediateRender: true,
      onUpdate: function () {
        const img = document.getElementById('myImg');
        img.setAttribute('src', images[obj.curImg]);
      },
    });

    this.scrollController = new ScrollMagic.Controller();

    this.scrollScene = new ScrollMagic.Scene({
      triggerElement: '#trigger',
      duration: 2000,
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
    return (
      <div className={classNames('flex product-alignment p-16')} id={animation ? 'trigger' : ''}>
        <div className="flex-grow flex flex-col justify-center pl-0 md:pl-32 md:items-start items-center leading-12">
          <h1 className="max-w-30 text-center md:text-left text-white font-medium text-2xl md:text-5xl leading-7 md:leading-12">
            {description}
          </h1>
          <div className="pt-4 md:pt-16">
            <Link href="/collections/[tag]" as={link}>
              <a className="button button-transparent py-2 px-4 outline-none">{buttonText}</a>
            </Link>
          </div>
        </div>
        <div className="flex-grow">
          <img id="myImg" src={image} />
        </div>
      </div>
    );
  }
}
