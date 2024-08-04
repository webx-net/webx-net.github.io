import { motion } from "framer-motion";

import typescript from "../assets/images/langs/Typescript.svg";
import html from "../assets/images/langs/HTML5.svg";
import rust from "../assets/images/langs/Rust.svg";
import htmx from "../assets/images/langs/HTMX.svg";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const Features1 = () => {
	return (
		<section
			className="w-full bg-bgDark2 pt-24 -mt-8  mb-8 sm:-mt-8 sm:mb-24 xl:-mt-8 2xl:mt-0    md:pt-[12vw] lg:pt-16"
			id="features"
		>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5, delay: 0.2 }}
			>
				<div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
					<div className="w-full lg:w-1/2 mb-12 lg:mb-0">
						<div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
							<span className="block-subtitle">Embrace Innovation</span>
							<h2 className="mt-6 mb-8 text-4xl lg:text-5xl block-big-title">
								Discover <span className="rainbow-text-gradient font-extrabold">Web X</span>
							</h2>
							<p className="mb-10 text-secondaryText leading-loose">
								Web X is a minimal and powerful framework designed for developers who need high-performance and scalable web backends, REST APIs, and hypermedia systems.
							</p>
							<ul className="mb-6 text-primaryText">
								<li className="mb-4 flex">
									<CheckArrowIcon />
									<span>Seamless TSX/JSX support</span>
								</li>
								<li className="mb-4 flex">
									<CheckArrowIcon />
									<span>Built-in <a href="https://htmx.org/" target="_blank" className="underline">HTMX</a> linting</span>
								</li>
								<li className="mb-4 flex">
									<CheckArrowIcon />
									<span>Minimal and intuitive syntax</span>
								</li>
								<li className="mb-4 flex">
									<CheckArrowIcon />
									<span>Blazing fast performance with Rust</span>
								</li>
							</ul>
						</div>
					</div>
					<div className="w-3/4 mx-auto lg:w-1/2 flex-wrap lg:-mx-4 sm:pr-8 lg:pt-10 justify-center lg:pl-4 xl:px-8 relative  hidden sm:flex">
						<div className="mb-8 lg:mb-0 w-full sm:w-1/2 px-2 lg:px-0">
							<div className="mb-4 py-3 pl-3 pr-2 rounded">
								<img
									src={typescript.src}
									alt="Feature image 1"
									className="rounded-xl mx-auto sm:mx-unset p-12"
									aria-label="Feature image 1"
								/>
							</div>
							<div className="py-3 pl-3 pr-2 rounded ">
								<img
									src={rust.src}
									alt="Feature image 3"
									className="rounded-xl mx-auto sm:mx-unset invert w-full"
									aria-label="Feature image 3"
								/>
							</div>
						</div>
						<div className="w-1/2 lg:mt-20  pt-12 lg:pt-0 px-2">
							<div className="mb-4 py-3 pl-3 pr-2 rounded-lg ">
								<img
									src={html.src}
									alt="Feature image 2"
									className="rounded-xl mx-auto sm:mx-unset p-11"
									aria-label="Feature image 2"
								/>
							</div>
							<div className="py-3 pl-3 pr-2 rounded-lg ">
								<img
									src={htmx.src}
									alt="Feature image 4"
									className="rounded-xl mx-auto sm:mx-unset"
									aria-label="Feature image 4"
								/>
							</div>
						</div>
						<span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pt-4 text-secondaryText text-6xl">
							+
						</span>
					</div>
				</div>
			</motion.div>
		</section>
	);
};
