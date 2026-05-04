"use client";

import { useEffect } from "react";

function isProtectedMedia(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) {
    return false;
  }

  return Boolean(target.closest("img, picture, svg, video, canvas"));
}

export default function CopyProtection() {
  useEffect(() => {
    function handleContextMenu(event: MouseEvent) {
      if (isProtectedMedia(event.target)) {
        event.preventDefault();
      }
    }

    function handleDragStart(event: DragEvent) {
      if (isProtectedMedia(event.target)) {
        event.preventDefault();
      }
    }

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("dragstart", handleDragStart);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("dragstart", handleDragStart);
    };
  }, []);

  return null;
}
