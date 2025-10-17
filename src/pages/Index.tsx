import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-2xl font-bold text-primary">
            🌾 Эко-Лад
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#products" className="text-foreground hover:text-primary transition-colors font-medium">
              Продукты
            </a>
            <a href="#benefits" className="text-foreground hover:text-primary transition-colors font-medium">
              О нас
            </a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-colors font-medium">
              Контакты
            </a>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Заказать
            </Button>
          </div>
          <button className="md:hidden">
            <Icon name="Menu" size={24} />
          </button>
        </nav>
      </header>

      <section className="relative bg-gradient-to-br from-green-50 via-yellow-50 to-green-50 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://cdn.poehali.dev/projects/66e24d98-c6a5-4229-83d0-873bee6e8eae/files/4542e76d-7a3a-457d-bbd8-bcbe7f4cf08c.jpg" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Свежие фермерские продукты
              <span className="text-primary"> прямо к вашему столу</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Доставляем натуральные продукты от местных фермеров. Без химии, без посредников — только польза и свежесть.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8">
                Смотреть каталог
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 text-lg px-8">
                Как это работает
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute top-10 right-10 text-8xl opacity-10 hidden lg:block">🥕</div>
        <div className="absolute bottom-10 right-32 text-6xl opacity-10 hidden lg:block">🍎</div>
      </section>

      <section id="products" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Популярные категории
            </h2>
            <p className="text-lg text-muted-foreground">
              Выбирайте лучшее из нашего ассортимента
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🥬", title: "Овощи", desc: "Свежие грядки", color: "bg-green-100" },
              { icon: "🍎", title: "Фрукты", desc: "Сочные и спелые", color: "bg-red-100" },
              { icon: "🥛", title: "Молочные", desc: "Фермерское качество", color: "bg-blue-100" },
              { icon: "🍞", title: "Хлеб", desc: "Домашняя выпечка", color: "bg-amber-100" }
            ].map((category, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 hover:border-primary animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className={`${category.color} w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{category.title}</h3>
                  <p className="text-muted-foreground">{category.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 bg-gradient-to-br from-yellow-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-lg text-muted-foreground">
              Мы заботимся о качестве на каждом этапе
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { 
                icon: "Leaf", 
                title: "100% Натурально", 
                desc: "Продукты выращены без пестицидов и химических удобрений" 
              },
              { 
                icon: "Truck", 
                title: "Быстрая доставка", 
                desc: "Доставляем в день заказа. Свежесть гарантирована" 
              },
              { 
                icon: "Heart", 
                title: "С любовью", 
                desc: "Каждый продукт отбирается вручную нашими специалистами" 
              },
              { 
                icon: "Shield", 
                title: "Безопасность", 
                desc: "Все фермы проходят строгую сертификацию и проверку" 
              },
              { 
                icon: "Sparkles", 
                title: "Свежесть", 
                desc: "От грядки до вашего стола за минимальное время" 
              },
              { 
                icon: "Users", 
                title: "Поддержка местных", 
                desc: "Помогаем развиваться фермерам вашего региона" 
              }
            ].map((benefit, index) => (
              <div 
                key={index} 
                className="flex gap-4 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name={benefit.icon} className="text-primary" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                Свяжитесь с нами
              </h2>
              <p className="text-lg text-muted-foreground">
                Готовы попробовать натуральные продукты? Оставьте заявку!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="animate-scale-in">
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">Ваше имя</label>
                      <Input placeholder="Иван Иванов" className="border-2 focus:border-primary" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">Телефон</label>
                      <Input placeholder="+7 (___) ___-__-__" className="border-2 focus:border-primary" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">Сообщение</label>
                      <Textarea placeholder="Расскажите, что вас интересует..." className="border-2 focus:border-primary min-h-[100px]" />
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Телефон</h3>
                      <p className="text-muted-foreground">+7 (800) 555-35-35</p>
                      <p className="text-sm text-muted-foreground mt-1">Ежедневно с 8:00 до 22:00</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Email</h3>
                      <p className="text-muted-foreground">info@ekolad.ru</p>
                      <p className="text-sm text-muted-foreground mt-1">Ответим в течение часа</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Адрес</h3>
                      <p className="text-muted-foreground">г. Москва, ул. Фермерская, 12</p>
                      <p className="text-sm text-muted-foreground mt-1">Пункт выдачи заказов</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 text-2xl font-bold mb-4">
                🌾 Эко-Лад
              </div>
              <p className="text-white/80">
                Натуральные фермерские продукты с доставкой
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Каталог</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">Овощи</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Фрукты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Молочные продукты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Хлеб и выпечка</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Доставка</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Оплата</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Мы в соцсетях</h4>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <Icon name="MessageCircle" size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            <p>© 2024 Эко-Лад. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}