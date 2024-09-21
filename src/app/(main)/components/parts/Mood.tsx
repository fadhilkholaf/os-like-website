import { useEffect } from "react";

const Mood = () => {
  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const response = await fetch("/api/spotify", { cache: "no-store" });
        if (!response.ok) {
          throw new Error("Failed to fetch now playing data");
        }

        const data = await response.json();

        console.log(data);

        return data;
      } catch (error) {
        console.error("Error fetching now playing:", error);
        return null;
      }
    };
    fetchNowPlaying();
  }, []);
  return <div>Mood</div>;
};

export default Mood;
