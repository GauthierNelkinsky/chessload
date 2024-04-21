import { FC } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Textarea } from "../ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

const formSchema = z.object({
    name: z.string().min(1, {message:"Required"}).max(32),
    description: z.string().max(200).optional(),
})

interface IProps {
    children?: React.ReactNode;
}

const NewRepertoireDialog: FC<IProps> = ({children}) => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            description: "",
        },
      })

        // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // This will be type-safe and validated.
        console.log(values)
    }
    
  
  return (
    <Dialog>
        <DialogTrigger asChild className="">
            {children}
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Update the repertoire ?</DialogTitle>
                {/* <DialogDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                </DialogDescription> */}
            </DialogHeader>
            <div className="grid gap-2 py-4 items-end">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-x-4">
                            <FormLabel className="text-right">Name</FormLabel>
                            <FormControl className="col-span-3">
                                <Input placeholder="Name of the repertoire" {...field} />
                            </FormControl>
                            {/* <FormDescription>
                                This is your public display name.
                            </FormDescription> */}
                            <FormMessage className="col-start-2 col-end-5 row-span-2"/>
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-x-4">
                            <FormLabel className="text-right">Description</FormLabel>
                            <FormControl className="col-span-3">
                                <Textarea className="resize-none" placeholder="A small description for your repertoire ..." {...field} />
                            </FormControl>
                            {/* <FormDescription>
                                This is your public display name.
                            </FormDescription> */}
                            <FormMessage className="col-start-2 col-end-5 row-span-2" />
                            </FormItem>
                        )}
                        />
                        <Button className="float-right" type="submit">Update</Button>
                    </form>
                </Form>
            </div>
        </DialogContent>
    </Dialog>
    );
};

export default NewRepertoireDialog;