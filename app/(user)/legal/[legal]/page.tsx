import MotionInView from "@/components/MotionInView";
import { portableComponents } from "@/components/PortableComponents";
import { getLegalBySlug } from "@/sanity/lib/others/getLegal";
import { PortableText } from "next-sanity";
import React from "react";

interface LegalPageProps {
	params: Promise<{
		legal: string;
	}>;
}

async function LegalPage({ params }: LegalPageProps) {
	const { legal } = await params;

	const data = await getLegalBySlug(legal);

	if (!data) {
		return (
			<div className="container mx-auto px-4 py-8 mt-16">
				<h1 className="text-4xl font-bold">Legal not found</h1>
			</div>
		);
	}

	return (
		<>
			<div className="relative w-full z-[1] h-[300px] lg:h-[430px] bg-[url(/img8.jpeg)] bg-no-repeat bg-cover bg-center bg-blend-overlay flex flex-col gap-4 items-center justify-center">
				<span className="absolute -z-[1] inset-0 bg-gradient-to-r from-secondary via-secondary to-transparent"></span>
				<div className="container flex items-end gap-5 w-full h-full px-4 pb-8 md:pb-16">
					<MotionInView
						scale={0.8}
						delay={0.3}
						className="max-w-[680px] text-white flex flex-col gap-4"
					>
						<div className="flex items-center gap-2">
							<h2 className="text-2xl lg:text-4xl font-medium">
								{data?.title}
							</h2>
						</div>
						{/* <div className="text-sm lg:text-base max-w-[550px]  font-normal">
						</div> */}
					</MotionInView>
				</div>
			</div>
			<div className="container  py-8 lg:py-18 relative w-full h-full px-4 mx-auto flex flex-col gap-4 items-center justify-center">
				{/* <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/55 dark:from-white/15 dark:to-black/40" />
													<div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20" /> */}
				<span className="absolute w-[100px] aspect-square top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary rounded-full blur-[142px] "></span>
				<MotionInView direction="up" delay={0.4}>
					{data?.body && (
						<PortableText value={data.body} components={portableComponents} />
					)}
				</MotionInView>
			</div>
		</>
	);
}

export default LegalPage;
// import React from "react";
