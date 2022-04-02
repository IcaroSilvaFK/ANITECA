import styled from "styled-components";

export const Container = styled.nav`
	ul {
		display: flex;
		align-items: center;

		gap: 30px;

		font-size: 18px;

		li {
			a {
				transition: color 0.3s;

				&:hover {
					color: var(--gray400);
				}
			}
		}
	}
`;
