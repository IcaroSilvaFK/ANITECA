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
`;

export const ContainerSectionCards = styled.section``;

export const Box = styled.div`
	overflow-x: auto;
	&::-webkit-scrollbar {
		display: none;
	}
`;
