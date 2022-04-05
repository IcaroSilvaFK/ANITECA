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
		--gray400:#a0aec0;
		//red
		--red600:#E53E3E;

		--green400:#48BB78;

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

		&::-webkit-scrollbar{
			background-color:transparent;

			width: 10px;
		}

		&::-webkit-scrollbar-thumb{
		border-radius: 8px;

		background-color: var(--red600);
		}
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
		color: inherit;
	}

`;
