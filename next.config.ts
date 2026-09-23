import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // 🔥 FIX: allowedDevOrigins ab experimental ke andar nahi, balki bahar root level par aata hai
  allowedDevOrigins: ['192.168.100.53:3000', '192.168.100.53'],

  // Turbopack root directory warning ko lock karne ke liye
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
