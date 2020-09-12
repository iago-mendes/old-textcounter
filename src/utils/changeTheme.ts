export default function changeTheme(theme: string)
{
    if (theme === 'dark')
    {
        document.documentElement.style.setProperty('--primary', '#282a36')
        document.documentElement.style.setProperty('--secondary', '#44475a')
        document.documentElement.style.setProperty('--secondary-strong', '#6272a4')
        document.documentElement.style.setProperty('--text', '#f8f8f2')
        document.documentElement.style.setProperty('--textarea', '#bd93f9')
        document.documentElement.style.setProperty('--textarea-focus', '#ff79c6')
    }
    else if (theme === 'light')
    {
        document.documentElement.style.setProperty('--primary', '#f5f5f5')
        document.documentElement.style.setProperty('--secondary', '#ffe4ad')
        document.documentElement.style.setProperty('--secondary-strong', '#ffad05')
        document.documentElement.style.setProperty('--text', '#44475a')
        document.documentElement.style.setProperty('--textarea', '#bd93f9')
        document.documentElement.style.setProperty('--textarea-focus', '#ff79c6')
    }
}