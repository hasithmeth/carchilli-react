import { Link } from "react-router-dom";

const RouteLink = ({ to, children }) => {
	return (
		<Link to={ to }
		      style={ { textDecoration: "none", textDecorationColor: "none" } }>
			{ children }
		</Link>
	);
};

export default RouteLink;