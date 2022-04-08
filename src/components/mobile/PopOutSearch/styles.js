import styled from "styled-components";

export const Container = styled.div`
	display: ${(props) => (props.isOpen ? "flex" : "none")};

	position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	justify-content: center;
	background-color: rgba(0, 0, 0, 0.2);
`;

export const Form = styled.form`
	margin-top: 60px; ;
`;

export const Box = styled.div`
	background-color: #fff;

	display: flex;
	justify-content: center;

	border-radius: 5px;

	padding: 8px 16px;

	input {
		background-color: transparent;
		width: 450px;
		height: 30px;
		padding: 0 16px;
		font-size: 16px;
	}
	@media (max-width: 500px) {
		input {
			width: 220px;
		}
	}
`;

export const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
`;
