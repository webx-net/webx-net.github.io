import { useRef, useEffect } from "react";

export const CodeBox = () => {
	const codeRef = useRef(null);
	const lineNoRef = useRef(null);
	useEffect(() => {
		// Populate line numbers depending on the number of lines (.token-line) in the code
		const codeLines = codeRef.current.querySelectorAll('.token-line');
		const lineNos = lineNoRef.current;
		lineNos.innerHTML = '';
		for (let i = 0; i < codeLines.length; i++) {
			lineNos.innerHTML += `${i + 1}`.padStart(2, '0') + '<br/>';
		}
	}, []);
	return (<>
		<div className="rounded-2xl bg-bgDarker1/90 ring-1 ring-white/10 backdrop-blur text-left">
			<div className="absolute -top-px left-20 right-11 h-px bg-gradient-to-r from-primaryColor/0 via-secondaryColor/70 to-primaryColor/0"></div>
			<div className="absolute -bottom-px left-11 right-20 h-px bg-gradient-to-r from-primaryColor/0 via-secondaryColor to-primaryColor/0"></div>
			<div className="pl-4 pt-4">
				<svg aria-hidden="true" viewBox="0 0 42 10" fill="none" className="h-2.5 w-auto stroke-slate-500/30">
					<circle cx="5" cy="5" r="4.5" fill="#f86660"></circle>
					<circle cx="21" cy="5" r="4.5" fill="#eab727"></circle>
					<circle cx="37" cy="5" r="4.5" fill="#51a857"></circle>
				</svg>
				<div className="mt-4 flex space-x-2 overflow-hidden text-xs sm:text-sm md:text-lg">
					<div className="flex h-6 rounded-full bg-gradient-to-r from-primaryColor/30 via-primaryColor to-primaryColor/30 p-px font-medium text-secondaryColor">
						<div className="flex items-center rounded-full px-2.5 bg-bgDark1">main.wx</div>
					</div>
					<div className="flex h-6 rounded-full text-slate-500">
						<div className="flex items-center rounded-full px-2.5">handler.wx</div>
					</div>
					<div className="flex h-6 rounded-full text-slate-500">
						<div className="flex items-center rounded-full px-2.5">auth.wx</div>
					</div>
					<div className="flex h-6 rounded-full text-slate-500">
						<div className="flex items-center rounded-full px-2.5">package.json</div>
					</div>
				</div>
				<div className="mt-4 mb-3 flex items-start px-1 h-[28vw] overflow-auto leading-3 text-[.5rem] xs:text-xs sm:text-sm md:text-lg">
					<div aria-hidden="true" className="select-none border-r border-slate-300/5 pr-4 font-mono text-slate-600" ref={lineNoRef}></div>
					<pre className="flex text-white pb-2" style={{ position: 'relative' }}>
						<code className="px-4" ref={codeRef}>
							<div className="token-line">
								<span className="token comment">// HTML pages and fragments</span>
							</div>
							<div className="token-line">
								<span className="token keyword module">get</span>
								<span className="token plain"></span>
								<span className="token string">/</span>
								<span className="token plain"></span>
								<span className="token punctuation">{"("}</span>
								<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>html</span> <span className="token attr-name">lang</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>en<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
							</div>
							<div className="token-line">
								<span className="token plain"></span>
								<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>body<span className="token punctuation">&gt;</span></span></span>
							</div>
							<div className="token-line">
								<span className="token plain"></span>
								<span className="token plain"></span>
								<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>h1<span className="token punctuation">&gt;</span></span></span>
								Hello from WebX!
								<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>h1<span className="token punctuation">&gt;</span></span></span>
							</div>
							<div className="token-line">
								<span className="token plain"></span>
								<span className="token plain"></span>
								<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button<span className="token attr-name"> hx-get</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>/about<span className="token punctuation">"</span></span> <span className="token attr-name"> hx-swap</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>outerHTML<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span></span>
								About
								<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button<span className="token punctuation">&gt;</span></span></span>
							</div>
							<div className="token-line">
								<span className="token plain"></span>
								<span className="token plain"></span>
								<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>h2<span className="token punctuation">&gt;</span></span></span>
								Favorite Foods
								<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>h2<span className="token punctuation">&gt;</span></span></span>
							</div>
							<div className="token-line">
								<span className="token plain"></span>
								<span className="token plain"></span>
								<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>ul<span className="token attr-name"> id</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>foods<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span></span>
							</div>
							<div className="token-line">
								<span className="token plain"></span>
								<span className="token plain"></span>
								<span className="token plain"></span>
								<span className="token punctuation">{"{"}</span>
								<span className="token keyword">foods</span>
								<span className="token punctuation">.</span>
								<span className="token function">map</span>
								<span className="token punctuation">{"("}</span>
								<span className="token function">renderFood</span>
								<span className="token punctuation">{")}"}</span>
							</div>
							<div className="token-line">
								<span className="token plain"></span>
								<span className="token plain"></span>
								<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>ul<span className="token punctuation">&gt;</span></span></span>
							</div>
							<div className="token-line">
								<span className="token plain"></span>
								<span className="token plain"></span>
								<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>form<span className="token attr-name"> hx-post</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>/api/foods<span className="token punctuation">"</span></span><span className="token attr-name"> hx-swap</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>afterend<span className="token punctuation">"</span></span></span></span>
							</div>
							<div className="token-line">
								<span className="token plain"></span>
								<span className="token plain"></span>
								<span className="token plain"></span>
								<span className="token plain"> </span>
								<span className="token attr-name"> hx-target</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>#foods<span className="token punctuation">"</span></span><span className="token attr-name"> hx-trigger</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>submit<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span>
							</div>
							<div className="token-line">
								<span className="token plain"></span>
								<span className="token plain"></span>
								<span className="token plain"></span>
								<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>input<span className="token attr-name"> type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>text<span className="token punctuation">"</span></span><span className="token attr-name"> name</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>name<span className="token punctuation">"</span></span><span className="token attr-name"> placeholder</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>Food name<span className="token punctuation">"</span></span><span className="token punctuation">{"/>"}</span></span></span>
							</div>
							<div className="token-line">
								<span className="token plain"></span>
								<span className="token plain"></span>
								<span className="token plain"></span>
								<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>input<span className="token attr-name"> type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>text<span className="token punctuation">"</span></span><span className="token attr-name"> name</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>emoji<span className="token punctuation">"</span></span><span className="token attr-name"> placeholder</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>Emoji<span className="token punctuation">"</span></span><span className="token punctuation">{"/>"}</span></span></span>
							</div>
							<div className="token-line">
								<span className="token plain"></span>
								<span className="token plain"></span>
								<span className="token plain"></span>
								<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button<span className="token attr-name"> type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>submit<span className="token punctuation">"</span></span><span className="token punctuation">{"/>"}</span></span></span>
								Add Food
								<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button<span className="token punctuation">&gt;</span></span></span>
							</div>
							<div className="token-line">
								<span className="token plain"></span>
								<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>form<span className="token punctuation">&gt;</span></span></span>
							</div>
							<div className="token-line">
								<span className="token tag"><span className="token punctuation">&lt;/</span>body<span className="token punctuation">&gt;</span></span>
								<span className="token tag"><span className="token punctuation">&lt;/</span>html<span className="token punctuation">&gt;</span></span>
								<span className="token punctuation">{")"}</span>
							</div>
							<div className="token-line">
								<span className="token keyword module">get</span>
								<span className="token plain"></span>
								<span className="token string">/about</span>
								<span className="token plain"></span>
								<span className="token punctuation">{"("}</span>
								<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>p<span className="token punctuation">&gt;</span></span></span>
							</div>
							<div className="token-line">
								<span className="token plain"></span>
								This is an example WebX project with
							</div>
							<div className="token-line">
								<span className="token plain"></span>
								a list of all of my favorite foods!
							</div>
							<div className="token-line">
								<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>p<span className="token punctuation">&gt;</span></span></span>
								<span className="token punctuation">{")"}</span>
							</div>
							<div className="token-line"><span className="token plain"></span></div>
							<div className="token-line">
								<span className="token comment">// Server-side code</span>
							</div>
							<div className="token-line">
								<span className="token keyword">model</span>
								<span className="token plain"></span>
								<span className="token property">Food</span>
								<span className="token plain"></span>
								<span className="token punctuation">{"{"}</span>
								<span className="token plain"></span>
								name
								<span className="token punctuation">:</span>
								<span className="token plain"></span>
								<span className="token property">String</span>
								<span className="token punctuation">,</span>
								<span className="token plain"></span>
								emoji
								<span className="token punctuation">:</span>
								<span className="token plain"></span>
								<span className="token property">String</span>
								<span className="token plain"></span>
								<span className="token punctuation">{"}"}</span>
							</div>
							<div className="token-line">
								<span className="token keyword">handler</span>
								<span className="token plain"></span>
								<span className="token function regex">renderFood</span>
								<span className="token punctuation">{"("}</span>
								food
								<span className="token punctuation">:</span>
								<span className="token property"> Food</span>
								<span className="token punctuation">{")"}</span>
								<span className="token plain"></span>
								<span className="token punctuation">{"("}</span>
								<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>li<span className="token punctuation">&gt;</span></span></span>
								{"{"}food
								<span className="token punctuation">.</span>
								emoji{"}"}
								<span className="token plain"></span>
								{"{"}food
								<span className="token punctuation">.</span>
								name{"}"}
								<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>li<span className="token punctuation">&gt;</span></span></span>
								<span className="token punctuation">{")"}</span>
							</div>
							<div className="token-line">
								<span className="token keyword">const</span>
								<span className="token plain"></span>
								foods
								<span className="token punctuation">:</span>
								<span className="token plain"></span>
								<span className="token property">Food</span>
								<span className="token punctuation">[]</span>
								<span className="token plain">{"="} </span>
								<span className="token punctuation">[</span>
								<span className="token plain"></span>
							</div>
							<div className="token-line">
								<span className="token plain"></span>
								<span className="token punctuation">{"{"}</span>
								<span className="token plain"></span>
								name
								<span className="token punctuation">:</span>
								<span className="token plain"></span>
								<span className="token string">"Hamburger"</span>
								<span className="token punctuation">,</span>
								<span className="token plain"></span>
								emoji
								<span className="token punctuation">:</span>
								<span className="token plain"></span>
								<span className="token string">"🍔"</span>
								<span className="token plain"></span>
								<span className="token punctuation">{"}"}</span>
								<span className="token punctuation">,</span>
							</div>
							<div className="token-line">
								<span className="token plain"></span>
								<span className="token punctuation">{"{"}</span>
								<span className="token plain"></span>
								name
								<span className="token punctuation">:</span>
								<span className="token plain"></span>
								<span className="token string">"Pizza"</span>
								<span className="token punctuation">,</span>
								<span className="token plain"></span>
								emoji
								<span className="token punctuation">:</span>
								<span className="token plain"></span>
								<span className="token string">"🍕"</span>
								<span className="token plain"></span>
								<span className="token punctuation">{"}"}</span>
								<span className="token punctuation">,</span>
							</div>
							<div className="token-line">
								<span className="token plain"></span>
								<span className="token punctuation">{"{"}</span>
								<span className="token plain"></span>
								name
								<span className="token punctuation">:</span>
								<span className="token plain"></span>
								<span className="token string">"Taco"</span>
								<span className="token punctuation">,</span>
								<span className="token plain"></span>
								emoji
								<span className="token punctuation">:</span>
								<span className="token plain"></span>
								<span className="token string">"🌮"</span>
								<span className="token plain"></span>
								<span className="token punctuation">{"}"}</span>
								<span className="token punctuation">,</span>
							</div>
							<div className="token-line">
								<span className="token punctuation">]</span>
								<span className="token punctuation">;</span>
							</div>
							<div className="token-line"><span className="token plain"></span></div>
							<div className="token-line">
								<span className="token comment">// API endpoints</span>
							</div>
							<div className="token-line">
								<span className="token keyword module">location</span>
								<span className="token plain"></span>
								<span className="token string">api</span>
								<span className="token plain"></span>
								<span className="token punctuation">{"{"}</span>
							</div>
							<div className="token-line">
								<span className="token plain"></span>
								<span className="token keyword">post</span>
								<span className="token plain"></span>
								<span className="token string">/foods</span>
								<span className="token plain"></span>
								<span className="token keyword">form</span>
								<span className="token punctuation">{"("}</span>
								name
								<span className="token punctuation">:</span>
								<span className="token plain"></span>
								<span className="token property">String</span>
								<span className="token punctuation">,</span>
								<span className="token plain"></span>
								emoji
								<span className="token punctuation">:</span>
								<span className="token plain"></span>
								<span className="token property">String</span>
								<span className="token punctuation">{")"}</span>
								<span className="token plain"></span>
								<span className="token punctuation">{"{"}</span>
							</div>
							<div className="token-line">
								<span className="token plain"></span>
								<span className="token plain"></span>
								<span className="token keyword">const</span>
								<span className="token plain"></span>
								newFood =
								<span className="token punctuation">{" {"}</span>
								<span className="token plain"></span>
								name
								<span className="token punctuation">,</span>
								<span className="token plain"></span>
								emoji
								<span className="token punctuation">{" }"}{";"}</span>
							</div>
							<div className="token-line">
								<span className="token plain"></span>
								<span className="token plain"></span>
								foods
								<span className="token punctuation">.</span>
								<span className="token function">push</span>
								<span className="token punctuation">{"("}</span>
								newFood
								<span className="token punctuation">{")"}{";"}</span>
							</div>
							<div className="token-line">
								<span className="token plain"></span>
								<span className="token punctuation">{"} -> "}</span>
								<span className="token function regex">renderFood</span>
								<span className="token punctuation">{"("}</span>
								newFood
								<span className="token punctuation">{")"}</span>
							</div>
							<div className="token-line">
								<span className="token punctuation">{"}"}</span>
							</div>
						</code>
					</pre>
				</div>
			</div>
		</div>
		<link href="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/themes/prism-funky.min.css" rel="stylesheet" />
	</>)
};
