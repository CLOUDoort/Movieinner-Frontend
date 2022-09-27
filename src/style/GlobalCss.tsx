import { css } from '@emotion/react'

const GlobalCss = css`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
    html,
    body,
    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    b,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    menu,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    main,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    main,
    menu,
    nav,
    section {
        display: block;
    }
    /* HTML5 hidden-attribute fix for newer browsers */
    *[hidden] {
        display: none;
    }
    body {
        line-height: 1.6rem;
    }
    menu,
    ol,
    ul {
        list-style: none;
    }
    blockquote,
    q {
        quotes: none;
    }
    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    * {
        font-family: 'Roboto';
        box-sizing: border-box;
    }
    html {
        width: 100%;
        height: 100%;
    }
    body {
        font-family: 'Roboto';
        width: 100%;
        height: 100%;
        background-color: #2e2e2e;
        color: white;
    }
    #__next {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        > main {
            flex: 1;
            height: 100vh - 90px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
    }
    a {
        text-decoration-line: none;
        color: white;
        cursor: pointer;
    }
    button {
        cursor: pointer;
        border-radius: 5px;
    }
    input {
        border-radius: 5px;
        outline: none;
    }
`

export default GlobalCss
