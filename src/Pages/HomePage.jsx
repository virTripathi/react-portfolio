import { useState, useEffect } from "react";

const HomePage = () => {

  const [homeText, setHomeText] = useState("");

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setHomeText(data.home_text))
      .catch((error) => console.error("Error loading JSON:", error));
  }, []);
  return (
    <p className="tracking-wider max-w-52 ms-8 lg:max-w-52 text-sm lg:text-md">
      {homeText}
    </p>
  );
};

export default HomePage;
