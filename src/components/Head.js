import React from "react";
import { Helmet } from "react-helmet";

export default function Head({
	title = "Car Chilli | Online Car Sharing Made Easy",
	keywords,
	description,
}) {
	return (
		<Helmet>
			<title>{title}</title>
			<meta name={"Description"} content={description} />
			<meta name={"keywords"} content={keywords} />
		</Helmet>
	);
}
