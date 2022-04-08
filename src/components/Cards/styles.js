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

	@media (max-width: 500px) {
		min-width: 150px;
		max-width: 150px;
		height: 200px;

		background-position: center;
	}
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

	@media (max-width: 500px) {
		text-align: center;

		svg {
			display: none;
		}
		strong {
			width: 100%;
		}
	}
`;
