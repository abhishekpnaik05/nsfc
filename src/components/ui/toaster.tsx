"use client";

import * as React from "react";
import { toast as sonnerToast } from "sonner";

export { sonnerToast as toast };

export function Toaster() {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Sonner Toaster will be rendered here */}
    </div>
  );
}
