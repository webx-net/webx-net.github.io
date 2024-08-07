import { useState } from "react";
import { motion } from "framer-motion";

import { RightArrowIcon } from "../assets/icons/RightArrowIcon";
import { InvitationModal } from "./InvitationModal";
import { CodeBox } from "./CodeBox";
import darkFlowing from "../assets/images/backgrounds/flowing_dark.png";
import { PlayIcon } from "../assets/icons/PlayIcon";

export const Hero = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<section
			className="w-screen flex justify-center items-center bg-bgDark1 mb-[32vw] sm:mb-[22vw] md:mb-[18vw] lg:mb-[10vw] xl:mb-[13vw] 2xl:mb-60 pb-12 sm:pb-32 md:pb-44 lg:pb-0"
			id="home"
			style={{
				backgroundImage: `url(${darkFlowing.src})`,
				backgroundPosition: "center",
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
			}}
		>
			<div className="w-full md:w-[800px] xl:w-[900px] flex flex-col justify-center items-center pt-16 md:pt-16 lg:pt-20 text-center">
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<h3 className="text-secondaryColor text-sm sm:text-base mb-4 sm:mb-6 mt-16 sm:mt-32 lg:mt-40 font-bold font-Bungee">
						{/* Discover new data flow */}
						Unleash the Power of Hypermedia
					</h3>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.05 }}
				>
					<div className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wide  text-primaryText  px-8 sm:px-8 md:px-20 lg:px-4">
						{/* <h1 className="inline md:hidden">Analytics</h1>
						<h1 className="hidden md:inline">Analytic tools suite</h1> */}
						<h1 className="inline md:hidden">
							A Framework <br />for <em>Speedy</em> Web
							<div className="md:mt-2">
								Applications
							</div>
						</h1>
						<h1 className="hidden md:inline">
							Backend Framework <br />for <em>High-Performance</em>
							<div className="md:mt-2">
								Web Applications
							</div>
						</h1>
					</div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.1 }}
				>
					<h2 className="text-secondaryText text-sm lg:text-base xl:text-lg sm:text-base mt-6 sm:mt-10 px-12 sm:px-48 ">
						{/* Experience seamless business integrations and powerful insights with
						our cutting-edge analytic tools. */}
						A superset of <em>TypeScript</em> running on the <em>V8</em> engine in a hyper-efficient <em>Rust</em> web server environment.
					</h2>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.15 }}
				>
					<div className="flex flex-col gap-2 sm:flex-row mt-6 sm:mt-14 mb-12 sm:mb-32 justify-center">
						<a
							href="https://docs.webx.sh/"
							target="_blank"
							className="contained-button w-64 sm:w-52 h-12 mr-0 sm:mr-4 lg:mr-6 mb-2 sm:mb-0"
							aria-label="Get started"
						>
							<span className="w-6 h-6 mr-3 fill-white">
								<RightArrowIcon />
							</span>
							Get Started
						</a>
						<button
							className="w-64 sm:w-52 h-12 rounded-xl font-bold text-primaryText border border-solid  flex justify-center items-center cursor-pointer bg-bgDark2 hover:bg-bgDark3 border-primaryColor transition"
							onClick={() => setIsModalOpen(true)}
							aria-label="Live demo"
						>
							<span className="w-3 h-3 mr-3 fill-white">
								<PlayIcon />
							</span>
							Live demo
						</button>
					</div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 10, zIndex: 20 }}
					animate={{ opacity: 1, y: 0, zIndex: 20 }}
					transition={{ duration: 0.5, delay: 0.15 }}
				>
					<div className="relative w-screen flex justify-center ">
						<div className="absolute z-10 w-4/5 2xl:w-[1200px] lg:top-6">
							<CodeBox />
						</div>
					</div>
				</motion.div>
				<div className="relative w-screen flex justify-center ">
					<div className="shape-divider-bottom-1665343298 mt-4 sm:mt-16 md:mt-28 hidden lg:block">
						<svg data-name="Layer 1"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 1200 120"
							preserveAspectRatio="none">
							<path d="M 1200.041 120.2 L 1200.37 -0.101 L 598.97 114.72 L 0.039 -0.155 L -0.254 119.945 L 1200.041 120.2 Z" className="shape-fill fill-bgDark2" />
						</svg>
					</div>
				</div>
			</div>
			{isModalOpen && (
				<InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
			)}
		</section>
	);
};
