import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/projects/66e24d98-c6a5-4229-83d0-873bee6e8eae/files/logo.png" 
              alt="Эко-Лад" 
              className="h-12 w-auto"
            />
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-gray-800 hover:text-primary transition-colors font-medium">
              Услуги
            </a>
            <a href="#about" className="text-gray-800 hover:text-primary transition-colors font-medium">
              О нас
            </a>
            <a href="#contacts" className="text-gray-800 hover:text-primary transition-colors font-medium">
              Контакты
            </a>
            <Button className="bg-primary hover:bg-primary/90 text-white px-6">
              Заказать
            </Button>
          </div>
          <button className="md:hidden text-gray-800">
            <Icon name="Menu" size={28} />
          </button>
        </nav>
      </header>

      <section className="relative bg-gradient-to-br from-green-50 via-yellow-50 to-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://cdn.poehali.dev/projects/66e24d98-c6a5-4229-83d0-873bee6e8eae/files/2189a496-0adf-4086-a509-a28cdb96bf5f.jpg" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <div className="inline-block bg-secondary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🌱 Натуральные продукты
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Эко-Лад
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Доставка свежих фермерских продуктов прямо к вашему дому. 
              Натурально, свежо, полезно.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-10 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                Смотреть каталог
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white text-lg px-10 py-6 rounded-xl transition-all">
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute top-20 right-10 text-9xl opacity-10 hidden lg:block">🥕</div>
        <div className="absolute bottom-20 right-40 text-7xl opacity-10 hidden lg:block">🍎</div>
      </section>

      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600">
              Всё для вашего здоровья и комфорта
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: "ShoppingBasket", 
                title: "Фермерские продукты", 
                desc: "Свежие овощи, фрукты, молочные продукты напрямую от фермеров",
                color: "bg-green-500"
              },
              { 
                icon: "Truck", 
                title: "Быстрая доставка", 
                desc: "Доставим заказ в день оформления. Бесплатно от 2000₽",
                color: "bg-yellow-500"
              },
              { 
                icon: "Leaf", 
                title: "Эко-упаковка", 
                desc: "Используем только биоразлагаемые материалы для упаковки",
                color: "bg-green-600"
              },
              { 
                icon: "Calendar", 
                title: "Подписка на коробки", 
                desc: "Еженедельная доставка свежих продуктов по выгодной цене",
                color: "bg-amber-600"
              },
              { 
                icon: "Heart", 
                title: "Индивидуальный подбор", 
                desc: "Составим корзину продуктов специально под ваши предпочтения",
                color: "bg-red-500"
              },
              { 
                icon: "Gift", 
                title: "Подарочные наборы", 
                desc: "Готовые наборы эко-продуктов для ваших близких",
                color: "bg-green-700"
              }
            ].map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 hover:border-primary animate-scale-in overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                    <Icon name={service.icon} className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-yellow-50 via-green-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://cdn.poehali.dev/projects/66e24d98-c6a5-4229-83d0-873bee6e8eae/files/313f25f7-3a89-4028-9619-618891e66124.jpg" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Почему Эко-Лад?
              </h2>
              <div className="space-y-6">
                {[
                  { icon: "Check", text: "100% натуральные продукты без химии" },
                  { icon: "Check", text: "Прямые поставки от проверенных фермеров" },
                  { icon: "Check", text: "Доставка в течение 24 часов" },
                  { icon: "Check", text: "Гарантия свежести и качества" },
                  { icon: "Check", text: "Поддержка местных производителей" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                      <Icon name={item.icon} className="text-white" size={18} />
                    </div>
                    <p className="text-lg text-gray-800 font-medium">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-scale-in">
              <div className="bg-white p-8 rounded-3xl shadow-2xl border-2 border-primary/20">
                <div className="text-6xl mb-4 text-center">🌾</div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4 text-center">
                  Более 5000 клиентов
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  уже доверяют нам заботу о своём питании и здоровье
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary">500+</div>
                    <div className="text-sm text-gray-600">продуктов</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">50+</div>
                    <div className="text-sm text-gray-600">фермеров</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">24/7</div>
                    <div className="text-sm text-gray-600">поддержка</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                Свяжитесь с нами
              </h2>
              <p className="text-xl text-gray-600">
                Готовы попробовать свежие эко-продукты? Оставьте заявку!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <Card className="animate-scale-in border-2 shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Форма обратной связи</h3>
                  <form className="space-y-5">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-800">Ваше имя</label>
                      <Input 
                        placeholder="Иван Иванов" 
                        className="border-2 focus:border-primary h-12 text-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-800">Телефон</label>
                      <Input 
                        placeholder="+7 (___) ___-__-__" 
                        className="border-2 focus:border-primary h-12 text-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-800">Email</label>
                      <Input 
                        type="email"
                        placeholder="mail@example.com" 
                        className="border-2 focus:border-primary h-12 text-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-800">Сообщение</label>
                      <Textarea 
                        placeholder="Расскажите, что вас интересует..." 
                        className="border-2 focus:border-primary min-h-32 text-lg"
                      />
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white h-12 text-lg shadow-lg hover:shadow-xl transition-all">
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
                <Card className="border-2 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                        <Icon name="Phone" className="text-primary" size={28} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Телефон</h4>
                        <a href="tel:+78001234567" className="text-lg text-primary hover:underline font-semibold">
                          +7 (800) 123-45-67
                        </a>
                        <p className="text-gray-600 mt-1">Ежедневно с 8:00 до 22:00</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                        <Icon name="Mail" className="text-primary" size={28} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Email</h4>
                        <a href="mailto:info@ekolad.ru" className="text-lg text-primary hover:underline font-semibold">
                          info@ekolad.ru
                        </a>
                        <p className="text-gray-600 mt-1">Ответим в течение часа</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                        <Icon name="MapPin" className="text-primary" size={28} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Адрес</h4>
                        <p className="text-lg text-gray-700 font-medium">
                          г. Москва, ул. Фермерская, 15
                        </p>
                        <p className="text-gray-600 mt-1">Пункт самовывоза</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl">🌾</span>
                <span className="text-2xl font-bold text-primary">Эко-Лад</span>
              </div>
              <p className="text-gray-400">
                Натуральные продукты для вашего здоровья
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 text-secondary">Навигация</h4>
              <ul className="space-y-2">
                <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors">Услуги</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#contacts" className="text-gray-400 hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 text-secondary">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+7 (800) 123-45-67</li>
                <li>info@ekolad.ru</li>
                <li>г. Москва, ул. Фермерская, 15</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 text-secondary">Соцсети</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon name="Twitter" size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Эко-Лад. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
