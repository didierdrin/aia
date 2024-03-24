
/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        domains: ['res.cloudinary.com'],
    },
};

module.exports = nextConfig;

/*
landingpage
<a
						href="https://github.com/ChiragAgg5k"
						target="_blank"
						aria-label="Github"
						rel="noreferrer"
						className="group hover:cursor-pointer hover:text-black dark:hover:text-white"
					>
						<AiFillGithub />
						<p className="invisible text-xs group-hover:visible">Github</p>
					</a>

                    <a
						href="https://leetcode.com/ChiragAgg5k/"
						target="_blank"
						rel="noreferrer"
						aria-label="Leetcode"
						className="group hover:cursor-pointer hover:text-yellow-600"
					>
						<SiLeetcode />
						<p className="invisible text-xs group-hover:visible">Leetcode</p>
					</a>

                    <li className="scroll-link my-1 sm:my-0 sm:mr-4">
				<Link
					to="toolbox"
					smooth={true}
					offset={-200}
					duration={500}
					onClick={() => {
						const navbar = document.querySelector('#toggle-navbar');
						if (navbar) {
							navbar.classList.add('hidden');
						}
					}}
					className="group transition duration-300 hover:cursor-pointer"
				>
					Stakeholders
					<span className="block h-[1px] max-w-0 bg-gray-700 transition-all duration-500 group-hover:max-w-full dark:bg-white"></span>
				</Link>
			</li>
                    -------------------
@type {import('next').NextConfig} 
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
};

module.exports = nextConfig;

module.exports = {
    images: {
        domains: ['res.cloudinary.com',],
    },
}; */
