import ReactGA from "react-ga4";

export const initGA = (trackingId: string) => {
  ReactGA.initialize(trackingId);
};

export const logPageView = () => {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
};
