import styled from "styled-components";

export const Container = styled.div`
	background-image: url(${(props) => props.imageBackground});
	background-position: center;
	background-size: cover;
	width: 250px;
	height: 350px;
	position: relative;
	border-radius: 5px;

	&:hover {
		transform: scale(1.1);
		cursor: pointer;
	}
`;

export const ContainerAbsolute = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	background: linear-gradient(
		to top,
		rgba(0, 0, 0, 0.4),
		rgba(0, 0, 0, 0.3),
		rgba(0, 0, 0, 0.2),
		rgba(0, 0, 0, 0.1),
		rgba(0, 0, 0, 0)
	);
	backdrop-filter: blur(5px);

	display: flex;
	align-items: center;

	padding: 0 10px;

	height: 50px;
`;

export const ContainerPalyer = styled.div`
	flex-shrink: 1;
	width: 40px;
	height: 40px;
	background-color: rgba(0, 0, 0, 0.5);
	border-radius: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
`;

export const Box = styled.div`
	flex-grow: 1;
	padding-left: 5px;
	display: flex;
	justify-content: space-between;
	div {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 2px;
		strong {
			overflow: hidden;
			font-size: 14px;
			height: 20px;
			width: 80px;
		}
	}
`;

export const Separator = styled.div`
	height: 30px;
	width: 3px;
	background-color: #fff;
	border-radius: 10px;
	margin-right: 10px;
`;
