"use client";

import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";

type VisitBtnProps = {
  shareUrl: string;
};

function VisitBtn({ shareUrl }: VisitBtnProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // avoiding window not defined error

  const shareLink = `${window.location.origin}/submit/${shareUrl}`;
  return (
    <Button
      className="w-[200px]"
      onClick={() => {
        window.open(shareLink, "_blank");
      }}
    >
      Visit
    </Button>
  );
}

export default VisitBtn;
