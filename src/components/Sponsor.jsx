import { motion } from "framer-motion";

import people from "../assets/images/stargazers/metrics.plugin.people.repository.svg";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const Sponsor = () => {
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
							<span className="block-subtitle">Support the Project</span>
							<h2 className="mt-6 mb-8 text-4xl lg:text-5xl block-big-title">
								<span className="rainbow-text-gradient font-extrabold">Sponsor</span> Web X
							</h2>
							<p className="mb-10 text-secondaryText leading-loose">
								The Web X project is maintained by a team of hard-working dedicated developers.
								Your sponsorship and donations helps us keep the project alive and ensures continued delivery of high-quality software to our users.
							</p>
							<iframe src="https://github.com/sponsors/webx-net/card" title="Sponsor webx-net" className="w-full h-60 xs:h-36 lg:h-52 xl:h-fit" style={{ border: 0, borderRadius: '8px' }}></iframe>
						</div>
					</div>
					<div className="mx-auto lg:w-1/2 max-w-[500px] flex flex-wrap lg:-mx-4 sm:pr-8 justify-center lg:pl-4 xl:px-8">
						<div className="mb-8 lg:mb-0 w-full px-2 lg:px-0">
							<img src={people.src} alt="Feature image 5" className="rounded-xl h-full w-full" />
						</div>
					</div>
				</div>
			</motion.div>
		</section>
	);
};
