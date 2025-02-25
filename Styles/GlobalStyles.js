import { createGlobalStyle } from "styled-components";

const FontStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

  body {
    font-family: Tahoma, sans-serif;
    font-weight: normal;
  }
`;

export default FontStyles;


// Reference library for styled-components if i need to copy and paste.


//   /* Set layout type */
//   display: flex; /* or grid, block, inline-block */
//   flex-direction: row; /* row | column */
//   justify-content: ; /* flex-start | center | flex-end | space-between | space-around | space-evenly */
//   align-items: ; /* flex-start | center | flex-end | stretch */
//   gap: ; /* Spacing between child elements */
  
//   /* Set container size */
//   width: ;
//   height: ;
//   max-width: ;
//   max-height: ;
//   min-width: ;
//   min-height: ;
  
//   /* Set margins and padding */
//   margin: ; /* Margin around the container */
//   padding: ; /* Padding inside the container */

//   /* Set borders and background */
//   border: ; /* Example: 1px solid black */
//   border-radius: ; /* Example: 10px */
//   background-color: ; /* Example: #f0f0f0 */
//   box-shadow: ; /* Example: 0px 4px 6px rgba(0, 0, 0, 0.1) */
  
//   /* Set text properties */
//   text-align: ; /* left | center | right */
//   font-size: ;
//   font-weight: ;
//   color: ;
  
//   /* Set positioning */
//   position: ; /* static | relative | absolute | fixed | sticky */
//   top: ;
//   left: ;
//   right: ;
//   bottom: ;
  
//   /* Set overflow behavior */
//   overflow: ; /* visible | hidden | scroll | auto */

//   /* Set flex behavior */
//   flex-wrap: ; /* nowrap | wrap | wrap-reverse */
// ;


//   /* Flex properties */
//   flex: ; /* flex-grow, flex-shrink, flex-basis */

//   /* Spacing */
//   margin: ;
//   padding: ;

//   /* Borders */
//   border: ;
//   border-radius: ;

//   /* Background */
//   background-color: ;

//   /* Text */
//   text-align: ;
//   font-size: ;
//   color: ;

//   /* Display */
//   display: ; /* block | inline-block | flex | grid */

//   /* Alignment */
//   align-self: ; /* auto | flex-start | center | flex-end */

//   /* Positioning */
//   position: ;
//   top: ;
//   left: ;
//   right: ;
//   bottom: ;
// ;

