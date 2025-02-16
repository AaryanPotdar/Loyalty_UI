"use client"

import React from 'react'
import { ChevronLeft, Gift } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useRouter } from 'next/navigation'

export default function RewardsScreen() {
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
        <h1 className="text-xl font-medium">Rewards</h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-4 space-y-6 bg-gray-50">
        <Card className="border-0 shadow-sm bg-black text-white">
          <CardContent className="p-6">
            <h2 className="text-2xl font-medium mb-2">Your Rewards</h2>
            <p className="text-lg">7 points</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <h2 className="text-xl font-medium mb-4">Progress to Next Reward</h2>
            <Progress value={70} className="mb-4 h-2" />
            <p className="text-gray-600">3 more purchases until your next free drink!</p>
          </CardContent>
        </Card>

        <h2 className="text-xl font-medium mt-6 mb-4">Available Rewards</h2>

        <Card className="border-0 shadow-sm">
          <CardContent className="p-6 flex items-center">
            <Gift className="h-6 w-6 mr-4 text-gray-500" />
            <div>
              <h3 className="text-base font-medium">Free Drink</h3>
              <p className="text-sm text-gray-600">Any size, any drink</p>
            </div>
            <Button className="ml-auto rounded-full">Redeem</Button>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm">
          <CardContent className="p-6 flex items-center">
            <Gift className="h-6 w-6 mr-4 text-gray-500" />
            <div>
              <h3 className="text-base font-medium">50% Off Roll Ice Cream</h3>
              <p className="text-sm text-gray-600">Valid for one week</p>
            </div>
            <Button className="ml-auto rounded-full" variant="outline">15 points</Button>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm">
          <CardContent className="p-6 flex items-center">
            <Gift className="h-6 w-6 mr-4 text-gray-500" />
            <div>
              <h3 className="text-base font-medium">Free Topping</h3>
              <p className="text-sm text-gray-600">Add any topping for free</p>
            </div>
            <Button className="ml-auto rounded-full" variant="outline">10 points</Button>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}