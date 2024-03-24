import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { SiLeetcode } from 'react-icons/si';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import TextTransition, { presets } from 'react-text-transition';

export default function LandingPage() {
	const line1 = 'We seek to empower Rwanda\'s youth through tech, and tourism';
	const line2 = 'to alleviate poverty and drive economic growth, hence catalyzing transformative impact.';

	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const titles = ['Bonaparte A. Uteramahoro', 'Elsie L. Iradukunda', 'Ines B. Zaninka', 'Didier Nsengiyumva', 'Ketya E. Umwiza'];
	const [titleIndex, setTitleIndex] = useState(0);

	useEffect(() => {
		const interval = window.setInterval(() => {
			setTitleIndex((prev) => (prev + 1) % titles.length);
		}, 3000);
		return () => clearInterval(interval);
	}, [titles.length]);

	return (
		<div className="min-h-[100dvh] w-full md:flex md:items-center md:justify-center">
			<div className="px-10 pt-10 text-center">
				<h1 className="py-2 text-3xl font-medium text-cyan-700 dark:text-cyan-600 sm:text-4xl md:text-5xl">
					AIA
				</h1>

				{mounted ? (
					<TextTransition springConfig={presets.default} className="flex items-center justify-center">
						<p className="py-2 text-xl sm:text-2xl">{titles[titleIndex % titles.length]}</p>
					</TextTransition>
				) : (
					<p className="py-2 text-xl sm:text-2xl">{titles[titleIndex % titles.length]}</p>
				)}

				{mounted ? (
					<motion.h3
						initial="hidden"
						animate="visible"
						variants={{
							hidden: { opacity: 1 },
							visible: {
								opacity: 1,
								transition: {
									staggerChildren: 0.02,
								},
							},
						}}
						className="py-5 text-base leading-8 text-gray-600 dark:text-gray-400 md:text-lg"
					>
						{line1.split('').map((char, index) => {
							return (
								<motion.span
									key={char + '-' + index}
									variants={{
										hidden: { opacity: 0, y: 50 },
										visible: {
											opacity: 1,
											y: 0,
										},
									}}
								>
									{char}
								</motion.span>
							);
						})}

						<br />

						{line2.split('').map((char, index) => {
							return (
								<motion.span
									key={char + '-' + index}
									variants={{
										hidden: { opacity: 0, y: 50 },
										visible: {
											opacity: 1,
											y: 0,
										},
									}}
								>
									{char}
								</motion.span>
							);
						})}
					</motion.h3>
				) : (
					<h3 className="py-5 text-base leading-8 text-gray-600 dark:text-gray-400 md:text-lg">
						{' '}
						<br />{' '}
					</h3>
				)}
				<div className="flex justify-center gap-16 py-3 text-5xl text-gray-600">
					
					<a
						href="https://www.linkedin.com/in/didier-nsengiyumva/"
						target="_blank"
						rel="noreferrer"
						aria-label="LinkedIn"
						className="group hover:cursor-pointer hover:text-cyan-800 dark:hover:text-cyan-500"
					>
						<AiFillLinkedin />
						<p className=" invisible  text-xs group-hover:visible">LinkedIn</p>
					</a>
					
				</div>
			</div>

			<div className="px-10 py-20 md:px-0">
				<video
					autoPlay
					loop
					muted
					className="w-100 mx-auto rounded-xl border-4 border-cyan-500"
					poster="https://res.cloudinary.com/dezvucnpl/image/upload/v1711296251/WhatsApp_Image_2024-03-20_at_11.24.31_nsqhsn.jpg"
				>
					<source src="https://res.cloudinary.com/dezvucnpl/video/upload/v1711295301/497b7658-b709-4378-b4a6-761f026f7ecc_pprqsj.mp4" type="video/mp4" />
				</video>
			</div>
		</div>
	);
}
