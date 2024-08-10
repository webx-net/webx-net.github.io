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
							<a href="https://github.com/sponsors/webx-net" className="inline-flex relative text-sm font-light text-white bg-bgDark3 hover:bg-bgDark3Hover transition-colors border-white/10 border-[0.0625rem] rounded-md w-full h-10 shadow-lg select-none" aria-label="Sponsor @webx-net" target="_blank" data-view-component="true">
								<div class="absolute -top-px left-10 right-10 h-px bg-gradient-to-r from-primaryColor/0 via-secondaryColor/35 to-primaryColor/0"></div>
								<span className="items-center flex flex-auto place-content-center">
									<span className="flex mr-2">
										<svg className="fill-pink-400 inline-block align-text-bottom" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true">
											<path d="m8 14.25.345.666a.75.75 0 0 1-.69 0l-.008-.004-.018-.01a7.152 7.152 0 0 1-.31-.17 22.055 22.055 0 0 1-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.066 22.066 0 0 1-3.744 2.584l-.018.01-.006.003h-.002ZM4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.58 20.58 0 0 0 8 13.393a20.58 20.58 0 0 0 3.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.749.749 0 0 1-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5Z"></path>
										</svg>
									</span>
									<span>Sponsor</span>
								</span>
								<div class="absolute -bottom-px left-10 right-10 h-px bg-gradient-to-r from-primaryColor/0 via-secondaryColor/50 to-primaryColor/0"></div>
							</a>
						</div>
					</div>
					<div className="mx-auto lg:w-1/2 max-w-[500px] flex flex-wrap justify-center lg:-mx-4 sm:pr-8 lg:pl-4 xl:px-2">
						<div className="lg:mb-0 w-full px-2 lg:px-0">
							<img src={people.src} alt="Feature image 5" className="rounded-xl h-full w-full pl-5" />
						</div>
						<p className="mb-6 text-secondaryText leading-loose font-Bungee font-semibold text-center px-3">
							<b className="underline underline-offset-8">100%</b> of all funds go to maintainers and community initiatives.
						</p>
					</div>
				</div>
			</motion.div>
		</section>
	);
};
