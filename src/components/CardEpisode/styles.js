import styled from "styled-components";

export const Container = styled.li`
	position: relative;
	width: 250px;

	border-radius: 10px;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	align-items: center;

	gap: 30px;

	padding: 10px;
`;

export const Number = styled.span`
	position: absolute;
	top: -10px;
	right: -10px;
	background-color: #e53e3e;
	border-radius: 50%;
	width: 30px;
	height: 30px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: bold;
	font-size: 18px;
`;

export const Button = styled.button`
	display: flex;
	align-items: center;
`;

export const Box = styled.div``;
