import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  ExternalLink,
  Mail,
  Twitter,
  BookOpen,
  PenTool,
} from "lucide-react";
import Image from "next/image";

export default function Portfolio() {
  const apps = [
    {
      id: 1,
      title: "株価予測ソフト",
      description: "過去の株価を取得し、将来の株の値動きを予測するソフト",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Python", "TensorFlow", "CUDA", "AWS", "J-Quants API"],
      features: [
        "J-Quants APIを使って株価データを取得",
        "AWSのEC2インスタンスを借りて高負荷処理を実行（使用断念）",
        "学習モデルのパラメータを調整して精度向上を目論むが期待通りの成果得られず。。",
      ],
      githubUrl: "https://github.com/dko5ki23t/investment_support_with_ai",
    },
    {
      id: 2,
      title: "ポケレコ",
      description: "育成したポケモンや対戦記録を管理するAndroid向けアプリ",
      image: "/poke_reco_icon.png?height=200&width=300",
      technologies: ["Flutter", "Dart", "Python", "PokeAPI"],
      features: [
        "対戦記録から相手ポケモンのパラメータを計算",
        "見やすい・使いやすいUIを追求",
        "アプリの操作を自動で行うテストを作成",
      ],
      githubUrl: "https://github.com/dko5ki23t/poke_match_record_app",
    },
    {
      id: 3,
      title: "押しごと",
      description: "箱押し＋マージゲームのAndroid/iOS向けアプリ",
      image: "/oshigoto_icon.png?height=200&width=300",
      technologies: ["Flutter", "Flame", "Dart", "Python"],
      features: [
        "チュートリアルの実装",
        "毎フレームでnewを極限まで減らして高速化",
        "アプリバージョン変更に応じて自動でGitのタグ打ち",
        "テスターの意見を参考に難易度調整やUI調整を実施",
      ],
      githubUrl: "https://github.com/dko5ki23t/box_pusher",
      liveUrl: "https://shimarinapps.com/apps/oshigoto/",
    },
    {
      id: 4,
      title: "ピンシェア",
      description: "URL共有で簡単に共同して地図を編集できるWebサービス",
      image: "/pinshare_icon.svg?height=200&width=300",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "v0",
        "Places API",
        "Firebase",
        "Firestore",
      ],
      features: [
        "v0を使って開発工数を大幅削減",
        "最新のPlaces APIに対応",
        "共同編集者による更新をリアルタイムで地図に反映",
      ],
      liveUrl: "https://v0-pin-share-service.vercel.app/",
    },
  ];

  const skills = [
    "C",
    "C++",
    "Python",
    "Dart",
    "TypeScript",
    "Flutter",
    "Flame",
    "React",
    "Next.js",
    "Git",
    "Firebase",
    "Firestore",
    "Docker",
    "AWS",
  ];

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
            <a
              href="#about"
              className="transition-colors hover:text-foreground/80"
            >
              About
            </a>
            <a
              href="#projects"
              className="transition-colors hover:text-foreground/80"
            >
              Works
            </a>
            <a
              href="#skills"
              className="transition-colors hover:text-foreground/80"
            >
              Skills
            </a>
            <a
              href="#blog"
              className="transition-colors hover:text-foreground/80"
            >
              Articles
            </a>
            <a
              href="#contact"
              className="transition-colors hover:text-foreground/80"
            >
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
              src="/profile_icon.png?height=150&width=150"
              alt="プロフィール画像"
              width={150}
              height={150}
              className="rounded-full mx-auto mb-6"
            />
          </div>
          <h1 className="text-4xl font-bold mb-4">Koki Inoue</h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
            組み込みエンジニアだったり個人開発者だったり
          </p>
          <div className="flex justify-center space-x-4 flex-wrap gap-2">
            <Button variant="outline" size="sm" asChild>
              <a
                href="https://github.com/dko5ki23t/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a
                href="https://zenn.dev/dko5ki23t"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BookOpen className="mr-2 h-4 w-4" />
                Zenn
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a
                href="https://note.com/vivid_donkey6414"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PenTool className="mr-2 h-4 w-4" />
                note
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a
                href="https://x.com/god_koki_apps"
                target="_blank"
                rel="noopener noreferrer"
              >
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
          <h2 className="text-3xl font-bold text-center mb-12">Works</h2>
          <p className="text-lg text-muted-foreground mb-8 text-center max-w-2xl mx-auto">
            苦労して作った個人製作物たち
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apps.reverse().map((app) => (
              <Card key={app.id} className="overflow-hidden">
                <div className="aspect-video relative">
                  <Image
                    src={app.image || "/placeholder.svg"}
                    alt={app.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {app.title}
                    <div className="flex space-x-2">
                      {app.githubUrl && (
                        <Button variant="ghost" size="sm" asChild>
                          <a
                            href={app.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      {app.liveUrl && (
                        <Button variant="ghost" size="sm" asChild>
                          <a
                            href={app.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
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
                      <h4 className="font-semibold mb-2">ポイント</h4>
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
          <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="text-sm py-2 px-4"
                >
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
          <h2 className="text-3xl font-bold mb-8">Articles</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"></p>
          <div className="flex justify-center space-x-6">
            <Card className="p-6 max-w-sm">
              <BookOpen className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Zenn</h3>
              <p className="text-muted-foreground mb-4">
                技術記事を投稿。まだどこにも書かれてないようなことを書いている。
              </p>
              <Button variant="outline" asChild>
                <a
                  href="https://zenn.dev/username"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  記事を読む
                </a>
              </Button>
            </Card>
            <Card className="p-6 max-w-sm">
              <PenTool className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">note</h3>
              <p className="text-muted-foreground mb-4">
                気軽に投稿している記事。大したことじゃなくても書いている。
              </p>
              <Button variant="outline" asChild>
                <a
                  href="https://note.com/username"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
          <h2 className="text-3xl font-bold mb-8">Contact</h2>
          <a href="mailto:dwo5rk23t@gmail.com?subject=お問い合わせ">
            <Button size="lg">
              <Mail className="mr-2 h-5 w-5" />
              メールを送る
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2025 Koki Inoue All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
