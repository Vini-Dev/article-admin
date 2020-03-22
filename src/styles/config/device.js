const size = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560,
};

export default {
  mobileS: `(min-width: ${size.mobileS}px) and (max-width: ${size.mobileM}px)`,
  mobileM: `(min-width: ${size.mobileM}px) and (max-width: ${size.mobileL}px)`,
  mobileL: `(min-width: ${size.mobileL}px) and (max-width: ${size.tablet}px)`,
  tablet: `(min-width: ${size.tablet}px) and (max-width: ${size.laptop}px)`,
  laptop: `(min-width: ${size.laptop}px) and (max-width: ${size.desktop}px)`,
  // laptopL: `(min-width: ${size.laptopL}px) and (max-width: ${size.desktop}px)`,
  // desktop: `(min-width: ${size.desktop}px) and (max-width: ${size.desktopL}px)`,
  // desktopL: `(min-width: ${size.desktopL}px)`,
};
