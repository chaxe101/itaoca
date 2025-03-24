"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Car,
  BikeIcon as Motorcycle,
  Plus,
  Calendar,
  DollarSign,
  CheckCircle,
  Clock,
  AlertCircle,
  Eye,
  Edit,
  Trash2,
  Star,
  TrendingUp,
  Shield,
  Wrench,
} from "lucide-react"
import DashboardSidebar from "@/components/dashboard-sidebar"

export default function OwnerDashboardPage() {
  const userName = "João Silva"
  const userEmail = "joao@email.com"

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <DashboardSidebar userName={userName} userEmail={userEmail} userType="owner" />

      {/* Main Content */}
      <div className="flex-1 p-8 md:ml-64">
        <div className="max-w-6xl mx-auto">
          {/* Welcome Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-2">Bem-vindo ao seu painel, João!</h1>
            <p className="text-muted-foreground">Gerencie seus veículos, reservas e acompanhe seus ganhos.</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="bg-blue-50 border-blue-100">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Calendar className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-blue-600">Reservas ativas</p>
                    <h3 className="text-3xl font-bold">3</h3>
                  </div>
                </div>
                <div className="mt-4">
                  <Link href="/dashboard/owner/reservas" className="text-sm text-blue-600 hover:underline">
                    Ver reservas
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border-green-100">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Car className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-green-600">Veículos cadastrados</p>
                    <h3 className="text-3xl font-bold">3</h3>
                  </div>
                </div>
                <div className="mt-4">
                  <Link href="/dashboard/owner/veiculos" className="text-sm text-green-600 hover:underline">
                    Ver veículos
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-orange-50 border-orange-100">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <DollarSign className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-orange-600">Ganhos do mês</p>
                    <h3 className="text-3xl font-bold">R$ 850</h3>
                  </div>
                </div>
                <div className="mt-4">
                  <Link href="/dashboard/owner/ganhos" className="text-sm text-orange-600 hover:underline">
                    Ver detalhes
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-purple-50 border-purple-100">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Star className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-purple-600">Avaliação média</p>
                    <h3 className="text-3xl font-bold">4.8</h3>
                  </div>
                </div>
                <div className="mt-4">
                  <Link href="/dashboard/owner/avaliacoes" className="text-sm text-purple-600 hover:underline">
                    Ver avaliações
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* AI Features Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Recursos de Inteligência Artificial</h2>
              <Link href="/dashboard/owner/ai-features">
                <Button variant="ghost" size="sm" className="text-blue-600">
                  Ver todos
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Link href="/dashboard/owner/ai-features?tab=recommendations">
                <Card className="hover:shadow-md transition-shadow h-full">
                  <CardContent className="p-4 flex flex-col items-center text-center">
                    <div className="bg-blue-100 p-3 rounded-full mb-3">
                      <TrendingUp className="h-5 w-5 text-blue-600" />
                    </div>
                    <h3 className="font-medium mb-1">Recomendações</h3>
                    <p className="text-xs text-muted-foreground">Sugestões para otimizar seus anúncios</p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/dashboard/owner/ai-features?tab=risk">
                <Card className="hover:shadow-md transition-shadow h-full">
                  <CardContent className="p-4 flex flex-col items-center text-center">
                    <div className="bg-blue-100 p-3 rounded-full mb-3">
                      <Shield className="h-5 w-5 text-blue-600" />
                    </div>
                    <h3 className="font-medium mb-1">Análise de Risco</h3>
                    <p className="text-xs text-muted-foreground">Avaliação de segurança e prevenção de fraudes</p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/dashboard/owner/ai-features?tab=pricing">
                <Card className="hover:shadow-md transition-shadow h-full">
                  <CardContent className="p-4 flex flex-col items-center text-center">
                    <div className="bg-blue-100 p-3 rounded-full mb-3">
                      <DollarSign className="h-5 w-5 text-blue-600" />
                    </div>
                    <h3 className="font-medium mb-1">Otimização de Preços</h3>
                    <p className="text-xs text-muted-foreground">Ajuste dinâmico baseado em demanda</p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/dashboard/owner/ai-features?tab=maintenance">
                <Card className="hover:shadow-md transition-shadow h-full">
                  <CardContent className="p-4 flex flex-col items-center text-center">
                    <div className="bg-blue-100 p-3 rounded-full mb-3">
                      <Wrench className="h-5 w-5 text-blue-600" />
                    </div>
                    <h3 className="font-medium mb-1">Previsão de Manutenção</h3>
                    <p className="text-xs text-muted-foreground">Análise preditiva do estado do veículo</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>

          {/* Recent Reviews Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Avaliações Recentes</h2>
              <Link href="/dashboard/owner/avaliacoes">
                <Button variant="ghost" size="sm" className="text-blue-600">
                  Ver todas
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src="/placeholder.svg" alt="Maria Oliveira" />
                          <AvatarFallback>MO</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">Maria Oliveira</div>
                          <div className="text-sm text-muted-foreground">15 de março de 2025</div>
                          <div className="flex mt-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="flex items-center gap-2 text-sm">
                          <div className="w-8 h-8 bg-gray-100 rounded-md flex items-center justify-center">
                            <Car className="h-4 w-4 text-gray-500" />
                          </div>
                          <span>Honda Civic 2020</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-sm">
                      "Carro em excelente estado, muito confortável e econômico. O proprietário foi muito atencioso e
                      pontual. Recomendo!"
                    </div>

                    <div className="flex justify-end">
                      <Badge variant="outline" className="bg-green-50 text-green-600">
                        Respondida
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src="/placeholder.svg" alt="Carlos Santos" />
                          <AvatarFallback>CS</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">Carlos Santos</div>
                          <div className="text-sm text-muted-foreground">10 de março de 2025</div>
                          <div className="flex mt-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <Star className="h-4 w-4 text-gray-300" />
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="flex items-center gap-2 text-sm">
                          <div className="w-8 h-8 bg-gray-100 rounded-md flex items-center justify-center">
                            <Motorcycle className="h-4 w-4 text-gray-500" />
                          </div>
                          <span>Honda CB 500 2021</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-sm">
                      "Moto muito boa, bem conservada. Entrega e devolução sem problemas. Só achei que poderia estar um
                      pouco mais limpa."
                    </div>

                    <div className="flex justify-end">
                      <Badge variant="outline" className="bg-orange-50 text-orange-600">
                        Aguardando resposta
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* My Vehicles Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Meus Veículos</h2>
              <Link href="/dashboard/owner/add-vehicle">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Plus className="h-4 w-4 mr-2" />
                  Adicionar Veículo
                </Button>
              </Link>
            </div>

            <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4 font-medium text-muted-foreground">Veículo</th>
                    <th className="text-left p-4 font-medium text-muted-foreground">Placa</th>
                    <th className="text-left p-4 font-medium text-muted-foreground">Status</th>
                    <th className="text-left p-4 font-medium text-muted-foreground">Preço/dia</th>
                    <th className="text-right p-4 font-medium text-muted-foreground">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center">
                          <Motorcycle className="h-5 w-5 text-gray-500" />
                        </div>
                        <div>
                          <div className="font-medium">Honda CB 500 2021</div>
                          <div className="text-xs text-muted-foreground">2021</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">XYZ-9876</td>
                    <td className="p-4">
                      <Badge
                        variant="outline"
                        className="bg-orange-50 text-orange-600 hover:bg-orange-50 flex items-center gap-1 font-normal"
                      >
                        <Clock className="h-3.5 w-3.5" />
                        Alugado
                      </Badge>
                    </td>
                    <td className="p-4">R$ 80</td>
                    <td className="p-4 text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-50"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center">
                          <Car className="h-5 w-5 text-gray-500" />
                        </div>
                        <div>
                          <div className="font-medium">Honda Civic 2020</div>
                          <div className="text-xs text-muted-foreground">2020</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">ABC-1234</td>
                    <td className="p-4">
                      <Badge
                        variant="outline"
                        className="bg-green-50 text-green-600 hover:bg-green-50 flex items-center gap-1 font-normal"
                      >
                        <CheckCircle className="h-3.5 w-3.5" />
                        Disponível
                      </Badge>
                    </td>
                    <td className="p-4">R$ 120</td>
                    <td className="p-4 text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-50"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center">
                          <Car className="h-5 w-5 text-gray-500" />
                        </div>
                        <div>
                          <div className="font-medium">Toyota Corolla 2019</div>
                          <div className="text-xs text-muted-foreground">2019</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">DEF-5678</td>
                    <td className="p-4">
                      <Badge
                        variant="outline"
                        className="bg-gray-100 text-gray-600 hover:bg-gray-100 flex items-center gap-1 font-normal"
                      >
                        <AlertCircle className="h-3.5 w-3.5" />
                        Inativo
                      </Badge>
                    </td>
                    <td className="p-4">R$ 110</td>
                    <td className="p-4 text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-50"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 text-right">
              <Link href="/dashboard/owner/veiculos">
                <Button variant="ghost" size="sm" className="text-blue-600">
                  Ver todos os veículos
                </Button>
              </Link>
            </div>
          </div>

          {/* Recent Reservations */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Reservas recentes</h2>
              <Link href="/dashboard/owner/reservas">
                <Button variant="ghost" size="sm" className="text-blue-600">
                  Ver todas
                </Button>
              </Link>
            </div>

            <div className="space-y-4">
              {/* Reservation 1 */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between gap-4">
                    <div>
                      <h3 className="font-bold">Fiat Argo 2021</h3>
                      <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>15 de agosto de 2023 - 18 de agosto de 2023</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1 text-sm">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src="/placeholder.svg" alt="Locatário" />
                          <AvatarFallback>LC</AvatarFallback>
                        </Avatar>
                        <span>Pedro Almeida</span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Badge className="bg-green-100 text-green-600 hover:bg-green-100">Ativa</Badge>
                    </div>
                  </div>
                  <div className="flex justify-end mt-4 gap-2">
                    <Button variant="outline" size="sm">
                      Ver detalhes
                    </Button>
                    <Button size="sm">Entrar em contato</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Reservation 2 */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between gap-4">
                    <div>
                      <h3 className="font-bold">Yamaha Fazer 250</h3>
                      <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>10 de julho de 2023 - 12 de julho de 2023</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1 text-sm">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src="/placeholder.svg" alt="Locatário" />
                          <AvatarFallback>LC</AvatarFallback>
                        </Avatar>
                        <span>Ana Ferreira</span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Badge variant="outline" className="bg-gray-100 text-gray-600 hover:bg-gray-100">
                        Concluída
                      </Badge>
                    </div>
                  </div>
                  <div className="flex justify-end mt-4 gap-2">
                    <Button variant="outline" size="sm">
                      Ver detalhes
                    </Button>
                    <Button variant="outline" size="sm">
                      Ver avaliação
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Reservation 3 */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between gap-4">
                    <div>
                      <h3 className="font-bold">Honda Civic 2022</h3>
                      <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>01 de julho de 2023 - 05 de julho de 2023</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1 text-sm">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src="/placeholder.svg" alt="Locatário" />
                          <AvatarFallback>LC</AvatarFallback>
                        </Avatar>
                        <span>Carlos Mendes</span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Badge variant="outline" className="bg-gray-100 text-gray-600 hover:bg-gray-100">
                        Concluída
                      </Badge>
                    </div>
                  </div>
                  <div className="flex justify-end mt-4 gap-2">
                    <Button variant="outline" size="sm">
                      Ver detalhes
                    </Button>
                    <Button variant="outline" size="sm">
                      Ver avaliação
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Tips for Owners */}
          <div className="mt-8">
            <Card className="bg-blue-50 border-blue-100">
              <CardContent className="p-6">
                <h2 className="text-lg font-bold text-blue-800 mb-4">Dicas para proprietários</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-blue-700">
                    <div className="min-w-4 mt-1">•</div>
                    <span>Mantenha seu calendário de disponibilidade sempre atualizado</span>
                  </li>
                  <li className="flex items-start gap-2 text-blue-700">
                    <div className="min-w-4 mt-1">•</div>
                    <span>Fotos de qualidade aumentam em até 70% as chances de locação</span>
                  </li>
                  <li className="flex items-start gap-2 text-blue-700">
                    <div className="min-w-4 mt-1">•</div>
                    <span>Veículos bem avaliados recebem destaque na plataforma</span>
                  </li>
                  <li className="flex items-start gap-2 text-blue-700">
                    <div className="min-w-4 mt-1">•</div>
                    <span>Responda rapidamente às solicitações para melhorar sua reputação</span>
                  </li>
                </ul>
                <div className="mt-4">
                  <Button variant="outline" className="bg-white">
                    Ver exemplo de checklist
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

