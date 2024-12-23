/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{js,ts}', // Include all block source files
		'./**/*.php', // Include PHP files if Tailwind is used there
	],
	theme: {
		extend: {
			screens: {
        'xs': {'max': '767px'},  // Custom 'xs' breakpoint for screens smaller than 768px
      },
		},
	},
	plugins: [],
};
