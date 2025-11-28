"use client";
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const AttachmentStyleQuiz = () => {
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({ S: 0, AN: 0, AV: 0, D: 0 });

  const questions = [
    {
      id: 1,
      question: "Bagaimana perasaan Anda ketika seseorang yang dekat dengan Anda mulai menghabiskan lebih sedikit waktu dengan Anda dan lebih banyak waktu dengan orang lain?",
      options: [
        { text: "Sejujurnya, aku merasa sedikit cemburu dan tidak aman", category: "AN" },
        { text: "Aku tidak memikirkannya", category: "AV" },
        { text: "Yah, itu tidak menggangguku. Kita masing-masing punya hubungan lain, dan itu tidak masalah", category: "S" },
        { text: "Aku khawatir hal itu dapat menggantikan hubungan yang telah kami miliki", category: "D" }
      ]
    },
    {
      id: 2,
      question: "Kamu sedang mengalami masa sulit. Apakah kamu mencari dukungan dari seseorang?",
      options: [
        { text: "Tidak, aku bisa mengatasinya sendiri", category: "AV" },
        { text: "Ya, saya meminta bantuan dan secara terbuka berbagi perasaan saya", category: "S" },
        { text: "Sulit untuk meminta bantuan, tapi akhirnya aku mencoba untuk meminta bantuan", category: "AN" },
        { text: "Saya bersikeras karena saya takut tidak akan ada orang yang membantu", category: "D" }
      ]
    },
    {
      id: 3,
      question: "Seberapa nyamankah Anda dengan kerentanan emosional?",
      options: [
        { text: "Tidak sama sekali. Saya sebisa mungkin menghindari menjadi rentan", category: "AV" },
        { text: "Aku kesulitan untuk terbuka, dan aku menyimpan emosiku untuk diriku sendiri", category: "D" },
        { text: "Cukup nyaman. Saya bisa berbagi pikiran saya dengan orang lain", category: "S" },
        { text: "Butuh waktu lama untuk merasa cukup nyaman untuk mempercayai seseorang dengan perasaanku, tapi aku bisa sampai di sana", category: "AN" }
      ]
    },
    {
      id: 4,
      question: "Pasangan atau teman dekat Anda ingin menghabiskan waktu sendirian. Bagaimana reaksi Anda?",
      options: [
        { text: "Saya memahami dan menghormati kebutuhan mereka akan ruang pribadi", category: "S" },
        { text: "Saya khawatir dan merasa tidak aman karena saya tidak tahu niat mereka", category: "D" },
        { text: "Aku merasa sedikit terluka atau ditolak, tapi aku mengerti", category: "AN" },
        { text: "Itu tidak menggangguku; aku lebih suka melakukan hal-halku sendiri", category: "AV" }
      ]
    },
    {
      id: 5,
      question: "Bagaimana Anda menangani konflik dalam hubungan?",
      options: [
        { text: "Saya merasa cemas dan mencoba menyelesaikan masalah dengan menyenangkan orang lain", category: "AN" },
        { text: "Saya jadi defensif. Sulit melihat sesuatu dari sudut pandang orang lain", category: "D" },
        { text: "Saya menutup diri dan menghindari konfrontasi konflik", category: "AV" },
        { text: "Saya fokus pada masalah dan mencoba menemukan resolusinya", category: "S" }
      ]
    },
    {
      id: 6,
      question: "Apakah Anda memercayai orang lain?",
      options: [
        { text: "Sangat sulit untuk mempercayai orang sepenuhnya", category: "AV" },
        { text: "Saya jarang percaya pada orang lain dan sering berpikir mereka tidak mempunyai niat baik", category: "D" },
        { text: "Saya percaya mereka sebagian besar, tapi saya tetap berhati-hati", category: "AN" },
        { text: "Secara umum, tentu saja. Saya yakin mereka punya niat baik", category: "S" }
      ]
    },
    {
      id: 7,
      question: "Bagaimana perasaan Anda tentang kedekatan emosional?",
      options: [
        { text: "Sangat menenangkan sekaligus mengkhawatirkan ketika seseorang terlalu dekat", category: "AN" },
        { text: "Selama kita memiliki batasan yang baik, saya menyambut kedekatan emosional", category: "S" },
        { text: "Hal ini membuat saya merasa cemas dan kewalahan", category: "D" },
        { text: "Acuh tak acuh. Aku tidak terlalu terpengaruh oleh kedekatan emosional", category: "AV" }
      ]
    },
    {
      id: 8,
      question: "Seorang teman atau pasangan mengungkapkan kebutuhan mereka dalam hubungan dengan Anda. Bagaimana reaksi Anda?",
      options: [
        { text: "Kebutuhan mereka membuat saya merasa terbebani atau kewalahan", category: "D" },
        { text: "Saya mengabaikan kebutuhan mereka", category: "AV" },
        { text: "Saya mempertimbangkan kebutuhan mereka namun juga memikirkan kebutuhan saya sendiri", category: "AN" },
        { text: "Saya mendengarkan dengan seksama dan mencoba memberi mereka apa yang mereka butuhkan dari saya", category: "S" }
      ]
    },
    {
      id: 9,
      question: "Saat Anda menjalin hubungan, apakah Anda khawatir akan ditinggalkan?",
      options: [
        { text: "Tidak. Saya percaya hubungan saya solid", category: "S" },
        { text: "Saya merasa nyaman sendirian, jadi saya tidak merasa tertekan karenanya", category: "AV" },
        { text: "Saya secara teratur meminta pasangan saya untuk meyakinkan saya bahwa mereka tidak akan pergi", category: "AN" },
        { text: "Kadang-kadang aku mengkhawatirkannya, tapi tidak terlalu banyak", category: "D" }
      ]
    },
    {
      id: 10,
      question: "Pasanganmu ingin selalu dekat denganmu secara fisik. Bagaimana perasaanmu tentang hal itu?",
      options: [
        { text: "Terlalu dekat secara fisik membuatku merasa tidak nyaman", category: "AV" },
        { text: "Kadang-kadang terasa menenangkan, tapi di lain waktu terasa tidak nyaman", category: "AN" },
        { text: "Saya biasanya menghindari sentuhan fisik dan mencoba menjaga jarak yang baik", category: "D" },
        { text: "Saya suka sentuhan fisik dan keintiman dengan orang-orang yang saya sayangi", category: "S" }
      ]
    },
    {
      id: 11,
      question: "Seperti apa hubungan Anda dengan orang tua atau pengasuh Anda di masa kecil?",
      options: [
        { text: "Kadang-kadang aku merasa dekat, di waktu lain mereka tampak jauh dan tidak tersedia", category: "AN" },
        { text: "Aku tidak ingat merasa dekat dengan mereka", category: "D" },
        { text: "Kami tidak memiliki rasa kasih sayang, atau mereka kasar", category: "AV" },
        { text: "Saya merasa dicintai, didukung, aman, dan dipahami", category: "S" }
      ]
    },
    {
      id: 12,
      question: "Apa yang biasanya Anda lakukan ketika seseorang yang dekat dengan Anda merasa kesal atau emosional?",
      options: [
        { text: "Saya mencoba membantu, tapi saya juga harus memastikan saya baik-baik saja", category: "D" },
        { text: "Saya merasa kesal karena seseorang meminta dukungan saya", category: "AV" },
        { text: "Hal ini bisa sangat membebani. Saya sering tidak yakin bagaimana cara membantu", category: "AN" },
        { text: "Saya mencoba untuk mendukung dan menghibur mereka", category: "S" }
      ]
    },
    {
      id: 13,
      question: "Sahabatmu butuh tempat tinggal. Bagaimana menurutmu tentang berbagi tempat tinggal?",
      options: [
        { text: "Saya merasa nyaman dan senang berbagi dengan mereka", category: "S" },
        { text: "Mereka bisa tinggal, tapi mereka harus memberiku ruang pribadi saat aku membutuhkannya", category: "D" },
        { text: "Saya merasa mereka menyerang ruang pribadi saya, yang membuat saya cemas", category: "AV" },
        { text: "Aku lebih suka mereka mencari tempat lain untuk tinggal", category: "AN" }
      ]
    },
    {
      id: 14,
      question: "Apa pengalaman umum Anda dalam menjalin pertemanan?",
      options: [
        { text: "Saya tidak memiliki masalah dalam mencari teman baru", category: "S" },
        { text: "Saya ingin mendapatkan teman baru, tapi khawatir orang-orang tidak akan menyukai saya", category: "AN" },
        { text: "Saya tidak pandai mencari teman baru karena kami akhirnya akan bertengkar", category: "D" },
        { text: "Aku tidak mencoba -- Aku tidak benar-benar berpikir aku membutuhkan lebih banyak teman", category: "AV" }
      ]
    },
    {
      id: 15,
      question: "Apa perasaan Anda ketika persahabatan atau hubungan romantis berakhir?",
      options: [
        { text: "Aku mungkin tidak terlalu terikat pada mereka, jadi itu tidak terlalu mempengaruhiku", category: "AV" },
        { text: "Sangat sulit untuk melepaskannya", category: "D" },
        { text: "Aku sedih dan takut sendirian", category: "AN" },
        { text: "Saya sedih, tapi saya bisa melanjutkan hidup dan menjalin koneksi baru", category: "S" }
      ]
    }
  ];

  const attachmentProfiles = {
    S: {
      name: "Secure Attachment",
      title: "Kelekatan Aman",
      shortName: "Secure",
      color: "#10B981",
      bgColor: "#D1FAE5",
      description: "Anda memiliki gaya kelekatan yang sehat dan seimbang. Anda merasa nyaman dengan keintiman dan kemandirian, dapat mempercayai orang lain, dan memiliki hubungan yang stabil.",
      traits: [
        "Nyaman dengan keintiman emosional",
        "Percaya pada orang lain",
        "Komunikasi yang baik dalam hubungan",
        "Mampu mengekspresikan kebutuhan",
        "Menghormati batasan diri dan orang lain"
      ],
      advice: "Pertahankan pola hubungan yang sehat ini. Terus berlatih komunikasi terbuka dan empati dalam hubungan Anda."
    },
    AN: {
      name: "Anxious/Ambivalent",
      title: "Kelekatan Cemas",
      shortName: "Anxious",
      color: "#F59E0B",
      bgColor: "#FEF3C7",
      description: "Anda cenderung merasa cemas dalam hubungan dan sering khawatir akan ditinggalkan. Anda sangat menginginkan kedekatan tetapi kadang ragu dengan perasaan orang lain terhadap Anda.",
      traits: [
        "Sering membutuhkan reassurance",
        "Khawatir akan penolakan",
        "Sensitif terhadap perubahan",
        "Cenderung overthinking",
        "Takut ditinggalkan"
      ],
      advice: "Kembangkan kepercayaan diri dan kemandirian emosional. Praktikkan self-soothing dan komunikasikan kebutuhan Anda dengan jelas."
    },
    AV: {
      name: "Avoidant Attachment",
      title: "Kelekatan Menghindar",
      shortName: "Avoidant",
      color: "#3B82F6",
      bgColor: "#DBEAFE",
      description: "Anda cenderung menjaga jarak emosional dan menghargai kemandirian. Anda mungkin merasa tidak nyaman dengan keintiman yang terlalu dekat dan lebih suka mengandalkan diri sendiri.",
      traits: [
        "Menghargai kemandirian tinggi",
        "Kesulitan membuka diri",
        "Cenderung menekan perasaan",
        "Tertekan dengan kebutuhan orang lain",
        "Menghindari konflik"
      ],
      advice: "Praktikkan keterbukaan emosional secara bertahap. Kerentanan adalah kekuatan, bukan kelemahan."
    },
    D: {
      name: "Disorganized Attachment",
      title: "Kelekatan Tidak Terorganisir",
      shortName: "Disorganized",
      color: "#EF4444",
      bgColor: "#FEE2E2",
      description: "Anda mungkin mengalami konflik internal antara keinginan untuk dekat dengan orang lain dan rasa takut akan keintiman. Ini bisa membuat hubungan terasa membingungkan.",
      traits: [
        "Perasaan campur aduk tentang keintiman",
        "Sulit mempercayai orang lain",
        "Pola hubungan tidak konsisten",
        "Ketakutan akan penolakan dan keintiman",
        "Reaksi tidak terduga"
      ],
      advice: "Pertimbangkan untuk berbicara dengan profesional kesehatan mental untuk hubungan yang lebih sehat."
    }
  };

  const handleAnswer = (category) => {
    setScores(prev => ({
      ...prev,
      [category]: prev[category] + 1
    }));

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 150);
    } else {
      setTimeout(() => {
        setCurrentScreen('result');
      }, 150);
    }
  };

  const getDominantCategory = () => {
    const maxScore = Math.max(...Object.values(scores));
    return Object.keys(scores).find(key => scores[key] === maxScore);
  };

  const getChartData = () => {
    const total = Object.values(scores).reduce((a, b) => a + b, 0);
    return [
      { name: 'Secure', value: scores.S, percentage: ((scores.S / total) * 100).toFixed(0), fill: '#10B981' },
      { name: 'Anxious', value: scores.AN, percentage: ((scores.AN / total) * 100).toFixed(0), fill: '#F59E0B' },
      { name: 'Avoidant', value: scores.AV, percentage: ((scores.AV / total) * 100).toFixed(0), fill: '#3B82F6' },
      { name: 'Disorganized', value: scores.D, percentage: ((scores.D / total) * 100).toFixed(0), fill: '#EF4444' }
    ];
  };

  const resetQuiz = () => {
    setCurrentScreen('welcome');
    setCurrentQuestion(0);
    setScores({ S: 0, AN: 0, AV: 0, D: 0 });
  };

  if (currentScreen === 'welcome') {
    return (
      <div className="min-h-screen" style={{ backgroundColor: '#E8E5F2' }}>
        <div className="min-h-screen flex items-center justify-center p-4">
          <div className="w-full max-w-lg bg-white rounded-3xl shadow-lg p-8 md:p-10">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-4xl font-bold mb-2" style={{ color: '#2D3142' }}>Attachment Quiz</h1>
                <p className="text-gray-500 text-lg">Kenali profil kelekatan Anda</p>
              </div>
              <button className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ backgroundColor: '#FDB91B' }}>
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>

            <div className="bg-gray-50 rounded-2xl p-5 mb-6">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mr-3" style={{ backgroundColor: '#8B5CF6' }}>
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold" style={{ color: '#2D3142' }}>15 Pertanyaan</p>
                  <p className="text-sm text-gray-500">Waktu ± 5-7 menit</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Temukan gaya kelekatan Anda dalam hubungan interpersonal. Tidak ada jawaban benar atau salah, jawablah sejujur-jujurnya.
              </p>
            </div>

            <div className="mb-8">
              <p className="text-sm font-medium text-gray-600 mb-3">4 Tipe Attachment Style</p>
              <div className="flex flex-wrap gap-2">
                {Object.keys(attachmentProfiles).map((key) => {
                  const profile = attachmentProfiles[key];
                  return (
                    <div key={key} className="px-4 py-2 rounded-full text-sm font-medium"
                      style={{ backgroundColor: profile.bgColor, color: profile.color }}>
                      {profile.shortName}
                    </div>
                  );
                })}
              </div>
            </div>

            <button onClick={() => setCurrentScreen('quiz')}
              className="w-full py-4 rounded-2xl font-semibold text-lg text-white shadow-md hover:shadow-lg transition-all"
              style={{ backgroundColor: '#FDB91B' }}>
              Mulai Kuis
            </button>

            <p className="text-xs text-center text-gray-400 mt-6">
              Berdasarkan Attachment Theory dalam psikologi
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (currentScreen === 'quiz') {
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    const currentQ = questions[currentQuestion];

    return (
      <div className="min-h-screen" style={{ backgroundColor: '#E8E5F2' }}>
        <div className="min-h-screen flex items-center justify-center p-4">
          <div className="w-full max-w-2xl">
            <div className="bg-white rounded-3xl shadow-lg p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="font-bold text-xl" style={{ color: '#2D3142' }}>Pertanyaan {currentQuestion + 1}</p>
                  <p className="text-sm text-gray-500">dari {questions.length} pertanyaan</p>
                </div>
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ backgroundColor: '#FDB91B' }}>
                  <span className="text-white font-bold text-xl">{Math.round(progress)}%</span>
                </div>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full rounded-full transition-all duration-500"
                  style={{ width: `${progress}%`, backgroundColor: '#FDB91B' }} />
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 leading-relaxed" style={{ color: '#2D3142' }}>
                {currentQ.question}
              </h2>

              <div className="space-y-3">
                {currentQ.options.map((option, index) => (
                  <button key={index} onClick={() => handleAnswer(option.category)}
                    className="w-full text-left p-5 rounded-2xl border-2 border-gray-100 hover:border-gray-300 hover:shadow-md transition-all duration-200 group">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center font-bold mr-4 text-white group-hover:scale-110 transition-transform"
                        style={{ backgroundColor: '#8B5CF6' }}>
                        {String.fromCharCode(65 + index)}
                      </div>
                      <span className="text-gray-700 text-base md:text-lg flex-1 group-hover:text-gray-900">
                        {option.text}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex justify-center mt-8 space-x-1.5">
                {questions.map((_, index) => (
                  <div key={index}
                    className={`h-1.5 rounded-full transition-all duration-300 ${index < currentQuestion ? 'w-6' : index === currentQuestion ? 'w-8' : 'w-1.5'
                      }`}
                    style={{ backgroundColor: index <= currentQuestion ? '#FDB91B' : '#E5E7EB' }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const dominantCategory = getDominantCategory();
  const profile = attachmentProfiles[dominantCategory];
  const chartData = getChartData();

  return (
    <div className="min-h-screen py-8" style={{ backgroundColor: '#E8E5F2' }}>
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-6 text-center">
          <div className="inline-flex w-20 h-20 rounded-3xl items-center justify-center mb-5"
            style={{ backgroundColor: profile.color }}>
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div className="inline-block px-5 py-2 rounded-full text-sm font-semibold mb-4"
            style={{ backgroundColor: profile.bgColor, color: profile.color }}>
            Profil Anda
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-3" style={{ color: '#2D3142' }}>
            {profile.title}
          </h1>
          <p className="text-xl text-gray-500 mb-6">{profile.name}</p>
          <div className="bg-gray-50 rounded-2xl p-6">
            <p className="text-gray-700 text-lg leading-relaxed">{profile.description}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {chartData.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl p-5 shadow-lg text-center">
              <div className="text-4xl font-bold mb-2" style={{ color: item.fill }}>{item.value}</div>
              <div className="text-gray-600 text-sm font-medium mb-2">{item.name}</div>
              <div className="inline-block px-3 py-1 rounded-full text-sm font-bold"
                style={{ backgroundColor: `${item.fill}20`, color: item.fill }}>
                {item.percentage}%
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-6 mb-6">
          <h3 className="text-2xl font-bold mb-4 flex items-center" style={{ color: '#2D3142' }}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mr-3" style={{ backgroundColor: '#8B5CF6' }}>
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            Distribusi Skor Anda
          </h3>
          <div className="bg-gray-50 rounded-2xl p-4">
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="name" stroke="#6B7280" />
                <YAxis stroke="#6B7280" />
                <Tooltip contentStyle={{ backgroundColor: 'white', border: '2px solid #E5E7EB', borderRadius: '12px', padding: '12px' }} />
                <Bar dataKey="value" radius={[12, 12, 0, 0]}>
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-6 mb-6">
          <h3 className="text-2xl font-bold mb-4 flex items-center" style={{ color: '#2D3142' }}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mr-3" style={{ backgroundColor: profile.color }}>
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            Karakteristik Utama
          </h3>
          <div className="grid md:grid-cols-2 gap-3">
            {profile.traits.map((trait, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-4 flex items-start">
                <div className="w-6 h-6 rounded-lg mr-3 flex-shrink-0 flex items-center justify-center mt-0.5"
                  style={{ backgroundColor: profile.color }}>
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">{trait}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-6 mb-6">
          <h3 className="text-2xl font-bold mb-4 flex items-center" style={{ color: '#2D3142' }}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mr-3" style={{ backgroundColor: '#FDB91B' }}>
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            Saran untuk Anda
          </h3>
          <div className="bg-gray-50 rounded-2xl p-5">
            <p className="text-gray-700 text-lg leading-relaxed">{profile.advice}</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button onClick={resetQuiz}
            className="flex-1 py-4 rounded-2xl font-semibold text-lg text-white shadow-md hover:shadow-lg transition-all flex items-center justify-center"
            style={{ backgroundColor: '#FDB91B' }}>
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Ulangi Kuis
          </button>
          <button onClick={() => window.print()}
            className="flex-1 bg-white border-2 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-50 transition-all flex items-center justify-center"
            style={{ borderColor: '#D1D5DB', color: '#6B7280' }}>
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            Cetak Hasil
          </button>
        </div>

        <div className="mt-6 text-center bg-white rounded-2xl p-4 shadow-sm">
          <p className="text-gray-500 text-sm">
            💡 Attachment style dapat berubah seiring waktu dengan self-awareness dan usaha
          </p>
        </div>
      </div>
    </div>
  );
};

export default AttachmentStyleQuiz;
