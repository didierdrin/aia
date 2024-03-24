import Image from 'next/image';
import Fade from 'react-reveal/Fade';
import { Element } from 'react-scroll';

export default function Education() {
	return (
		<>
			<Element name="education" className="relative" />
			<div className="mb-48 mt-20 sm:mt-0">
				<h3 className="mb-16 text-center text-4xl font-medium text-gray-800 transition duration-300 dark:text-white lg:mb-20 xl:mb-24">
					Roadmap
				</h3>
				<div className="mx-0 grid grid-cols-1 sm:grid-cols-2 md:mx-5 lg:grid-cols-4">
					<div className="group m-4 flex justify-between rounded-xl border-2 border-cyan-200 p-5 text-gray-700 hover:border-cyan-500  dark:border-gray-800 dark:text-white dark:hover:border-cyan-700">
						<Fade left cascade>
							<div>
								<p className="mb-2 text-base text-cyan-600 dark:text-cyan-500">August, 2027</p>
								<p className="my-1 text-xl font-medium">Client Registration</p>
								<p className="my-1 text-sm font-medium">RW</p>
								<p className="text-sm">Progress: 0.5% </p>
							</div>
							<div className="block">
								<Image
									src="https://res.cloudinary.com/dezvucnpl/image/upload/v1711301967/one_wbct4a.png"
									alt="BPS Logo"
									width={100}
									title="BPS Mayur Vihar Phase III"
									height={100}
									onClick={() => {
										window.open('https://www.bpsmv.edu.in/', '_blank');
									}}
									className="hover:cursor-pointer"
								/>
							</div>
						</Fade>
					</div>
					<div className="group m-4 flex justify-between rounded-xl border-2 border-cyan-200 p-5 text-gray-700 hover:border-cyan-500  dark:border-gray-800 dark:text-white dark:hover:border-cyan-700">
						<Fade left>
							<div>
								<p className="mb-2 text-base text-cyan-600 dark:text-cyan-500">September, 2027</p>
								<p className="my-1 text-xl font-medium">Assess Client Classification</p>
								<p className="my-1 text-sm font-medium">RW</p>
								<p className="text-sm">Progress: 3%</p>
							</div>
							<div className="block">
								<Image
									src="https://res.cloudinary.com/dezvucnpl/image/upload/v1711303384/two-removebg-preview_ttc7ev.png"
									alt="BPS Logo"
									width={100}
									height={100}
									title="BPS Mayur Vihar Phase III"
									onClick={() => {
										window.open('https://www.bpsmv.edu.in/', '_blank');
									}}
									className="hover:cursor-pointer"
								/>
							</div>
						</Fade>
					</div>
					<div className="group m-4 flex justify-between rounded-xl border-2 border-cyan-200 p-5 text-gray-700 hover:border-cyan-500 dark:border-gray-800  dark:text-white dark:hover:border-cyan-700 sm:col-span-2">
						<Fade left>
							<div>
								<p className="mb-2 text-base text-cyan-600 dark:text-cyan-500">2027-2028</p>
								<p className="my-1 font-medium sm:text-xl">Intensive in-person, & online trainings</p>
								<p className="my-1 text-sm font-medium">Remote</p>
								<p className="text-sm">Progress: 0.1%</p>
							</div>
							<Image
								src="https://res.cloudinary.com/dezvucnpl/image/upload/v1711301918/three_rok2tg.png"
								alt="Bennett Logo"
								width={100}
								height={100}
								title="Bennett University"
								onClick={() => {
									window.open('https://www.bennett.edu.in/', '_blank');
								}}
								className="object-contain hover:cursor-pointer"
							/>
						</Fade>
					</div>
					{/* </Slide> */}
				</div>
			</div>
		</>
	);
}
