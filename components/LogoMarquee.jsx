"use client";

import React from 'react'
import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from '@/components/ui/shadcn-io/marquee';
import { assets } from '@/assets/assets';
import Image from 'next/image';

export const LogoMarquee = () => {
    const logoStack1 = [
        {id: 1, img: assets.asus},
        {id: 2, img: assets.hp},
        {id: 3, img: assets.beats},
        {id: 4, img: assets.luis_vuitton},
        {id: 5, img: assets.apple},
        {id: 6, img: assets.adidas},
        {id: 7, img: assets.gucci},
        {id: 8, img: assets.pringles},
        {id: 9, img: assets.puma},
        {id: 10, img: assets.chanel},
    ];

    const logoStack2 = [
        {id: 1, img: assets.dell},
        {id: 2, img: assets.armani},
        {id: 3, img: assets.invictus},
        {id: 4, img: assets.dior},
        {id: 5, img: assets.samsung},
        {id: 6, img: assets.mi},
        {id: 7, img: assets.cocacola},
        {id: 8, img: assets.msi},
        {id: 9, img: assets.nike},
        {id: 10, img: assets.raymond},
    ]
  return (
    <div className="flex flex-col gap-6 size-full items-center justify-center pt-20 lg:pt-32 pb-8 lg:pb-14">
    <Marquee>
      <MarqueeFade side="left"/>
      <MarqueeFade side="right" />
      <MarqueeContent >
        {logoStack1.map((logo, index) => (
          <MarqueeItem key={index}>
            <Image
              alt={`logo ${index}`}
              className="h-6 lg:h-8 w-auto px-1 lg:px-4 object-cover overflow-hidden"
              src={logo.img}
            />
          </MarqueeItem>
        ))}
      </MarqueeContent>
    </Marquee>
    <Marquee>
      <MarqueeFade side="left"/>
      <MarqueeFade side="right" />
      <MarqueeContent direction="right">
        {logoStack2.map((logo, index) => (
          <MarqueeItem key={index}>
            <Image
              alt={`Logo ${index}`}
              className="h-6 lg:h-8 w-auto object-cover overflow-hidden px-1 lg:px-4"
              src={logo.img}
            />
          </MarqueeItem>
        ))}
      </MarqueeContent>
    </Marquee>
  </div>
  )
}
