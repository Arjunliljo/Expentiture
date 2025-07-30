import { defineQuery } from "groq";
import { sanityFetch } from "../live";
import { withTimeout, withFallback } from "@/lib/error-handler";

async function getServices() {
	const getServicesQuery = defineQuery(`*[_type == "service"]{
		name,
		slug,
		description,
		icon,
		color,
		cyberSecurityServices[]->{
			title,
			slug
		},
		cyberSecurityFrameworks[]->{
			title,
			slug
		},
	}`);

	const services = await withFallback(
		async () => {
			return await withTimeout(
				sanityFetch({
					query: getServicesQuery,
				}),
				15000,
				"Failed to fetch services - request timed out"
			);
		},
		{ data: [] }, // Fallback to empty services array
		"Failed to fetch services, using empty fallback"
	);

	return services.data;
}

export default getServices;
