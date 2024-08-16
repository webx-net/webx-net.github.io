import { useState } from "react";
import { motion } from "framer-motion";

const FAQData = [
	{
		question: "How is Web X different from other frameworks?",
		answer: `Web X stands out due to its HTML-first methodology, the use of TypeScript, and its execution on an efficient Rust-based runtime.
		This combination offers a unique blend of simplicity, performance, and advanced hypermedia support not commonly found in other frameworks.
		This allows developers to create web applications and APIs using a familiar and straightforward approach.`,
		links: [
			{ text: "TypeScript", url: "https://www.typescriptlang.org/" },
			{ text: "Rust", url: "https://www.rust-lang.org/" }
		]
	},
	{
		question: "Is Web X limited to only HTML?",
		answer: `No, Web X is a versatile framework that can be used with any MIME-and structured data format, including HTML, CSS, XML, JSON, and more.
		Its flexible and adaptable design allows you to process many different data formats, making it suitable for a wide range of applications.
		Web X follows an HTML-first approach for ease of use and simplicity but allow users to define parsers for other data formats.`,
		links: [
			{ text: "MIME types", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types" },
			{ text: "Structured data", url: "https://en.wikipedia.org/wiki/Structured_data" },
			{ text: "Parsers", url: "https://en.wikipedia.org/wiki/Parsing" }
		]
	},
	{
		question: "Why should I choose Web X over Node.js or Deno?",
		answer: `Node.js and Deno are not designed specifically for web development, whereas Web X is designed to be perfect.
		Web X is a lightweight, easy-to-use language and framework for building web applications and APIs with TypeScript.
		Web X is built on top of the Deno core runtime, while also offering a more streamlined and developer-friendly experience.`,
		links: [
			{ text: "Node.js", url: "https://nodejs.org/" },
			{ text: "Deno", url: "https://deno.land/" },
			{ text: "Performance Comparison", url: "https://medium.com/deno-the-complete-reference/deno-vs-node-js-performance-comparison-for-file-server-9af26133c800" }
		]
	},
	{
		question: "Does Web X have a package manager?",
		answer: `Almost, Web X integrates smoothly with JSR similar to Deno, allowing you to use a vast ecosystem of packages and plugins available for JavaScript and TypeScript.
		This ensures you can extend the functionality of your Web X applications easily.
		However, Web X does not have a built-in package manager for handlers and models as of yet.`,
		links: [
			{ text: "JavaScript registry (JSR)", url: "https://jsr.io/" },
			{ text: "Deno Third Party Modules", url: "https://docs.deno.com/runtime/manual/basics/modules/#using-third-party-modules-and-libraries-with-deno" }
		]
	},
	{
		question: "How does Web X handle real-time data and WebSocket?",
		answer: `Web X provides a WebSocket API that allows you to create real-time, bidirectional communication between clients and servers.
		The API directly binds to a native Rust WebSocket library, ensuring high performance and reliability.
		Web X also supports server-sent events (SSE) for one-way communication from the server to the client.`,
		links: [
			{ text: "WebSocket API", url: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API" },
			{ text: "Server-Sent Events (SSE)", url: "https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events" },
			{ text: "Rust WebSocket library", url: "https://crates.io/crates/tungstenite" }
		]
	},
];

export const FAQ = () => (
	<section className="relative -mt-8 sm:mt-0 pt-12 sm:pt-16 pb-16 bg-blueGray-50 overflow-hidden">
		<div className="absolute -top-10" id="FAQ" />
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5, delay: 0.2 }}
		>
			<div className="relative z-10 container px-2 sm:px-8 lg:px-4 mx-auto w-11/12 sm:w-full">
				<div className="md:max-w-4xl mx-auto">
					<p className="mb-7 block-subtitle text-center">Have any questions?</p>
					<h2 className="mb-16 block-big-title text-center">
						Frequently Asked Questions
					</h2>
					<div className="mb-11 flex flex-wrap -m-1">
						{FAQData.map((item, index) => (
							<div className="w-full p-1" key={`${item.question}-${index}`}>
								<FAQBox
									title={item.question}
									content={item.answer}
									key={`${item.question}-${item.answer}`}
									links={item.links}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</motion.div>
	</section>
);

const FAQBox = ({ defaultOpen, title, content, links }) => {
	const [isOpen, setIsOpen] = useState(defaultOpen);

	return (
		<div
			className="pt-2 sm:pt-6 pb-2 px-3 sm:px-8  rounded-3xl bg-bgDark3 main-border-gray-darker mb-4 relative hover:bg-bgDark3Hover cursor-pointer transition"
			onClick={() => setIsOpen(!isOpen)}
		>
			<div className="flex flex-col p-2  justify-center items-start">
				<h3 className=" content-title pt-3 sm:pt-0 pr-8 sm:pr-0">{title}</h3>
				<p
					className={`text-secondaryText pt-4 transition-height duration-300 overflow-hidden ${isOpen ? "max-h-96" : "max-h-0"
						}`}
				>
					{content}
					{links.length > 0 && (
						<div className="mt-4">
							Read more about:{" "}
							{links.map((link, index) => (
								<span key={`${link}-${index}`}>
									<a
										href={link.url}
										target="_blank"
										className="text-primaryText hover:underline"
									>
										{link.text}
									</a>
									{index < links.length - 1 && (
										<span className="mr-2">,</span>
									)}
								</span>
							))}
						</div>
					)}
				</p>
			</div>
			<div className="absolute top-6 right-4 sm:top-8 sm:right-8">
				<svg
					width="28px"
					height="30px"
					viewBox="0 0 20 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className={`transition-all duration-500 ${isOpen ? "rotate-[180deg]" : "rotate-[270deg]"}`}
				>
					<path
						d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
						stroke="#4F46E5"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					></path>
				</svg>
			</div>
		</div>
	);
};
