import { createContext, useContext, useState, useEffect } from "react";

const MenuMobileContext = createContext({});

export function MenuMobileContextProvider({ children }) {
	const [isOpenModal, setIsOpenModal] = useState(false);

	function handleOpenModal() {
		setIsOpenModal(true);
	}

	function handleCloseModal() {
		setIsOpenModal(false);
	}

	return (
		<MenuMobileContext.Provider
			value={{ handleOpenModal, handleCloseModal, isOpenModal }}
		>
			{children}
		</MenuMobileContext.Provider>
	);
}

export function useModalMobile() {
	const data = useContext(MenuMobileContext);

	return data;
}
