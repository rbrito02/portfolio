const About = () => {
	return (
		<section
			id="about"
			className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
		>
			<div className="text-lg font-titleFont tracking-wide text-textLight">
				About Me
			</div>
			<div className="flex">
				<div className="text-base md:max-w-[650px] text-textDark font-medium">
					I'm a front-end developer with 2+ years of experience in React. I have
					strong foundations in front-end & UI/UX and am skilled in creating
					user-friendly and responsive web applications using React and its
					ecosystem.
				</div>

				<div className="text-lg font-titleFont tracking-wide text-textLight">
					Experience
				</div>
			</div>
		</section>
	);
};

export default About;
