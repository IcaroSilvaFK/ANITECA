import { createContext, useState, useContext } from "react";

const SearchMobileContext = createContext({});

export function SearchMobileContextProvider({ children }) {
	const [isOpenSearch, setIsOpenSearch] = useState(false);

	function handleOpenSearch() {
		setIsOpenSearch(true);
	}

	function handleCloseSearch(e) {
		setIsOpenSearch(false);
	}

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
