import type { FontDefinition, FontSelectionConfig } from "@/types/fontConfig";

export const fontsList: FontDefinition[] = [
	{
		name: "Zen Maru Gothic",
		cssVariable: "--font-zen-maru-gothic",
		provider: "fontsource",
		weights: ["300", "400", "500", "600", "700"],
		styles: ["normal"],
		subsets: ["latin", "cyrillic"],
		fallbacks: ["sans-serif"],
	},
	{
		name: "Inter",
		cssVariable: "--font-inter",
		provider: "fontsource",
		weights: ["300", "400", "500", "600", "700"],
		styles: ["normal"],
		subsets: ["latin", "cyrillic"],
		fallbacks: ["sans-serif"],
	},
	{
		name: "JetBrains Mono",
		cssVariable: "--font-jetbrains-mono",
		provider: "fontsource",
		weights: ["400", "700"],
		styles: ["normal"],
		subsets: ["latin", "cyrillic"],
		fallbacks: [
			"ui-monospace",
			"SFMono-Regular",
			"Menlo",
			"Monaco",
			"Consolas",
			"Liberation Mono",
			"Courier New",
			"monospace",
		],
	},
	{
		name: "Noto Sans SC",
		cssVariable: "--font-noto-sans-sc",
		provider: "fontsource",
		weights: ["300", "400", "500", "700"],
		styles: ["normal"],
		subsets: ["latin", "chinese-simplified"],
		fallbacks: ["sans-serif"],
	},
	{
		name: "HYWenHei",
		cssVariable: "--font-hywenhei",
		provider: "local",
		options: {
			variants: [
				{
					src: ["./public/assets/fonts/HYWenHei.ttf"],
					weight: 400,
					style: "normal",
				},
				{
					src: ["./public/assets/fonts/HYWenHei-65W.ttf"],
					weight: 650,
					style: "normal",
				},
				{
					src: ["./public/assets/fonts/HYWenHei-85W.ttf"],
					weight: 850,
					style: "normal",
				},
			],
		},
		fallbacks: ["sans-serif"],
	},
];

export const fontConfig: FontSelectionConfig = {
	enable: true,
	selected: ["--font-noto-sans-sc"],

	bannerTitleFont: "--font-hywenhei",
	bannerSubtitleFont: "--font-inter",
	navbarTitleFont: "",
	codeFont: "--font-jetbrains-mono",

	subsetFonts: {
		"--font-hywenhei": {
			extraChars: "",
		},
	},
};
