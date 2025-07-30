import MotionInView from "@/components/MotionInView";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
	title: "24/7 Cybersecurity Incident Response | Expedite Consults LLC",
	description:
		"Get immediate support from certified experts with Expedite Consults’ 24/7 Incident Response services. We help contain threats fast and restore security without delay.",
};

const page = () => {
	return (
		<>
			<div className="relative w-full z-[1] h-[300px] lg:h-[400px] bg-[url(/img4.jpeg)] bg-no-repeat bg-cover bg-center bg-blend-overlay flex flex-col gap-4 items-center justify-center">
				<span className="absolute -z-[1] inset-0 bg-gradient-to-r from-secondary via-secondary to-transparent"></span>
				<div className="container flex items-end gap-5 w-full h-full px-4 pb-8 md:pb-16">
					<MotionInView
						scale={0.8}
						delay={0.3}
						className="max-w-[680px] text-white flex flex-col gap-4"
					>
						<h2 className="text-2xl lg:text-4xl font-medium">
							24/7 Incident Response
						</h2>
						<div className="text-sm lg:text-base max-w-[550px]  font-normal">
							Rapid, around-the-clock response to security incidents to minimize
							impact and restore operations swiftly.
						</div>
					</MotionInView>
				</div>
			</div>

			<div className="w-full bg-secondary/90 relative overflow-hidden">
				<span className="absolute rotate-45 top-1/2 -translate-y-1/2 -right-24 lg:right-[20%] w-[200px] h-[300%] bg-gradient-to-b from-primary/80 via-primary/50 to-primary/20"></span>
				<div className="container relative w-full h-full px-4 py-8 lg:py-18 mx-auto flex flex-col gap-4 items-center justify-center">
					{/* <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/55 dark:from-white/15 dark:to-black/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20" /> */}
					<MotionInView
						direction="up"
						delay={0.4}
						className="flex flex-col w-full  justify-between max-h-[400px] gap-8"
					>
						<div className="flex flex-col gap-2 lg:gap-4 max-w-[800px]">
							<h2 className="text-2xl lg:text-4xl font-semibold text-primary">
								Experienced a <span className="text-background">Security</span>{" "}
								Breach?
							</h2>
							<p className="text-sm lg:text-base text-white max-w-[650px] font-normal">
								Expedite Consults cybersecurity specialists are available 24/7
								to conduct a thorough investigation and analysis of any breach,
								followed by a tailored remediation plan to help you regain
								control. <br /> <br /> If you suspect your organization has been
								impacted by a cybersecurity incident, contact us immediately.
							</p>
						</div>

						<Link
							href="tel:1-855-443-9733"
							className="group/button self-start mt-10 relative inline-flex items-center pr-20 [clip-path:polygon(0_0,100%_0,80%_100%,0%_100%)] justify-center overflow-hidden bg-gradient-to-tr from-primary to-primary/50 backdrop-blur-lg px-6 py-2 font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-primary/30"
						>
							<span className="text-xl lg:text-2xl">+1-855-443-9733</span>
							<div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
								<div className="relative h-full w-10 bg-white/30"></div>
							</div>
						</Link>
					</MotionInView>
				</div>
			</div>
		</>
	);
};

export default page;
