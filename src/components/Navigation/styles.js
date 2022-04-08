import styled, { keyframes } from "styled-components";
import { FaHeart } from "react-icons/fa";
//! unsainted

export const Container = styled.nav`
	ul {
		display: flex;
		align-items: center;

		gap: 30px;

		font-size: 18px;

		li {
			position: relative;
			display: flex;
			align-items: center;
			a {
				transition: color 0.3s;

				display: flex;
				align-items: center;
				gap: 10px;

				&:hover {
					color: var(--gray400);
				}
			}
		}

		@media (max-width: 500px) {
			flex-direction: column;
			align-items: flex-start;
			width: 100%;
		}
	}
`;

export const Heart = styled(FaHeart)`
	position: absolute;
	right: 0;
	top: 5px;

	color: #e53e3e;

	@media (max-width: 500px) {
		right: -20px;
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

		padding: 0;

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
