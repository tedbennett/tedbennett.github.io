import React from 'react';
import Page from '../Page/Page';

import fridgy1 from '../../img/fridgy-1.png';
import fridgy2 from '../../img/fridgy-2.png';

const Fridgy: React.FC = () => (
  <Page
    title="Fridgy"
    blurb="Fridgy is an app that helps you organise your fridge"
    platform="Built for iOS with UIKit"
    appStoreUrl="https://apps.apple.com/us/app/fridgly/id1514948934"
    githubUrl="https://github.com/tedbennett/fridgy-ios"
    imageUrls={[fridgy1, fridgy2]}
    readmeUrl="https://raw.githubusercontent.com/tedbennett/fridgy-iOS/master/README.md"
  />
);

const SwitchIt: React.FC = () => (
  <Page
    title="SwitchIt"
    blurb="SwitchIt is an app that helps you share music across streaming platforms"
    platform="Built for iOS with SwiftUI"
    appStoreUrl=""
    githubUrl="https://github.com/tedbennett/music-converter"
    imageUrls={[]}
    readmeUrl="https://raw.githubusercontent.com/tedbennett/music-converter/master/README.md"
  />
);

const Kaja: React.FC = () => (
  <Page
    title="Kaja! - 가자!"
    blurb="Kaja! is an app to help you learn Hangul, the Korean alphabet"
    platform="Built for iOS with SwiftUI"
    appStoreUrl=""
    githubUrl="https://github.com/tedbennett/Kaja-learn-hangul"
    imageUrls={[]}
    readmeUrl="https://raw.githubusercontent.com/tedbennett/Kaja-learn-hangul/master/README.md"
  />
);

export { Fridgy, SwitchIt, Kaja };
