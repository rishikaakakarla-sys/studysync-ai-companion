import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  BookOpen, 
  Upload, 
  Video, 
  HelpCircle, 
  Brain,
  Flame,
  Trophy,
  Target,
  Users,
  Star
} from "lucide-react";
import heroImage from "@/assets/hero-studysync.jpg";

const Dashboard = () => {
  const [streak, setStreak] = useState(7);
  const [xp, setXP] = useState(2450);
  const [dailyGoal] = useState(500);
  const [currentXP] = useState(350);

  const quickActions = [
    {
      icon: Upload,
      title: "Upload Notes",
      description: "Scan or upload your study materials",
      variant: "primary" as const,
      gradient: "gradient-primary"
    },
    {
      icon: Video,
      title: "Upload Video", 
      description: "Share educational videos",
      variant: "secondary" as const,
      gradient: "gradient-glow"
    },
    {
      icon: HelpCircle,
      title: "Ask Doubt",
      description: "Get instant help from AI or peers",
      variant: "success" as const,
      gradient: "gradient-success"
    },
    {
      icon: Brain,
      title: "Play Quiz",
      description: "Test your knowledge",
      variant: "warning" as const,
      gradient: "gradient-streak"
    }
  ];

  const achievements = [
    { title: "Quiz Master", icon: Trophy, progress: 80 },
    { title: "Study Streak", icon: Flame, progress: 100 },
    { title: "Helper", icon: Users, progress: 45 }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-primary">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-white space-y-6">
              <div className="space-y-2">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Welcome back to
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                    StudySync
                  </span>
                </h1>
                <p className="text-xl text-white/90">
                  Your AI-powered study companion
                </p>
              </div>
              
              {/* Streak & XP Display */}
              <div className="flex gap-4 flex-wrap">
                <Badge variant="secondary" className="px-4 py-2 bg-white/10 text-white border-white/20 hover:bg-white/20">
                  <Flame className="w-4 h-4 mr-2 text-orange-400" />
                  {streak} day streak
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 bg-white/10 text-white border-white/20 hover:bg-white/20">
                  <Star className="w-4 h-4 mr-2 text-yellow-400" />
                  {xp.toLocaleString()} XP
                </Badge>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={heroImage} 
                alt="StudySync Hero"
                className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-glow animate-float"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-8">
        {/* Daily Goal Progress */}
        <Card className="mb-12 shadow-card">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                Daily Goal Progress
              </CardTitle>
              <span className="text-sm text-muted-foreground">
                {currentXP}/{dailyGoal} XP
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <Progress value={(currentXP / dailyGoal) * 100} className="h-3" />
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-primary" />
            Quick Actions
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <Card 
                  key={index} 
                  className="group cursor-pointer transition-all duration-300 hover:shadow-primary hover:-translate-y-1 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${action.gradient} flex items-center justify-center shadow-lg group-hover:animate-bounce-gentle`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">{action.title}</h3>
                    <p className="text-sm text-muted-foreground">{action.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Achievements & Stats */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-warning" />
                Achievements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-medium">{achievement.title}</span>
                        <span className="text-sm text-muted-foreground">
                          {achievement.progress}%
                        </span>
                      </div>
                      <Progress value={achievement.progress} className="h-2" />
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-secondary" />
                Leaderboard
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { name: "Alex Johnson", xp: 3200, rank: 1 },
                  { name: "You", xp: 2450, rank: 2, isCurrentUser: true },
                  { name: "Sarah Chen", xp: 2100, rank: 3 }
                ].map((user, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center justify-between p-3 rounded-lg ${
                      user.isCurrentUser ? 'bg-primary/10 border border-primary/20' : 'bg-muted/50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        user.rank === 1 ? 'bg-gradient-streak text-white' :
                        user.rank === 2 ? 'bg-gradient-primary text-white' :
                        'bg-gradient-secondary text-white'
                      }`}>
                        {user.rank}
                      </div>
                      <span className={`font-medium ${user.isCurrentUser ? 'text-primary' : ''}`}>
                        {user.name}
                      </span>
                    </div>
                    <span className="text-sm font-semibold">
                      {user.xp.toLocaleString()} XP
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;