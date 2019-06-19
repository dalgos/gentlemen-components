# `lottie-button`

> TODO: description

## Usage

```jsx
import LottieButton from '@gentlemen/lottie-button';

import openAniData from 'assets/open.json'; // lottie json data
import closeAniData from 'assets/close.json'; // lottie json data

const AniButton = () => (
  <LottieButton
    isPlayed={false}
    playAniData={openAniData}
    reverseAniData={closeAniData}
    width={24}
    height={24}
    options={{
      animationData: openAniData,
      autoplay: false,
      loop: false,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    }}
    isStopped={true}
    isClickToPauseDisabled={true}
  />
)

```
