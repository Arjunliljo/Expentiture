import { defineQuery } from "groq";
import { sanityFetch } from "../live";
import { withTimeout, withFallback } from "@/lib/error-handler";

async function getAllInsights() {
	const getAllInsightsQuery = defineQuery(
		`*[_type == "insight"] | order(_createdAt desc) {
     	_id,
	  title,
	  slug,
	  isTopBlog,
    isTopNews,
	  mainImage,
	  category->{
		...
	  },
	  publishedAt,
	   "description": body[0..1].children[].text
    }`
	);

	const insight = await withFallback(
		async () => {
			return await withTimeout(
				sanityFetch({
					query: getAllInsightsQuery,
				}),
				15000,
				"Failed to fetch insights - request timed out"
			);
		},
		{ data: [] }, // Fallback to empty insights array
		"Failed to fetch insights, using empty fallback"
	);

	return insight.data;
}

export default getAllInsights;
