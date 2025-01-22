import { useState } from "react";

export default function SingleBallon({
  message,
  xCoord,
  yCoord,
}: {
  message: string;
  xCoord: number;
  yCoord: number;
}) {
  const [isVisible, setIsVisible] = useState(false);

  const changeVisibility = () => {
    setIsVisible(true);
  };

  return (
    <div
      style={{
        position: "absolute",
        left: `${xCoord}px`,
        top: `${yCoord}px`,
      }}
      className="flex flex-col items-center"
    >
      {!isVisible &&
      <picture
        onClick={changeVisibility}
        className="flex flex-col items-center justify-center cursor-pointer"
      >
        <source
          srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f388/512.webp"
          type="image/webp"
        />
        <img
          src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f388/512.gif"
          alt="🎈"
          width="32"
          height="32"
          className="z-10"
        />
      </picture>
      }

      {isVisible && (
        <span className="mt-2 z-0">{message}</span>
      )}
    </div>
  );
}
