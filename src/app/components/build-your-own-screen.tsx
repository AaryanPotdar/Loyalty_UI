"use client"

import React, { useState } from 'react'
import { ChevronLeft, Plus, Minus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { useRouter } from 'next/navigation'

export default function BuildYourOwnScreen() {
  const router = useRouter()
  const [basePrice, setBasePrice] = useState(4.99)
  const [toppings, setToppings] = useState<string[]>([])

  const addTopping = (topping: string) => {
    if (!toppings.includes(topping)) {
      setToppings([...toppings, topping])
    }
  }

  const removeTopping = (topping: string) => {
    setToppings(toppings.filter(t => t !== topping))
  }

  const totalPrice = basePrice + toppings.length * 0.50

  return (
    <div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-900">
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
        <h1 className="text-xl font-medium">Build Your Own</h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-4 space-y-6 bg-gray-50">
        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <h2 className="text-xl font-medium mb-4">Choose Your Base</h2>
            <RadioGroup defaultValue="milk-tea" className="space-y-2" onValueChange={(value) => setBasePrice(value === 'milk-tea' ? 4.99 : 5.99)}>
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="milk-tea" id="milk-tea" />
                <Label htmlFor="milk-tea" className="text-base">Milk Tea ($4.99)</Label>
              </div>
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="smoothie" id="smoothie" />
                <Label htmlFor="smoothie" className="text-base">Smoothie ($5.99)</Label>
              </div>
            </RadioGroup>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <h2 className="text-xl font-medium mb-6">Customize Your Drink</h2>
            <div className="space-y-6">
              <div>
                <Label htmlFor="flavor" className="text-base mb-2 block">Flavor</Label>
                <Select>
                  <SelectTrigger id="flavor" className="h-12">
                    <SelectValue placeholder="Select flavor" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="taro">Taro</SelectItem>
                    <SelectItem value="matcha">Matcha</SelectItem>
                    <SelectItem value="mango">Mango</SelectItem>
                    <SelectItem value="strawberry">Strawberry</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="sweetness" className="text-base mb-2 block">Sweetness</Label>
                <Select>
                  <SelectTrigger id="sweetness" className="h-12">
                    <SelectValue placeholder="Select sweetness" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0">0% (Sugar Free)</SelectItem>
                    <SelectItem value="25">25%</SelectItem>
                    <SelectItem value="50">50%</SelectItem>
                    <SelectItem value="75">75%</SelectItem>
                    <SelectItem value="100">100% (Full Sugar)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <h2 className="text-xl font-medium mb-4">Add Toppings ($0.50 each)</h2>
            <div className="space-y-4">
              {['Boba', 'Jelly', 'Pudding', 'Milk Foam'].map((topping) => (
                <div key={topping} className="flex items-center justify-between">
                  <Label htmlFor={topping} className="text-base">{topping}</Label>
                  <Switch
                    id={topping}
                    checked={toppings.includes(topping)}
                    onCheckedChange={(checked) => checked ? addTopping(topping) : removeTopping(topping)}
                    className="data-[state=checked]:bg-black"
                  />
                </div>
              ))}
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
          <span className="text-xl font-medium">${totalPrice.toFixed(2)}</span>
        </div>
        <Button className="w-full rounded-full bg-black hover:bg-gray-800 text-white h-12">
          Add to Cart
        </Button>
      </footer>
    </div>
  )
}