<?php

/**
 * @file
 * Lists available colors and color schemes for the sdnn theme.
 */

$info = [
  // Available colors and color labels used in theme.
  'fields' => [
    'primary' => t('Primary Color'),
    'textprimary' => t('Text Color'),
    'textsecondary' => t('Text Color Secondary'),
    'supportingcolori' => t('Supporting Color 1'),
    'supportingcolorii' => t('Supporting Color 2'),
    'supportingcoloriii' => t('Supporting Color 3'),
    'supportingcoloriv' => t('Supporting Color 4'),
  ],
  // Pre-defined color schemes for meetingstoday.com.
  'schemes' => [
    'default' => [
      'title' => t('Palette 1 - meetingstoday.com'),
      'colors' => [
        'primary' => '#37b1bd',
        'textprimary' => '#000',
        'textsecondary' => '#918e8e',
        'supportingcolori' => '#ffd688',
        'supportingcolorii' => '#f48480',
        'supportingcoloriii' => '#46316e',
        'supportingcoloriv' => '#ab88b3',
      ],
    ],
    // Pre-defined color schemes for buildings.com.
    'palette_2' => [
      'title' => t('Palette 2 - buildings.com'),
      'colors' => [
        'primary' => '#d2232a',
        'textprimary' => '#000',
        'textsecondary' => '#918e8e',
        'supportingcolori' => '#0e2b65',
        'supportingcolorii' => '#5677ba',
        'supportingcoloriii' => '#918e8e',
        'supportingcoloriv' => '#aa987b',
      ],
    ],
    // Pre-defined color schemes for interiorsandsources.com.
    'palette_3' => [
      'title' => t('Palette 3 - interiorsandsources.com'),
      'colors' => [
        'primary' => '#dc4e3b',
        'textprimary' => '#000',
        'textsecondary' => '#918e8e',
        'supportingcolori' => '#58602f',
        'supportingcolorii' => '#beba8f',
        'supportingcoloriii' => '#99b0d7',
        'supportingcoloriv' => '#5a7c7a',
      ],
    ],
  ],
];

// CSS files (excluding @import) to rewrite with new color scheme.
$info['css'] = ['dist/css/color.css'];
$info['copy'] = ['logo.svg'];
