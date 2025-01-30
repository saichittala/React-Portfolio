import { useEffect } from 'react';

const GoogleAnalytics = () => {
  useEffect(() => {
    // Load the Google Tag script
    const script = document.createElement('script');
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-5HSV3LEN82";
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'G-5HSV3LEN82');
    };

    return () => {
      document.head.removeChild(script); // Clean up the script on unmount
    };
  }, []);

  return null; // This component doesn't need to render anything
};

export default GoogleAnalytics;
