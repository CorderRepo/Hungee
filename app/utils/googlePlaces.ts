import axios from "axios";

const GOOGLE_API_KEY = process.env.EXPO_PUBLIC_GOOGLE_API_KEY; // stored in .env

export async function fetchNearbyRestaurants(lat: number, lng: number) {
  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=2000&type=restaurant&key=${GOOGLE_API_KEY}`;

  try {
    const response = await axios.get(url);

    return response.data.results.map((place: any) => ({
      id: place.place_id,
      name: place.name,
      desc: place.vicinity, // usually address
      image: place.photos
        ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${place.photos[0].photo_reference}&key=${GOOGLE_API_KEY}`
        : "https://via.placeholder.com/400",
    }));
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    return [];
  }
}
