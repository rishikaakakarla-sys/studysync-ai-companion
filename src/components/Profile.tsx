import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { 
  User, 
  Trophy, 
  BookOpen, 
  Calendar,
  Settings,
  Flame,
  Star,
  Target,
  Award,
  Clock,
  TrendingUp
} from "lucide-react";

const Profile = () => {
  const userStats = {
    name: "Alex Johnson",
    email: "alex.johnson@student.edu",
    joinDate: "September 2024",
    currentStreak: 7,
    longestStreak: 15,
    totalXP: 2450,
    level: 12,
    nextLevelXP: 2800,
    studyHours: 142,
    quizzesCompleted: 89,
    notesUploaded: 23
  };

  const achievements = [
    {
      title: "Quiz Master",
      description: "Complete 50 AI-generated quizzes",
      progress: 80,
      maxProgress: 100,
      icon: Trophy,
      unlocked: false
    },
    {
      title: "Study Streak Champion", 
      description: "Maintain a 7-day study streak",
      progress: 100,
      maxProgress: 100,
      icon: Flame,
      unlocked: true
    },
    {
      title: "Community Helper",
      description: "Help 25 fellow students",
      progress: 12,
      maxProgress: 25,
      icon: Award,
      unlocked: false
    },
    {
      title: "Note Taker Pro",
      description: "Upload 20 study materials",
      progress: 100,
      maxProgress: 100, 
      icon: BookOpen,
      unlocked: true
    }
  ];

  const recentActivity = [
    {
      action: "Completed Physics Quiz #12",
      points: "+50 XP",
      time: "2 hours ago",
      type: "quiz"
    },
    {
      action: "Uploaded Chemistry Notes", 
      points: "+25 XP",
      time: "1 day ago",
      type: "upload"
    },
    {
      action: "Helped in Math Discussion",
      points: "+15 XP", 
      time: "2 days ago",
      type: "community"
    },
    {
      action: "Generated 15 Flashcards",
      points: "+30 XP",
      time: "3 days ago", 
      type: "ai"
    }
  ];

  const subjects = [
    { name: "Physics", level: 8, progress: 75, color: "primary" },
    { name: "Chemistry", level: 6, progress: 60, color: "secondary" },
    { name: "Mathematics", level: 9, progress: 85, color: "success" },
    { name: "Biology", level: 5, progress: 45, color: "warning" }
  ];

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <Card className="overflow-hidden">
        <div className="h-32 bg-gradient-primary"></div>
        <CardContent className="relative pb-8">
          <div className="flex flex-col md:flex-row md:items-end gap-6 -mt-16">
            <Avatar className="w-32 h-32 border-4 border-background shadow-lg">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback className="text-2xl bg-gradient-secondary text-white">
                {userStats.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            
            <div className="flex-1 md:pb-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-bold">{userStats.name}</h1>
                  <p className="text-muted-foreground">{userStats.email}</p>
                  <p className="text-sm text-muted-foreground">
                    Joined {userStats.joinDate}
                  </p>
                </div>
                
                <Button className="bg-gradient-primary">
                  <Settings className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Stats & Progress */}
        <div className="lg:col-span-2 space-y-6">
          {/* Stats Overview */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4 text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold">{userStats.totalXP.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">Total XP</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4 text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-streak rounded-full flex items-center justify-center">
                  <Flame className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold">{userStats.currentStreak}</div>
                <div className="text-sm text-muted-foreground">Day Streak</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4 text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-success rounded-full flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold">{userStats.quizzesCompleted}</div>
                <div className="text-sm text-muted-foreground">Quizzes Done</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4 text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-secondary rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold">{userStats.studyHours}h</div>
                <div className="text-sm text-muted-foreground">Study Time</div>
              </CardContent>
            </Card>
          </div>

          {/* Level Progress */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                Level Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">Level {userStats.level}</span>
                <span className="text-sm text-muted-foreground">
                  {userStats.totalXP} / {userStats.nextLevelXP} XP
                </span>
              </div>
              <Progress value={(userStats.totalXP / userStats.nextLevelXP) * 100} className="h-3" />
            </CardContent>
          </Card>

          {/* Subject Progress */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                Subject Progress
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {subjects.map((subject, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 bg-gradient-${subject.color} rounded-lg flex items-center justify-center`}>
                        <span className="text-white text-sm font-bold">{subject.level}</span>
                      </div>
                      <span className="font-medium">{subject.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">Level {subject.level}</span>
                  </div>
                  <Progress value={subject.progress} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Achievements */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5 text-warning" />
                Achievements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div 
                    key={index}
                    className={`p-3 rounded-lg border ${
                      achievement.unlocked 
                        ? 'border-success/30 bg-success/5' 
                        : 'border-border bg-muted/30'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        achievement.unlocked 
                          ? 'bg-gradient-success' 
                          : 'bg-muted'
                      }`}>
                        <Icon className={`w-5 h-5 ${
                          achievement.unlocked ? 'text-white' : 'text-muted-foreground'
                        }`} />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h4 className={`font-medium text-sm ${
                          achievement.unlocked ? 'text-foreground' : 'text-muted-foreground'
                        }`}>
                          {achievement.title}
                        </h4>
                        <p className="text-xs text-muted-foreground mb-2">
                          {achievement.description}
                        </p>
                        <Progress 
                          value={(achievement.progress / achievement.maxProgress) * 100} 
                          className="h-1.5"
                        />
                        <div className="flex justify-between items-center mt-1">
                          <span className="text-xs text-muted-foreground">
                            {achievement.progress}/{achievement.maxProgress}
                          </span>
                          {achievement.unlocked && (
                            <Badge className="bg-success text-success-foreground text-xs">
                              Unlocked!
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3 text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div className="flex-1 min-w-0">
                      <p className="text-foreground">{activity.action}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="text-xs">
                          {activity.points}
                        </Badge>
                        <span className="text-muted-foreground text-xs">
                          {activity.time}
                        </span>
                      </div>
                    </div>
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

export default Profile;