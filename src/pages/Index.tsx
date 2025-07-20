import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import { useState } from "react";

export default function Index() {
  const [searchTerm, setSearchTerm] = useState("");
  const [complaintForm, setComplaintForm] = useState({
    fraudsterInfo: "",
    description: "",
    evidence: ""
  });

  const latestAlerts = [
    {
      id: 1,
      title: "Поддельные банковские SMS",
      description: "Участились случаи отправки SMS от имени банков с просьбой перейти по ссылке",
      severity: "critical",
      date: "20.07.2025"
    },
    {
      id: 2,
      title: "Мошенники на Авито",
      description: "Новая схема обмана покупателей через предоплату за несуществующий товар",
      severity: "high",
      date: "19.07.2025"
    },
    {
      id: 3,
      title: "Фальшивые инвестиционные платформы",
      description: "Появились сайты-клоны известных брокеров с поддельными лицензиями",
      severity: "critical",
      date: "18.07.2025"
    }
  ];

  const fraudDatabase = [
    {
      id: 1,
      name: "Алексей Петров",
      phone: "+7 (999) 123-45-67",
      scheme: "Банковские мошенничества",
      reports: 47,
      verified: true
    },
    {
      id: 2,
      name: "ООО 'Быстрые Деньги'",
      phone: "+7 (800) 555-12-34",
      scheme: "Микрозаймы под высокий процент",
      reports: 23,
      verified: true
    },
    {
      id: 3,
      name: "Мария Иванова",
      phone: "+7 (906) 789-01-23",
      scheme: "Продажа несуществующих товаров",
      reports: 15,
      verified: false
    }
  ];

  const popularSchemes = [
    {
      title: "Телефонное мошенничество",
      description: "Звонки от лица банка или службы безопасности",
      prevention: "Никогда не сообщайте данные карты по телефону"
    },
    {
      title: "Фишинговые сайты",
      description: "Поддельные сайты банков и интернет-магазинов",
      prevention: "Проверяйте URL и ищите SSL-сертификат"
    },
    {
      title: "Социальная инженерия",
      description: "Манипуляции через социальные сети",
      prevention: "Не доверяйте незнакомцам личную информацию"
    }
  ];

  const handleComplaintSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Жалоба отправлена:", complaintForm);
    alert("Жалоба успешно отправлена! Мы рассмотрим её в течение 24 часов.");
    setComplaintForm({
      fraudsterInfo: "",
      description: "",
      evidence: ""
    });
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical": return "bg-red-100 text-red-800 border-red-200";
      case "high": return "bg-orange-100 text-orange-800 border-orange-200";
      case "medium": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/img/68c87f96-f78c-442d-adb4-9dcb7ef70d42.jpg" 
                alt="Защита от мошенников" 
                className="w-10 h-10 rounded-lg"
              />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Антимошенник</h1>
                <p className="text-sm text-gray-600">Народный фронт</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#alerts" className="text-gray-700 hover:text-red-600 transition-colors">Предупреждения</a>
              <a href="#database" className="text-gray-700 hover:text-red-600 transition-colors">База данных</a>
              <a href="#schemes" className="text-gray-700 hover:text-red-600 transition-colors">Схемы</a>
              <a href="#report" className="text-gray-700 hover:text-red-600 transition-colors">Сообщить</a>
            </nav>
            <Button className="bg-red-600 hover:bg-red-700">
              <Icon name="Phone" size={16} className="mr-2" />
              Горячая линия
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Защитим вас от <span className="text-red-600">мошенников</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Единая база данных мошенников, актуальные схемы обмана и быстрая подача жалоб. 
            Вместе мы сделаем интернет безопаснее!
          </p>
          
          {/* Quick Search */}
          <div className="max-w-md mx-auto mb-12">
            <div className="relative">
              <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Проверить номер телефона или email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 py-3 text-lg"
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-red-600 hover:bg-red-700">
                Проверить
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">12,847</div>
              <div className="text-gray-600">Мошенников в базе</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">3,241</div>
              <div className="text-gray-600">Предотвращено обманов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">₽ 45.2М</div>
              <div className="text-gray-600">Сохранено средств</div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Alerts */}
      <section id="alerts" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold text-gray-900">Последние предупреждения</h3>
            <Button variant="outline">
              <Icon name="Bell" size={16} className="mr-2" />
              Подписаться на уведомления
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestAlerts.map((alert) => (
              <Card key={alert.id} className="border-l-4 border-l-red-500">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg">{alert.title}</CardTitle>
                    <Badge className={getSeverityColor(alert.severity)}>
                      {alert.severity === "critical" ? "Критично" : "Важно"}
                    </Badge>
                  </div>
                  <CardDescription className="text-sm text-gray-500">{alert.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{alert.description}</p>
                  <Button variant="link" className="mt-3 p-0 text-red-600">
                    Подробнее <Icon name="ArrowRight" size={16} className="ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fraud Database */}
      <section id="database" className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">База данных мошенников</h3>
          
          <Card>
            <CardHeader>
              <CardTitle>Поиск в базе данных</CardTitle>
              <CardDescription>Проверьте номер телефона, email или название организации</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 mb-6">
                <Input placeholder="Номер телефона, email или название..." className="flex-1" />
                <Button className="bg-red-600 hover:bg-red-700">
                  <Icon name="Search" size={16} className="mr-2" />
                  Поиск
                </Button>
              </div>
              
              <div className="space-y-4">
                {fraudDatabase.map((fraud) => (
                  <div key={fraud.id} className="border rounded-lg p-4 bg-white">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="font-semibold text-gray-900">{fraud.name}</h4>
                          {fraud.verified && (
                            <Badge className="bg-green-100 text-green-800 border-green-200">
                              <Icon name="CheckCircle" size={12} className="mr-1" />
                              Проверено
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mb-1">{fraud.phone}</p>
                        <p className="text-sm text-gray-500">{fraud.scheme}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-red-600">{fraud.reports} жалоб</div>
                        <Button variant="link" size="sm" className="text-red-600">
                          Подробнее
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Popular Schemes */}
      <section id="schemes" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Популярные схемы обмана</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularSchemes.map((scheme, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon name="AlertTriangle" size={20} className="text-orange-600" />
                    {scheme.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{scheme.description}</p>
                  <Alert>
                    <Icon name="Shield" size={16} />
                    <AlertDescription>
                      <strong>Как защититься:</strong> {scheme.prevention}
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Report Form */}
      <section id="report" className="py-16 px-4 bg-gradient-to-r from-red-50 to-orange-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Сообщить о мошенничестве</h3>
            <p className="text-lg text-gray-600">
              Помогите другим избежать обмана. Ваша информация поможет предотвратить новые случаи мошенничества.
            </p>
          </div>

          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Форма жалобы</CardTitle>
              <CardDescription className="text-center">
                Все поля обязательны для заполнения. Информация будет проверена и добавлена в базу данных.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleComplaintSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="fraudster-info">Информация о мошеннике *</Label>
                  <Input
                    id="fraudster-info"
                    placeholder="Номер телефона, email, название организации или ФИО"
                    value={complaintForm.fraudsterInfo}
                    onChange={(e) => setComplaintForm({...complaintForm, fraudsterInfo: e.target.value})}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="description">Описание ситуации *</Label>
                  <Textarea
                    id="description"
                    placeholder="Подробно опишите, как происходило мошенничество, какую схему использовали, какой ущерб был нанесен..."
                    rows={5}
                    value={complaintForm.description}
                    onChange={(e) => setComplaintForm({...complaintForm, description: e.target.value})}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="evidence">Доказательства</Label>
                  <Textarea
                    id="evidence"
                    placeholder="Ссылки на скриншоты, переписку, документы или другие доказательства (разместите файлы в облачном хранилище и приложите ссылки)"
                    rows={3}
                    value={complaintForm.evidence}
                    onChange={(e) => setComplaintForm({...complaintForm, evidence: e.target.value})}
                  />
                </div>

                <Separator />

                <div className="flex gap-4">
                  <Button type="submit" className="flex-1 bg-red-600 hover:bg-red-700 py-3">
                    <Icon name="Send" size={16} className="mr-2" />
                    Отправить жалобу
                  </Button>
                  <Button type="button" variant="outline" className="px-8">
                    <Icon name="Phone" size={16} className="mr-2" />
                    Связаться с нами
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Антимошенник</h4>
              <p className="text-gray-400">
                Народный фронт по борьбе с мошенничеством. Защищаем граждан от обмана в интернете.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Полезные ссылки</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Как защититься</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Что делать если обманули</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Истории пострадавших</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Новости</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  8-800-123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  help@antimoshennik.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Москва, Россия
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Подписаться</h4>
              <p className="text-gray-400 mb-4">Получайте уведомления о новых угрозах</p>
              <div className="flex gap-2">
                <Input placeholder="Email" className="bg-gray-800 border-gray-700" />
                <Button className="bg-red-600 hover:bg-red-700">
                  <Icon name="Send" size={16} />
                </Button>
              </div>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-700" />
          
          <div className="text-center text-gray-400">
            <p>&copy; 2025 Антимошенник - Народный фронт. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}