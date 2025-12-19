'use client'

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { verifySchema } from "@/schemas/verifySchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import * as z from "zod"

const page = () => {

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const form = useForm<z.infer <typeof verifySchema>>({
    resolver: zodResolver(verifySchema),
    defaultValues: {
      code: ""
    }
  })

  const onSubmit = async() => {

  }

  return (
    <div className='flex justify-center items-center min-h-screen bg-black'>
      <div className='w-full max-w-md p-8 space-y-8 bg-background rounded-lg shadow-md'>
        <div className='text-center'>
          <h1 className='text-3xl text-primary font-bold tracking-tight lg:text-5xl mb-6'>
            Verify Your Account
          </h1>
          <p className='mb-4 text-primary font-semibold'>Enter the verification code sent to your email</p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 text-primary">
            <FormField
              control={form.control}
              name="code"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Verification Code</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter verification code" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <Button className="bg-[#06b] hover:bg-[#08d] w-full" onClick={() => setIsSubmitting((prev) => !prev)}>
              {
                isSubmitting ? (<>
                  <Loader2 className='mr-2 h-5 w-5 animate-spin' /> Please wait
                </>):('Verify')
              }
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default page
