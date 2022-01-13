// components/GlobalStyles.js
import React from "react";
import { createGlobalStyle } from "styled-components";
import tw, { theme, GlobalStyles as BaseStyles } from "twin.macro";

const CustomStyles = createGlobalStyle`
  body {
    -webkit-tap-highlight-color: ${theme`colors.primary.500`};
    ${tw`antialiased`}
  }
  article {

    h2,h3,h4 {
      ${tw`font-semibold py-5 text-gray-800`}
    }
    h2{
      ${tw`text-4xl`}
    }
    h3{
      ${tw`text-3xl`}
    }

    /* Color */
    p, ul,ol {
      ${tw`text-gray-700 my-4`}
    }
    
    p {
      ${tw` text-base`}
    }

    /* List */
    ol,ul{
      ${tw`mx-10`}
    }
    ol{
      ${tw`list-decimal`}
    }
    ul{
      ${tw`list-disc`}
    }

    blockquote{
    ${tw`border-l-primary-500 border-l-4 p-4 text-lg text-gray-800`}
  }

  pre {
      ${tw`my-5 text-base px-10 py-5 rounded-md bg-gray-50 overflow-scroll `}
    }


  }
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;