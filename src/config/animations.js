import { keyframes } from "styled-components";

export const fadeOutLeft = keyframes`
  from { 
      opacity: 1 
    }
    to {
        opacity: 0;
        transform: translateX(-25%);
    }
`;
