import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html fullscreen>
      <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-b from-sky-200 to-sky-50">
        <div className="w-16 h-16 border-4 border-white/60 border-t-blue-500 rounded-full animate-spin" />
        <p className="mt-4 text-blue-900 font-semibold tracking-wide">
          {Math.round(progress)}%
        </p>
        <p className="mt-1 text-sm text-blue-900/60">Loading the island...</p>
      </div>
    </Html>
  );
};

export default Loader;
