import Link from "next/link";
import { FC, ReactNode, AnchorHTMLAttributes } from 'react';

type MdxLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
};

const MdxLink: FC<MdxLinkProps> = async (props) => {
	const { href, children } = await props;
	if (href.startsWith("/")) {
		return (
			<Link {...props}>
				{children}
			</Link>
		);
	}

	if (href.startsWith("#")) {
		return <a {...props} />;
	}

	return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

export default MdxLink;