import { createContext, useState } from "react";

type EnvironmentProviderType = {
	children: React.ReactNode;
};
type EnvironmentContextType = {
	Environment: string;
	setEnvironment: React.Dispatch<React.SetStateAction<string>>;
};

export const EnvironmentContext = createContext<EnvironmentContextType>({
	Environment: "",
	setEnvironment: () => {},
});

export const EnvironmentProvider = ({ children }: EnvironmentProviderType) => {
	const [Environment, setEnvironment] = useState("");
	console.log("Environment",Environment)
	return (
		<EnvironmentContext.Provider value={{ Environment, setEnvironment }}>
			{children}
		</EnvironmentContext.Provider>
	);
};
