"use client"
import React from 'react'
import { ChevronLeft, Minus, Plus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function MenuScreen() {
  const router = useRouter()

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white text-black p-4 flex items-center shadow-sm">
        <Button 
          variant="ghost" 
          size="icon" 
          className="mr-2 hover:bg-gray-100"
          onClick={() => router.push('/')}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-xl font-medium">Menu</h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-4 space-y-6 bg-gray-50">
        <Card className="border-0 shadow-sm overflow-hidden">
          <CardContent className="p-0">
            <Image 
              src="/taro_milk_tea.jpg"
              alt="Taro Milk Tea" 
              width={800}
              height={600}
              className="w-full h-80 object-cover" 
              priority
            />
            <div className="p-6 space-y-6">
              <h2 className="text-2xl font-medium">Taro Milk Tea</h2>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Size</h3>
                <RadioGroup defaultValue="medium" className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="small" id="small" />
                    <Label htmlFor="small" className="text-base">Small</Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="medium" id="medium" />
                    <Label htmlFor="medium" className="text-base">Medium</Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="large" id="large" />
                    <Label htmlFor="large" className="text-base">Large</Label>
                  </div>
                </RadioGroup>
              </div>

              <Separator className="my-6" />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Toppings</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Checkbox id="boba" className="rounded-full" />
                    <Label htmlFor="boba" className="ml-3 text-base">Boba</Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="jelly" className="rounded-full" />
                    <Label htmlFor="jelly" className="ml-3 text-base">Jelly</Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="pudding" className="rounded-full" />
                    <Label htmlFor="pudding" className="ml-3 text-base">Pudding</Label>
                  </div>
                </div>
              </div>

              <Separator className="my-6" />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Sugar Level</h3>
                <RadioGroup defaultValue="100" className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="50" id="sugar-50" />
                    <Label htmlFor="sugar-50" className="text-base">50%</Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="75" id="sugar-75" />
                    <Label htmlFor="sugar-75" className="text-base">75%</Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="100" id="sugar-100" />
                    <Label htmlFor="sugar-100" className="text-base">100%</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="icon" className="rounded-full">
              <Minus className="h-4 w-4" />
            </Button>
            <span className="text-lg">1</span>
            <Button variant="outline" size="icon" className="rounded-full">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <span className="text-xl font-medium">$5.99</span>
        </div>
        <Button className="w-full rounded-full bg-black hover:bg-gray-800 text-white h-12">
          Add to Cart
        </Button>
      </footer>
    </div>
  )
}