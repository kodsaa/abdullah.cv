import ReactGA from "react-ga4";

export const initAnalytics = () => {
  const measurementId = 'G-V8WRZHVTJH';

  if (!measurementId) return;

  ReactGA.initialize(measurementId);
};

export const trackPageView = (path: string) => {
  ReactGA.send({
    hitType: "pageview",
    page: path,
  });
};