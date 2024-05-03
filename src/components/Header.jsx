import logo from "../images/Netflix_Logo.jpeg";
const Header = () => {
	return (
		<header className="bg-gradient-to-b from-black">
			<img src={logo} alt="netflix logo" className="w-44 ml-40" />
		</header>
	);
};

export default Header;
