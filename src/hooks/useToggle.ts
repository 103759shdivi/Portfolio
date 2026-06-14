import { useCallback, useState } from "react";

export default function useToggle(initial = false) {
  const [on, setOn] = useState<boolean>(initial);
  const toggle = useCallback(() => setOn((v) => !v), []);
  return { on, setOn, toggle } as const;
}
