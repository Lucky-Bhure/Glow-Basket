'use client'

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { signInSchema } from "@/schemas/signInSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Eye, EyeOff, Loader2 } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useForm } from "react-hook-form"
import * as z from "zod"

const page = () => {

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });


  const onSubmit = async() => {

  }

  return (
    <div className='flex justify-center items-center min-h-screen bg-black'>
      <div className='w-full max-w-md p-8 space-y-8 bg-background rounded-lg shadow-md'>
        <div className='text-center'>
          <h1 className='text-3xl text-primary font-bold tracking-tight lg:text-5xl mb-6'>
            <Link href={"/"}>Join Glow Basket</Link>
          </h1>
          <p className='mb-4 text-primary font-semibold'>Register to start your Basket</p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 text-primary">

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input 
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Enter your email"
                        className="pr-10" 
                        {...field}
                        />
                      <button 
                      onClick={() => setShowPassword((prev) => !prev)}
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-white hover:text-red-600">
                        {
                          showPassword ? (
                            <EyeOff className="h-5 w-5"/>
                          ) :(
                            <Eye className="h-5 w-5"/>
                          )
                        }
                      </button>
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />

            <Button className="bg-[#06b] hover:bg-[#08d] w-full" onClick={() => setIsSubmitting((prev) => !prev)}>
              {
                isSubmitting ? <>
                  <Loader2 className='mr-2 h-5 w-5 animate-spin' /> Please wait
                </> : ('Sign In')
              }
            </Button>
          </form>
        </Form>
        <div className="w-full">
          <p className="flex justify-center text-primary">
            Don&apos;t have a account ? <Link href={'/sign-up'} className="pl-2 text-[#08d]">Register</Link>
          </p>
        </div>
      </div>


    </div>
  )
}

export default page
