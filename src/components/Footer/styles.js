import styled from "styled-components";

export const Container = styled.footer`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 10px;
	font-size: 14px;

	background-color: var(--red600);

	width: 100%;

	margin-top: 24px;

	padding-top: 20px;
	span {
		font-size: 12px;
	}

	@media (max-width: 500px) {
		text-align: center;

		strong {
			font-size: 18px;
		}
	}
`;
