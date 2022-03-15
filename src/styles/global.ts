import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
:root {
    --red: #e52e4d;
    --blue: #5429CC;
    --green: #33cc95;
    --blue-light: #6933FF;

    --text-title: #363f5f;
    --text-body: #969cb3;

    --background: #f0f2f5;
    --shape: #ffffff;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/*Ajustando o tamanho da fonte relativo ao dispositivo*/
/* Font-size padão: 16px (descktop)*/
html{ 
    @media (max-width: 1080px) {
        font-size: 93.75%;
        /*diminui o font-size para 15px */
    }
    @media (max-width: 768px) {
        font-size: 87.5%;
        /*diminui o font-size para 14px */
    }
    @media (max-width: 425px) {
        font-size: 81.3%;
        /*diminui o font-size para 13px */
    }
}

body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
}

body, input, textarea, button{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
}

h1,h2,h3,h4,h5,h6, strong {
    font-weight: 600;
}

button{ 
    cursor: pointer;
}

[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
}
`