const getBaseUrl = () => {
  return typeof window !== 'undefined' ? 'https://portfolio-backend-xi-sandy.vercel.app' : 'https://portfolio-backend-xi-sandy.vercel.app';
};

export { getBaseUrl };
