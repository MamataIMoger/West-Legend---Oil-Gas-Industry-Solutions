"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

// ================= INPUT ==================
interface AnimatedInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  className?: string;
}

export const AnimatedInput = ({
  label,
  className,
  ...props
}: AnimatedInputProps) => {
  const [focused, setFocused] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [translateX, setTranslateX] = useState(150);

  // Measure REAL input width to push placeholder OUTSIDE
  useEffect(() => {
    if (wrapperRef.current) {
      const width = wrapperRef.current.offsetWidth;
      setTranslateX(width + 40);
    }
  }, []);

  const hasValue =
    props.value !== undefined && String(props.value).trim().length > 0;

  return (
    <div ref={wrapperRef} className="relative w-full overflow-visible">
      <Input
        {...props}
        className={cn("h-12", className)}
        onFocus={(e) => {
          setFocused(true);
          props.onFocus?.(e);
        }}
        onBlur={(e) => {
          setFocused(false);
          props.onBlur?.(e);
        }}
      />

      <motion.span
        animate={{
          x: focused ? translateX : 0,
          opacity: focused ? 0 : hasValue ? 0 : 1,
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="absolute left-3 top-3 text-muted-foreground pointer-events-none whitespace-nowrap"
      >
        {label}
      </motion.span>
    </div>
  );
};

// ================= TEXTAREA ==================
interface AnimatedTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  className?: string;
}

export const AnimatedTextarea = ({
  label,
  className,
  ...props
}: AnimatedTextareaProps) => {
  const [focused, setFocused] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [translateX, setTranslateX] = useState(150);

  useEffect(() => {
    if (wrapperRef.current) {
      const width = wrapperRef.current.offsetWidth;
      setTranslateX(width + 40);
    }
  }, []);

  const hasValue =
    props.value !== undefined && String(props.value).trim().length > 0;

  return (
    <div ref={wrapperRef} className="relative w-full overflow-visible">
      <Textarea
        {...props}
        className={cn("pt-4 resize-none", className)}
        onFocus={(e) => {
          setFocused(true);
          props.onFocus?.(e);
        }}
        onBlur={(e) => {
          setFocused(false);
          props.onBlur?.(e);
        }}
      />

      <motion.span
        animate={{
          x: focused ? translateX : 0,
          opacity: focused ? 0 : hasValue ? 0 : 1,
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="absolute left-3 top-3 text-muted-foreground pointer-events-none whitespace-nowrap"
      >
        {label}
      </motion.span>
    </div>
  );
};
