import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	:root{
		--fontMont: 'Montserrat', sans-serif;
		--fontPoppins: 'Poppins', sans-serif;
    --fontRock: 'Rock 3D', cursive;
		--black:#000000;
		--white:#FFFFFF;

		//gray

		--gray900:#171923;
	}

	*{
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}
	body, #__next{
		width: 100%;
		height: 100vh;
		background-color:var(--gray900);
		color: #FFFFFF;
	}	

	body,a,input,button{
		font-family: var(--fontPoppins)
	}

	a{
		text-decoration: none;
		color: inherit
	}

	ul,ol{
		list-style: none;
	}
	button,input{
		border: none;
		outline: none;
	}

	button{
		cursor: pointer;
		background-color: transparent;
		color: inherit
	}
`;
