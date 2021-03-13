import {assets} from '@assets';

export const screenData: TScreenItem[] = [
  {
    id: 1,
    screen: 'ParalaxScroll',
    test: false,
    progress: false,
    needOptimize: true,
    video: assets.PARALAX_SCROLL,
  },
  {
    id: 2,
    screen: 'CountdownTimer',
    test: false,
    progress: false,
    needOptimize: true,
    video: assets.COUNTDOWN_TIMER,
  },
  {
    id: 3,
    screen: 'BottomSheet',
    test: false,
    progress: false,
    needOptimize: true,
    video: assets.BOTTOM_SHEET,
  },
  {
    id: 4,
    screen: 'StickyElement',
    test: false,
    progress: false,
    needOptimize: true,
    video: assets.STICKY_ELEMENT,
  },
  {
    id: 5,
    screen: 'AwesomeCarousel',
    test: false,
    progress: false,
    needOptimize: true,
    video: assets.AWESOME_CAROUSEL,
  },
  {
    id: 6,
    screen: 'FlatListItemAnimation',
    test: false,
    progress: false,
    needOptimize: true,
    video: assets.FLATLIST_ANIMATION,
  },
  {
    id: 7,
    screen: 'FlatGallery',
    test: false,
    progress: false,
    needOptimize: true,
    video: assets.FLAT_GALLERY,
  },
  {
    id: 8,
    screen: 'FlatFilms',
    test: false,
    progress: false,
    needOptimize: true,
    video: assets.FLAT_FILMS,
  },
  {
    id: 9,
    screen: 'DotInversion',
    test: false,
    progress: false,
    needOptimize: true,
    video: assets.DOT_INVERSION,
    needFixOn: 'android',
  },
  {
    id: 10,
    screen: 'LongPress',
    test: false,
    progress: false,
    needOptimize: true,
    video: assets.LONG_PRESS,
    needFixOn: 'android',
  },
  {
    id: 11,
    screen: 'AnimatedSentence',
    test: false,
    progress: false,
    needOptimize: true,
    video: assets.ANIMATED_SENTENCES,
    needFixOn: 'android',
  },
  {
    id: 12,
    screen: 'StopWatch',
    test: false,
    progress: false,
    needOptimize: true,
    video: assets.STOP_WATCH,
  },
  {
    id: 13,
    screen: 'Tab',
    test: false,
    progress: false,
    needOptimize: true,
    video: assets.TAB,
  },
  {
    id: 14,
    screen: 'FlatListAppearance',
    test: false,
    progress: false,
    needOptimize: true,
    video: assets.FLATLIST_APPEARANCE,
    needFixOn: 'android',
  },
  {
    id: 15,
    screen: 'CustomSlider',
    test: false,
    progress: false,
    needOptimize: true,
    video: assets.CUSTOM_SLIDER,
  },
  {
    id: 16,
    screen: 'GestureIteractions',
    test: false,
    progress: false,
    needOptimize: true,
    video: assets.GESTURE_ITERACTIONS,
  },
  {
    id: 17,
    screen: 'SharedStackNavigator',
    test: false,
    progress: false,
    needOptimize: true,
    video: assets.SHARED_ELEMENT,
    needFixOn: 'android',
  },
  {
    id: 18,
    screen: 'FlatlistCard',
    test: false,
    progress: false,
    needOptimize: true,
    needFixOn: 'android',
  },
  {
    id: 19,
    screen: 'VideoCall',
    test: false,
    progress: true,
    needOptimize: true,
  },
];

export type TScreenItem = {
  id: number;
  screen: string;
  test: boolean;
  progress: boolean;
  needOptimize: boolean;
  video?: number;
  needFixOn?: TNeedFix | TNeedFix[];
};

type TNeedFix = 'android' | 'ios';
