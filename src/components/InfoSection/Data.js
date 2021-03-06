import CarSvg from "../../images/svg-2.svg";
import PiggyBankSvg from "../../images/svg-5.svg";
import PaperSvg from "../../images/svg-1.svg";

export const homeObjOne = {
  //First data section
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Premium Bank",
  headline: "Unlimited Transactions with zero fees",
  description:
    "Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.",
  buttonLabel: "Get started",
  imgStart: false,
  img: CarSvg,
  alt: "Car",
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjTwo = {
  //Second data section
  id: "discover",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Unlimited Access",
  headline: "Login to your account at any time",
  description:
    "We have you covered no matter where you are located. All you need is an internet connection and a phone or computer.",
  buttonLabel: "Learn More",
  imgStart: true,
  img: PiggyBankSvg,
  alt: "Piggybank",
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjThree = {
  //Third data section
  id: "signup",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Join out Team",
  headline: "Creating an account is extremely easy",
  description:
    "Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go.",
  buttonLabel: "Start Now",
  imgStart: false,
  img: PaperSvg,
  alt: "Paper",
  dark: false,
  primary: false,
  darkText: true,
};
