import {width} from '@constants';

export const createPath: TCreatePath = (array) => {
  const itemWidth = width / array.length;
  const hLength = itemWidth * (array.length - 1);
  const deep = 44 - array.length * 4;
  return `M 0 0 H${hLength} C${itemWidth * 0.25 + hLength} 0 ${itemWidth * 0.25 + hLength} ${deep} ${
    itemWidth * 0.5 + hLength
  } ${deep} S ${itemWidth * 0.75 + hLength} ${0} ${itemWidth + hLength} ${0} H ${hLength + width} V 64 H 0 Z`;
};

export type TCreatePath = (array: any[]) => string;
