import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import {Context} from "./context/index.js";
import UserStore from "./store/UserStore.js";
import DeviceStore from "./store/DeviceStore.js";
import TypeStore from './store/TypeStore'
import BrandStore from './store/BrandStore'
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";

function App() {
    return (
        <Context.Provider value={{
            user: new UserStore(),
            device: new DeviceStore(),
            type: new TypeStore(),
            brand: new BrandStore()
        }}>
            <BrowserRouter>
                <div className="flex flex-col justify-between">
                    <NavBar/>
                    <main className="container mx-auto mb-auto flex min-h-page mt-8">
                        <AppRouter/>
                    </main>
                    <Footer/>
                </div>
            </BrowserRouter>
        </Context.Provider>
    )
}

export default App
