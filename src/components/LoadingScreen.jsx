import { useProgress } from "@react-three/drei";
import { useEffect } from "react";

export const LoadingScreen = (props) => {
  const { started, setStarted } = props;
  const { progress, total, loaded, item } = useProgress();

  useEffect(() => {
    console.log(progress, total, loaded, item);
    if (progress === 100) {
      setTimeout(() => {
        setStarted(true);
      }, 800);
    }
  }, [progress, total, loaded, item]);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full z-50 transition-opacity duration-1000 pointer-events-none
        flex items-center justify-center`}
      style={{ backgroundColor: "#161925", opacity: started ? 0 : 1 }}
    >
      <div className="text-4xl md:text-9xl font-bold text-green-300 relative">
        <div
          className="absolute left-0 top-0 overflow-hidden truncate text-clip transition-all duration-500"
          style={{
            width: `${progress}%`,
            height: "200%",
            color: "#def71d",
          }}
        >
          Prabhanshu Singh
        </div>
        <div className="opacity-40">Prabhanshu Singh</div>
      </div>
    </div>
  );
};
