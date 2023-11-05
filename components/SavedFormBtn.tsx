import React, { useTransition } from "react";
import { Button } from "./ui/button";

import { HiSaveAs } from "react-icons/hi";
import useDesigner from "./hooks/useDesigner";
import { UpdateFormContent } from "@/actions/form";
import { toast } from "./ui/use-toast";
import { FaSpinner } from "react-icons/fa";

function SavedFormBtn({ id }: { id: number }) {
  const { elements } = useDesigner();
  const [isPending, startTransition] = useTransition();

  const updateFormContent = async (): Promise<void> => {
    try {
      const JsonElements = JSON.stringify(elements);
      await UpdateFormContent(id, JsonElements);

      toast({
        title: "Success",
        description: "Your form has been saved",
      });
    } catch (error) {
      toast({
        title: "Success",
        description: "Error: " + error,
        variant: "destructive",
      });
    }
  };

  return (
    <Button
      variant={"outline"}
      className="gap-2"
      disabled={isPending}
      onClick={() => {
        startTransition(() => {
          updateFormContent();
        });
      }}
    >
      <HiSaveAs className="h-4 w-4" />
      Save
      {isPending && <FaSpinner className="animate-spin" />}
    </Button>
  );
}

export default SavedFormBtn;
