'use client'

import { Button } from "@/components/ui/button"
import { toast } from "sonner"

const products = [
  {
    _id: "1",
    name: "Chair",
    description: "Comfortable wooden chair",
    imageUrl: "https://m.media-amazon.com/images/I/41r+lis7tnL._SY300_SX300_QL70_FMwebp_.jpg",
    price: "500",
    stock: "10",
    sku: "3",
    categoryId: ["chair", "furniture"]
  },
  {
    _id: "2",
    name: "Table",
    description: "Table for study",
    imageUrl: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTrLYvBF1A6gi2YomNwFNffC7Vs2lA5QWrfE4rq22W0t4B25VxUjsqSxgDEQO6t6oyn1vnLf2LhTQ4cpR4pwlIcSmVRPLuoPLR54RqGle7SQVZhCE3JMDiFcQ",
    price: "1,000",
    stock: "4",
    sku: "6",
    categoryId: ["table", "study table"]
  },
  {
    _id: "3",
    name: "Bookshelf",
    description: "Wooden bookshelf with 5 shelves",
    imageUrl: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQlL7GXQVoaz-62WoDewk6JpRtdtHtz-QaMmWnEYKY8phoWd9gKnswiDuatmbjoTHSviG1P3ZYZdQjIp60svi7Nz7LsnEwBQou07p1aQeg",
    price: "2,500",
    stock: "2",
    sku: "8",
    categoryId: ["bookshelf", "storage"]
  },
  {
    _id: "4",
    name: "Lamp",
    description: "LED study lamp",
    imageUrl: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTVvZOhA6JsyKg9ku66pUvb2lCgvbNAv24cbefo8S26TcDMtIdEVopcStOpaiZt1o5dBH35mwi0lkoOh6iWptqW8z_4w2047ip8z5INONA",
    price: "750",
    stock: "15",
    sku: "5",
    categoryId: ["lamp", "lighting"]
  },
  {
    _id: "5",
    name: "Iphone 17",
    description: "Iphone 17",
    imageUrl: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSUR81hUhVOtOnJm0-sFnpnakGk685cGd9QcHRRfQfLEFZxYVoFEankcQxrKV86jKI_nTMqjSS4GRAvtxz2d1kE0lXEoVxRdwyAEqSuRabP8qMuBWZGlEFXnuCIvtrDDOKr9qn3-lU&usqp=CAc",
    price: "82,000",
    stock: "4",
    sku: "8",
    categoryId: ["iphone", "mobile"]
  }
]

const page = () => {



  return (
    <main className="min-h-[90vh] bg-white px-4 md:px-20 py-10 space-y-4">

      <p className="text-xl font-semibold">Welcome User,</p>

      <p className="text-blue-950 font-bold text-3xl">Dashboard</p>

      <div className="w-full grid grid-cols-4 gap-4">
        {
          products.map((product) => <div key={product._id} className="shadow-2xl">
            <img src={product.imageUrl} alt={product.name} className="w-fit h-fit object-fit"/>
            <p>{product.name}</p>
            <p>{product.description}</p>
          </div>)
        }
      </div>

    </main>
  )
}

export default page
