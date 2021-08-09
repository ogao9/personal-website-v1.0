import { useTheme } from 'next-themes'

export default function Logo() {
    const {theme} = useTheme();

    return theme === "dark" ? <img src='/OliverLogoDarkMode.svg' className="h-8"/> : <img src='/OliverLogo.svg' className="h-8"/>
}