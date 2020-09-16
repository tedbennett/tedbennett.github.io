// eslint-disable-next-line
import React from 'react';
import Page from '../Page/Page';

import fridgy1 from '../../img/fridgy-1.png';
import fridgy2 from '../../img/fridgy-2.png';
import switchIt1 from '../../img/switch-it-1.png';
import switchIt2 from '../../img/switch-it-2.png';

const Fridgy: React.FC = () => (
  <Page
    title="Fridgy"
    blurb="Fridgy is an app that helps you organise your fridge"
    platform="Built for iOS with UIKit"
    appStoreUrl="https://apps.apple.com/us/app/fridgly/id1514948934"
    githubUrl="https://github.com/tedbennett/fridgy-ios"
    imageUrls={[fridgy1, fridgy2]}
    readmeUrl="https://raw.githubusercontent.com/tedbennett/fridgy-iOS/master/README.md"
    privacyUrl="/fridgy/privacy-policy"
  />
);

const SwitchIt: React.FC = () => (
  <Page
    title="SwitchIt"
    blurb="SwitchIt is an app that helps you share music across streaming platforms"
    platform="Built for iOS with SwiftUI"
    appStoreUrl=""
    githubUrl="https://github.com/tedbennett/switch-it"
    imageUrls={[switchIt1, switchIt2]}
    readmeUrl="https://raw.githubusercontent.com/tedbennett/switch-it/master/README.md"
    privacyUrl="/fridgy/privacy-policy"
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
    privacyUrl="/fridgy/privacy-policy"
  />
);

export { Fridgy, SwitchIt, Kaja };
