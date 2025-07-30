import { ShieldCheck } from "lucide-react";
import Link from "next/link";
import React from "react";

import MotionInView from "./MotionInView";
import { routes } from "@/constant/routes";
import getSiteSettings from "@/sanity/lib/others/getSiteSettings";
import { highlightLastWord } from "@/lib/utils";
import { urlFor } from "@/sanity/lib/image";

export default async function Hero() {
	const site = await getSiteSettings();
	return (
		<div
			style={{
				backgroundImage: site?.heroImage
					? `url(${urlFor(site?.heroImage).url()})`
					: "",
			}}
			className="relative w-full z-[1] h-[550px] lg:h-[700px] bg-[url(/hero.png)] bg-no-repeat bg-cover bg-center bg-blend-overlay flex flex-col gap-4 items-center justify-center pt-10"
		>
			<span className="absolute -z-[1] inset-0 bg-gradient-to-r from-secondary via-secondary to-transparent"></span>
			<div className="container flex items-center gap-5 w-full h-full px-4">
				<MotionInView
					scale={0.8}
					delay={0.3}
					className=" max-w-[680px] font-medium text-white"
				>
					<div className="flex items-center gap-1 mb-4 text-primary px-3 py-1.5 rounded-full w-fit bg-gradient-to-r from-primary/10 to-primary/5">
						<ShieldCheck className="size-4" />
						<span className="text-xs">Trusted Cybersecurity Solutions</span>
					</div>
					<h1 className="text-3xl lg:text-5xl">
						{highlightLastWord(site?.heroHeading ?? "")}
					</h1>
					<span
						aria-hidden="true"
						className="block my-5 rounded-full lg:my-6 w-full h-[1px] bg-gradient-to-r from-primary to-transparent"
					/>
					<div className="text-sm lg:text-base max-w-[550px] text-white font-normal">
						{site?.heroSubheading ?? ""}
					</div>
					<div className="flex items-center gap-5 mt-8">
						{/* <Link
							href={"#"}
							className="font-normal text-sm lg:text-base mb-0 px-6 py-2.5 bg-gradient-to-tr from-primary to-primary/50 text-white hover:bg-gradient-to-tr hover:from-primary hover:to-primary transition-all duration-300"
						>
							Contact Us
						</Link> */}
						<Link
							href={routes.services}
							className="text-sm pr-11 [clip-path:polygon(0_0,100%_0,80%_100%,0%_100%)] text-secondary font-semibold lg:text-base mb-0 px-6 py-2.5 bg-white"
						>
							Explore Services
						</Link>
					</div>
				</MotionInView>
			</div>
		</div>
	);
}
