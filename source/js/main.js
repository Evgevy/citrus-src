import { initAccordion } from './modules/accordion/init-accordion';
import { initHeaderAccordion } from './modules/header-accordion/init-header-accordion';
import { initCustomSelect } from './modules/custom-select/init-custom-select';
import { initHeader } from './modules/header/init-header';
import { initModals } from './modules/modal/init-modals';
import { initPhoneMask } from './modules/init-phone-mask';
import { initPhoneValidation } from './modules/init-phone-validation';
import { initInfoSlider } from './modules/init-info-slider';
import { initMarquee } from './modules/init-marquee';
import { initMove } from './modules/init-move';
import { initWorkShopSlider } from './modules/init-work-shop-slider';
import { initDeliverySlider } from './modules/init-delivery-slider';
import { initContactsSlider } from './modules/init-contacts-slider';
import { initRange } from './modules/init-range';
import { initStorySlider } from './modules/init-story-slider';
import { initPodcastSlider } from './modules/init-podcast-slider';
import { initGradeSlider } from './modules/init-grade-slider';
import { initRevSlider } from './modules/init-rev-slider';
import { initWhriteSlider } from './modules/init-whrite-slider';
import { initTrustSlider } from './modules/init-trust-slider';
import { initIntroSlider } from './modules/init-intro-slider';
import { initHackSlider } from './modules/init-hack-slider';
import { revPopup } from './modules/rev-popup';
import { headerScroll } from './modules/header-scroll';
import { headMobile } from './modules/head-mobile';


window.addEventListener('DOMContentLoaded', () => {
  initHeader();
  headerScroll();
  
  window.addEventListener('load', () => {
    initHeaderAccordion();
    initModals();
    initCustomSelect();
    initAccordion();
    initPhoneMask();
    initPhoneValidation();
    initInfoSlider();
    initMove();
    initMarquee();
    initWorkShopSlider();
    initDeliverySlider();
    initContactsSlider();
    initRange();
    initStorySlider();
    initPodcastSlider();
    initGradeSlider();
    initRevSlider();
    initWhriteSlider();
    initTrustSlider();
    initIntroSlider();
    initHackSlider();
    revPopup();
    headMobile();
  });
});