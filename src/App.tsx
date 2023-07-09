import { Provider } from "react-redux";
import { Toaster } from "./components/ui/Toaster";
import MainLayout from "./layouts/MainLayout";
import store from "./redux/store";

function App() {
	return (
		<Provider store={store}>
			<Toaster />
			<MainLayout />
		</Provider>
	);
}

export default App;
