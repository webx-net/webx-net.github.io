import { FacebookIcon } from "../assets/icons/FacebookIcon";
import { InstagramIcon } from "../assets/icons/InstagramIcon";
import { TwitterIcon } from "../assets/icons/TwitterIcon";

import X from "../assets/logos/X.png";

const footerData = [
	{
		title: "Products",
		items: ["Services", "About Us", "News and Stories", "Roadmap"],
	},
	{
		title: "Important Links",
		items: [
			"Organization Team",
			"Our Journeys",
			"Pricing Plans",
			"Roadmap",
			"Terms & Conditions",
			"Privacy Policy",
		],
	},
	{
		title: "Company",
		items: ["About Us", "Jobs", "Press", "Contact Us"],
	},
];

export const Footer = () => {
	return (
		<footer aria-label="Site footer">
			<div className="pt-10  lg:pt-20 lg:pb-16 bg-bgDark1 radius-for-skewed ">
				<div className="container mx-auto px-4 w-4/5 md:w-11/12 lg:w-10/12 xl:w-4/5 2xl:w-2/3">
					<div className="flex flex-wrap">
						<div className="w-full lg:w-1/3 mb-16 lg:mb-0">
							<div className="flex justify-center lg:justify-start items-center grow basis-0">
								<div className="text-white font-['Inter'] font-bold text-xl mr-1">
									Web
								</div>
								<img src={X.src} alt="X" className="w-6 h-6" />
							</div>
							<p className="mb-10 mt-4 sm:w-[22rem] lg:w-[20rem] xl:w-[24rem] text-gray-400 leading-loose text-center lg:text-left mx-auto lg:mx-0">
								Dashboard images were made using free Dark Admin dashboard that
								you can find
								<a
									className="inline-block w-10  h-10 mr-2 p-2 pt-[0.55rem] pl-[0.55rem] outlined-button fill-white "
									href="https://github.com/webx-net/webx"
									target="_blank"
									aria-label="source code"
								>
									<span
										className="h-5 w-5">
										<GithubIcon />
									</span>
								</a>
							</p>
							<div className="w-36 mx-auto lg:mx-0">
								<a
									className="inline-block w-10  h-10 mr-2 p-2 pt-[0.55rem] outlined-button"
									href="#"
									aria-label="Facebook"
								>
									<FacebookIcon />
								</a>
								<a
									className="inline-block w-10  h-10 mr-2 p-2 pt-[0.55rem] pl-[0.55rem] outlined-button"
									href="#"
									aria-label="Twitter"
								>
									<TwitterIcon />
								</a>
								<a
									className="inline-block w-10  h-10 mr-2 p-2 pt-[0.55rem] pl-[0.55rem] outlined-button"
									href="#"
									aria-label="Instagram"
								>
									<InstagramIcon />
								</a>
							</div>
						</div>
						<div className="w-full lg:w-2/3  lg:pl-16 hidden lg:flex flex-wrap justify-between">
							<div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
								<h3 className="mb-6 text-2xl font-bold text-primaryText">Products</h3>
								<ul>
									{footerData[0].items.map((item, index) => (
										<li key={`${item}-${index}`} className="mb-4">
											<a
												className="text-gray-400 hover:text-gray-300"
												href="#"
												aria-label={item}
											>
												{item}
											</a>
										</li>
									))}
								</ul>
							</div>
							<div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
								<h3 className="mb-6 text-2xl font-bold text-primaryText">
									Important Links
								</h3>
								<ul>
									{footerData[1].items.map((item, index) => (
										<li key={`${item}-${index}`} className="mb-4">
											<a
												className="text-gray-400 hover:text-gray-300"
												href="#"
												aria-label={item}
											>
												{item}
											</a>
										</li>
									))}
								</ul>
							</div>
							<div className="w-full md:w-1/3 lg:w-auto">
								<h3 className="mb-6 text-2xl font-bold text-primaryText">Company</h3>
								<ul>
									{footerData[2].items.map((item, index) => (
										<li key={`${item}-${index}`} className="mb-4">
											<a
												className="text-gray-400 hover:text-gray-300"
												href="#"
												aria-label={item}
											>
												{item}
											</a>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};
