
import { NewsItem } from '../types';
import { TECH_NEWS_SERVICE_UNAVAILABLE_MESSAGE } from '../constants';

// Since API credentials are not to be used, this service will indicate unavailability.
export const fetchTechNews = async (): Promise<NewsItem[]> => {
  console.warn(TECH_NEWS_SERVICE_UNAVAILABLE_MESSAGE);
  // Simulate an error or return empty, indicating the service is not operational without credentials.
  // Throwing an error allows the component to handle this state explicitly.
  throw new Error(TECH_NEWS_SERVICE_UNAVAILABLE_MESSAGE);
  
  // Alternatively, return an empty array if you prefer not to throw an error:
  // return Promise.resolve([]); 
};
