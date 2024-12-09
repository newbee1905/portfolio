import { FC, HTMLAttributes } from "react";
import { getSingletonHighlighter } from "shiki";

interface CodeProps extends HTMLAttributes<HTMLElement> {
	children: string,
	className?: string,
}

const highlightCode = async (rawHtml: string, className: string | null ) => {
	const highlighter = await getSingletonHighlighter({
		themes: ["kanagawa-wave"],
		langs: [
			"typescript",
			"javascript",
			"python",
			"rust",
			"go",
			"bash",
			"json",
			"markdown",
			"c#",
		],
	});

	const language = className?.replace("language-", "") || "text";

	try {
		const html = highlighter.codeToHtml(rawHtml || "", {
			lang: language,
			theme: "kanagawa-wave",
		});

		return html;
	} catch (error) {
		console.error("Syntax highlighting error:", error);
	}
}

const Code: FC<CodeProps> = async ({ children, className, ...props }) => {
	const codeHTML = await highlightCode(children, className);

	return (
		<code
			dangerouslySetInnerHTML={{ __html: codeHTML || children }}
			{...props}
		/>
	);
};

export default Code;
