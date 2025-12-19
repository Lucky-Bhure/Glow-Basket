'use client'

import { motion } from 'framer-motion'
import { ShoppingBag, Sparkles, Truck, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function page() {
  return (
    <main className="min-h-screen bg-gradient-to-br px-4 md:px-20 from-pink-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Discover Your <span className="text-pink-600">Glow</span> with Glow Basket
          </h1>
          <p className="mt-6 text-gray-600 text-lg">
            Your one-stop online shopping destination for beauty, lifestyle, and everyday essentials — curated just for you.
          </p>
          <div className="mt-8 flex gap-4">
            <Button className="rounded-2xl px-6 py-5 text-base border-2 border-[#ece2d3]">Shop Now</Button>
            <Button className="rounded-2xl px-6 py-5 text-base bg-white border-2 hover:bg-[#ece2d3] hover:border-[#ece2d3]">
              Explore Categories
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
            alt="Shopping"
            className="rounded-3xl shadow-xl"
          />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold text-center mb-12">Why Shop with Glow Basket?</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <Feature icon={<Sparkles />} title="Premium Products" description="Carefully selected quality items." />
          <Feature icon={<Truck />} title="Fast Delivery" description="Quick & reliable doorstep delivery." />
          <Feature icon={<ShieldCheck />} title="Secure Payments" description="100% safe & encrypted checkout." />
          <Feature icon={<ShoppingBag />} title="Easy Shopping" description="Smooth, user-friendly experience." />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-pink-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold">Start Your Shopping Journey Today</h3>
          <p className="mt-4 text-pink-100">Join thousands of happy customers glowing with confidence.</p>
          <Button className="mt-8 bg-white text-pink-600 hover:bg-pink-50 rounded-2xl px-8 py-5 text-base">
            Visit Store
          </Button>
        </div>
      </section>
    </main>
  )
}


type FeatureProps = {
  icon: React.ReactNode
  title: string
  description: string
}

const  Feature = ({ icon, title, description }: FeatureProps) => {
  return (
    <Card className="rounded-2xl shadow-sm hover:shadow-md transition">
      <CardContent className="p-6 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 text-pink-600">
          {icon}
        </div>
        <h4 className="font-semibold text-lg">{title}</h4>
        <p className="mt-2 text-sm text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}

