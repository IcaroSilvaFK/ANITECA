import styled from "styled-components";

export const Container = styled.div`
	background-image: ${(props) =>
		props.imageBackground ? 'url("' + props.imageBackground + '")' : ""};

	background-size: cover;
	background-position: top;

	min-width: 250px;
	height: 350px;

	border-radius: 7px;

	display: flex;
	align-items: flex-start;
`;

export const Box = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;

	padding: 8px 4px 0 4px;

	backdrop-filter: blur(10px);
	strong {
		max-width: 180px;
		height: 30px;
		overflow: hidden;
	}
`;
