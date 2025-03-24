"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { CalendarIcon, Search, Car } from "lucide-react"

export default function SearchBar() {
  const [startDate, setStartDate] = useState<Date>()
  const [endDate, setEndDate] = useState<Date>()

  return (
    <div className="bg-white rounded-full shadow-xl p-2 flex flex-col md:flex-row">
      {/* Marca/Modelo */}
      <div className="relative flex-1 min-w-[200px]">
        <div className="px-6 py-3">
          <div className="font-medium text-xs mb-1">Marca/Modelo</div>
          <div className="flex items-center">
            <Car className="h-4 w-4 text-neutral-500 mr-2" />
            <Input placeholder="Buscar marca, modelo" className="border-0 p-0 focus-visible:ring-0 text-sm" />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="hidden md:block w-px h-14 bg-gray-200 mx-1"></div>

      {/* Check-in */}
      <div className="relative">
        <Popover>
          <PopoverTrigger asChild>
            <div className="px-6 py-3 cursor-pointer">
              <div className="font-medium text-xs mb-1">Check-in</div>
              <div className="flex items-center">
                <CalendarIcon className="h-4 w-4 text-neutral-500 mr-2" />
                <div className="text-sm">
                  {startDate ? format(startDate, "dd MMM", { locale: ptBR }) : "Insira as datas"}
                </div>
              </div>
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar mode="single" selected={startDate} onSelect={setStartDate} initialFocus locale={ptBR} />
          </PopoverContent>
        </Popover>
      </div>

      {/* Divider */}
      <div className="hidden md:block w-px h-14 bg-gray-200 mx-1"></div>

      {/* Check-out */}
      <div className="relative">
        <Popover>
          <PopoverTrigger asChild>
            <div className="px-6 py-3 cursor-pointer">
              <div className="font-medium text-xs mb-1">Check-out</div>
              <div className="flex items-center">
                <CalendarIcon className="h-4 w-4 text-neutral-500 mr-2" />
                <div className="text-sm">
                  {endDate ? format(endDate, "dd MMM", { locale: ptBR }) : "Insira as datas"}
                </div>
              </div>
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar mode="single" selected={endDate} onSelect={setEndDate} initialFocus locale={ptBR} />
          </PopoverContent>
        </Popover>
      </div>

      {/* Search Button */}
      <div className="p-2">
        <Button className="rounded-full h-12 w-12 bg-blue-600 hover:bg-blue-700">
          <Search className="h-5 w-5" />
          <span className="sr-only">Buscar</span>
        </Button>
      </div>
    </div>
  )
}

