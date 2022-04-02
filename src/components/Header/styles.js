import styled from "styled-components";

export const Container = styled.header`
	width: 100%;

	display: flex;
	align-items: center;
	justify-content: space-between;

	padding: 20px 80px;

	@media (max-width: 500px) {
		padding: 10px 5px 10px 10px;
	}
`;

export const Box = styled.div`
	display: flex;
	align-items: center;
	gap: 60px;

	@media (max-width: 500px) {
		display: none;
	}
`;
