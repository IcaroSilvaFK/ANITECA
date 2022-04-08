import { createContext, useState, useContext, useEffect } from "react";

const SearchMobileContext = createContext({});

export function SearchMobileContextProvider({ children }) {
	const [isOpenSearch, setIsOpenSearch] = useState(false);

	function handleOpenSearch() {
		setIsOpenSearch((prev) => !prev);
	}

	function handleCloseSearch() {
		setIsOpenSearch((prev) => !prev);
	}

	useEffect(() => {
		window.addEventListener("keydown", (e) => {
			if (e.key === "Escape") setIsOpenSearch(false);
		});
	}, []);

	return (
		<SearchMobileContext.Provider
			value={{ isOpenSearch, handleOpenSearch, handleCloseSearch }}
		>
			{children}
		</SearchMobileContext.Provider>
	);
}

export function useSearchMenu() {
	const data = useContext(SearchMobileContext);

	return data;
}
