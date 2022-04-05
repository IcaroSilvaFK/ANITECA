import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 100vh;
`;

export const Form = styled.form`
	width: 100%;

	display: flex;
	justify-content: center;

	gap: 10px;

	margin-top: 20px;
`;

export const Row = styled.div`
	background-color: #fff;

	display: flex;
	align-items: center;

	border-radius: 5px;

	padding: 0 8px;

	input {
		width: 55vw;
		height: 40px;

		font-size: 18px;
		padding: 5px 10px;
	}

	@media (max-width: 500px) {
		input {
			&::placeholder {
				color: transparent;
			}
		}
	}
`;

export const ContainerSectionCards = styled.section`
	max-width: 1220px;
	margin: auto;

	display: flex;
	flex-direction: column;

	gap: 10px;
	margin-top: 20px;
`;

export const Box = styled.div`
	display: flex;

	gap: 20px;

	overflow-x: auto;

	padding: 10px 10px;
	&::-webkit-scrollbar {
		background-color: transparent;
		height: 10px;
	}
	&::-webkit-scrollbar-thumb {
		border-radius: 10px;

		background-color: var(--red600);
	}
`;

export const Title = styled.h2`
	padding: 0 20px;
`;

export const SectionButton = styled.div`
	display: flex;
	justify-content: flex-end;

	button {
		background-color: var(--red600);

		padding: 8px 16px;
		border-radius: 8px;

		@media (max-width: 500px) {
			margin-right: 20px;
		}
	}
`;
