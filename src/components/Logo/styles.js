import styled from "styled-components";

export const Container = styled.button`
	display: flex;
	align-items: center;

	color: #e53e3e;
	font-size: 26px;

	display: flex;
	align-items: center;
	justify-content: center;

	gap: 10px;
`;

export const Title = styled.div``;

export const Icon = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	margin-left: 20px;

	background-color: rgba(0, 0, 0, 0.3);

	filter: brightness(1.6);

	padding: 10px;
	border-radius: 50px;

	@media (max-width: 500px) {
		display: none;
	}
`;
