import { useThree } from "@react-three/fiber";
import { useCallback, useRef } from "react";
import { Vector2 } from "three";

type SplatStack = {
  mouseX?: number;
  mouseY?: number;
  velocityX?: number;
  velocityY?: number;
};

export const usePointer = ({ force }: { force: number }) => {
  const size = useThree((three) => three.size);
  const splatStack: SplatStack[] = useRef([]).current;
  const lastMouse = useRef<Vector2>(new Vector2());
  const hasMoved = useRef<boolean>(false);

  const handlePointerMove = useCallback(
    (event: PointerEvent | TouchEvent) => {
      let clientX: number, clientY: number;

      if ("touches" in event) {
        clientX = event.touches[0].clientX;
        clientY = event.touches[0].clientY;
      } else {
        clientX = event.clientX;
        clientY = event.clientY;
      }

      const deltaX = clientX - lastMouse.current.x;
      const deltaY = clientY - lastMouse.current.y;

      if (!hasMoved.current) {
        hasMoved.current = true;
        lastMouse.current.set(clientX, clientY);
      }

      lastMouse.current.set(clientX, clientY);

      if (!hasMoved.current) return;

      splatStack.push({
        mouseX: clientX / size.width,
        mouseY: 1.0 - clientY / size.height,
        velocityX: deltaX * force,
        velocityY: -deltaY * force,
      });
    },
    [force, size.height, size.width, splatStack],
  );

  return { onPointerMove: handlePointerMove, splatStack };
};
