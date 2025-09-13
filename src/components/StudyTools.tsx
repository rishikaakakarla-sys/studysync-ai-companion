import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Upload, 
  FileText, 
  Image, 
  Video,
  Brain,
  Sparkles,
  Clock,
  CheckCircle,
  PlayCircle,
  Shuffle,
  Zap
} from "lucide-react";

const StudyTools = () => {
  const [uploadProgress, setUploadProgress] = useState(0);
  
  const recentUploads = [
    {
      title: "Physics Chapter 12",
      type: "PDF",
      status: "processed",
      aiGenerated: { quizzes: 15, flashcards: 45, memes: 8 }
    },
    {
      title: "Chemistry Notes",
      type: "Image",
      status: "processing",
      progress: 75
    },
    {
      title: "Math Tutorial",
      type: "Video",
      status: "pending",
      progress: 0
    }
  ];

  const aiFeatures = [
    {
      icon: Brain,
      title: "Smart Quizzes",
      description: "AI generates personalized quizzes from your notes",
      color: "primary",
      generated: 127
    },
    {
      icon: Sparkles,
      title: "Flashcards",
      description: "Auto-generated flashcards for quick revision",
      color: "secondary", 
      generated: 342
    },
    {
      icon: Shuffle,
      title: "Study Games",
      description: "Interactive puzzles and crosswords",
      color: "success",
      generated: 89
    },
    {
      icon: Zap,
      title: "Memory Memes",
      description: "Fun memes to help remember concepts",
      color: "warning",
      generated: 156
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-4 py-8">
        <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          AI-Powered Study Tools
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Upload your notes, videos, or images and let AI create personalized study materials
        </p>
      </div>

      <Tabs defaultValue="upload" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="upload">Upload & Process</TabsTrigger>
          <TabsTrigger value="generated">AI Generated</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>

        <TabsContent value="upload" className="space-y-6">
          {/* Upload Area */}
          <Card className="border-2 border-dashed border-primary/30 hover:border-primary/50 transition-colors">
            <CardContent className="p-8">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 mx-auto bg-gradient-primary rounded-full flex items-center justify-center">
                  <Upload className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Upload Study Materials</h3>
                  <p className="text-muted-foreground mb-4">
                    Drag & drop or click to upload PDFs, images, or videos
                  </p>
                </div>
                <div className="flex gap-2 justify-center flex-wrap">
                  <Badge variant="outline" className="gap-1">
                    <FileText className="w-3 h-3" />
                    PDF
                  </Badge>
                  <Badge variant="outline" className="gap-1">
                    <Image className="w-3 h-3" />
                    Images
                  </Badge>
                  <Badge variant="outline" className="gap-1">
                    <Video className="w-3 h-3" />
                    Videos
                  </Badge>
                </div>
                <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                  Choose Files
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* AI Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {aiFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center hover:shadow-card transition-shadow">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-${feature.color} flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{feature.description}</p>
                    <Badge variant="secondary">{feature.generated} generated</Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        <TabsContent value="generated" className="space-y-6">
          {/* Generated Content */}
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="w-5 h-5 text-primary" />
                  Recent AI Generated Content
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { title: "Physics Quiz #12", type: "quiz", questions: 15, subject: "Physics" },
                    { title: "Chemistry Flashcards", type: "flashcard", cards: 25, subject: "Chemistry" },
                    { title: "Math Puzzle Game", type: "game", level: "Advanced", subject: "Mathematics" },
                    { title: "Biology Memory Memes", type: "meme", count: 8, subject: "Biology" },
                    { title: "History Timeline", type: "quiz", questions: 20, subject: "History" },
                    { title: "English Vocab Cards", type: "flashcard", cards: 30, subject: "English" }
                  ].map((item, index) => (
                    <Card key={index} className="hover:shadow-card transition-shadow cursor-pointer">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-3">
                          <h4 className="font-medium">{item.title}</h4>
                          <Badge variant="outline">{item.subject}</Badge>
                        </div>
                        <div className="text-sm text-muted-foreground mb-3">
                          {item.type === 'quiz' && `${item.questions} questions`}
                          {item.type === 'flashcard' && `${item.cards} cards`}
                          {item.type === 'game' && `Level: ${item.level}`}
                          {item.type === 'meme' && `${item.count} memes`}
                        </div>
                        <Button size="sm" className="w-full">
                          <PlayCircle className="w-4 h-4 mr-2" />
                          Start {item.type === 'quiz' ? 'Quiz' : item.type === 'flashcard' ? 'Review' : 'Playing'}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="history" className="space-y-6">
          {/* Upload History */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Upload History
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentUploads.map((upload, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      {upload.type === 'PDF' && <FileText className="w-5 h-5 text-white" />}
                      {upload.type === 'Image' && <Image className="w-5 h-5 text-white" />}
                      {upload.type === 'Video' && <Video className="w-5 h-5 text-white" />}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-medium">{upload.title}</h4>
                        <Badge 
                          variant={upload.status === 'processed' ? 'default' : upload.status === 'processing' ? 'secondary' : 'outline'}
                        >
                          {upload.status === 'processed' && <CheckCircle className="w-3 h-3 mr-1" />}
                          {upload.status}
                        </Badge>
                      </div>
                      
                      {upload.status === 'processing' && (
                        <Progress value={upload.progress} className="h-2 mb-2" />
                      )}
                      
                      {upload.status === 'processed' && upload.aiGenerated && (
                        <div className="flex gap-2 text-sm text-muted-foreground">
                          <span>{upload.aiGenerated.quizzes} quizzes</span>
                          <span>•</span>
                          <span>{upload.aiGenerated.flashcards} flashcards</span>
                          <span>•</span>
                          <span>{upload.aiGenerated.memes} memes</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StudyTools;