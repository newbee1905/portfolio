import { FC } from "react";
import katex from "katex";
import "katex/dist/katex.min.css";

interface MathExpressionProps {
	children: string;
	inline?: boolean;
}

const MathExpression: FC<MathExpressionProps> = ({
	children,
	inline = false,
}) => {
	try {
		const mathExpression = typeof children === 'string' ? children.trim() : '';
		console.log(mathExpression)

		const html = katex.renderToString(mathExpression, {
			throwOnError: false,
			displayMode: !inline,
			output: "html",
		});

		return (
			<div
				dangerouslySetInnerHTML={{ __html: html }}
				className={`math-expression ${inline ? "inline-math" : "block-math"}`}
			/>
		);
	} catch (error) {
		console.error("KaTeX rendering error:", error);
		return <span className="math-error">{children}</span>;
	}
};

export default MathExpression;
