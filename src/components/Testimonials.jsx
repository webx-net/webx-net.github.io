import { motion } from "framer-motion";

import { QuoteIcon } from "../assets/icons/QuoteIcon";
import testimonial1 from "../assets/images/testimonial/person1.webp";
import testimonial2 from "../assets/images/testimonial/person2.jpg";
import testimonial3 from "../assets/images/testimonial/person3.png";

const testimonialsData = [
	{
		customerName: "Andrew Jones",
		customerTitle: "Senior Developer",
		content:
			// `The powerful analytic tools have helped us streamline our processes and make data-driven decisions that positively impact our efficiency.
			// Web X has been a game-changer for our business. The platform is easy to use, and the insights we've gained have driven significant improvements.`,
			`I was skeptical about switching frameworks, but Web X exceeded all my expectations.
It was incredibly easy to get started and integrate with our existing systems, and the performance boost was noticeable immediately.
Web X made development smoother and more enjoyable!`,
		image: testimonial1,
	},
	{
		customerName: "Mattias Larsson",
		customerTitle: "Tech Lead",
		content:
			`Web X has significantly sped up our development cycles.
			The simplified workflow and powerful features saved us countless hours.
			Thanks to the active community and comprehensive documentation onboarding was a breeze.
			It's a game-changer for backend development.`,
		image: testimonial2,
	},
	{
		customerName: "Marc Jacobs",
		customerTitle: "Technology Officer",
		content: `We faced constant frustrations with our previous backend system, and tried transition to Web X.
		The developer experience is fantastic with its intuitive syntax and carefully designed features.
		Our backend is now faster, more scalable, and a joy to work with thanks to Web X!`,
		image: testimonial3,
	},
];

export const Testimonials = () => (
	<section className="w-full flex justify-center pt-16 mb-16 lg:mb-32 bg-bgDark2 relative">
		<div className="absolute -top-16" id="feedback" />
		<div className="flex flex-col w-full lg:w-[1150px] justify-center">
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.4, delay: 0.3 }}
			>
				<div className="block-subtitle text-center mb-6">Testimonials</div>
				<div className="block-big-title text-center mb-20 px-8 sm:px-24 md:px-48">
					People have tried it
				</div>

				<div className="flex flex-col lg:flex-row gap-8 lg:gap-5 xl:gap-10 px-6 xl:px-0 items-center">
					{testimonialsData.map((testimonial, index) => (
						<div
							className="w-11/12 sm:w-4/5 md:w-[560px] lg:w-1/3 main-border-gray-darker rounded-xl bg-bgDark3 flex flex-col px-6 py-4"
							key={`${testimonial.customerName}-${index}`}
						>
							<div className="flex mb-2">
								<QuoteIcon />
							</div>
							<div className="content-text-white">"{testimonial.content}"</div>
							<div className="flex mt-4 mb-2 xl:mt-8 xl:mb-4">
								<div>
									<img
										src={testimonial.image.src}
										alt="Customer avatar"
										width="45px"
										height="5px"
										className="rounded-full border border-white/40"
										aria-label={testimonial.customerName}
									/>
								</div>
								<div className="flex flex-col ml-4">
									<div className="content-text-white font-medium">
										{testimonial.customerName}
									</div>
									<div className="content-text-gray">
										{testimonial.customerTitle}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</motion.div>
		</div>
	</section>
);
