function Navbar () {
    return (
        <>
        <ul>
        <li><a class="active" href="#home">Home</a></li>
        <li><a href="#login">Login</a></li>
        <li><a href="#to-do">To-do-List</a></li>
        <li><a href="#API">Fetch API</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#about" className="position-absolute top-0 end-0">Toggle DarkMode/LighMode</a></li>
        </ul>
        </>
    )
}
export default Navbar
