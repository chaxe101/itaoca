"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, DollarSign, Download, TrendingUp, TrendingDown, Filter } from "lucide-react"
import DashboardSidebar from "@/components/dashboard-sidebar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function GanhosPage() {
  const [period, setPeriod] = useState("month")
  const userName = "João Silva"
  const userEmail = "joao@email.com"

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <DashboardSidebar userName={userName} userEmail={userEmail} userType="owner" />

      {/* Main Content */}
      <div className="flex-1 p-8 md:ml-64">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-2">Ganhos</h1>
            <p className="text-muted-foreground">Acompanhe seus ganhos, pagamentos e relatórios financeiros.</p>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <DollarSign className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Ganhos do mês</p>
                    <h3 className="text-3xl font-bold">R$ 850,00</h3>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Ganhos totais</p>
                    <h3 className="text-3xl font-bold">R$ 12.450,00</h3>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Calendar className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Reservas do mês</p>
                    <h3 className="text-3xl font-bold">5</h3>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <TrendingDown className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Taxa média</p>
                    <h3 className="text-3xl font-bold">15%</h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Period Selector and Export */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <div className="flex items-center gap-2">
              <Select value={period} onValueChange={setPeriod}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Selecione o período" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="week">Esta semana</SelectItem>
                  <SelectItem value="month">Este mês</SelectItem>
                  <SelectItem value="quarter">Este trimestre</SelectItem>
                  <SelectItem value="year">Este ano</SelectItem>
                  <SelectItem value="all">Todo o período</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Exportar relatório
            </Button>
          </div>

          {/* Transactions Table */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Histórico de Transações</h2>
                <Button variant="ghost" size="sm" className="flex items-center gap-1">
                  <Filter className="h-4 w-4" />
                  Filtrar
                </Button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 font-medium text-muted-foreground">Data</th>
                      <th className="text-left p-3 font-medium text-muted-foreground">Veículo</th>
                      <th className="text-left p-3 font-medium text-muted-foreground">Locatário</th>
                      <th className="text-left p-3 font-medium text-muted-foreground">Valor</th>
                      <th className="text-left p-3 font-medium text-muted-foreground">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3">15/03/2025</td>
                      <td className="p-3">Honda Civic 2020</td>
                      <td className="p-3">Maria Oliveira</td>
                      <td className="p-3">R$ 360,00</td>
                      <td className="p-3">
                        <Badge className="bg-green-100 text-green-600 hover:bg-green-100">Pago</Badge>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3">10/03/2025</td>
                      <td className="p-3">Honda CB 500 2021</td>
                      <td className="p-3">Carlos Santos</td>
                      <td className="p-3">R$ 240,00</td>
                      <td className="p-3">
                        <Badge className="bg-green-100 text-green-600 hover:bg-green-100">Pago</Badge>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3">05/03/2025</td>
                      <td className="p-3">Toyota Corolla 2019</td>
                      <td className="p-3">Ana Ferreira</td>
                      <td className="p-3">R$ 330,00</td>
                      <td className="p-3">
                        <Badge className="bg-orange-100 text-orange-600 hover:bg-orange-100">Pendente</Badge>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3">28/02/2025</td>
                      <td className="p-3">Honda Civic 2020</td>
                      <td className="p-3">Pedro Almeida</td>
                      <td className="p-3">R$ 360,00</td>
                      <td className="p-3">
                        <Badge className="bg-green-100 text-green-600 hover:bg-green-100">Pago</Badge>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-3">20/02/2025</td>
                      <td className="p-3">Honda CB 500 2021</td>
                      <td className="p-3">Juliana Costa</td>
                      <td className="p-3">R$ 160,00</td>
                      <td className="p-3">
                        <Badge className="bg-green-100 text-green-600 hover:bg-green-100">Pago</Badge>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Payments Section */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Próximos Pagamentos</h2>
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-2xl font-bold">R$ 330,00</p>
                    <p className="text-sm text-muted-foreground">Previsto para 20/03/2025</p>
                  </div>
                  <Button>Ver detalhes</Button>
                </div>
              </div>

              <h3 className="font-medium mb-3">Histórico de pagamentos</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 font-medium text-muted-foreground">Data</th>
                      <th className="text-left p-3 font-medium text-muted-foreground">Valor</th>
                      <th className="text-left p-3 font-medium text-muted-foreground">Método</th>
                      <th className="text-left p-3 font-medium text-muted-foreground">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3">15/03/2025</td>
                      <td className="p-3">R$ 600,00</td>
                      <td className="p-3">Transferência bancária</td>
                      <td className="p-3">
                        <Badge className="bg-green-100 text-green-600 hover:bg-green-100">Concluído</Badge>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3">15/02/2025</td>
                      <td className="p-3">R$ 850,00</td>
                      <td className="p-3">Transferência bancária</td>
                      <td className="p-3">
                        <Badge className="bg-green-100 text-green-600 hover:bg-green-100">Concluído</Badge>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-3">15/01/2025</td>
                      <td className="p-3">R$ 720,00</td>
                      <td className="p-3">Transferência bancária</td>
                      <td className="p-3">
                        <Badge className="bg-green-100 text-green-600 hover:bg-green-100">Concluído</Badge>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Analytics Section */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Análise de Ganhos</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <Card>
                  <CardContent className="p-4">
                    <div className="text-center">
                      <h3 className="text-sm font-medium text-muted-foreground mb-1">Taxa de ocupação</h3>
                      <p className="text-2xl font-bold">68%</p>
                      <p className="text-xs text-green-600">↑ 12% em relação ao mês anterior</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="text-center">
                      <h3 className="text-sm font-medium text-muted-foreground mb-1">Ganho médio por veículo</h3>
                      <p className="text-2xl font-bold">R$ 283,33</p>
                      <p className="text-xs text-green-600">↑ 5% em relação ao mês anterior</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="text-center">
                      <h3 className="text-sm font-medium text-muted-foreground mb-1">Veículo mais rentável</h3>
                      <p className="text-2xl font-bold">Honda Civic</p>
                      <p className="text-xs text-muted-foreground">R$ 360,00 este mês</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-medium mb-4">Ganhos por veículo</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Honda Civic 2020</span>
                      <span>R$ 360,00</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "100%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Honda CB 500 2021</span>
                      <span>R$ 240,00</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "67%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Toyota Corolla 2019</span>
                      <span>R$ 250,00</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "69%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

