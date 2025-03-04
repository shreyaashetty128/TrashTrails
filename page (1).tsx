import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calculator } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

export default function RewardsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50 dark:bg-blue-950/30">
          <div className="container px-4 md:px-6">
            <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-700 dark:text-blue-400">
                  Rewards & Pricing
                </h1>
                <p className="max-w-[700px] text-gray-600 dark:text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See how much you can earn for your recyclables
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <div className="grid gap-6 md:grid-cols-3">
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-700 mx-auto">
                      <Image
                        src="https://images.unsplash.com/photo-1589634749000-1e72e2c5f384?q=80&w=48&h=48&auto=format&fit=crop"
                        alt="Paper and cardboard recycling"
                        width={48}
                        height={48}
                        className="rounded-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-center">Paper & Cardboard</h3>
                    <p className="text-3xl font-bold text-center text-green-600">$0.10/lb</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <div className="mr-2 h-4 w-4 mt-0.5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">
                          ✓
                        </div>
                        <span>Newspapers & magazines</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 h-4 w-4 mt-0.5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">
                          ✓
                        </div>
                        <span>Cardboard boxes</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 h-4 w-4 mt-0.5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">
                          ✓
                        </div>
                        <span>Office paper</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 h-4 w-4 mt-0.5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">
                          ✓
                        </div>
                        <span>Paperboard packaging</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-700 mx-auto">
                      <Image
                        src="https://images.unsplash.com/photo-1605600659873-d808a13e4d2a?q=80&w=48&h=48&auto=format&fit=crop"
                        alt="Plastic bottles recycling"
                        width={48}
                        height={48}
                        className="rounded-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-center">Plastics</h3>
                    <p className="text-3xl font-bold text-center text-green-600">$0.15/lb</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <div className="mr-2 h-4 w-4 mt-0.5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">
                          ✓
                        </div>
                        <span>PET bottles (type 1)</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 h-4 w-4 mt-0.5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">
                          ✓
                        </div>
                        <span>HDPE containers (type 2)</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 h-4 w-4 mt-0.5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">
                          ✓
                        </div>
                        <span>Plastic packaging (types 3-7)</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 h-4 w-4 mt-0.5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">
                          ✓
                        </div>
                        <span>Clean plastic bags</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-700 mx-auto">
                      <Image
                        src="https://images.unsplash.com/photo-1605600216590-7d6cc2533c0f?q=80&w=48&h=48&auto=format&fit=crop"
                        alt="Metal cans recycling"
                        width={48}
                        height={48}
                        className="rounded-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-center">Metals</h3>
                    <p className="text-3xl font-bold text-center text-green-600">$0.50/lb</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <div className="mr-2 h-4 w-4 mt-0.5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">
                          ✓
                        </div>
                        <span>Aluminum cans</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 h-4 w-4 mt-0.5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">
                          ✓
                        </div>
                        <span>Steel containers</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 h-4 w-4 mt-0.5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">
                          ✓
                        </div>
                        <span>Copper & brass</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 h-4 w-4 mt-0.5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">
                          ✓
                        </div>
                        <span>Scrap metal</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-700 dark:text-blue-400">
                  Calculate Your Earnings
                </h2>
                <p className="max-w-[700px] text-gray-600 dark:text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Estimate how much you can earn from your recyclables
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl py-12">
              <Card>
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-700 mx-auto">
                    <Calculator className="h-6 w-6" />
                  </div>
                  <Tabs defaultValue="paper" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 mb-8">
                      <TabsTrigger value="paper">Paper</TabsTrigger>
                      <TabsTrigger value="plastic">Plastic</TabsTrigger>
                      <TabsTrigger value="metal">Metal</TabsTrigger>
                    </TabsList>
                    <TabsContent value="paper" className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="paper-weight">Weight (lbs)</Label>
                        <div className="flex items-center gap-4">
                          <Slider defaultValue={[10]} max={100} step={1} className="flex-1" />
                          <Input id="paper-weight" type="number" defaultValue="10" className="w-20" />
                        </div>
                      </div>
                      <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                        <p className="text-sm text-gray-600 dark:text-gray-300">Estimated earnings:</p>
                        <p className="text-3xl font-bold text-green-600">$1.00</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">10 lbs × $0.10/lb</p>
                      </div>
                    </TabsContent>
                    <TabsContent value="plastic" className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="plastic-weight">Weight (lbs)</Label>
                        <div className="flex items-center gap-4">
                          <Slider defaultValue={[10]} max={100} step={1} className="flex-1" />
                          <Input id="plastic-weight" type="number" defaultValue="10" className="w-20" />
                        </div>
                      </div>
                      <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                        <p className="text-sm text-gray-600 dark:text-gray-300">Estimated earnings:</p>
                        <p className="text-3xl font-bold text-green-600">$1.50</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">10 lbs × $0.15/lb</p>
                      </div>
                    </TabsContent>
                    <TabsContent value="metal" className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="metal-weight">Weight (lbs)</Label>
                        <div className="flex items-center gap-4">
                          <Slider defaultValue={[10]} max={100} step={1} className="flex-1" />
                          <Input id="metal-weight" type="number" defaultValue="10" className="w-20" />
                        </div>
                      </div>
                      <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                        <p className="text-sm text-gray-600 dark:text-gray-300">Estimated earnings:</p>
                        <p className="text-3xl font-bold text-green-600">$5.00</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">10 lbs × $0.50/lb</p>
                      </div>
                    </TabsContent>
                  </Tabs>
                  <div className="text-center">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                      Schedule a Pickup
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50 dark:bg-blue-950/30">
          <div className="container px-4 md:px-6 text-center">
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-700 dark:text-blue-400">
                  Payment Methods
                </h2>
                <p className="max-w-[700px] text-gray-600 dark:text-gray-300 md:text-xl/relaxed mx-auto">
                  Choose how you want to receive your earnings
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto py-8">
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-700 mx-auto">
                      <Image
                        src="https://images.unsplash.com/photo-1616077168712-fc6c788bc4dd?q=80&w=48&h=48&auto=format&fit=crop"
                        alt="Direct Deposit icon"
                        width={48}
                        height={48}
                        className="rounded-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-center">Direct Deposit</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                      Receive your earnings directly to your bank account within 2-3 business days.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-700 mx-auto">
                      <Image
                        src="https://images.unsplash.com/photo-1559386484-97dfc0e15539?q=80&w=48&h=48&auto=format&fit=crop"
                        alt="PayPal icon"
                        width={48}
                        height={48}
                        className="rounded-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-center">PayPal</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                      Get paid instantly to your PayPal account with no additional fees.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-700 mx-auto">
                      <Image
                        src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=48&h=48&auto=format&fit=crop"
                        alt="Service Credit icon"
                        width={48}
                        height={48}
                        className="rounded-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-center">Service Credit</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                      Apply your earnings as credit toward future TrashTrails services with a 10% bonus.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

