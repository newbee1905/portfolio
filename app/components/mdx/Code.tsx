"use client";

import { FC, HTMLAttributes, useState, useEffect } from "react";
import { getSingletonHighlighter } from "shiki";

interface CodeProps extends HTMLAttributes<HTMLElement> {
	children: string;
}

const Code: FC<CodeProps> = ({ children, className, ...props }) => {
	const [codeHTML, setCodeHTML] = useState("");

	useEffect(() => {
		async function highlightCode() {
			const highlighter = await getSingletonHighlighter({
				themes: ["github-dark"],
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
				const html = highlighter.codeToHtml(children, {
					lang: language,
					theme: "github-dark",
				});
				setCodeHTML(html);
			} catch (error) {
				console.error("Syntax highlighting error:", error);
			}
		}

		highlightCode();
	}, [children, className]);

	return (
		<code
			dangerouslySetInnerHTML={{ __html: codeHTML || children }}
			{...props}
		/>
	);
};

export default Code;
