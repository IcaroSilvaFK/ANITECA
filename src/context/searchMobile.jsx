import { createContext, useState, useContext } from "react";

const SearchMobileContext = createContext({});

export function SearchMobileContextProvider({ children }) {
	const [isOpenSearch, setIsOpenSearch] = useState(false);

	function handleOpenSearch() {
		setIsOpenSearch(true);
		console.log("s");
	}

	function handleCloseSearch(e) {
		setIsOpenSearch(false);
		console.log(e.stopPropagation);
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
