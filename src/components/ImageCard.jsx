import {useMotionValue, useTransform, motion} from "framer-motion";
import { useState } from "react";

export default function ImageCard({ image, index, setIndex, totalImages, frontCard = false }) {
  const [exitX, setExitX] = useState(0);
  const x = useMotionValue(0);
  const scale = useTransform(x, [-150, 0, 150], [0.8, 1, 0.8]);
  const rotate = useTransform(x, [-150, 0, 150], [-15, 0, 15], { clamp: false });

  const variants = {
    animate: { scale: 1, y: 0, opacity: 1 },
    exit: (custom) => ({
      x: custom,
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.3 }
    })
  };

  const backCardVariants = {
    initial: { scale: 0.9, y: 20, opacity: 0.6 },
    animate: { scale: 0.9, y: 10, opacity: 0.8 }
  };

  function handleDragEnd(_, info) {
    if (info.offset.x < -100) {
      setExitX(-500);
      setIndex((index + 1) % totalImages);
    }
    if (info.offset.x > 100) {
      setExitX(500);
      setIndex((index + 1) % totalImages);
    }
  }

  return (
    <motion.div
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        x: frontCard ? x : 0,
        rotate: frontCard ? rotate : 0,
        cursor: frontCard ? "grab" : "auto",
        zIndex: frontCard ? 10 : 1
      }}
      whileTap={{ cursor: frontCard ? "grabbing" : "auto" }}
      drag={frontCard ? "x" : false}
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      onDragEnd={frontCard ? handleDragEnd : undefined}
      variants={frontCard ? variants : backCardVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      custom={exitX}
      transition={
        frontCard
          ? { type: "spring", stiffness: 300, damping: 20 }
          : { scale: { duration: 0.2 }, opacity: { duration: 0.4 } }
      }
    >
      <motion.img
        src={image}
        alt="Profile"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "1.5rem",
          scale: frontCard ? scale : 1,
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
          border: "4px solid rgba(255, 255, 255, 0.4)",
          WebkitUserDrag: "none",
          userSelect: "none",
          pointerEvents: "none" 
        }}
      />
    </motion.div>
  );
}