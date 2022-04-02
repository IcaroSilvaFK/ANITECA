import styled from "styled-components";

export const Container = styled.section`
	display: flex;
	align-items: center;
	flex-direction: column;

	article {
		display: flex;
		align-items: center;
		justify-content: space-around;

		max-width: 1000px;

		margin-top: 30px;

		div {
			h1 {
				font-size: 40px;
				text-align: center;
			}
		}
	}
`;

export const Box = styled.div`
	margin-top: 30px;

	.box__containerTitle {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 20px;
		h1 {
			display: flex;
			flex-direction: column;
			align-items: center;
			font-size: 30px;
		}
	}

	@media (max-width: 500px) {
		display: flex;
		flex-direction: column;

		.box__containerTitle {
			display: flex;
			flex-direction: column-reverse;
			align-items: center;
			h1 {
				font-size: 22px;
			}
		}
	}
`;

export const Form = styled.form`
	display: flex;
	justify-content: center;

	gap: 10px;

	margin-top: 40px;
	@media (max-width: 500px) {
		flex-direction: column;
		align-items: center;
		gap: 20px;
	}
`;

export const Row = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	background-color: var(--white);

	padding: 8px;

	border-radius: 5px;

	input {
		background-color: transparent;

		width: 350px;
		height: 30px;

		font-size: 18px;
	}
	@media (max-width: 500px) {
		display: flex;
		align-items: center;
		svg {
			width: 20px;
			height: 20px;
		}
		input {
			width: 250px;
		}
	}
`;

export const SectionCards = styled.section`
	display: flex;
	flex-direction: column;
	margin-top: 50px;
	gap: 20px;
	div {
		h2 {
			font-size: 24px;
		}
	}
	.containerBut {
		display: flex;
		justify-content: right;
	}

	@media (max-width: 500px) {
		display: flex;
		flex-direction: column;

		width: 100%;

		div {
			h2 {
				font-size: 24px;
				text-align: center;
			}
		}
		.containerBut {
			display: flex;
			justify-content: right;
			padding-right: 20px;
		}
	}
`;

export const CardsSection = styled.div`
	display: flex;
	gap: 20px;
	img {
		width: 300px;
		height: 370px;
		border-radius: 5px;
	}

	@media (max-width: 500px) {
		overflow-x: auto;
		padding: 0 20px;
		img {
			width: 250px;
			border-radius: 5px;
		}
	}
`;

export const NewsSection = styled.div`
	padding: 10px 0;

	.newsSection__title {
		text-align: center;

		h1 {
			font-size: 45px;
			span {
				color: var(--red600);
			}
		}
		p {
			font-size: 22px;
			width: 600px;
		}
	}

	@media (max-width: 500px) {
		.newsSection__title {
			display: flex;
			flex-direction: column;
			gap: 20px;
			h1 {
				font-size: 35px;
			}

			p {
				width: 340px;
				font-size: 16px;
			}
		}
	}
`;
