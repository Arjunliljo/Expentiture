import { SchemaTypeDefinition } from "sanity";

import { authorType } from "./authorType";
import { benefitType } from "./benefitType";
import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { frameworkContentType } from "./frameworkContentType";
import { insightType } from "./insightType";
import { legalType } from "./legalType";
import { serviceContentType } from "./serviceContentType";
import { serviceType } from "./serviceType";
import { testimonialType } from "./testimonialType";
import { siteSettingsType } from "./siteSettings";
import { socialLinkType } from "./socialLinkType";
import { partnerImage } from "./partnerImage";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [
		blockContentType,
		categoryType,
		insightType,
		authorType,
		serviceType,
		serviceContentType,
		frameworkContentType,
		legalType,
		benefitType,
		testimonialType,
		socialLinkType,
		siteSettingsType,
		partnerImage,
	],
};
