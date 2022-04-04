import styled from "styled-components";

export const Container = styled.div`
	flex-shrink: 1;

	background-image: ${(props) =>
		props.imageBackground ? "url('" + props.imageBackground + "')" : ""};

	background-size: cover;
	background-position: top center;

	min-width: 220px;
	height: 300px;

	border-radius: 5px;

	display: flex;
	align-items: flex-start;
`;

export const Box = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;

	background-color: rgba(0, 0, 0, 0.3);
	backdrop-filter: blur(10px);

	padding: 4px 6px;

	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
`;
