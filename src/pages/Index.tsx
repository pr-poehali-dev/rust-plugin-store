import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [cartItems, setCartItems] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const plugins = [
    {
      id: 1,
      name: "Rust Industrial Core",
      description: "Основной модуль для промышленных серверов с расширенными возможностями крафта",
      price: 299,
      rating: 4.8,
      reviews: 156,
      category: "Промышленность",
      image: "/img/8ac4b58c-6bb7-4762-8976-af445cac7892.jpg",
      downloads: 2847
    },
    {
      id: 2,
      name: "Combat Plus",
      description: "Расширенная боевая система с новыми видами оружия и бронёй",
      price: 199,
      rating: 4.6,
      reviews: 203,
      category: "Боевая система",
      image: "/img/e560bdd4-a053-4c30-b78b-53d464be7dc8.jpg",
      downloads: 1923
    },
    {
      id: 3,
      name: "Resource Manager",
      description: "Умное управление ресурсами и автоматизация добычи",
      price: 149,
      rating: 4.9,
      reviews: 89,
      category: "Ресурсы",
      image: "/img/8ac4b58c-6bb7-4762-8976-af445cac7892.jpg",
      downloads: 1456
    }
  ];

  const reviews = [
    {
      id: 1,
      author: "RustPlayer2024",
      rating: 5,
      text: "Отличный плагин! Полностью изменил игровой процесс на нашем сервере.",
      plugin: "Rust Industrial Core"
    },
    {
      id: 2,
      author: "AdminPro",
      rating: 4,
      text: "Хорошая функциональность, но нужна более подробная документация.",
      plugin: "Combat Plus"
    }
  ];

  const addToCart = (pluginId: number) => {
    setCartItems(cartItems + 1);
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Icon 
            key={i} 
            name="Star" 
            size={16} 
            className={i < Math.floor(rating) ? "text-accent fill-accent" : "text-muted-foreground"} 
          />
        ))}
        <span className="text-sm text-muted-foreground ml-1">{rating}</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-3xl font-bold text-primary">RUST PLUGINS STORE</h1>
              <Badge variant="secondary" className="text-accent">Industrial Gaming</Badge>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-foreground hover:text-primary transition-colors">Главная</a>
              <a href="#catalog" className="text-foreground hover:text-primary transition-colors">Каталог</a>
              <a href="#reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">Поддержка</a>
            </nav>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Icon name="ShoppingCart" size={24} className="text-foreground" />
                {cartItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-primary text-primary-foreground min-w-[20px] h-5 flex items-center justify-center text-xs">
                    {cartItems}
                  </Badge>
                )}
              </div>
              <Icon name="User" size={24} className="text-foreground" />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-card to-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-6xl font-bold mb-6 text-foreground">
            МОЩНЫЕ ПЛАГИНЫ
            <br />
            <span className="text-primary">ДЛЯ RUST</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Трансформируйте свой сервер с помощью профессиональных плагинов. 
            Система рейтингов от реальных игроков.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Icon name="Download" size={20} className="mr-2" />
              Начать сейчас
            </Button>
            <Button size="lg" variant="outline">
              <Icon name="Play" size={20} className="mr-2" />
              Демо
            </Button>
          </div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="py-8 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Поиск плагинов..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">Все категории</Button>
              <Button variant="outline" size="sm">Промышленность</Button>
              <Button variant="outline" size="sm">Боевая система</Button>
              <Button variant="outline" size="sm">Ресурсы</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Plugins Catalog */}
      <section id="catalog" className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12">ПОПУЛЯРНЫЕ ПЛАГИНЫ</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plugins.map((plugin) => (
              <Card key={plugin.id} className="bg-card border-border hover:border-primary/50 transition-colors">
                <CardHeader className="p-0">
                  <img 
                    src={plugin.image} 
                    alt={plugin.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{plugin.category}</Badge>
                    <div className="flex items-center gap-1">
                      <Icon name="Download" size={14} className="text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{plugin.downloads}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2">{plugin.name}</CardTitle>
                  <CardDescription className="text-muted-foreground mb-4">
                    {plugin.description}
                  </CardDescription>
                  <div className="flex items-center justify-between mb-4">
                    {renderStars(plugin.rating)}
                    <span className="text-sm text-muted-foreground">({plugin.reviews} отзывов)</span>
                  </div>
                  <div className="text-2xl font-bold text-primary mb-4">
                    {plugin.price} ₽
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90" 
                    onClick={() => addToCart(plugin.id)}
                  >
                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                    В корзину
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12">ОТЗЫВЫ ИГРОКОВ</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((review) => (
              <Card key={review.id} className="bg-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Icon name="User" size={20} className="text-muted-foreground" />
                      <span className="font-semibold">{review.author}</span>
                    </div>
                    {renderStars(review.rating)}
                  </div>
                  <p className="text-muted-foreground mb-4">"{review.text}"</p>
                  <Badge variant="outline">{review.plugin}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline">
              <Icon name="MessageSquare" size={16} className="mr-2" />
              Оставить отзыв
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">2,847</div>
              <div className="text-muted-foreground">Скачиваний</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">4.8</div>
              <div className="text-muted-foreground">Средний рейтинг</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">156</div>
              <div className="text-muted-foreground">Отзывов</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">24/7</div>
              <div className="text-muted-foreground">Поддержка</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-bold mb-4 text-primary">RUST PLUGINS</h4>
              <p className="text-muted-foreground">
                Лучшие плагины для серверов Rust с системой рейтингов от игроков.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Категории</h4>
              <div className="space-y-2">
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Промышленность</a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Боевая система</a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Ресурсы</a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Утилиты</a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Поддержка</h4>
              <div className="space-y-2">
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Документация</a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">FAQ</a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Контакты</a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Обратная связь</a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <Icon name="Github" size={24} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                <Icon name="MessageCircle" size={24} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                <Icon name="Globe" size={24} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            © 2024 Rust Plugins Store. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;