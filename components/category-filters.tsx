"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import {
  Car,
  BikeIcon as Motorcycle,
  Truck,
  Zap,
  Droplet,
  Wrench,
  Gauge,
  Sparkles,
  ShieldCheck,
  Flame,
  Compass,
  Bike,
  Wind,
  Mountain,
} from "lucide-react"

type Category = {
  icon: React.ReactNode
  label: string
  href: string
  type: "car" | "motorcycle"
}

export default function CategoryFilters() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [activeType, setActiveType] = useState<"all" | "car" | "motorcycle">("all")

  const categories: Category[] = [
    // Categorias de carros
    { icon: <Car className="h-5 w-5" />, label: "Sedan", href: "/search?type=car&category=sedan", type: "car" },
    { icon: <Truck className="h-5 w-5" />, label: "SUVs", href: "/search?type=car&category=suv", type: "car" },
    { icon: <Zap className="h-5 w-5" />, label: "Esportivos", href: "/search?type=car&category=sports", type: "car" },
    {
      icon: <Droplet className="h-5 w-5" />,
      label: "Conversíveis",
      href: "/search?type=car&category=convertible",
      type: "car",
    },
    {
      icon: <Wrench className="h-5 w-5" />,
      label: "Clássicos",
      href: "/search?type=car&category=classic",
      type: "car",
    },
    { icon: <Gauge className="h-5 w-5" />, label: "Luxo", href: "/search?type=car&category=luxury", type: "car" },
    {
      icon: <Sparkles className="h-5 w-5" />,
      label: "Elétricos",
      href: "/search?type=car&category=electric",
      type: "car",
    },

    // Categorias de motos
    {
      icon: <Motorcycle className="h-5 w-5" />,
      label: "Street",
      href: "/search?type=motorcycle&category=street",
      type: "motorcycle",
    },
    {
      icon: <Flame className="h-5 w-5" />,
      label: "Esportivas",
      href: "/search?type=motorcycle&category=sport",
      type: "motorcycle",
    },
    {
      icon: <Compass className="h-5 w-5" />,
      label: "Touring",
      href: "/search?type=motorcycle&category=touring",
      type: "motorcycle",
    },
    {
      icon: <Mountain className="h-5 w-5" />,
      label: "Trail",
      href: "/search?type=motorcycle&category=trail",
      type: "motorcycle",
    },
    {
      icon: <Wind className="h-5 w-5" />,
      label: "Custom",
      href: "/search?type=motorcycle&category=custom",
      type: "motorcycle",
    },
    {
      icon: <Bike className="h-5 w-5" />,
      label: "Naked",
      href: "/search?type=motorcycle&category=naked",
      type: "motorcycle",
    },
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      label: "Scooter",
      href: "/search?type=motorcycle&category=scooter",
      type: "motorcycle",
    },
  ]

  const filteredCategories =
    activeType === "all" ? categories : categories.filter((category) => category.type === activeType)

  return (
    <div className="space-y-4">
      <div className="flex justify-center gap-4 border-b pb-2">
        <Button
          variant={activeType === "all" ? "default" : "outline"}
          onClick={() => setActiveType("all")}
          className="rounded-full"
        >
          Todos
        </Button>
        <Button
          variant={activeType === "car" ? "default" : "outline"}
          onClick={() => setActiveType("car")}
          className="rounded-full"
        >
          <Car className="h-4 w-4 mr-2" />
          Carros
        </Button>
        <Button
          variant={activeType === "motorcycle" ? "default" : "outline"}
          onClick={() => setActiveType("motorcycle")}
          className="rounded-full"
        >
          <Motorcycle className="h-4 w-4 mr-2" />
          Motos
        </Button>
      </div>

      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex space-x-4 py-4">
          {filteredCategories.map((category, index) => (
            <Link key={index} href={category.href} onClick={() => setActiveCategory(category.label)}>
              <Button
                variant="ghost"
                className={cn(
                  "flex flex-col items-center justify-center h-auto space-y-1 px-4 py-2 rounded-md hover:bg-gray-100 transition-colors",
                  activeCategory === category.label ? "border-b-2 border-black rounded-none" : "",
                )}
              >
                <div className="flex items-center justify-center w-6 h-6">{category.icon}</div>
                <span className="text-xs font-medium">{category.label}</span>
              </Button>
            </Link>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  )
}

// Helper function to conditionally join class names
function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ")
}

