import { defineQuery } from "groq";
import { sanityFetch } from "../live";
import { withTimeout, withFallback } from "@/lib/error-handler";

async function getSiteSettings() {
	const getSiteSettingsQuery = defineQuery(`*[_type == "siteSettings"][0]`);

	const siteSettings = await withFallback(
		async () => {
			return await withTimeout(
				sanityFetch({
					query: getSiteSettingsQuery,
				}),
				15000,
				"Failed to fetch site settings - request timed out"
			);
		},
		{ data: null, sourceMap: null, tags: [] }, // Fallback to null
		"Failed to fetch site settings, using fallback"
	);

	return siteSettings.data;
}

export default getSiteSettings;
