import { createContext, useState, useEffect, useContext } from "react";

export const DiscorModalContext = createContext({});

export function DiscordModalContextProvider({ children }) {
	const [modalIsOpen, setModalIsOpen] = useState(false);

	useEffect(() => {
		window.addEventListener("keydown", handleCloseModal);
	}, []);

	function handleOpenModal() {
		setModalIsOpen(true);
	}
	function handleCloseModal(e) {
		switch (e.key) {
			case "Escape":
				setModalIsOpen(false);
		}
		setModalIsOpen(false);
	}

	return (
		<DiscorModalContext.Provider
			value={{ modalIsOpen, handleOpenModal, handleCloseModal }}
		>
			{children}
		</DiscorModalContext.Provider>
	);
}

export function useModalDiscord() {
	const data = useContext(DiscorModalContext);

	return data;
}
