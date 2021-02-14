import {width} from '@constants';
import * as shape from 'd3-shape';
import {height} from './styles';

export const getPath = (array: any[]): string => {
  const tabWidth = width / array.length;

  const left = shape
    .line()
    .x((d) => d.x)
    .y((d) => d.y)([
    {x: 0, y: 0},
    {x: width, y: 0},
  ]);
  const tab = shape
    .line()
    .x((d) => d.x)
    .y((d) => d.y)
    .curve(shape.curveBasis)([
    {x: width, y: 0},
    {x: width + 5, y: 0},
    {x: width + 10, y: 10},
    {x: width + 15, y: height},
    {x: width + tabWidth - 15, y: height},
    {x: width + tabWidth - 10, y: 10},
    {x: width + tabWidth - 5, y: 0},
    {x: width + tabWidth, y: 0},
  ]);
  const right = shape
    .line()
    .x((d) => d.x)
    .y((d) => d.y)([
    {x: width + tabWidth, y: 0},
    {x: width * 2, y: 0},
    {x: width * 2, y: height},
    {x: 0, y: height},
    {x: 0, y: 0},
  ]);

  console.log(left);
  console.log(tab);
  console.log(right);

  return `${left} ${tab} ${right}`;
};
