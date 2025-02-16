"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { Bell, Clock, Home as HomeIcon, Menu as MenuIcon, Moon, Coffee, Sun, User, ShoppingBag } from 'lucide-react'
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Switch } from "@/components/ui/switch"

export default function HomeScreen() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className={`flex flex-col h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        {/* Header */}
        <header className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-4 flex justify-between items-center shadow-sm">
          <h1 className="text-2xl font-medium">Nom Station</h1>
          <div className="flex items-center space-x-4">
            <Switch
              checked={darkMode}
              onCheckedChange={toggleDarkMode}
              className="data-[state=checked]:bg-black dark:data-[state=checked]:bg-white"
            />
            {darkMode ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            <Avatar className="bg-gray-100 dark:bg-gray-800">
              <AvatarFallback>
                <User className="h-5 w-5" />
              </AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-4 space-y-6 bg-gray-50 dark:bg-gray-900">
          {/* Quick Reorder */}
          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <h2 className="text-lg font-medium mb-4">Quick Reorder</h2>
              <div className="flex space-x-3 overflow-x-auto">
                <Link href="/build-your-own" passHref>
                  <Button variant="outline" className="flex-shrink-0 rounded-full">
                    Taro Milk Tea
                  </Button>
                </Link>
                <Link href="/build-your-own" passHref>
                  <Button variant="outline" className="flex-shrink-0 rounded-full">
                    Mango Smoothie
                  </Button>
                </Link>
                <Link href="/build-your-own" passHref>
                  <Button variant="outline" className="flex-shrink-0 rounded-full">
                    Matcha Latte
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Wait Times */}
          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-medium">Current Wait Time</h2>
                <div className="flex items-center space-x-2">
                  <Clock className="text-gray-500" />
                  <span className="text-2xl font-medium">10 min</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Menu Button */}
          <div className="py-2">
            <Link href="/menu" passHref>
              <Button className="w-full rounded-full bg-black hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 dark:text-black text-white h-12 text-base">
                View Full Menu
              </Button>
            </Link>
          </div>

          {/* GT Promotions */}
          <Card className="border-0 shadow-sm bg-black dark:bg-white">
            <CardContent className="p-6">
              <h2 className="text-lg font-medium text-white dark:text-black mb-2">Yellow Jacket Special</h2>
              <p className="text-gray-300 dark:text-gray-600">Show your student ID for 10% off your order!</p>
            </CardContent>
          </Card>

          {/* Rewards Progress */}
          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <h2 className="text-lg font-medium mb-4">Rewards Progress</h2>
              <Progress value={60} className="mb-4 h-2" />
              <p className="text-gray-600 dark:text-gray-400">3 more purchases until your next free drink!</p>
              <Link href="/rewards" passHref>
                <Button variant="link" className="mt-2 p-0 h-auto">View Rewards →</Button>
              </Link>
            </CardContent>
          </Card>
        </main>

        {/* Navigation */}
        <nav className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 flex justify-around py-4">
          <Link href="/" passHref>
            <Button variant="ghost" size="icon" className="hover:bg-gray-100 dark:hover:bg-gray-800">
              <HomeIcon className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="/menu" passHref>
            <Button variant="ghost" size="icon" className="hover:bg-gray-100 dark:hover:bg-gray-800">
              <MenuIcon className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="/build-your-own" passHref>
            <Button variant="ghost" size="icon" className="hover:bg-gray-100 dark:hover:bg-gray-800">
              <Coffee className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="/rewards" passHref>
            <Button variant="ghost" size="icon" className="hover:bg-gray-100 dark:hover:bg-gray-800">
              <Bell className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="/order-confirmation" passHref>
            <Button variant="ghost" size="icon" className="hover:bg-gray-100 dark:hover:bg-gray-800">
              <ShoppingBag className="h-5 w-5" />
            </Button>
          </Link>
        </nav>
      </div>
    </div>
  )
}