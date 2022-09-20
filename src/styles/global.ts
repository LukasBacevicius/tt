import { createGlobalStyle } from "styled-components";

import FontBold from "fonts/ABCMonumentGrotesk-Bold.ttf";
import FontMedium from "fonts/ABCMonumentGrotesk-Medium.ttf";
import FontRegular from "fonts/ABCMonumentGrotesk-Regular.ttf";

export const ContainerStyle = () => `
max-width: var(--max-column-width);
width: 100%;
margin: 0px auto;
position: relative;
`;

export default createGlobalStyle`
    @font-face {
        font-family: 'ABCMonumentGrotesk';
        src: url(${FontBold}) format('ttf');
        weight: 700;
    }

    @font-face {
        font-family: 'ABCMonumentGrotesk';
        src: url(${FontMedium}) format('ttf');
        weight: 500;
    }

    @font-face {
        font-family: 'ABCMonumentGrotesk';
        src: url(${FontRegular}) format('ttf');
        weight: 400;
    }

    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
        font-family: "ABCMonumentGrotesk" , Helvetica, sans-serif;
    }

    #root{
        margin:0 auto;
    }

    body {
        background: rgb(255, 255, 255);
        --dark-grey: #333;
        --light-grey: #808080;
        --light-yellow: #FBFBCD;
        --black-100: #000;
        --black-80: #333;
        --black-60: #666;
        --black-40: #939393;
        --black-20: #e5e5e5;
        --black-15: #E7E7E9;
        --black-10: #f2f2f2;
        --black-5: #f7f7f7;
        --green-80: #3B755F;
        --green-60: #67C196;
        --green-40: #e2eae7;
        --green-20: #8bb0a2;
        --green-15: #E3F5EC;
        --green-10: #e0e8e4;
        --logo-green: #0C5A4B;
        --logo-light-green: #C3FF8E;
        --logo-blue: #2329AE;
        --logo-light-blue: #7EC6F8;
        --logo-red: #FF3865;
        --logo-purple: #CDA5FF;
        --logo-yellow: #FFF05C;
        --logo-orange: #FF895E;
        --red-80: #a80101;
        --red-60: #FF5656;
        --red-10: #ffe7e6;
        --error-red: #a80101;
        --bright-error-red: #FF0000;
        --box-padding: 40px;
        --wide-grid-spacing: 24px;
        --max-column-width: 1330px;
        --max-column-without-spacing-width: calc(var(--max-column-width) - (var(--wide-grid-spacing) * 2));
        --header-height: 70px;
        --grid-gap-large: 24px;
        --grid-gap-small: 12px;
        --spacing: 24px;
        --border-width: 2px;
        --border: 1px solid black;
        --button-radius: 4px;

        @media (max-width: 922px) {
            --box-padding: 20px;
            --header-height: 60px;
            --spacing: 20px;
            --wide-grid-spacing: 16px;
        }
    }
 `;
