import styled from "styled-components";

export const Container = styled.div`
	background-image: ${(props) =>
		props.imageBackground ? props.imageBackground : ""};

	background-size: cover;
	background-position: center;
`;

export const Box = styled.div``;
