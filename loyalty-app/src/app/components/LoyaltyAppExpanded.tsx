import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Star, Gift, Calendar, TrendingUp, QrCode, History, User, Settings, Award, ChevronRight } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const LoyaltyAppExpanded = () => {
  const [activeScreen, setActiveScreen] = React.useState('home');

  const screens = {
    home: (
      <div className="space-y-4 min-h-[600px]">
        {/* Header */}
        <div className="flex items-center justify-between bg-yellow-500 p-4 rounded-lg text-white">
          <div>
            <h2 className="text-xl font-bold">Welcome Back, Burdell!</h2>
            <p className="text-sm">Gold Member</p>
          </div>
          <Badge className="bg-white text-yellow-500">2,450 pts</Badge>
        </div>

        {/* Progress to Next Reward */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Next Reward: Free Boba</CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={70} className="mb-2" />
            <p className="text-sm text-gray-600">350 points to go!</p>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-3 gap-4">
          <Card className="p-4">
            <div className="flex flex-col items-center">
              <QrCode className="h-6 w-6 mb-2 text-purple-500" />
              <span className="text-sm">Scan</span>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex flex-col items-center">
              <Gift className="h-6 w-6 mb-2 text-blue-500" />
              <span className="text-sm">Rewards</span>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex flex-col items-center">
              <History className="h-6 w-6 mb-2 text-green-500" />
              <span className="text-sm">History</span>
            </div>
          </Card>
        </div>

        {/* Special Offers */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">GT Student Specials</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex items-center justify-between p-2 bg-gray-100 rounded">
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-500 mr-2" />
                <span>2X Points During Finals Week!</span>
              </div>
            </div>
            <div className="flex items-center justify-between p-2 bg-gray-100 rounded">
              <div className="flex items-center">
                <TrendingUp className="h-4 w-4 text-green-500 mr-2" />
                <span>Birthday Month Bonus</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    ),

    rewards: (
      <div className="space-y-4 min-h-[600px]">
        <Card>
          <CardHeader className="bg-blue-500 text-white">
            <CardTitle>My Rewards</CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <Tabs defaultValue="available">
              <TabsList className="w-full mb-4">
                <TabsTrigger value="available" className="flex-1">Available</TabsTrigger>
                <TabsTrigger value="history" className="flex-1">History</TabsTrigger>
              </TabsList>
              <TabsContent value="available" className="space-y-3">
                <Card className="p-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium">Free Classic Boba</h4>
                      <p className="text-xs text-gray-500">Expires in 7 days</p>
                    </div>
                    <button className="bg-blue-500 text-white px-3 py-1 rounded text-sm">Redeem</button>
                  </div>
                </Card>
                <Card className="p-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium">Free Topping</h4>
                      <p className="text-xs text-gray-500">Expires in 14 days</p>
                    </div>
                    <button className="bg-blue-500 text-white px-3 py-1 rounded text-sm">Redeem</button>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Points Progress</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm">Free Premium Drink</span>
                <span className="text-sm text-gray-500">1500 pts</span>
              </div>
              <Progress value={60} />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm">BOGO Special</span>
                <span className="text-sm text-gray-500">2000 pts</span>
              </div>
              <Progress value={45} />
            </div>
          </CardContent>
        </Card>
      </div>
    ),

    profile: (
      <div className="space-y-4 min-h-[600px]">
        <Card>
          <CardHeader className="bg-purple-500 text-white">
            <CardTitle>My Profile</CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-gray-100 p-4 rounded-full">
                <User className="h-8 w-8 text-gray-600" />
              </div>
              <div>
                <h3 className="font-bold">George P. Burdell</h3>
                <p className="text-sm text-gray-600">george.burdell@gatech.edu</p>
              </div>
            </div>

            <div className="space-y-2">
              <Card className="p-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-yellow-500" />
                    <div>
                      <h4 className="font-medium">Gold Member</h4>
                      <p className="text-xs text-gray-500">Since Sep 2023</p>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </div>
              </Card>

              <Card className="p-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <Settings className="h-5 w-5 text-gray-500" />
                    <span>Preferences</span>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </div>
              </Card>

              <Card className="p-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <History className="h-5 w-5 text-gray-500" />
                    <span>Order History</span>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </div>
              </Card>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Achievements</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex items-center justify-between p-2 bg-gray-100 rounded">
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-500 mr-2" />
                <span>First Order Complete</span>
              </div>
              <Badge>+50 pts</Badge>
            </div>
            <div className="flex items-center justify-between p-2 bg-gray-100 rounded">
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-500 mr-2" />
                <span>5 Orders in a Week</span>
              </div>
              <Badge>+100 pts</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    ),

    scan: (
      <div className="space-y-4 min-h-[600px]">
        <Card>
          <CardHeader className="bg-green-500 text-white">
            <CardTitle>Scan to Earn</CardTitle>
          </CardHeader>
          <CardContent className="p-4 text-center">
            <div className="bg-gray-100 p-8 rounded-lg mb-4">
              <QrCode className="h-32 w-32 mx-auto text-gray-800" />
            </div>
            <p className="text-sm text-gray-600">Show this code at checkout to earn points</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Quick Stats</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4">
            <div className="text-center p-3 bg-gray-50 rounded">
              <h3 className="text-2xl font-bold text-blue-500">2,450</h3>
              <p className="text-sm text-gray-600">Total Points</p>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded">
              <h3 className="text-2xl font-bold text-green-500">15</h3>
              <p className="text-sm text-gray-600">Orders This Month</p>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  };

  return (
    <div className="max-w-md mx-auto space-y-4 p-4 bg-gray-50">
      <Tabs defaultValue="home" className="space-y-4">
        <TabsList className="w-full">
          <TabsTrigger value="home" onClick={() => setActiveScreen('home')}>Home</TabsTrigger>
          <TabsTrigger value="rewards" onClick={() => setActiveScreen('rewards')}>Rewards</TabsTrigger>
          <TabsTrigger value="scan" onClick={() => setActiveScreen('scan')}>Scan</TabsTrigger>
          <TabsTrigger value="profile" onClick={() => setActiveScreen('profile')}>Profile</TabsTrigger>
        </TabsList>
        <TabsContent value="home">{screens['home']}</TabsContent>
        <TabsContent value="rewards">{screens['rewards']}</TabsContent>
        <TabsContent value="scan">{screens['scan']}</TabsContent>
        <TabsContent value="profile">{screens['profile']}</TabsContent>
      </Tabs>
    </div>
  );
};

export default LoyaltyAppExpanded;