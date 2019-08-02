# `lottie-button`

> TODO: description

## Usage

```jsx
import LottieButton from '@gentlemen/lottie-button';

import openAniData from 'assets/open.json'; // lottie json data
import closeAniData from 'assets/close.json'; // lottie json data

const AniButton = () => (
  <LottieButton
    // 재생 제어
    isPlayed={false}
    // 순방향 애니메이션 데이터 json
    playAniData={openAniData}
    // 역방향 애니메이션 데이터 json
    reverseAniData={closeAniData}
    // 애니메이션 영역의 넓이
    width={24}
    // 애니메이션 영역의 높이
    height={24}
    // react-lottie 옵션
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
