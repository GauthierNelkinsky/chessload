import * as React from "react"

import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import useAutosizeTextArea from "@/app/hooks/useAutosizeTextArea";

const textareaVariants = cva(
  "flex w-full rounded-md text-sm placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "min-h-[60px] px-3 py-2 border border-input bg-transparent shadow-sm focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-1",
        ghost: "bg-transparent h-1 focus-visible:ring-0 focus-visible:outline-none focus-visible:ring-transparent resize-none",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  VariantProps<typeof textareaVariants> {
    autoSize?: boolean;
  }


const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant, autoSize, ...props }, ref) => {
    const textAreaRef = React.useRef<HTMLTextAreaElement>(null);
    if (autoSize) {
      useAutosizeTextArea(textAreaRef.current, props.value ? props.value.toString() : "");
    }
    return (
      <textarea
        className={cn(textareaVariants({ variant, className }))}
        ref={textAreaRef}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
