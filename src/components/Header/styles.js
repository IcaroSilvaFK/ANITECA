import styled from "styled-components";
import { CgSearch } from "react-icons/cg";

export const Container = styled.header`
	width: 100%;

	display: flex;
	align-items: center;
	justify-content: space-between;

	padding: 20px 80px;

	@media (max-width: 500px) {
		padding: 10px 5px 10px 10px;
	}
`;

export const Box = styled.div`
	display: flex;
	align-items: center;
	gap: 60px;

	@media (max-width: 500px) {
		display: none;
	}
`;

export const ContainerResponsive = styled.div`
	display: none;

	@media (max-width: 500px) {
		display: flex;
		align-items: center;
		gap: 20px;

		margin-right: 10px;
	}
`;

export const Search = styled(CgSearch)`
	font-size: 20px;
`;

export const ResponsiveLogo = styled.div``;
