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
`;

export const NavigationContainer = styled.nav`
	position: absolute;

	top: 0;
	bottom: 0;
	right: 0;

	width: 200px;

	background-color: var(--red600);

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;

	font-size: 18px;
`;

export const Close = styled.button`
	height: 40px;

	background-color: var(--red600);

	display: flex;
	align-items: center;
	justify-content: right;

	padding: 10px;

	align-self: flex-end;
`;
