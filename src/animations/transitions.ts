export const transitions = {
  micro: { duration: 0.2, ease: "easeOut" as const },
  normal: { duration: 0.3, ease: "easeOut" as const },
  dramatic: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const },
  slow: { duration: 0.8, ease: [0.4, 0, 0.2, 1] as const },
};
