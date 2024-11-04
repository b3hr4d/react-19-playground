import { Link, useNavigate, useLocation } from "react-router-dom";

const Header = () => {
	const navigate = useNavigate();
	const { pathname } = useLocation();

	return (
		<header className="relative bg-blue-700 text-white p-3 mb-5">
			{pathname !== "/" && (
				<button
					onClick={() => navigate(-1)}
					className="bg-white text-blue-700 px-3 py-1 rounded font-bold absolute top-3 left-3"
				>
					Back
				</button>
			)}
			<Link to="/">
				<h1 className="text-2xl text-center font-bold uppercase">
					React 19 Playground
				</h1>
			</Link>
		</header>
	);
};
export default Header;
