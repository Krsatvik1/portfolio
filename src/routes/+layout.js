import { dev } from '$app/environment';
import { injectAnalytics } from '@vercel/analytics/sveltekit';

// Vercel Web Analytics: no cookies, real page views and visitors.
injectAnalytics({ mode: dev ? 'development' : 'production' });
