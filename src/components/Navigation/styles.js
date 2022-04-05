import styled from "styled-components";

export const Container = styled.nav`
	ul {
		display: flex;
		align-items: center;

		gap: 30px;

		font-size: 18px;

		li {
			a {
				transition: color 0.3s;

				&:hover {
					color: var(--gray400);
				}
			}
		}

		@media (max-width: 500px) {
			flex-direction: column;
		}
	}
`;

export const Button = styled.button`
	font-size: 18px;

	padding: 10px;

	position: relative;

	&::after {
		content: ${(props) =>
			props.quantity > 0 ? '"' + props.quantity + '"' : ""};

		position: absolute;
		top: 0;
		right: 0;

		background-color: var(--red600);

		width: 20px;
		height: 20px;

		border-radius: 50%;

		display: flex;
		align-items: center;
		justify-content: center;

		font-size: 14px;
		font-weight: bold;
	}

	@media (max-width: 500px) {
		display: flex;
		align-items: center;
		justify-content: center;

		gap: 10px;

		&::after {
			position: static;

			background: #fff;
			color: var(--red600);

			display: flex;
			align-items: center;
			justify-content: center;

			width: 25px;
			height: 25px;
		}
	}
`;
