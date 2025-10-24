// this is inside: src/pages/Gallery.jsx

// 1. Import React (often omitted in docs, but good to include)
import React from 'react'; 

// 2. Define any nested components first (Profile in this case)
function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
  );
}

// 3. Define the main component
export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}

// Note: Because the 'export default' is done right before the function definition,
// no separate 'export default Gallery;' line is needed at the end.

//The simple rule is: If a file contains a React component you want to use elsewhere, it needs to import React (if necessary) and use `export default`.
