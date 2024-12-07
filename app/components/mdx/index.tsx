import { MDXRemote } from "next-mdx-remote/rsc";
import React from "react";

import { H1, H2, H3, H4, H5, H6 } from './Heading';
import Table from "./Table"
import RoundedImage from "./Image"
import Code from "./Code"
import MdxLink from "./Link"
import MathExpression from './MathExpression';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

let components = {
	h1: H1,
	h2: H2,
	h3: H3,
	h4: H4,
	h5: H5,
	h6: H6,
	Image: RoundedImage,
	a: MdxLink,
	code: Code,
	Table,
  math: (props: { children: string }) => (
    <MathExpression inline={false}>{props.children}</MathExpression>
  ),
  inlinemath: (props: { children: string }) => (
    <MathExpression inline={true}>{props.children}</MathExpression>
  )
};

const CustomMDX = (props) => {
	return (
		<MDXRemote
			{...props}
			options={{
				mdxOptions: {
					remarkPlugins: [remarkMath],
					rehypePlugins: [
						rehypeKatex
					],
				}
			}}
			components={{ ...components, ...(props.components || {}) }}
		/>
	);
}

export default CustomMDX;