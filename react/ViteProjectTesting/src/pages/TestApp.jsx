import React from 'react';

// This component acts as one of your "mini-applications,"
// loaded when the user navigates to the /test-app route.
const TestApp = () => {
  return (
    // Outer container: sets up the full screen and centers the content.
    // 'min-h-screen': Ensures the container takes at least 100% of the viewport height.
    // 'flex flex-col': Enables flexbox, aligning items vertically.
    // 'items-center justify-center': Centers the child element both horizontally and vertically.
    // 'bg-gray-50': Sets a very light gray background for contrast.
    // 'p-4': Adds padding on all sides for mobile responsiveness.
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      
      {/* Inner Card: The main content box with styling. */}
      {/* 'bg-white': White background. */}
      {/* 'p-8': Large padding inside the card. */}
      {/* 'rounded-xl': Nicely rounded corners. */}
      {/* 'shadow-2xl': A pronounced shadow effect. */}
      {/* 'border border-gray-100': A subtle border for definition. */}
      {/* 'max-w-lg w-full': Ensures the card is responsive, max width is 'large' 
          but it takes full width on smaller screens. */}
      {/* 'text-center': Centers the text inside the card. */}
      <div className="bg-white p-8 rounded-xl shadow-2xl border border-gray-100 max-w-lg w-full text-center">
        
        {/* Main Header (H1) */}
        {/* 'text-4xl': Large font size. */}
        {/* 'font-extrabold': Extra bold font weight. */}
        {/* 'text-indigo-700': Deep indigo color. */}
        {/* 'tracking-tight': Reduces letter spacing slightly for a modern look. */}
        {/* 'mb-2': Margin-bottom spacing. */}
        <h1 className="text-4xl font-extrabold text-indigo-700 tracking-tight mb-2">
          Mini-App 1: Test App
        </h1>
        
        {/* Descriptive Text (P) */}
        {/* 'text-lg': Slightly larger text size for readability. */}
        {/* 'text-gray-500': Medium gray color for body text. */}
        <p className="text-lg text-gray-500">
          This is a separate, routable application loaded via React Router.
        </p>
      </div>
    </div>
  );
};

export default TestApp;
