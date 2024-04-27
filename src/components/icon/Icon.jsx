import React from 'react';
import { Logo } from './icons/Logo';
import { Plane } from './icons/Plane';
import { BriefCase } from './icons/BriefCase';
import { Filter } from './icons/Filter';
import { Chevron } from './icons/Chevron';
import { SlashEye } from './icons/SlashEye';
import { Star } from './icons/Star';

const Icon = ({ className, name }) => {
  switch (name) {
    case 'logo':
      return <Logo className={className} />;
    case 'plane':
      return <Plane className={className} />;
    case 'briefCase':
      return <BriefCase className={className} />;
    case 'filter':
      return <Filter className={className} />;
    case 'chevron':
      return <Chevron className={className} />;
    case 'slashEye':
      return <SlashEye className={className} />;
    case 'star':
      return <Star className={className} />;
    default:
      return null;
  }
};

export default Icon;
