import AdSection from "@/components/AdSection";
import { Icon } from "@/components/Icon";
import MotionInView from "@/components/MotionInView";
import {
	Binoculars,
	ShieldCheck,
	Star,
	Target,
	TrendingUp,
	Zap,
} from "lucide-react";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "About Expedite Consults LLC | Trusted Cybersecurity Experts",
	description:
		"Discover Expedite Consults’ mission, vision, and values. Learn how our trusted cybersecurity professionals safeguard digital assets and drive secure innovation.",
};

const values = [
	{
		icon: ShieldCheck,
		title: "Integrity",
		description:
			"Integrity is at the heart of everything we do. We hold ourselves accountable to our values and principles.",
	},
	{
		icon: Star,
		title: "Excellence",
		description:
			"Excellence is our way of life. We strive for excellence in everything we do, from our work to our relationships.",
	},
	{
		icon: Zap,
		title: "Innovation",
		description:
			"Innovation is our driving force. We embrace change, adapt, and innovate to stay ahead of the curve. Staying ahead of the threat landscape with modern solutions.",
	},
	{
		icon: TrendingUp,
		title: "Client Success",
		description:
			" Building long-term partnerships based on measurable impact. We prioritize client success above all else.",
	},
];

const page = () => {
	return (
		<>
			<div className="relative w-full z-[1] h-[300px] lg:h-[400px] bg-[url(/img3.jpeg)] bg-no-repeat bg-cover bg-center bg-blend-overlay flex flex-col gap-4 items-center justify-center">
				<span className="absolute -z-[1] inset-0 bg-gradient-to-r from-secondary via-secondary to-transparent"></span>
				<div className="container flex items-end gap-5 w-full h-full px-4 pb-8 md:pb-16">
					<MotionInView
						scale={0.8}
						delay={0.3}
						className="max-w-[680px] text-white flex flex-col gap-4"
					>
						<h2 className="text-2xl lg:text-4xl font-medium">About Us</h2>
						<div className="text-sm lg:text-base max-w-[550px]  font-normal">
							A trusted cybersecurity partner dedicated to protecting your
							digital future with expertise, innovation, and unwavering
							commitment.
						</div>
					</MotionInView>
				</div>
			</div>

			<div className="container  py-8 lg:py-18 relative w-full h-full px-4 mx-auto flex flex-col gap-4 items-center justify-center">
				{/* <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/55 dark:from-white/15 dark:to-black/40" />
							<div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20" /> */}
				<span className="absolute w-[100px] aspect-square top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary rounded-full blur-[142px] "></span>
				<MotionInView
					direction="up"
					delay={0.4}
					className="flex flex-col gap-4 items-center justify-center"
				>
					<h2 className="text-2xl lg:text-4xl text-center text-primary font-semibold">
						Built on Trust. Driven by Security
					</h2>
					<p className="text-sm lg:text-base text-center text-muted-foreground max-w-[950px] font-normal">
						At Expedite Consults LLC, cybersecurity isn’t just what we do — it’s
						who we are. Founded on the principles of trust, excellence, and
						innovation, we are committed to protecting critical systems,
						securing digital assets, and empowering businesses to thrive
						securely in a connected world.
					</p>
				</MotionInView>
			</div>

			<MotionInView
				direction="up"
				delay={0.5}
				className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-1 w-full"
			>
				<div className="relative overflow-hidden z-[1] w-full min-w-[300px] h-[270px] lg:h-[450px] bg-primary p-8 flex flex-col items-center justify-center gap-4">
					<span className="absolute rotate-45 top-1/2 -z-[1] -translate-y-1/2 right-[20%] w-[200px] h-[300%] bg-gradient-to-b from-secondary/30 via-secondary/15 to-secondary/5"></span>
					<Binoculars
						strokeWidth={1.2}
						className="text-white size-12 lg:size-14 shrink-0"
					/>
					<div className="flex flex-col items-center gap-4 w-full">
						<h2 className="text-2xl lg:text-4xl text-white font-semibold">
							Our Vision
						</h2>
						<p className="text-sm lg:text-lg text-white text-center max-w-[500px] w-full">
							To be a trusted global leader in cybersecurity—safeguarding
							innovation, enabling resilience, and shaping a safer digital
							future for all.
						</p>
					</div>
				</div>
				<div className="relative overflow-hidden z-[1]  w-full min-w-[300px] h-[270px] lg:h-[450px] bg-primary p-8 flex flex-col items-center justify-center gap-4">
					<span className="absolute -rotate-45 top-1/2 -z-[1] -translate-y-1/2 left-[20%] w-[200px] h-[300%] bg-gradient-to-b from-secondary/30 via-secondary/15 to-secondary/5"></span>

					<Target
						strokeWidth={1.2}
						className="text-white size-12 lg:size-14 shrink-0"
					/>
					<div className="flex flex-col items-center gap-4 w-full">
						<h2 className="text-2xl lg:text-4xl text-white font-semibold">
							Our Mission
						</h2>
						<p className="text-sm lg:text-lg text-white text-center max-w-[500px] w-full">
							To deliver cutting-edge cybersecurity and risk management
							solutions that empower organizations to operate securely,
							confidently, and without compromise in an increasingly digital
							world.
						</p>
					</div>
				</div>
			</MotionInView>

			<div className="container  py-8 lg:py-18 relative w-full h-full px-4 mx-auto flex flex-col gap-4 items-center justify-center">
				{/* <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/55 dark:from-white/15 dark:to-black/40" />
							<div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20" /> */}
				<span className="absolute w-[100px] aspect-square top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary rounded-full blur-[142px] "></span>
				<MotionInView
					direction="up"
					delay={0.4}
					className="flex flex-col gap-4 items-center justify-center"
				>
					<h2 className="text-2xl lg:text-4xl text-center text-primary font-semibold">
						Our Values
					</h2>
					<p className="text-sm lg:text-base text-center text-muted-foreground max-w-[950px] font-normal">
						Our values guide every decision we make — fostering trust, driving
						innovation, and upholding the highest standards in cybersecurity
					</p>
				</MotionInView>

				<div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-10 w-full ">
					{values.map((value, i) => (
						<MotionInView
							delay={i * 0.1 + 0.3}
							scale={0.8}
							key={i}
							className="p-4 py-10 w-full min-w-[300px] h-full bg-background shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex flex-col items-center gap-4 relative overflow-hidden transition-all duration-300 ease-in-out"
						>
							<Icon
								Icon={value.icon}
								strokeWidth={1.2}
								className="size-12 lg:size-16 text-primary"
							/>

							<div className="flex flex-col gap-2 w-full">
								<h2 className="text-base text-center lg:text-xl text-secondary font-semibold">
									{value.title}
								</h2>

								<p className="text-xs text-center lg:text-sm text-gray-600">
									{value.description}
								</p>
							</div>
						</MotionInView>
					))}
				</div>
			</div>

			<AdSection />
		</>
	);
};

export default page;
