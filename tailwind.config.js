/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	important: "#root",
	theme: {
		extend: {
			colors: {
				primary: "#BBFFDA",
				secondary: "#EAF6F0",
			},
			fontFamily: {
				'rubik': ["Rubik", "sans-serif"],
				'changa': ["Changa One", "serif"],
			},
		},
	},
	plugins: [],
};
