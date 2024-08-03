export const CodeBox = () => (<>

	<div class="absolute rounded-2xl bg-bgDarker1/90 ring-1 ring-white/10 backdrop-blur w-4/5 2xl:w-[1200px] text-xs sm:text-sm md:text-lg text-left">
		<div class="absolute -top-px left-20 right-11 h-px bg-gradient-to-r from-primaryColor/0 via-secondaryColor/70 to-primaryColor/0"></div>
		<div class="absolute -bottom-px left-11 right-20 h-px bg-gradient-to-r from-primaryColor/0 via-secondaryColor to-primaryColor/0"></div>
		<div class="pl-4 pt-4">
			<svg aria-hidden="true" viewBox="0 0 42 10" fill="none" class="h-2.5 w-auto stroke-slate-500/30">
				<circle cx="5" cy="5" r="4.5" fill="#f86660"></circle>
				<circle cx="21" cy="5" r="4.5" fill="#eab727"></circle>
				<circle cx="37" cy="5" r="4.5" fill="#51a857"></circle>
			</svg>
			<div class="mt-4 flex space-x-2 overflow-hidden">
				<div class="flex h-6 rounded-full bg-gradient-to-r from-primaryColor/30 via-primaryColor to-primaryColor/30 p-px font-medium text-secondaryColor">
					<div class="flex items-center rounded-full px-2.5 bg-bgDark1">main.wx</div>
				</div>
				<div class="flex h-6 rounded-full text-slate-500">
					<div class="flex items-center rounded-full px-2.5">handler.wx</div>
				</div>
				<div class="flex h-6 rounded-full text-slate-500">
					<div class="flex items-center rounded-full px-2.5">auth.wx</div>
				</div>
				<div class="flex h-6 rounded-full text-slate-500">
					<div class="flex items-center rounded-full px-2.5">package.json</div>
				</div>
			</div>
			<div class="mt-6 mb-3 flex items-start px-1 h-[28vw] overflow-auto">
				<div aria-hidden="true" class="select-none border-r border-slate-300/5 pr-4 font-mono text-slate-600">
					01<br />02<br />03<br />04<br />05<br />06<br />07<br />08<br />09<br />10<br />11<br />12<br />13<br />14<br />15<br />16<br />17<br />18<br />19<br />20<br />21<br />22<br />23<br />24<br />25<br />26<br />27<br />28<br />29<br />30<br />31<br />32<br />33<br />34<br />35<br />36<br />37
				</div>
				<pre class="flex text-white overflow-x-auto pb-6" style={{ position: 'relative' }}>
					<code class="px-4">
						<div class="token-line">
							<span class="token comment">// HTML pages and fragments</span>
						</div>
						<div class="token-line">
							<span class="token keyword module">get</span>
							<span class="token plain"></span>
							<span class="token string">/</span>
							<span class="token plain"></span>
							<span class="token punctuation">{"("}</span>
							<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
						</div>
						<div class="token-line">
							<span class="token plain"></span>
							<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body<span class="token punctuation">&gt;</span></span></span>
						</div>
						<div class="token-line">
							<span class="token plain"></span>
							<span class="token plain"></span>
							<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1<span class="token punctuation">&gt;</span></span></span>
							Hello from WebX!
							<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1<span class="token punctuation">&gt;</span></span></span>
						</div>
						<div class="token-line">
							<span class="token plain"></span>
							<span class="token plain"></span>
							<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button<span class="token attr-name"> hx-get</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/about<span class="token punctuation">"</span></span> <span class="token attr-name"> hx-swap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>outerHTML<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span></span>
							About
							<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button<span class="token punctuation">&gt;</span></span></span>
						</div>
						<div class="token-line">
							<span class="token plain"></span>
							<span class="token plain"></span>
							<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2<span class="token punctuation">&gt;</span></span></span>
							Favorite Foods
							<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2<span class="token punctuation">&gt;</span></span></span>
						</div>
						<div class="token-line">
							<span class="token plain"></span>
							<span class="token plain"></span>
							<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul<span class="token attr-name"> id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>foods<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span></span>
						</div>
						<div class="token-line">
							<span class="token plain"></span>
							<span class="token plain"></span>
							<span class="token plain"></span>
							<span class="token punctuation">{"{"}</span>
							<span class="token keyword">foods</span>
							<span class="token punctuation">.</span>
							<span class="token function">map</span>
							<span class="token punctuation">{"("}</span>
							<span class="token function">renderFood</span>
							<span class="token punctuation">{")}"}</span>
						</div>
						<div class="token-line">
							<span class="token plain"></span>
							<span class="token plain"></span>
							<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul<span class="token punctuation">&gt;</span></span></span>
						</div>
						<div class="token-line">
							<span class="token plain"></span>
							<span class="token plain"></span>
							<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form<span class="token attr-name"> hx-post</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/api/foods<span class="token punctuation">"</span></span><span class="token attr-name"> hx-swap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>afterend<span class="token punctuation">"</span></span></span></span>
						</div>
						<div class="token-line">
							<span class="token plain"></span>
							<span class="token plain"></span>
							<span class="token plain"></span>
							<span class="token plain"> </span>
							<span class="token attr-name"> hx-target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#foods<span class="token punctuation">"</span></span><span class="token attr-name"> hx-trigger</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span>
						</div>
						<div class="token-line">
							<span class="token plain"></span>
							<span class="token plain"></span>
							<span class="token plain"></span>
							<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input<span class="token attr-name"> type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span><span class="token attr-name"> name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span><span class="token attr-name"> placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Food name<span class="token punctuation">"</span></span><span class="token punctuation">{"/>"}</span></span></span>
						</div>
						<div class="token-line">
							<span class="token plain"></span>
							<span class="token plain"></span>
							<span class="token plain"></span>
							<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input<span class="token attr-name"> type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span><span class="token attr-name"> name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>emoji<span class="token punctuation">"</span></span><span class="token attr-name"> placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Emoji<span class="token punctuation">"</span></span><span class="token punctuation">{"/>"}</span></span></span>
						</div>
						<div class="token-line">
							<span class="token plain"></span>
							<span class="token plain"></span>
							<span class="token plain"></span>
							<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button<span class="token attr-name"> type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span><span class="token punctuation">{"/>"}</span></span></span>
							Add Food
							<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button<span class="token punctuation">&gt;</span></span></span>
						</div>
						<div class="token-line">
							<span class="token plain"></span>
							<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form<span class="token punctuation">&gt;</span></span></span>
						</div>
						<div class="token-line">
							<span class="token tag"><span class="token punctuation">&lt;/</span>body<span class="token punctuation">&gt;</span></span>
							<span class="token tag"><span class="token punctuation">&lt;/</span>html<span class="token punctuation">&gt;</span></span>
							<span class="token punctuation">{")"}</span>
						</div>
						<div class="token-line">
							<span class="token keyword module">get</span>
							<span class="token plain"></span>
							<span class="token string">/about</span>
							<span class="token plain"></span>
							<span class="token punctuation">{"("}</span>
							<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p<span class="token punctuation">&gt;</span></span></span>
						</div>
						<div class="token-line">
							<span class="token plain"></span>
							This is an example WebX project with
						</div>
						<div class="token-line">
							<span class="token plain"></span>
							a list of all of my favorite foods!
						</div>
						<div class="token-line">
							<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p<span class="token punctuation">&gt;</span></span></span>
							<span class="token punctuation">{")"}</span>
						</div>
						<div class="token-line"><span class="token plain"></span></div>
						<div class="token-line">
							<span class="token comment">// Server-side code</span>
						</div>
						<div class="token-line">
							<span class="token keyword">model</span>
							<span class="token plain"></span>
							<span class="token property">Food</span>
							<span class="token plain"></span>
							<span class="token punctuation">{"{"}</span>
							<span class="token plain"></span>
							name
							<span class="token punctuation">:</span>
							<span class="token plain"></span>
							<span class="token property">String</span>
							<span class="token punctuation">,</span>
							<span class="token plain"></span>
							emoji
							<span class="token punctuation">:</span>
							<span class="token plain"></span>
							<span class="token property">String</span>
							<span class="token plain"></span>
							<span class="token punctuation">{"}"}</span>
						</div>
						<div class="token-line">
							<span class="token keyword">handler</span>
							<span class="token plain"></span>
							<span class="token function regex">renderFood</span>
							<span class="token punctuation">{"("}</span>
							food
							<span class="token punctuation">:</span>
							<span class="token property"> Food</span>
							<span class="token punctuation">{")"}</span>
							<span class="token plain"></span>
							<span class="token punctuation">{"("}</span>
							<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li<span class="token punctuation">&gt;</span></span></span>
							{"{"}food
							<span class="token punctuation">.</span>
							emoji{"}"}
							<span class="token plain"></span>
							{"{"}food
							<span class="token punctuation">.</span>
							name{"}"}
							<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li<span class="token punctuation">&gt;</span></span></span>
							<span class="token punctuation">{")"}</span>
						</div>
						<div class="token-line">
							<span class="token keyword">const</span>
							<span class="token plain"></span>
							foods
							<span class="token punctuation">:</span>
							<span class="token plain"></span>
							<span class="token property">Food</span>
							<span class="token punctuation">[]</span>
							<span class="token plain">{"="} </span>
							<span class="token punctuation">[</span>
							<span class="token plain"></span>
						</div>
						<div class="token-line">
							<span class="token plain"></span>
							<span class="token punctuation">{"{"}</span>
							<span class="token plain"></span>
							name
							<span class="token punctuation">:</span>
							<span class="token plain"></span>
							<span class="token string">"Hamburger"</span>
							<span class="token punctuation">,</span>
							<span class="token plain"></span>
							emoji
							<span class="token punctuation">:</span>
							<span class="token plain"></span>
							<span class="token string">"🍔"</span>
							<span class="token plain"></span>
							<span class="token punctuation">{"}"}</span>
							<span class="token punctuation">,</span>
						</div>
						<div class="token-line">
							<span class="token plain"></span>
							<span class="token punctuation">{"{"}</span>
							<span class="token plain"></span>
							name
							<span class="token punctuation">:</span>
							<span class="token plain"></span>
							<span class="token string">"Pizza"</span>
							<span class="token punctuation">,</span>
							<span class="token plain"></span>
							emoji
							<span class="token punctuation">:</span>
							<span class="token plain"></span>
							<span class="token string">"🍕"</span>
							<span class="token plain"></span>
							<span class="token punctuation">{"}"}</span>
							<span class="token punctuation">,</span>
						</div>
						<div class="token-line">
							<span class="token plain"></span>
							<span class="token punctuation">{"{"}</span>
							<span class="token plain"></span>
							name
							<span class="token punctuation">:</span>
							<span class="token plain"></span>
							<span class="token string">"Taco"</span>
							<span class="token punctuation">,</span>
							<span class="token plain"></span>
							emoji
							<span class="token punctuation">:</span>
							<span class="token plain"></span>
							<span class="token string">"🌮"</span>
							<span class="token plain"></span>
							<span class="token punctuation">{"}"}</span>
							<span class="token punctuation">,</span>
						</div>
						<div class="token-line">
							<span class="token punctuation">]</span>
							<span class="token punctuation">;</span>
						</div>
						<div class="token-line"><span class="token plain"></span></div>
						<div class="token-line">
							<span class="token comment">// API endpoints</span>
						</div>
						<div class="token-line">
							<span class="token keyword module">location</span>
							<span class="token plain"></span>
							<span class="token string">api</span>
							<span class="token plain"></span>
							<span class="token punctuation">{"{"}</span>
						</div>
						<div class="token-line">
							<span class="token plain"></span>
							<span class="token keyword">post</span>
							<span class="token plain"></span>
							<span class="token string">/foods</span>
							<span class="token plain"></span>
							<span class="token keyword">form</span>
							<span class="token punctuation">{"("}</span>
							name
							<span class="token punctuation">:</span>
							<span class="token plain"></span>
							<span class="token property">String</span>
							<span class="token punctuation">,</span>
							<span class="token plain"></span>
							emoji
							<span class="token punctuation">:</span>
							<span class="token plain"></span>
							<span class="token property">String</span>
							<span class="token punctuation">{")"}</span>
							<span class="token plain"></span>
							<span class="token punctuation">{"{"}</span>
						</div>
						<div class="token-line">
							<span class="token plain"></span>
							<span class="token plain"></span>
							<span class="token keyword">const</span>
							<span class="token plain"></span>
							newFood =
							<span class="token punctuation">{" {"}</span>
							<span class="token plain"></span>
							name
							<span class="token punctuation">,</span>
							<span class="token plain"></span>
							emoji
							<span class="token punctuation">{" }"}{";"}</span>
						</div>
						<div class="token-line">
							<span class="token plain"></span>
							<span class="token plain"></span>
							foods
							<span class="token punctuation">.</span>
							<span class="token function">push</span>
							<span class="token punctuation">{"("}</span>
							newFood
							<span class="token punctuation">{")"}{";"}</span>
						</div>
						<div class="token-line">
							<span class="token plain"></span>
							<span class="token punctuation">{"} -> "}</span>
							<span class="token function regex">renderFood</span>
							<span class="token punctuation">{"("}</span>
							newFood
							<span class="token punctuation">{")"}</span>
						</div>
						<div class="token-line">
							<span class="token punctuation">{"}"}</span>
						</div>
					</code>
				</pre>
			</div>
		</div>
	</div>
	<link href="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/themes/prism-funky.min.css" rel="stylesheet" />
</>);
