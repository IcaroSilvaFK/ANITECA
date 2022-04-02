import styled from "styled-components";

export const Form = styled.form`
	background-color: #4a5568;
	padding: 8px;

	border-radius: 10px;
	input {
		background-color: transparent;
		width: 280px;
		font-size: 16px;
		padding: 5px 0;
		color: #fff;

		&::placeholder {
			color: #fff;
		}
	}
`;

export const Row = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
`;
