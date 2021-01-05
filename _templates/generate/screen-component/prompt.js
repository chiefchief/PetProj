module.exports = [
  {
    type: 'input',
    name: 'name',
    message: 'Enter component name...',
  },
  {
    type: 'select',
    name: 'folder',
    message: 'Select screen folder...',
    choices: [
      'Start',
      'ParalaxScroll',
      'VideoCall',
      'CountdownTimer',
      'FortuneWheel',
      'BottomSheet',
      'ColorSelection',
      'StickyElement',
      'CircleSwipe',
      //ADD MORE SCREENS
    ],
  },
];
