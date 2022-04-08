import styled from "styled-components";

export const Container = styled.div``;

export const Box = styled.div`
	margin-top: 30px;

	display: flex;

	img {
		border-radius: 10px;
	}

	h2 {
		margin-left: 30px;
		margin-bottom: 20px;
	}

	@media (max-width: 500px) {
		flex-direction: column;

		img {
			width: 250px;
			margin: auto;
			margin-top: 10px;
		}
	}
`;

export const Title = styled.h1`
	@media (max-width: 500px) {
		font-size: 22px;
		text-align: center;
		line-height: 150%;
	}
`;

export const Image = styled.image``;

//supernatural

export const BoxEpisode = styled.div`
	padding: 10px;
	border-radius: 10px;
`;

export const EpisodeContainer = styled.div`
	width: 100%;

	display: flex;
	align-items: center;
	justify-content: space-between;

	background: rgba(0, 0, 0, 0.2);

	margin-top: 10px;

	padding: 10px;
	strong {
		max-width: 70%;
		height: 45px;
		overflow: hidden;
		display: flex;
		align-items: flex-start;
		gap: 30px;

		line-height: 150%;

		text-overflow: ellipsis;
		span {
			display: flex;
			align-items: center;
			justify-content: center;
			height: 100%;
		}
	}
	svg {
		flex-shrink: 1;
	}
`;
