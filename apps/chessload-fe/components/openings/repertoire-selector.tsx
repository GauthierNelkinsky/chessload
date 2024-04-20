import { FC, useState} from "react";
import { Check, ChevronsUpDown, Pencil, CirclePlus } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import NewRepertoireDialog from "./newRepertoireDialog";
import EditRepertoireDialog from "./editRepertoireDialog";


 
const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  }
]

interface IProps {
    className?: string;
    name?: string;
}

const RepertoireSelector: FC<IProps> = ({className, name}) => {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")
  
  return (
        <div className={cn("pb-6",className)}>
            <div className="pb-6">
                <h3 className="font-semibold leading-none tracking-tight">Repertoires</h3>
            </div>
            <div className="flex flex-col gap-1">
                <div className="flex gap-2 items-center">
                    <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                            <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={open}
                            className="w-full justify-between"
                            >
                            {value
                                ? frameworks.find((framework) => framework.value === value)?.label
                                : "Select repertoire..."}
                                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="p-0 w-[211px]">
                            <Command className="max-h-[200px]">
                                <CommandInput placeholder="Search repertoire..." />
                                <CommandList>
                                    <CommandEmpty>No repertoire found.</CommandEmpty>
                                    <CommandGroup>
                                        <NewRepertoireDialog >
                                            <CommandItem value="create">
                                                <div className="flex items-center gap-2">
                                                    <CirclePlus className="h-4 w-4" />
                                                    Create new repertoire
                                                </div>
                                            </CommandItem>
                                        </NewRepertoireDialog>
                                    </CommandGroup>
                                    <CommandSeparator />
                                    <CommandGroup heading="White">
                                            {frameworks?.map((framework) => (
                                            <CommandItem
                                                key={framework.value}
                                                value={framework.value}
                                                onSelect={(currentValue) => {
                                                setValue(currentValue === value ? "" : currentValue)
                                                setOpen(false)
                                                }}
                                                className="group"
                                            >
                                                <Check
                                                className={cn(
                                                    "mr-2 h-4 w-4",
                                                    value === framework.value ? "opacity-100" : "opacity-0"
                                                )}
                                                />
                                                {framework.label}
                                            </CommandItem>
                                        ))}
                                    </CommandGroup>
                                </CommandList>
                            </Command>
                        </PopoverContent>
                    </Popover>
                        <EditRepertoireDialog>
                            <Button variant="ghost" className="p-2">
                                <Pencil className="ml-auto h-4 w-4" />
                            </Button>
                        </EditRepertoireDialog>
                </div>
                <p className="pt-2 text-sm text-justify text-muted-foreground">
                    Sed in risus turpis. Curabitur tincidunt magna nec felis lacinia semper. Aenean varius, ipsum nec volutpat venenatis, metus felis commodo sem, id sollicitudin eros turpis vitae purus. In tincidunt tincidunt lacinia.
                </p>
                
            </div>
        </div>
    );
};

export default RepertoireSelector;