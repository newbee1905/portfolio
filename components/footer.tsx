import Link from 'next/link'

const ArrowUpRightIcon = () => (
	<svg
		width="12"
		height="12"
		viewBox="0 0 12 12"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
			fill="currentColor"
			strokeLinecap="round" strokeLinejoin="round" 
			clipRule="evenodd"
		/>
	</svg>
)


const Footer = async () => {
	return (
		<footer className="mb-16">
			<ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 md:flex-row md:space-x-4 md:space-y-0">
				<li>
					<Link
						className="flex items-center transition-all hover:brightness-150 text-kanagawa-string"
						rel="noopener noreferrer"
						target="_blank"
						href="/rss"
					>
						<ArrowUpRightIcon />
						<p className="ml-2 h-7">rss</p>
					</Link>
				</li>
				<li>
					<Link
						className="flex items-center transition-all hover:brightness-150 text-kanagawa-string"
						rel="noopener noreferrer"
						target="_blank"
						href="https://github.com/newbee1905/portfolio"
					>
						<ArrowUpRightIcon />
						<p className="ml-2 h-7">github</p>
					</Link>
				</li>
				<li>
					<Link
						className="flex items-center transition-all hover:brightness-150 text-kanagawa-string"
						rel="noopener noreferrer"
						target="_blank"
						href="https://www.linkedin.com/in/minh-vu-newbee/"
					>
						<ArrowUpRightIcon />
						<p className="ml-2 h-7">linkedin</p>
					</Link>
				</li>
			</ul>
		</footer>
	);
}

export default Footer;
