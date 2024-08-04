import { motion } from "framer-motion";

import feature5 from "../assets/images/template/feature5.jpg";
import feature6 from "../assets/images/template/feature6.jpg";
import hands from "../assets/images/stock/hands.webp";
import stars from "../assets/images/stargazers/graph.png";
import { GithubIcon } from "../assets/icons/GithubIcon";

export const Features2 = () => (
	<section className="w-full bg-bgDark2 mt-12 sm:mt-24 mb-12 lg:my-20 lg:mb-24 pt-4 relative">
		<div className="absolute -top-16" id="community" />
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5, delay: 0.2 }}
		>
			<div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
				<div className="w-11/12 sm:w-3/4 mx-auto lg:w-1/2 flex-wrap lg:-mx-4 sm:pr-8 justify-center order-last lg:order-first hidden sm:flex">
					<div className="mb-8 lg:mb-0 w-full px-2 lg:pl-16 flex flex-col justify-center md:pl-8">
						<div className="mb-4 py-3 md:pl-3 md:pr-20 lg:pr-12 rounded">
							<div className="rounded-xl main-border-gray">
								<h4 className="text-center text-secondaryText font-bold text-lg py-4">
									Our stargazers
								</h4>
								{/* <img src="https://api.star-history.com/svg?repos=webx-net/webx&type=Date"
									alt="Star history"
									className="rounded-xl invert hue-rotate-180 contrast-[73%] saturate-150" /> */}
								{/* <img src="https://starchart.cc/webx-net/webx.svg?variant=adaptive"
									alt="Star history"
									className="rounded-xl pb-14 px-4" /> */}
								<img src={stars.src}
									alt="Star history"
									className="rounded-xl pl-4" />
							</div>
						</div>
					</div>
				</div>

				<div className="w-full lg:w-1/2 mb-12 lg:mb-0 xl:pl-8">
					<div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
						<span className="block-subtitle">
							Join the Movement
						</span>
						<h2 className="mt-6 mb-8 text-4xl lg:text-5xl block-big-title">
							Awesome <span className="rainbow-text-gradient font-extrabold">Open-Source</span> Community
						</h2>
						<p className="mb-6 text-secondaryText leading-loose">
							Developers from all over the world contribute to our open-source
							projects. Join the Web X community on GitHub and help us build the future of
							technology.
						</p>
						<a href="https://github.com/webx-net/webx" target="_blank" className="contained-button w-72 sm:w-56 h-12 mb-6">
							<span className="w-6 h-6 mr-3 fill-white">
								<GithubIcon />
							</span>
							Join us on GitHub
						</a>
					</div>
				</div>
			</div>
		</motion.div>
	</section>
);
