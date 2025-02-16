"use client"
import React from 'react'
import { Check, ChevronLeft, CreditCard } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { useRouter } from 'next/navigation'

export default function OrderConfirmationScreen() {
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
        <h1 className="text-xl font-medium">Order Confirmation</h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-4 space-y-6 bg-gray-50">
        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <h2 className="text-2xl font-medium mb-6">Order Summary</h2>
            <div className="space-y-3">
              <div className="flex justify-between text-base">
                <span>1x Taro Milk Tea (Large)</span>
                <span>$5.99</span>
              </div>
              <div className="flex justify-between text-base text-gray-600">
                <span>Extra Boba</span>
                <span>$0.50</span>
              </div>
              <div className="flex justify-between text-base text-gray-600">
                <span>Extra Jelly</span>
                <span>$0.50</span>
              </div>
            </div>
            <Separator className="my-6" />
            <div className="flex justify-between text-lg font-medium">
              <span>Total</span>
              <span>$6.99</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <h2 className="text-xl font-medium mb-4">Payment Method</h2>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start rounded-full h-12">
                <CreditCard className="mr-3 h-4 w-4" />
                GT Dining Dollars
              </Button>
              <Button variant="outline" className="w-full justify-start rounded-full h-12">
                <CreditCard className="mr-3 h-4 w-4" />
                BuzzCard
              </Button>
              <Button variant="outline" className="w-full justify-start rounded-full h-12">
                <CreditCard className="mr-3 h-4 w-4" />
                Credit Card
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <h2 className="text-xl font-medium mb-4">Pickup Time</h2>
            <p className="text-base">Estimated pickup time: <span className="font-medium">12:45 PM</span></p>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 p-4">
        <Button className="w-full rounded-full bg-black hover:bg-gray-800 text-white h-12">
          Place Order
        </Button>
      </footer>
    </div>
  )
}