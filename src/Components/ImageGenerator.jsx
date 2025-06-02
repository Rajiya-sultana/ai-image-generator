import { useRef, useState } from "react";
import default_Image from "../assets/default_image.svg";

function ImageGenerator() {
  const [image_url, setImage_url] = useState("/");
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);

  const ImageGenerator = async () => {
    if (inputRef.current.value === "") return;
    setLoading(true);

    const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY; // Unsplash API key
 

    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${inputRef.current.value}&client_id=${accessKey}&per_page=1`
      );
      const data = await response.json();
      console.log(data);

      if (data.results && data.results.length > 0) {
        setImage_url(data.results[0].urls.regular);
      } else {
        setImage_url(default_Image);
      }
    } catch (error) {
      console.error("Error fetching images:", error);
      setImage_url(default_Image);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 gap-6 sm:gap-8">
      {/* Header */}
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium pb-4 sm:pb-6 md:pb-3 text-center">
        AI-Powered{" "}
        <span className="text-[#DE1B89] font-bold">Image Search</span>
      </div>

      {/* Image Display */}
      <div className="flex flex-col items-center gap-4">
        <div>
          <img
            src={image_url === "/" ? default_Image : image_url}
            alt="Generated or default image"
            className="w-full max-w-[90vw] sm:max-w-[300px] max-h-[60vh] sm:max-h-[300px] rounded-xl object-cover"
          />
        </div>

        {/* Loading Bar */}
        <div
          className={`h-2 bg-[#DE1B89] rounded transition-all duration-1000 ease-in-out ${
            loading ? "w-[90vw] sm:w-[512px]" : "w-0"
          }`}
        ></div>
        {loading && (
          <div className="text-base sm:text-lg md:text-xl">Loading...</div>
        )}
      </div>

      {/* Search Box */}
      <div className="flex flex-col sm:flex-row w-full max-w-[90vw] sm:max-w-[800px] h-auto sm:h-16 justify-between items-center rounded-3xl bg-[#1F3540] p-4 sm:p-0 gap-4 sm:gap-0">
        <input
          type="text"
          ref={inputRef}
          className="w-full sm:w-2/3 h-10 sm:h-12 bg-transparent border-none outline-none text-base sm:text-lg text-white pl-4 sm:pl-6 placeholder:text-[#999]"
          placeholder="Describe what you want to see"
        />
        <div
          className="flex items-center justify-center w-full sm:w-1/3 h-10 sm:h-12 max-w-[200px] text-base sm:text-lg rounded-3xl bg-[#DE1B89] cursor-pointer"
          onClick={ImageGenerator}
        >
          Search
        </div>
      </div>
    </div>
  );
}

export default ImageGenerator;
