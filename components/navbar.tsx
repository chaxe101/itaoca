"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import {
  Car,
  BikeIcon as Motorcycle,
  Menu,
  User,
  LogOut,
  Settings,
  Home,
  Info,
  HelpCircle,
  Phone,
  Globe,
} from "lucide-react"

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container flex h-16 items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <SheetHeader className="pb-6">
              <SheetTitle className="text-xl">Menu</SheetTitle>
              <SheetDescription>Navegue pelo site</SheetDescription>
            </SheetHeader>
            <div className="grid gap-6 py-4">
              <Link href="/" className="flex items-center gap-2 text-xl font-bold text-blue-600">
                <div className="flex items-center">
                  <Car className="h-6 w-6" />
                  <Motorcycle className="h-5 w-5 -ml-1" />
                </div>
                <span>VrumGo</span>
              </Link>
              <div className="grid gap-3">
                <Link href="/">
                  <Button variant="ghost" className="w-full justify-start text-base h-12">
                    <Home className="mr-3 h-5 w-5" />
                    Início
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="ghost" className="w-full justify-start text-base h-12">
                    <Info className="mr-3 h-5 w-5" />
                    Sobre Nós
                  </Button>
                </Link>
                <Link href="/search?type=car">
                  <Button variant="ghost" className="w-full justify-start text-base h-12">
                    <Car className="mr-3 h-5 w-5" />
                    Alugar Carro
                  </Button>
                </Link>
                <Link href="/search?type=motorcycle">
                  <Button variant="ghost" className="w-full justify-start text-base h-12">
                    <Motorcycle className="mr-3 h-5 w-5" />
                    Alugar Moto
                  </Button>
                </Link>
                <Link href="/dashboard/add-vehicle">
                  <Button variant="ghost" className="w-full justify-start text-base h-12">
                    <Car className="mr-3 h-5 w-5" />
                    Cadastrar Veículo
                  </Button>
                </Link>
                <Link href="/help">
                  <Button variant="ghost" className="w-full justify-start text-base h-12">
                    <HelpCircle className="mr-3 h-5 w-5" />
                    Ajuda
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="ghost" className="w-full justify-start text-base h-12">
                    <Phone className="mr-3 h-5 w-5" />
                    Contato
                  </Button>
                </Link>
              </div>
            </div>
            <div className="grid gap-3 mt-6">
              {isLoggedIn ? (
                <>
                  <Link href="/dashboard">
                    <Button className="w-full h-12 bg-blue-600 hover:bg-blue-700">Minha Conta</Button>
                  </Link>
                  <Button variant="outline" className="w-full h-12" onClick={() => setIsLoggedIn(false)}>
                    Sair
                  </Button>
                </>
              ) : (
                <>
                  <Link href="/login">
                    <Button variant="outline" className="w-full h-12 border-blue-600 text-blue-600 hover:bg-blue-50">
                      Entrar
                    </Button>
                  </Link>
                  <Link href="/register">
                    <Button className="w-full h-12 bg-blue-600 hover:bg-blue-700">Criar Conta</Button>
                  </Link>
                </>
              )}
            </div>
          </SheetContent>
        </Sheet>

        <Link href="/" className="hidden md:flex items-center gap-2 mr-8">
          <div className="flex items-center">
            <Car className="h-6 w-6 text-blue-600" />
            <Motorcycle className="h-5 w-5 text-blue-600 -ml-1" />
          </div>
          <span className="font-bold text-xl">VrumGo</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-base">
          <Link href="/" className="font-medium transition-colors hover:text-blue-600">
            Início
          </Link>
          <Link href="/about" className="font-medium transition-colors hover:text-blue-600">
            Sobre Nós
          </Link>
          <Link href="/search" className="font-medium transition-colors hover:text-blue-600">
            Veículos
          </Link>
          <Link href="/help" className="font-medium transition-colors hover:text-blue-600">
            Ajuda
          </Link>
          <Link href="/contact" className="font-medium transition-colors hover:text-blue-600">
            Contato
          </Link>
        </nav>

        <div className="flex items-center ml-auto gap-3">
          {/* Language selector */}
          <Button variant="ghost" size="icon" className="rounded-full">
            <Globe className="h-5 w-5" />
          </Button>

          {isLoggedIn ? (
            <div className="flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg" alt="User" />
                      <AvatarFallback>US</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <Link href="/dashboard">
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      <span>Dashboard</span>
                    </DropdownMenuItem>
                  </Link>
                  <Link href="/dashboard/settings">
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Configurações</span>
                    </DropdownMenuItem>
                  </Link>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => setIsLoggedIn(false)}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Sair</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link href="/login" className="hidden sm:block">
                <Button
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50"
                  onClick={() => setIsLoggedIn(true)}
                >
                  Entrar
                </Button>
              </Link>
              <Link href="/register">
                <Button className="bg-blue-600 hover:bg-blue-700">Criar Conta</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

