"use client"

import type React from "react"

import { motion } from "framer-motion"

interface MotionWrapperProps {
  children: React.ReactNode
  className?: string
}

export default function MotionWrapper({ children, className }: MotionWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
