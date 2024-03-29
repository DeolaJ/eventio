import styled, { keyframes } from 'styled-components';

const Toastify__trackProgress = keyframes`
0% {
  transform: scaleX(1);
}
100% {
  transform: scaleX(0);
}
`;

const Toastify__slideInRight = keyframes`
from {
  transform: translate3d(110%, 0, 0);
  visibility: visible;
}
to {
  transform: translate3d(0, 0, 0);
}
`;

const Toastify__slideInLeft = keyframes`
from {
  transform: translate3d(-110%, 0, 0);
  visibility: visible;
}
to {
  transform: translate3d(0, 0, 0);
}
`;

const Toastify__slideOutRight = keyframes`
from {
  transform: translate3d(0, 0, 0);
}
to {
  visibility: hidden;
  transform: translate3d(110%, 0, 0);
}
`;

const Toastify__slideOutLeft = keyframes`
from {
  transform: translate3d(0, 0, 0);
}
to {
  visibility: hidden;
  transform: translate3d(-110%, 0, 0);
}
`;

export const NotificationBannerContainer = styled.div`
  .Toastify__toast-container {
    z-index: 9999;
    -webkit-transform: translate3d(0, 0, 9999px);
    position: fixed;
    padding: 0.5rem 0.5rem;
    width: 320px;
    box-sizing: border-box;
    color: #323c46;
    border-radius: 3px;
    font-size: 0.9rem;
    font-weight: 500;
  }
  .Toastify__toast-container--top-right {
    top: 2rem;
    right: 2rem;
  }
  @media only screen and (max-width: 480px) {
    .Toastify__toast-container {
      width: 100vw;
      padding: 0;
      left: 0;
      margin: 0;
    }
    .Toastify__toast-container--top-left,
    .Toastify__toast-container--top-center,
    .Toastify__toast-container--top-right {
      top: 0;
      transform: translateX(0);
    }

    .Toastify__toast-container--top-right {
      top: 1.5rem;
      right: 1.5rem;
    }
  }
  .Toastify__toast {
    position: relative;
    min-height: 64px;
    box-sizing: border-box;
    margin-bottom: 1rem;
    padding: 1rem;
    font-weight: 700;
    border-radius: 2px;
    box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.1), 0 2px 15px 0 rgba(0, 0, 0, 0.05);
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    max-height: 800px;
    overflow: hidden;
    font-family: sans-serif;
    cursor: pointer;
    direction: ltr;
  }
  .Toastify__toast--success {
    background: #fff;
  }
  .Toastify__toast--error {
    color: #e74c3c;
    background: #fff;
  }
  .Toastify__toast-body {
    margin: auto 0;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
  }

  @media only screen and (max-width: 480px) {
    .Toastify__toast {
      margin-bottom: 0;
    }
  }
  .Toastify__close-button {
    color: #323c46;
    background: transparent;
    outline: none;
    border: none;
    padding: 0;
    cursor: pointer;
    opacity: 0.7;
    transition: 0.3s ease;
    -ms-flex-item-align: start;
    align-self: flex-start;
  }
  .Toastify__close-button--default {
    color: #000;
    opacity: 0.3;
  }
  .Toastify__close-button > svg {
    fill: currentColor;
    height: 16px;
    width: 14px;
  }
  .Toastify__close-button:hover,
  .Toastify__close-button:focus {
    opacity: 1;
  }
  .Toastify__toast--error .Toastify__close-button {
    color: #e74c3c;
  }
  .Toastify__progress-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 5px;
    z-index: 9999;
    opacity: 0.7;
    background-color: rgba(50, 60, 70, 0.85);
    transform-origin: left;
  }
  .Toastify__toast--error .Toastify__progress-bar {
    background-color: rgba(231, 76, 60, 0.85);
  }
  .Toastify__progress-bar--animated {
    animation: ${Toastify__trackProgress} linear 1 forwards;
  }
  .Toastify__progress-bar--controlled {
    transition: transform 0.2s;
  }
  .Toastify__progress-bar--default {
    background: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);
  }
  .Toastify__slide-enter--top-left,
  .Toastify__slide-enter--bottom-left {
    animation-name: ${Toastify__slideInLeft};
  }
  .Toastify__slide-enter--top-right,
  .Toastify__slide-enter--bottom-right {
    animation-name: ${Toastify__slideInRight};
  }
  .Toastify__slide-exit--top-left,
  .Toastify__slide-exit--bottom-left {
    animation-name: ${Toastify__slideOutLeft};
  }
  .Toastify__slide-exit--top-right,
  .Toastify__slide-exit--bottom-right {
    animation-name: ${Toastify__slideOutRight};
  }
`;

export default {
  NotificationBannerContainer,
};
