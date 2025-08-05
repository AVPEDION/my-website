import './App.css'
import { useState } from 'react'
import { Phone, Mail, MapPin, Heart, Users, Clock, Shield, Star, Menu, X } from 'lucide-react'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'

// Import images
import heroImage from './assets/p1ackj8QRFjS.jpg'
import serviceImage1 from './assets/516RkAzqe2t5.jpg'
import serviceImage2 from './assets/ixXJzRAt0l6j.jpg'
import serviceImage3 from './assets/xNz3NZsryWDd.jpg'
import memorialImage from './assets/AYiQX3OwA7mv.jpeg'
import supportImage from './assets/65kuHhvsoYDo.jpg'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const services = [
    {
      title: "傳統殯儀服務",
      description: "秉承傳統禮儀，以莊嚴與尊重的態度，提供全面的殯儀安排，為逝者舉辦一場彰顯其人生價值的告別儀式。",
      image: serviceImage1,
      price: "費用由$16,800起"
    },
    {
      title: "追思紀念儀式",
      description: "創造富有意義的生命慶典，充分展現逝者獨特的個性與人生成就，讓親友共同緬懷美好回憶。",
      image: serviceImage2,
      price: "費用由$13,500起"
    },
    {
      title: "火葬服務",
      description: "提供莊重的火葬服務，配合多樣化的紀念選擇，尊重逝者的最後心願，讓家屬安心託付。",
      image: serviceImage3,
      price: "費用由$9,800起"
    }
  ]

  const religiousServices = [
    {
      title: "無宗教儀式",
      description: "為沒有特定宗教信仰的家庭提供個人化儀式，專注於慶祝逝者的生命歷程與遺愛。我們的非宗教儀式可根據個人信念和價值觀量身定制，創造富有意義的告別儀式，彰顯逝者獨特的人生旅程。"
    },
    {
      title: "基督教儀式",
      description: "我們的基督教殯儀服務透過信仰提供安慰，包含傳統聖詩、經文誦讀和牧師指導。我們與您的教會和牧師密切合作，確保儀式體現逝者的信仰，為喪親家庭提供心靈慰藉。"
    },
    {
      title: "佛教儀式",
      description: "佛教殯儀禮儀強調靈魂的轉化與生命的無常。我們的服務包括傳統誦經、冥想和儀式，旨在引導逝者走向安詳的重生，同時透過佛教教義為在世者提供慰藉。"
    },
    {
      title: "天主教儀式",
      description: "天主教殯儀服務遵循神聖傳統，包含彌撒、祈禱和禮儀，彰顯逝者的信仰歷程。我們與您的堂區神父協調，確保所有禮儀要求得到滿足，提供莊嚴的服務，透過天主教教義帶來希望與安慰。"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Heart className="h-8 w-8 text-blue-600 mr-2" />
              <span className="text-xl font-bold text-gray-900">靝舍</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#home" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">首頁</a>
                <a href="#services" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">服務項目</a>
                <a href="#about" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">關於我們</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">聯絡我們</a>
                <Button className="ml-4">免費諮詢</Button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#home" className="text-gray-900 block px-3 py-2 text-base font-medium">首頁</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">服務項目</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">關於我們</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">聯絡我們</a>
              <div className="px-3 py-2">
                <Button className="w-full">免費諮詢</Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-gray-900 text-white">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="殯儀服務"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              靝舍
            </h1>
            <h2 className="text-xl md:text-2xl mb-8 text-gray-200">
              專業殯儀服務｜溫馨告別儀式
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-300">
              作為專業的殯儀服務機構，我們專注提供高品質、全方位的殯儀服務及相關用品。
              我們協助家屬在人生最艱難的時刻，籌劃莊重而溫馨的告別儀式，
              讓每一個細節都充滿對逝者的敬意與愛意。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Phone className="mr-2 h-5 w-5" />
                24小時熱線：(852) 2888-9999
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900">
                免費諮詢服務
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              我們的殯儀服務
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              無論您需要傳統殯儀服務、現代追思儀式，或是特定宗教安排，
              我們都能為您的家庭提供個人化的解決方案，滿足不同的需求與期望。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-blue-600 font-semibold">
                    {service.price}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button variant="outline" className="w-full">
                    了解更多
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Religious Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              宗教與文化儀式
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              我們尊重多元的宗教與文化傳統，提供專業的儀式服務，
              確保每場告別儀式都能體現您家庭的信仰與習俗。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {religiousServices.map((service, index) => (
              <Card key={index} className="p-6">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              為什麼選擇靝舍？
            </h2>
            <p className="text-lg text-gray-600">
              我們對卓越品質與關懷服務的承諾，讓我們與眾不同
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">專業卓越</h3>
              <p className="text-gray-600">持牌專業人員，擁有多年殯儀服務經驗</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">關懷備至</h3>
              <p className="text-gray-600">在您家庭最困難的時刻提供體貼的支援</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24小時服務</h3>
              <p className="text-gray-600">全天候待命，在您最需要的時候提供支援</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">以家庭為本</h3>
              <p className="text-gray-600">個人化服務，彰顯您摯愛的珍貴回憶</p>
            </div>
          </div>
        </div>
      </section>

      {/* Memorial Support */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                喪親支援與指導
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                我們深知失去摯愛是人生最艱難的經歷之一。我們的專業支援團隊在整個過程中提供全面指導，
                以關懷與理解的態度，協助您度過困難的決策時刻。
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Star className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">個人化規劃</h4>
                    <p className="text-gray-600">量身定制的追思服務，體現逝者獨特的人生</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Star className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">文件協助</h4>
                    <p className="text-gray-600">協助辦理死亡證明書及相關法律文件</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Star className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">哀傷輔導</h4>
                    <p className="text-gray-600">專業心理支援，協助您走過哀傷歷程</p>
                  </div>
                </div>
              </div>
              <Button className="mt-6" size="lg">
                預約諮詢
              </Button>
            </div>
            <div>
              <img
                src={supportImage}
                alt="喪親支援"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              聯絡靝舍
            </h2>
            <p className="text-lg text-gray-300">
              我們隨時為您提供協助，在這困難時刻與您同行
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Phone className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">24小時熱線</h3>
              <p className="text-gray-300 mb-2">緊急支援服務</p>
              <p className="text-blue-400 text-lg font-semibold">(852) 2888-9999</p>
            </div>
            <div className="text-center">
              <Mail className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">電郵查詢</h3>
              <p className="text-gray-300 mb-2">一般查詢</p>
              <p className="text-blue-400">info@jingshe.com.hk</p>
            </div>
            <div className="text-center">
              <MapPin className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">親臨本舍</h3>
              <p className="text-gray-300 mb-2">總辦事處</p>
              <p className="text-gray-300">
                香港九龍紅磡<br />
                寶其利街123號地下
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">
              我們提供多語言服務支援，包括廣東話、普通話、英語及其他語言
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              免費諮詢預約
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Heart className="h-6 w-6 text-blue-400 mr-2" />
              <span className="text-lg font-semibold">靝舍</span>
            </div>
            <p className="text-sm">
              © 2024 靝舍 版權所有 | 持牌殯儀服務機構
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

