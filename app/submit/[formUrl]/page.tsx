import { GetFormByContentByUrl } from "@/actions/form";
import { FormElementInstance } from "@/components/FormElements";
import FormSubmitComponent from "@/components/FormSubmitComponent";
import React from "react";

type SubmitPageProps = {
  params: {
    formUrl: string;
  };
};

async function SubmitPage({ params }: SubmitPageProps) {
  const form = await GetFormByContentByUrl(params.formUrl);

  if (!form) throw new Error("Form not found");

  const formContent = JSON.parse(form.content) as FormElementInstance[];

  return <FormSubmitComponent formUrl={params.formUrl} content={formContent} />;
}

export default SubmitPage;
