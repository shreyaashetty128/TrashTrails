import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Truck, CreditCard, BarChart3, User, Settings } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SidebarNav } from "@/components/sidebar-nav"

export default function DashboardPage() {
  const sidebarNavItems = [
    {
      title: "Overview",
      href: "/dashboard",
      icon: <BarChart3 className="h-4 w-4" />,
    },
    {
      title: "Pickups",
      href: "/dashboard/pickups",
      icon: <Truck className="h-4 w-4" />,
    },
    {
      title: "Schedule",
      href: "/dashboard/schedule",
      icon: <Calendar className="h-4 w-4" />,
    },
    {
      title: "Earnings",
      href: "/dashboard/earnings",
      icon: <CreditCard className="h-4 w-4" />,
    },
    {
      title: "Profile",
      href: "/dashboard/profile",
      icon: <User className="h-4 w-4" />,
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: <Settings className="h-4 w-4" />,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <div className="flex flex-col md:flex-row">
          <aside className="md:w-64 md:flex-shrink-0 border-r md:h-screen sticky top-16">
            <div className="p-4">
              <Link href="/" className="inline-flex items-center text-green-600 hover:text-green-700 mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
              <SidebarNav items={sidebarNavItems} />
            </div>
          </aside>
          <div className="flex-1 p-6">
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                <p className="text-muted-foreground">Welcome back! Here's an overview of your TrashTrails activity.</p>
              </div>
              <Tabs defaultValue="overview" className="space-y-4">
                <TabsList>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="analytics">Analytics</TabsTrigger>
                  <TabsTrigger value="reports">Reports</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
                        <CreditCard className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">$245.89</div>
                        <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Pickups</CardTitle>
                        <Truck className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">12</div>
                        <p className="text-xs text-muted-foreground">+3 from last month</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Recycled Weight</CardTitle>
                        <BarChart3 className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">128 lbs</div>
                        <p className="text-xs text-muted-foreground">+12% from last month</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Next Pickup</CardTitle>
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">Mar 8</div>
                        <p className="text-xs text-muted-foreground">Tuesday, 10:00 AM</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                    <Card className="col-span-4">
                      <CardHeader>
                        <CardTitle>Recycling History</CardTitle>
                        <CardDescription>Your recycling activity over the past 6 months</CardDescription>
                      </CardHeader>
                      <CardContent className="pl-2">
                        <div className="h-[300px] relative">
                          <Image
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&h=300&auto=format&fit=crop"
                            alt="Recycling history chart"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="col-span-3">
                      <CardHeader>
                        <CardTitle>Environmental Impact</CardTitle>
                        <CardDescription>Your contribution to sustainability</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <p className="text-sm">CO2 Saved</p>
                              <p className="text-sm font-medium">24.8 kg</p>
                            </div>
                            <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                              <div className="h-full bg-green-500 w-[65%]" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <p className="text-sm">Trees Saved</p>
                              <p className="text-sm font-medium">3.2</p>
                            </div>
                            <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                              <div className="h-full bg-green-500 w-[45%]" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <p className="text-sm">Water Saved</p>
                              <p className="text-sm font-medium">128 gallons</p>
                            </div>
                            <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                              <div className="h-full bg-green-500 w-[78%]" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <p className="text-sm">Landfill Diverted</p>
                              <p className="text-sm font-medium">112 lbs</p>
                            </div>
                            <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                              <div className="h-full bg-green-500 w-[85%]" />
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
                <TabsContent value="analytics" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Analytics</CardTitle>
                      <CardDescription>Detailed analysis of your recycling patterns</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[400px] relative">
                        <Image
                          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&h=400&auto=format&fit=crop"
                          alt="Analytics dashboard"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="reports" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Reports</CardTitle>
                      <CardDescription>Download and view your recycling reports</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center gap-4">
                            <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                              <BarChart3 className="h-5 w-5 text-blue-600" />
                            </div>
                            <div>
                              <p className="font-medium">February 2023 Report</p>
                              <p className="text-sm text-muted-foreground">PDF • 2.4 MB</p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            Download
                          </Button>
                        </div>
                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center gap-4">
                            <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                              <BarChart3 className="h-5 w-5 text-blue-600" />
                            </div>
                            <div>
                              <p className="font-medium">January 2023 Report</p>
                              <p className="text-sm text-muted-foreground">PDF • 1.8 MB</p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            Download
                          </Button>
                        </div>
                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center gap-4">
                            <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                              <BarChart3 className="h-5 w-5 text-blue-600" />
                            </div>
                            <div>
                              <p className="font-medium">December 2022 Report</p>
                              <p className="text-sm text-muted-foreground">PDF • 2.1 MB</p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            Download
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

