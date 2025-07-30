import { defineQuery } from "groq";
import { sanityFetch } from "../live";
import { withTimeout, withFallback } from "@/lib/error-handler";

async function getTestimonial() {
	const getTestimonialQuery =
		defineQuery(`*[_type == "testimonial" && featured == true] | order(_createdAt desc){
    name,
    role,
    company,
    quote,
    image
}`);

	const testimonials = await withFallback(
		async () => {
			return await withTimeout(
				sanityFetch({
					query: getTestimonialQuery,
				}),
				15000,
				"Failed to fetch testimonials - request timed out"
			);
		},
		{ data: [], sourceMap: null, tags: [] }, // Fallback to empty testimonials array
		"Failed to fetch testimonials, using empty fallback"
	);

	return testimonials.data;
}

export default getTestimonial;
