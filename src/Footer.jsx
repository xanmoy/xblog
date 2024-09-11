import { useDarkMode } from './context/DarkModeContext';

function Footer() {
    const { darkMode, toggleDarkMode } = useDarkMode();

    return (
        <footer className='flex justify-center items-center'>
            <button
                onClick={toggleDarkMode}
                className="p-2 text-white rounded"
            >
                Toggle Dark Mode
            </button>
        </footer>
    );
}

export default Footer;
