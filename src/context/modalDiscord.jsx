import { createContext, useContext, useState, useEffect } from "react";

const ModalDiscordContext = createContext({});

export function ModalContextProvider({ children }) {
	const [openModal, setOpenModal] = useState(false);

	function toggleModal() {
		setOpenModal(!openModal);
	}

	useEffect(() => {
		window.addEventListener("keydown", (e) => {
			if (e.key === "Escape") {
				setOpenModal(false);
			}
		});
	}, []);

	return (
		<ModalDiscordContext.Provider value={{ toggleModal, openModal }}>
			{children}
		</ModalDiscordContext.Provider>
	);
}

export function useModal() {
	const data = useContext(ModalDiscordContext);

	return data;
}
