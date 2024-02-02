"use client";

import { Button } from "./ui/button";
import { toast } from "sonner";

const TestToast = () => {
  const handleClick = () => {
    toast("Hello, world!");
  };
  return <Button onClick={handleClick}>Sonner</Button>;
};

export default TestToast;
