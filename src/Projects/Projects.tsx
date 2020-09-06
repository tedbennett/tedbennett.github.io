import React from 'react';
import Page from '../Page/Page';

import fridgy1 from '../img/fridgy-1.png';
import fridgy2 from '../img/fridgy-2.png';

const Fridgy: React.FC = () => (
  <Page
    title="Fridgy"
    blurb="Fridgy is an app that helps you organise your fridge"
    appStoreUrl="https://apps.apple.com/us/app/fridgly/id1514948934"
    githubUrl="https://github.com/tedbennett/fridgy-ios"
    imageUrls={[fridgy1, fridgy2]}
    description={
      ['Built in Swift with UIKit',
        'Fridgy keeps the user\'s fridge organised to prevent food waste.',
        'The user enters the food in their fridge, along with its expiration dates.',
        'Fridgy sorts the food by whats about to expire next, letting the user know what they should eat.',
        'The user can access recipe suggestions, and can create a shopping list from what they\'ve removed from their fridge.',
      ]
    }
  />
);

const SwitchIt: React.FC = () => (
  <Page
    title="SwitchIt"
    blurb="SwitchIt is an app that helps you share music across streaming platforms"
    appStoreUrl=""
    githubUrl="https://github.com/tedbennett/music-converter"
    imageUrls={[]}
    description={[]}
  />
);

const Kaja: React.FC = () => (
  <Page
    title="Kaja!"
    blurb="Kaja! is an app to help you learn Hangul, the Korean alphabet"
    appStoreUrl=""
    githubUrl=""
    imageUrls={[]}
    description={[]}
  />
);

export { Fridgy, SwitchIt, Kaja };
