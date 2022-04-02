import styled from "styled-components";

export const Container = styled.div`
	position: fixed;
	display: ${(props) => (props.isAcitive ? "block" : "none")};
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;

	background-color: rgba(0, 0, 0, 0.3);
`;

export const Box = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const NavigationContainer = styled.nav`
	position: relative;

	width: 80%;
	height: 60%;

	background-color: #212121;

	border-radius: 10px;

	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	gap: 20px;

	font-size: 18px;
`;

export const Close = styled.button`
	position: absolute;

	top: -10px;
	right: -10px;

	height: 40px;
	width: 40px;
	border-radius: 50%;
	background-color: var(--red600);

	display: flex;
	align-items: center;
	justify-content: center;
`;
