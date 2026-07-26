'use client';

import { useEffect } from 'react';

const VisibilityDebugger = () => {
  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined') return;

    // Function to run the debug checks
    const runDebugChecks = () => {
      console.log('=== VISIBILITY DEBUG START ===');
      console.log('Current URL:', window.location.href);
      console.log('document.body exists:', !!document.body);
      console.log('document.body.innerText length:', document.body ? document.body.innerText.length : 'NO BODY');
      
      if (document.body) {
        console.log('Body computed styles:', getComputedStyle(document.body));
        console.log('Body background-color:', getComputedStyle(document.body).backgroundColor);
        console.log('Body color:', getComputedStyle(document.body).color);
        
        // Check for any full screen overlays
        const fullScreenElements = Array.from(document.querySelectorAll('*'))
          .filter(el => {
            const rect = el.getBoundingClientRect();
            return rect.width === window.innerWidth && rect.height === window.innerHeight;
          });
        console.log('Full screen elements found:', fullScreenElements.length);
        
        // Log all elements from point 0,0
        const elementsAtTopLeft = document.elementsFromPoint(0, 0);
        console.log('Elements at top-left corner:', elementsAtTopLeft);
        
        // Check for fixed/sticky positioned elements that might be overlays
        const positionedElements = Array.from(document.querySelectorAll('*'))
          .filter(el => {
            const style = getComputedStyle(el);
            return style.position === 'fixed' || style.position === 'sticky';
          });
        console.log('Fixed/Sticky elements count:', positionedElements.length);
        
        // Look for common overlay indicators
        const possibleOverlays = Array.from(document.querySelectorAll('*'))
          .filter(el => {
            const style = getComputedStyle(el);
            const rect = el.getBoundingClientRect();
            
            // Check if element covers significant portion of screen
            const coversSignificantArea = (rect.width * rect.height) > (window.innerWidth * window.innerHeight * 0.5);
            const hasDarkBackground = style.backgroundColor && 
              (style.backgroundColor.includes('black') || 
               parseInt(style.backgroundColor.replace(/\D/g, '').substring(0, 3) || '0') < 50);
            const hasHighZIndex = parseInt(style.zIndex) > 10;
            
            return coversSignificantArea && (hasDarkBackground || hasHighZIndex);
          });
        console.log('Possible overlay elements:', possibleOverlays);
        
        // Check for any element with 'overlay' in its class/id
        const overlayLikeElements = document.querySelectorAll('*[class*="overlay"], *[id*="overlay"], *[class*="modal"], *[id*="modal"]');
        console.log('Overlay-like elements:', overlayLikeElements.length);
        
        console.log('=== VISIBILITY DEBUG END ===');
      }
    };

    // Run immediately
    runDebugChecks();
    
    // Run again after a short delay to catch dynamically created elements
    const timeoutId = setTimeout(runDebugChecks, 1000);
    
    // Clean up the timeout
    return () => {
      clearTimeout(timeoutId);
    };
  }, []); // Empty dependency array to run only once after mount

  return null; // Don't render anything visible
};

export default VisibilityDebugger;