import { RateLimiterMemory } from 'rate-limiter-flexible';

const rateLimiter = new RateLimiterMemory({
  points: 10, // Number of points
  duration: 1, // Per second
});

export const rateLimit = async (key: string) => {
  try {
    await rateLimiter.consume(key);
    return true;
  } catch (rejRes) {
    return false;
  }
};