'use client'

import { Button } from "@/components/ui/button"
import { toast } from "sonner"

const page = () => {
  const onSubmit = () => {
    toast.success("Welcome to the dashboard!")
  } 
  return (
    <>
      <h1>Dashboard</h1>
      <Button onClick={onSubmit}>Show Welcome Toast</Button>
    </>
  )
}

export default page
