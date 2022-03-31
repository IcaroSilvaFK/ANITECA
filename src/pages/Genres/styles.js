import styled from "styled-components";

export const Title = styled.div`
	padding: 20px 20px;
	width: 75%;
	border-bottom: 1px solid #c53030;
	margin: auto;

	h1 {
		display: flex;
		align-items: center;
		gap: 10px;
		font-family: var(--fontMont);
	}
`;

export const Box = styled.ul`
	padding: 25px;

	display: flex;
	justify-content: center;
	flex-wrap: wrap;

	gap: 18px;
`;

export const Card = styled.li`
	width: 250px;
	height: 150px;
	background-color: rgba(0, 0, 0, 0.3);
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: var(--fontMont);
	cursor: pointer;

	transition: all linear 0.2s;

	&:hover {
		transform: scale(1.1) rotate3d(1, 0, 1, 5deg);
		background-color: #c53030;
		font-size: 18px;
	}
`;
