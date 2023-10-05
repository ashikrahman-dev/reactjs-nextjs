import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
    return (
        <>
            <div className="dark:bg-black h-screen w-screen flex items-center justify-center flex-col gap-4">
                <h1 className="text-xl text-fuchsia-700 dark:text-white font-medium">
                    Vite + React
                </h1>
                <ThemeSwitcher />
            </div>
        </>
    );
}

export default App;
