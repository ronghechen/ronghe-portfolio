import React, { useEffect, useMemo, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
    const [isPointer, setPointer] = useState(false);
    const [isDown, setIsDown] = useState(false);
    const x = useMotionValue(-100);
    const y = useMotionValue(-100);
    const ringX = useSpring()
}