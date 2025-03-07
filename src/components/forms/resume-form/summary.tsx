import React, { ChangeEvent, useState } from "react";
import { AiSuggestedSummaryType, Props } from "./type";
import TextArea from "@/components/ui/text-area";
import Button from "@/components/ui/button";
import { generateSummary } from "@/lib/helpers/get-summary";

const Summary = ({ handleChange, input, setInput }: Props) => {
  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    handleChange(e as unknown as ChangeEvent<HTMLInputElement>);
  };

  const [aiSuggestions, setAiSuggestions] = useState<AiSuggestedSummaryType[]>(
    []
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getSummary = async () => {
    setIsLoading(true);
    const res = await generateSummary(input!);
    setAiSuggestions(res);
    setIsLoading(false);
  };

  const onPick = (summary: string) => {
    setInput!((prev) => ({
      ...prev,
      summary,
    }));
  };

  //render ai suggestions
  const renderAISuggestions = () => {
    return (
      aiSuggestions &&
      aiSuggestions?.length > 0 && (
        <div>
          <p className="text-lg mt-4 font-semibold text-center underline">
            AI Suggestions
          </p>
          {aiSuggestions?.map((suggestion, index) => (
            <div key={index} className="my-4">
              <p className="font-bold">
                {suggestion.experienceLevel}{" "}
                <button
                  className=" cursor-pointer hover:bg-primary text-white text-primary font-normal border rounded px-2 ml-3"
                  onClick={() => onPick(suggestion.summary)}
                  type="button"
                >
                  Pick
                </button>
              </p>
              <p>{suggestion.summary}</p>
            </div>
          ))}
        </div>
      )
    );
  };


  return (
    <div>
      <Button
        type="button"
        disabled={isLoading}
        isLoading={isLoading}
        onClick={getSummary}
        className="!h-[30px] mb-2 !px-4"
      >
        Generate with AI
      </Button>

      <TextArea name="summary" value={input?.summary} onChange={onChange} />

      {renderAISuggestions()}

    </div>
  );
};

export default Summary;
