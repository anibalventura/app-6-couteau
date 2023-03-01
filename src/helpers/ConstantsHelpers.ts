import {
  homeOutline,
  homeSharp,
  heartCircleOutline,
  heartCircleSharp,
  peopleOutline,
  peopleSharp,
  calculatorOutline,
  calculatorSharp,
  ribbonOutline,
  ribbonSharp,
  sunnyOutline,
  sunnySharp,
} from 'ionicons/icons';
import HomePage from '../pages/HomePage';
import GenderNamePage from '../pages/GenderNamePage';
import AboutPage from '../pages/AboutPage';
import AgeCalcPage from '../pages/AgeCalcPage';
import CountryCollegePage from '../pages/CountryCollegePage';
import WeatherPage from '../pages/WeatherPage';

export const C_PAGES = [
  {
    PATH: '/page/Home',
    NAME: 'Home',
    COMPONENT: HomePage,
    IOS_ICON: homeOutline,
    MD_ICON: homeSharp,
  },
  {
    PATH: '/page/GenderName',
    NAME: 'Gender Name',
    COMPONENT: GenderNamePage,
    IOS_ICON: peopleOutline,
    MD_ICON: peopleSharp,
  },
  {
    PATH: '/page/AgeCalc',
    NAME: 'Age Calculator',
    COMPONENT: AgeCalcPage,
    IOS_ICON: calculatorOutline,
    MD_ICON: calculatorSharp,
  },
  {
    PATH: '/page/CountryCollege',
    NAME: 'Country Colleges',
    COMPONENT: CountryCollegePage,
    IOS_ICON: ribbonOutline,
    MD_ICON: ribbonSharp,
  },
  {
    PATH: '/page/Weather',
    NAME: 'Weather DR',
    COMPONENT: WeatherPage,
    IOS_ICON: sunnyOutline,
    MD_ICON: sunnySharp,
  },
  {
    PATH: '/page/About',
    NAME: 'About',
    COMPONENT: AboutPage,
    IOS_ICON: heartCircleOutline,
    MD_ICON: heartCircleSharp,
  },
];
