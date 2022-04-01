import styled from "styled-components";

export const Container = styled.header`
	width: 100%;

	display: flex;
	align-items: center;
	justify-content: space-between;

	padding: 20px 80px;

	border-bottom: 1px solid #eee;

	div {
		display: flex;
		align-items: center;
		gap: 50px;
		a {
			display: flex;
			align-items: center;
			gap: 5px;
		}
	}
	nav {
		ul {
			display: flex;
			align-items: center;
			gap: 40px;
			li {
				a {
					display: flex;
					align-items: center;
					gap: 10px;
				}
			}
		}
	}
`;

export const Title = styled.h1`
	font-family: var(--fontMont);
`;

export const Form = styled.form``;

export const Row = styled.div`
	display: flex;
	align-items: center;
	background-color: #4a5568;
	height: 30px;
	border-radius: 10px;
	padding: 16px 8px;
	button {
		display: flex;
		align-items: center;

		transition: filter 0.2s;

		&:hover {
			filter: brightness(0.8);
		}
	}
	input {
		background-color: transparent;
		width: 300px;
		color: #ffff;
		font-size: 16px;
		&::placeholder {
			color: #a0aec0;
		}
	}
`;
