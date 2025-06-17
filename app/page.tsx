import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Mail, Linkedin, Twitter, BookOpen, PenTool } from "lucide-react"
import Image from "next/image"

export default function Portfolio() {
  const apps = [
    {
      id: 1,
      title: "タスク管理アプリ",
      description: "チーム向けのタスク管理とプロジェクト追跡ができるWebアプリケーション",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      features: [
        "リアルタイム通知機能の実装",
        "ドラッグ&ドロップによる直感的なUI",
        "レスポンシブデザインでモバイル対応",
      ],
      githubUrl: "https://github.com/username/task-app",
      liveUrl: "https://task-app-demo.com",
    },
    {
      id: 2,
      title: "天気予報アプリ",
      description: "位置情報を活用した詳細な天気予報と気象データの可視化アプリ",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Vue.js", "TypeScript", "Chart.js", "OpenWeather API"],
      features: ["位置情報APIとの連携", "Chart.jsを使った気象データの可視化", "PWA対応でオフライン機能を実装"],
      githubUrl: "https://github.com/username/weather-app",
      liveUrl: "https://weather-app-demo.com",
    },
    {
      id: 3,
      title: "家計簿アプリ",
      description: "支出管理と予算設定ができるパーソナルファイナンス管理アプリ",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
      features: ["カテゴリ別支出分析機能", "予算アラート機能の実装", "データエクスポート機能（CSV/PDF）"],
      githubUrl: "https://github.com/username/budget-app",
      liveUrl: "https://budget-app-demo.com",
    },
  ]

  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Vue.js",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "Prisma",
    "Tailwind CSS",
    "Git",
    "Docker",
    "AWS",
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <a className="mr-6 flex items-center space-x-2" href="/">
              <span className="font-bold text-xl">Portfolio</span>
            </a>
          </div>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <a href="#about" className="transition-colors hover:text-foreground/80">
              About
            </a>
            <a href="#projects" className="transition-colors hover:text-foreground/80">
              Projects
            </a>
            <a href="#skills" className="transition-colors hover:text-foreground/80">
              Skills
            </a>
            <a href="#blog" className="transition-colors hover:text-foreground/80">
              Blog
            </a>
            <a href="#contact" className="transition-colors hover:text-foreground/80">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <Image
              src="/placeholder.svg?height=150&width=150"
              alt="プロフィール画像"
              width={150}
              height={150}
              className="rounded-full mx-auto mb-6"
            />
          </div>
          <h1 className="text-4xl font-bold mb-4">山田 太郎</h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
            フルスタックエンジニアとして、ユーザー体験を重視したWebアプリケーションの開発に取り組んでいます。
            新しい技術への挑戦と、実用的なソリューションの提供を心がけています。
          </p>
          <div className="flex justify-center space-x-4 flex-wrap gap-2">
            <Button variant="outline" size="sm" asChild>
              <a href="https://github.com/username" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://zenn.dev/username" target="_blank" rel="noopener noreferrer">
                <BookOpen className="mr-2 h-4 w-4" />
                Zenn
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://note.com/username" target="_blank" rel="noopener noreferrer">
                <PenTool className="mr-2 h-4 w-4" />
                Note
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer">
                <Twitter className="mr-2 h-4 w-4" />
                Twitter
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">プロジェクト</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apps.map((app) => (
              <Card key={app.id} className="overflow-hidden">
                <div className="aspect-video relative">
                  <Image src={app.image || "/placeholder.svg"} alt={app.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {app.title}
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm" asChild>
                        <a href={app.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button variant="ghost" size="sm" asChild>
                        <a href={app.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardTitle>
                  <CardDescription>{app.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">使用技術</h4>
                      <div className="flex flex-wrap gap-2">
                        {app.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">工夫した点</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {app.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">スキル</h2>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill) => (
                <Badge key={skill} variant="outline" className="text-sm py-2 px-4">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">技術ブログ</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            技術記事や学習記録を定期的に投稿しています。
          </p>
          <div className="flex justify-center space-x-6">
            <Card className="p-6 max-w-sm">
              <BookOpen className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Zenn</h3>
              <p className="text-muted-foreground mb-4">技術記事やチュートリアルを投稿</p>
              <Button variant="outline" asChild>
                <a href="https://zenn.dev/username" target="_blank" rel="noopener noreferrer">
                  記事を読む
                </a>
              </Button>
            </Card>
            <Card className="p-6 max-w-sm">
              <PenTool className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Note</h3>
              <p className="text-muted-foreground mb-4">開発日記や学習記録を共有</p>
              <Button variant="outline" asChild>
                <a href="https://note.com/username" target="_blank" rel="noopener noreferrer">
                  記事を読む
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">お問い合わせ</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            プロジェクトのご相談や採用に関するお問い合わせは、お気軽にご連絡ください。
          </p>
          <Button size="lg">
            <Mail className="mr-2 h-5 w-5" />
            メールを送る
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 山田 太郎. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
