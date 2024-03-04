import { useEffect, useRef } from "react";
import * as React from "react";
import { Send } from "lucide-react";
import { Check, ChevronsUpDown } from "lucide-react";
import { Textarea } from "../ui/textarea";
import { useContext } from "react";
import { ChatContext } from "./ChatContext";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { BsFillSendFill } from "react-icons/bs";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ImAttachment } from "react-icons/im";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import UploadButton from "../UploadButton";

// import "react-datepicker/dist/react-datepicker.css";

interface ChatInputProps {
  isDisabled?: boolean;
}

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const ChatInput = ({ isDisabled }: ChatInputProps) => {
  const {
    addMessage,
    handleInputChange,
    message,
    isLoading,
    questionType,
    options,
  } = useContext(ChatContext);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  // const [prevMessage, setPrevMessage] = useState<string>("");

  useEffect(() => {
    if (
      questionType === "Date" ||
      questionType === "drop_down" ||
      questionType === "multiple_choice"
    ) {
      addMessage();
      handleInputChange("");
    }
  }, [message]);
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = useState(options![0]);

  const currentDate = dayjs();
  const [startDate, setStartDate] = useState<Dayjs>(currentDate);

  useEffect(() => {
    if (questionType == "drop_down") {
      setValue(options![0]);
    }
  }, [questionType]);

  if (questionType == "Date") {
    return (
      <div className=" max-w-3xl w-full h-7 fixed bottom-5 mx-auto left-1/2 -translate-x-1/2">
        <div className="relative px-2 md:px-1 h-full flex justify-center gap-3 items-center">
          {/* <DatePicker 
            selected={startDate} 
            onChange={(date:Date) => setStartDate(date)}
            showMonthDropdown
            showYearDropdown
            dropdownMode="select" 
            className='rounded-lg h-full px-2 bg-textbox text-white border border-1 border-border-opacity outline-none'
          /> */}
          <ThemeProvider theme={darkTheme}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker
                  value={startDate}
                  onChange={(date: Dayjs | null) =>
                    setStartDate(date ?? new Dayjs())
                  }
                />
              </DemoContainer>
            </LocalizationProvider>
          </ThemeProvider>
          <button
            className="inline-flex items-center justify-center gap-1 font-semibold md:font-medium transition-colors disabled:opacity-50 disabled:pointer-events-none bg-ant-primary hover:bg-ant-primary-h disabled:bg-ant-secondary-h text-white aspect-square !px-1 !py-1 "
            onClick={() => {
              const date: string = startDate.format("DD-MM-YYYY");
              date;
              handleInputChange(date);
            }}
          >
            <div className="flex justify-center items-center w-10 h-10 rounded-lg bg-button">
              <Send className="h-5 w-5 text-white" />
            </div>
          </button>
        </div>
      </div>
    );
  } else if (questionType == "drop_down") {
    return (
      <div className=" max-w-3xl w-full h-7 fixed bottom-5 mx-auto left-1/2 -translate-x-1/2 flex justify-center">
        <div className="relative px-2 md:px-1 h-full flex justify-center gap-3 items-center">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild className="bg-dropdown">
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-[200px] justify-between text-white hover:text-white hover:bg-black"
              >
                {value !== "" ? value : options![0]}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 text-white" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0 overflow-auto max-h-72">
              <Command className="bg-dropdown text-white">
                <CommandInput placeholder="Search..." className="text-white" />
                <CommandEmpty className="text-white">
                  No framework found.
                </CommandEmpty>
                <CommandGroup className="text-white">
                  {options!.map((framework) => (
                    <CommandItem
                      key={framework}
                      value={framework}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : currentValue);
                        setOpen(false);
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          value === framework ? "opacity-100" : "opacity-0"
                        )}
                      />
                      {framework}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
          <button
            className="inline-flex items-center justify-center gap-1 font-semibold md:font-medium transition-colors disabled:opacity-50 disabled:pointer-events-none bg-ant-primary hover:bg-ant-primary-h disabled:bg-ant-secondary-h text-white aspect-square !px-1 !py-1 rounded-xl"
            onClick={() => handleInputChange(value)}
          >
            <div className="flex justify-center items-center w-10 h-10 rounded-lg bg-button">
              <Send className="h-5 w-5 text-white" />
            </div>
          </button>
        </div>
      </div>
    );
  } else if (questionType == "multiple_choice") {
    return (
      <div className=" max-w-3xl w-full fixed bottom-5 mx-auto left-1/2 -translate-x-1/2">
        <div className="relative px-2 md:px-1 ">
          <div className="flex flex-wrap justify-start items-center w-full max-h-9">
            {options!.map((choice: string, index) => (
              <button
                className="bg-button flex-1 py-2 px-3 rounded-md mx-3"
                key={index}
                onClick={() => {
                  handleInputChange(choice);

                  // addMessage()
                }}
              >
                {choice}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="fixed bottom-0 left-0 w-full">
        <div className="mx-2 flex flex-row gap-3 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl">
          <div className="flex h-full flex-1 items-stretch md:flex-col">
            <div className="flex flex-col w-full flex-grow p-4">
              <div className="flex justify-between items-center">
                <Textarea
                  rows={1}
                  ref={textareaRef}
                  maxRows={4}
                  autoFocus
                  onChange={handleInputChange}
                  value={message}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      addMessage();
                      handleInputChange("");
                      textareaRef.current?.focus();
                    }
                  }}
                  placeholder="Enter your question..."
                  className="resize-none pr-12 text-base py-3 scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-thumb-blue-lighter scrollbar-w-2 scrolling-touch"
                />
                <div className="flex items-center justify-center rounded-lg ml-2 bg-orange-400">
                  {/* <label className="relative grid place-content-center aspect-square rounded-lg cursor-pointer bg-uivory-100 [fieldset:not(:disabled)_&]:hover:bg-uivory-300 [fieldset:disabled_&]:opacity-50 [fieldset:disabled_&]:pointer-events-none focus-within:ring">
                    <input
                      className="opacity-0 absolute inset-0 rounded-xl -z-10 overflow-hidden"
                      accept=".pdf,.doc,.docx,.rtf,.epub,.odt,.odp,.pptx,.txt,.py,.ipynb,.js,.jsx,.html,.css,.java,.cs,.php,.c,.cpp,.cxx,.h,.hpp,.rs,.R,.Rmd,.swift,.go,.rb,.kt,.kts,.ts,.tsx,.m,.scala,.rs,.dart,.lua,.pl,.pm,.t,.sh,.bash,.zsh,.csv,.log,.ini,.config,.json,.yaml,.yml,.toml,.lua,.sql,.bat,.md,.coffee,.tex,.latex"
                      type="file"
                      // onChange={handleFileChange}
                    />
                    <ImAttachment className="w-5 h-5 text-white" />
                  </label> */}
                  <UploadButton />
                </div>
                <button
                  disabled={isLoading || isDisabled}
                  className="bg-button rounded-lg w-10 h-10 p-2 ml-2 right-[8px]"
                  aria-label="send message"
                  type="button"
                  onClick={() => {
                    addMessage();
                    handleInputChange("");
                    textareaRef.current?.focus();
                  }}
                >
                  <Send className="h-5 w-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default ChatInput;
