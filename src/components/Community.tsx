import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  MessageCircle, 
  Users, 
  TrendingUp,
  Clock,
  Heart,
  Reply,
  Video,
  Mic,
  UserPlus,
  Award
} from "lucide-react";

const Community = () => {
  const discussions = [
    {
      id: 1,
      title: "Help with Organic Chemistry Reaction Mechanisms",
      author: "Sarah Chen",
      avatar: "SC",
      subject: "Chemistry",
      replies: 12,
      likes: 25,
      timeAgo: "2 hours ago",
      isHot: true
    },
    {
      id: 2,
      title: "Best strategies for memorizing historical dates?",
      author: "Alex Johnson", 
      avatar: "AJ",
      subject: "History",
      replies: 8,
      likes: 15,
      timeAgo: "4 hours ago"
    },
    {
      id: 3,
      title: "Physics problem: Wave interference patterns",
      author: "Maria Garcia",
      avatar: "MG", 
      subject: "Physics",
      replies: 6,
      likes: 18,
      timeAgo: "1 day ago"
    }
  ];

  const studyRooms = [
    {
      title: "Math Study Group",
      members: 8,
      maxMembers: 12,
      subject: "Mathematics",
      isLive: true,
      hasVideo: true
    },
    {
      title: "Biology Review Session",
      members: 5,
      maxMembers: 10,
      subject: "Biology", 
      isLive: true,
      hasVideo: false
    },
    {
      title: "English Literature Discussion",
      members: 15,
      maxMembers: 20,
      subject: "English",
      isLive: false,
      hasVideo: true
    }
  ];

  const leaderboard = [
    { name: "Emma Wilson", points: 3250, badge: "Helper Pro", avatar: "EW" },
    { name: "David Lee", points: 2890, badge: "Quiz Master", avatar: "DL" },
    { name: "You", points: 2450, badge: "Study Buddy", avatar: "YU", isCurrentUser: true },
    { name: "Lisa Park", points: 2100, badge: "Note Taker", avatar: "LP" },
    { name: "Ryan Kim", points: 1950, badge: "Newcomer", avatar: "RK" }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-4 py-8">
        <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Study Community
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Connect, collaborate, and learn together with fellow students
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Discussion Feed */}
        <div className="lg:col-span-2 space-y-6">
          {/* Hot Discussions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Hot Discussions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {discussions.map((discussion) => (
                <div key={discussion.id} className="p-4 border border-border rounded-lg hover:shadow-card transition-shadow cursor-pointer">
                  <div className="flex items-start gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback className="bg-gradient-primary text-white">
                        {discussion.avatar}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-medium hover:text-primary transition-colors">
                          {discussion.title}
                        </h3>
                        {discussion.isHot && (
                          <Badge className="bg-gradient-streak text-streak-foreground">
                            Hot
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
                        <span>by {discussion.author}</span>
                        <Badge variant="outline">{discussion.subject}</Badge>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {discussion.timeAgo}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <Reply className="w-3 h-3" />
                          {discussion.replies} replies
                        </span>
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <Heart className="w-3 h-3" />
                          {discussion.likes} likes
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              <Button className="w-full" variant="outline">
                <MessageCircle className="w-4 h-4 mr-2" />
                View All Discussions
              </Button>
            </CardContent>
          </Card>

          {/* Study Rooms */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-secondary" />
                Active Study Rooms
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {studyRooms.map((room, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-secondary rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium">{room.title}</h4>
                        {room.isLive && (
                          <Badge className="bg-green-500 text-white">
                            Live
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Badge variant="outline">{room.subject}</Badge>
                        <span>{room.members}/{room.maxMembers} members</span>
                        {room.hasVideo && <Video className="w-3 h-3" />}
                        {!room.hasVideo && <Mic className="w-3 h-3" />}
                      </div>
                    </div>
                  </div>
                  
                  <Button size="sm" className="bg-gradient-secondary">
                    <UserPlus className="w-4 h-4 mr-2" />
                    Join
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Community Leaderboard */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5 text-warning" />
                Community Leaders
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {leaderboard.map((user, index) => (
                  <div 
                    key={index}
                    className={`flex items-center gap-3 p-3 rounded-lg ${
                      user.isCurrentUser 
                        ? 'bg-primary/10 border border-primary/20' 
                        : 'hover:bg-muted/50'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className={`text-sm font-bold w-6 h-6 rounded-full flex items-center justify-center ${
                        index === 0 ? 'bg-gradient-streak text-white' :
                        index === 1 ? 'bg-gradient-primary text-white' :
                        index === 2 ? 'bg-gradient-secondary text-white' :
                        'text-muted-foreground'
                      }`}>
                        {index + 1}
                      </span>
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className={
                          user.isCurrentUser ? 'bg-primary text-primary-foreground' : 'bg-muted'
                        }>
                          {user.avatar}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm">
                        {user.name}
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">
                          {user.badge}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {user.points.toLocaleString()} pts
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start bg-gradient-primary">
                <MessageCircle className="w-4 h-4 mr-2" />
                Start Discussion
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Users className="w-4 h-4 mr-2" />
                Create Study Room
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Video className="w-4 h-4 mr-2" />
                Join Random Room
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Community;