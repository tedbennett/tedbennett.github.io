// eslint-disable-next-line
import React from 'react';
import Page from '../Page/Page';

import fridgy1 from '../../img/fridgy-1.png';
import fridgy2 from '../../img/fridgy-2.png';
import switchIt1 from '../../img/switch-it-1.png';
import switchIt2 from '../../img/switch-it-2.png';
import kata1 from '../../img/kata-2.png';
import kata2 from '../../img/kata-3.png';

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
    privacyUrl="/switch-it/privacy-policy"
  />
);

const Kata: React.FC = () => (
  <Page
    title="Kata"
    blurb="Kata is an app to help you learn languages with different alphabets"
    platform="Built for iOS with SwiftUI"
    appStoreUrl=""
    githubUrl="https://github.com/tedbennett/kata"
    imageUrls={[kata1, kata2]}
    readmeUrl="https://raw.githubusercontent.com/tedbennett/kata/master/README.md"
    privacyUrl="/kata/privacy-policy"
  />
);

export { Fridgy, SwitchIt, Kata };
