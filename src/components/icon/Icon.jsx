import React from 'react';
import { Logo } from './icons/Logo';
import { Plane } from './icons/Plane';
import { BriefCase } from './icons/BriefCase';
import { Filter } from './icons/Filter';
import { Chevron } from './icons/Chevron';
import { Chevron2 } from './icons/Chevron2';
import { SlashEye } from './icons/SlashEye';
import { Star } from './icons/Star';
import { Clear } from './icons/Clear';
import { Calendar } from './icons/Calendar';
import { Clock } from './icons/Clock';
import { Stack } from './icons/Stack';
import { Graduation } from './icons/Graduation';
import { Salary } from './icons/Salary';
import { TomeJob } from './icons/TomeJob';
import { MoreFilters } from './icons/MoreFilters';
import { Eye } from './icons/Eye';
import { MenuIcon } from './icons/MenuIcon';

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
    case 'chevron2':
      return <Chevron2 className={className} />;
    case 'eye':
      return <Eye className={className} />;
    case 'slashEye':
      return <SlashEye className={className} />;
    case 'star':
      return <Star className={className} />;
    case 'clear':
      return <Clear className={className} />;
    case 'calendar':
      return <Calendar className={className} />;
    case 'clock':
      return <Clock className={className} />;
    case 'stack':
      return <Stack className={className} />;
    case 'graduation':
      return <Graduation className={className} />;
    case 'salary':
      return <Salary className={className} />;
    case 'tomeJob':
      return <TomeJob className={className} />;
    case 'moreFilters':
      return <MoreFilters className={className} />;
    case 'menu':
      return <MenuIcon className={className} />;
    default:
      return null;
  }
};

export default Icon;
