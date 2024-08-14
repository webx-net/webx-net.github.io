import { motion } from "framer-motion";
import { useState } from "react";

import { InvitationModal } from "./InvitationModal";
import featuresdiagonal from "../assets/images/template/featuresdiagonal.jpg";
import { RightArrowIcon } from "../assets/icons/RightArrowIcon";
import webx_stripe from "../assets/images/webx_stripe.svg";

export const FeaturesDiagonal = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<section className="lg:mb-16 w-full flex flex-col justify-center items-center bg-bgDark1 overflow-hidden">
			<div className="shape-divider-bottom-1665696614">
				<svg
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
					className="bg-bgDark2  fill-bgDark2"
				>
					<path
						d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
						className="bg-bgDark1  fill-bgDark1"
					></path>
				</svg>
			</div>
			<motion.div
				initial={{ opacity: 0, x: 400 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 2, delay: 0.75 }}
				className="w-full h-[12vw] min-h-12 relative -mt-[2vw]"
			>
				<img src={webx_stripe.src} alt="Web X stripe" className="absolute top-0 right-0 w-1/2 min-w-64 h-full" />
				{/* <img src={webx_stripe.src} alt="Web X stripe" className="w-1/2 h-full ml-auto" /> */}
			</motion.div>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5, delay: 0.2 }}
			>
				<div className=" 2xl:w-[1150px] xl:w-[1050px]  md:w-4/5 flex justify-center bg-bgDark1 pt-12 lg:pt-24 pb-8 lg:pb-20 mx-auto lg:flex-row flex-col">
					<div className="w-3/4 lg:w-1/2 flex flex-col lg:mx-unset mx-auto">
						<span className="block-subtitle">Accelerate Your Development</span>
						<h2 className="mt-10 mb-8 text-4xl lg:text-5xl block-big-title">
							Scale with <span className="rainbow-text-gradient font-extrabold">Confidence</span>
						</h2>
						<p className="mb-4 text-secondaryText leading-loose">
							Web X allow you applications to scale seamlessly as demand increase.
							Focus on business logic writing clean and maintainable code while Web X handles the heavy lifting.
							We built Web X for your success.
						</p>
						<p className="mb-8 font-Bungee font-bold text-secondaryColor">Embrace the future &nbsp; &mdash; &nbsp; start building today</p>
						<a
							href="https://docs.webx.sh/"
							target="_blank"
							className="w-[210px] h-12 contained-button mr-10 "
							aria-label="Get started"
						>
							<span className="w-6 h-6 mr-3 fill-white">
								<RightArrowIcon />
							</span>
							Get Started
						</a>
					</div>
					<div className="w-4/5 lg:w-1/2 lg:pl-16 flex justify-center mx-auto pt-16 lg:pt-0">
						<img
							src={featuresdiagonal.src}
							alt="Feature image"
							className="rounded-xl  main-border-gray"
						/>
					</div>
				</div>
			</motion.div>
			<div className="shape-divider-top-1665696661 w-full">
				<svg
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
					className="bg-bgDark2 fill-bgDark2"
				>
					<path
						d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
						className="bg-bgDark1 fill-bgDark1"
					></path>
				</svg>
			</div>
			{isModalOpen && (
				<InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
			)}
		</section>
	);
};
