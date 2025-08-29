import React from 'react';
import { motion } from 'framer-motion';

const Background = ({ children, variant = 'default' }) => {
  // Variasi warna gradient berdasarkan variant
  const gradientVariants = {
    default: 'from-pink-200 via-orange-200 to-yellow-200',
    warm: 'from-rose-200 via-amber-200 to-orange-200',
    cool: 'from-blue-200 via-purple-200 to-pink-200',
    soft: 'from-purple-100 via-pink-100 to-orange-100'
  };

  // Animasi untuk floating objects
  const floatingAnimation = {
    animate: {
      y: [-10, 10, -10],
      rotate: [-5, 5, -5],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseAnimation = {
    animate: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const rotateAnimation = {
    animate: {
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Main Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradientVariants[variant]} opacity-90`} />
      
      {/* Animated Circles dengan Berbagai Ukuran dan Gradients */}
      
      {/* Large Circle - Top Left */}
      <motion.div 
        className="absolute top-20 left-16 w-48 h-48 rounded-full bg-gradient-to-br from-teal-200 to-cyan-300 opacity-30 blur-md"
        variants={floatingAnimation}
        animate="animate"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
      />

      {/* Extra Large Circle - Top Center */}
      <motion.div 
        className="absolute top-8 left-1/3 w-64 h-64 rounded-full bg-gradient-to-tr from-purple-200 to-pink-300 opacity-20 blur-lg"
        animate={{ 
          y: [-30, 30, -30],
          x: [-15, 15, -15],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 0.2, scale: 1 }}
      />

      {/* Medium Circle - Top Right */}
      <motion.div 
        className="absolute top-12 right-20 w-36 h-36 rounded-full bg-gradient-to-br from-rose-200 to-orange-300 opacity-35 blur-sm"
        variants={pulseAnimation}
        animate="animate"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 0.35, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      />

      {/* Small Circle - Top Right Corner */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-20 h-20 rounded-full bg-gradient-to-bl from-yellow-300 to-amber-400 opacity-40 blur-sm"
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.3, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.4 }}
      />

      {/* Medium Circle - Left Side */}
      <motion.div 
        className="absolute top-1/3 left-8 w-32 h-32 rounded-full bg-gradient-to-tr from-emerald-200 to-teal-300 opacity-40 blur-sm"
        variants={rotateAnimation}
        animate="animate"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.4 }}
        transition={{ duration: 1.5, delay: 0.6 }}
      />

      {/* Small Circle - Left Center */}
      <motion.div 
        className="absolute top-1/2 left-32 w-24 h-24 rounded-full bg-gradient-to-br from-pink-300 to-rose-400 opacity-45"
        animate={{ 
          y: [-20, 20, -20],
          rotate: [0, -360]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.45 }}
      />

      {/* Medium Circle - Center Right */}
      <motion.div 
        className="absolute top-1/2 right-1/3 w-28 h-28 rounded-full bg-gradient-to-tr from-indigo-200 to-blue-300 opacity-35 blur-sm"
        animate={{ 
          x: [-10, 10, -10],
          y: [-15, 15, -15],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.35 }}
      />

      {/* Extra Large Circle - Bottom Left */}
      <motion.div 
        className="absolute bottom-32 left-20 w-72 h-72 rounded-full bg-gradient-to-tr from-yellow-200 to-orange-200 opacity-15 blur-xl"
        animate={{ 
          rotate: [0, 180, 360],
          scale: [1, 1.05, 1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 0.15, y: 0 }}
      />

      {/* Medium Circle - Bottom Center */}
      <motion.div 
        className="absolute bottom-1/3 left-1/3 w-40 h-40 rounded-full bg-gradient-to-br from-violet-200 to-purple-300 opacity-30 blur-md"
        animate={{ 
          rotate: [0, -180, -360],
          scale: [1, 1.15, 1]
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.3 }}
      />

      {/* Large Circle - Right Side */}
      <motion.div 
        className="absolute top-2/3 right-12 w-52 h-52 rounded-full bg-gradient-to-bl from-rose-200 to-pink-200 opacity-25 blur-lg"
        animate={{ 
          x: [0, 25, 0],
          y: [0, -25, 0]
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 0.25, x: 0 }}
      />

      {/* Small Circle - Bottom Right */}
      <motion.div 
        className="absolute bottom-20 right-24 w-24 h-24 rounded-full bg-gradient-to-tl from-lime-300 to-green-400 opacity-45 blur-sm"
        animate={{ 
          y: [-20, 20, -20],
          scale: [1, 1.25, 1]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.45 }}
      />

      {/* Tiny Floating Circles */}
      {[...Array(15)].map((_, i) => {
        const gradients = [
          'from-cyan-300 to-blue-400',
          'from-purple-300 to-violet-400',
          'from-pink-300 to-rose-400',
          'from-yellow-300 to-amber-400',
          'from-emerald-300 to-teal-400',
          'from-orange-300 to-red-400',
          'from-indigo-300 to-purple-400',
          'from-green-300 to-lime-400'
        ];
        
        const sizes = ['w-3 h-3', 'w-4 h-4', 'w-5 h-5', 'w-6 h-6', 'w-8 h-8'];
        const blurs = ['blur-sm', '', 'blur-xs'];
        
        return (
          <motion.div
            key={i}
            className={`absolute rounded-full bg-gradient-to-br ${gradients[i % gradients.length]} ${sizes[i % sizes.length]} ${blurs[i % blurs.length]} opacity-40`}
            style={{
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 80 + 10}%`,
            }}
            animate={{
              y: [-15 - (i * 2), 25 + (i * 2), -15 - (i * 2)],
              x: [-8, 8, -8],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 5 + (i * 0.3),
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 0.4, scale: 1 }}
          />
        );
      })}

      {/* Medium Circle - Center */}
      <motion.div 
        className="absolute top-1/2 left-1/2 w-44 h-44 rounded-full bg-gradient-to-r from-fuchsia-200 to-pink-200 opacity-20 blur-lg transform -translate-x-1/2 -translate-y-1/2"
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.2 }}
      />

      {/* Bottom Right Decorative Circle */}
      <motion.div 
        className="absolute bottom-16 right-16 w-36 h-36 rounded-full bg-gradient-to-br from-amber-200 to-yellow-300 opacity-30 blur-md"
        animate={{ 
          rotate: [0, -360],
          scale: [1, 1.08, 1]
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        initial={{ opacity: 0, rotate: -180 }}
        whileInView={{ opacity: 0.3, rotate: 0 }}
      />

      {/* Content Layer */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default Background;