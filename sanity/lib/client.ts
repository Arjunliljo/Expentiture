import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Enable CDN for better performance
  perspective: 'published',
  stega: {
    enabled: false,
    studioUrl: '/ec-admin'
  },
  // Enhanced timeout and retry configuration
  timeout: 60000, // 60 seconds timeout
  maxRetries: 3,
  retryDelay: (attemptNumber) => 1000 * attemptNumber, // Progressive delay between retries
  ignoreBrowserTokenWarning: true,
})
