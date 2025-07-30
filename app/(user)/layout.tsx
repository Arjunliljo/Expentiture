import type { Metadata } from "next";
import Header from "@/components/Header";
import { SanityLive } from "@/sanity/lib/live";
import Footer from "@/components/Footer";
import getServices from "@/sanity/lib/services/getServices";
import { Toaster } from "sonner";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { withFallback } from "@/lib/error-handler";

export const metadata: Metadata = {
	title: "Expedite Consults",
	description:
		"Protect your business with cutting-edge cybersecurity solutions. We offer threat detection, data protection, and 24/7 monitoring to keep your systems secure.",
};

export default async function UserLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const services = await withFallback(
		getServices,
		[], // Fallback to empty array
		"Failed to load services for layout"
	);

	return (
		<div className="min-h-screen flex flex-col">
			<ErrorBoundary>
				<Header services={services} />
				<main className="flex-1">{children}</main>

				<Footer services={services} />
			</ErrorBoundary>
			<Toaster
				richColors
				toastOptions={{
					style: {
						borderRadius: "0",
					},
				}}
			/>
			<ErrorBoundary>
				<SanityLive />
			</ErrorBoundary>
		</div>
	);
}
