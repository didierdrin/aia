import Image from 'next/image';
import Fade from 'react-reveal/Fade';
import { Element } from 'react-scroll';

export default function AboutMe() {
	return (
		<Fade>
			<Element name="about-me" className="relative z-10" />
			<div className="mb-48">
				<h3 className="mb-16 text-center text-4xl font-medium text-gray-800 transition duration-300 dark:text-white lg:mb-20 xl:mb-24">
					Global Challenge
				</h3>
				<div className="mx-4 flex flex-col items-center justify-around rounded-xl border-2 border-cyan-400 bg-cyan-100 p-8 dark:border-0 dark:bg-gray-800 sm:mx-10 md:flex-row">
					<Image
						src="https://res.cloudinary.com/dezvucnpl/image/upload/v1711036109/about_qk6cnf.png"
						alt="Profile Picture"
						width={480}
						height={480}
						className="mb-10 w-full max-w-[500px] rounded-xl border-4 border-cyan-500 grayscale filter transition duration-300 hover:filter-none dark:border-cyan-700 md:mb-0"
					/>
					<p className="flex w-full max-w-2xl items-center text-center text-base md:mb-0 md:ml-10 md:text-lg">
						{`In Rwanda, 21.3% of young people between the ages of 16 and 30 are unemployed as a result of insufficient work opportunities(NISR, 2023). How could Rwanda's economic growth be aided by technology and tourism to reduce the country's youth unemployment rate.`}
					</p>
				</div>
			</div>
		</Fade>
	);
}
