import React from 'react'
import { motion } from 'framer-motion'
import { Play, Calendar, Award, Music } from 'lucide-react'
import './App.css'
import profileImage from './assets/shun_profile.png'
import danceVideo from './assets/1000006194.mp4'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <motion.img
                src={profileImage}
                alt="Shun"
                className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-white/30 shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute -inset-2 rounded-full border-2 border-purple-400/50"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold text-white mb-4"
          >
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Shun
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl text-white/90 mb-8"
          >
            13歳のダンサー | ヒップホップ・アクロバット・ジャズダンス
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
              onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
            >
              プロフィールを見る
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full font-semibold border border-white/30 hover:bg-white/30 transition-colors"
              onClick={() => document.getElementById('performance').scrollIntoView({ behavior: 'smooth' })}
            >
              パフォーマンスを見る
            </motion.button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              About <span className="text-purple-600">Me</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ダンスを通じて表現することが大好きな13歳です。様々なジャンルのダンスに挑戦し、日々成長を続けています。
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-100 to-pink-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">基本情報</h3>
                <p className="text-gray-600">
                  <strong>名前:</strong> Shun<br />
                  <strong>生年月日:</strong> 9月8日<br />
                  <strong>年齢:</strong> 13歳
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-100 to-indigo-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Music className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">ダンスジャンル</h3>
                <p className="text-gray-600">
                  ヒップホップ<br />
                  アクロバット<br />
                  ジャズダンス
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-100 to-teal-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">実績・経験</h3>
                <p className="text-gray-600">
                  神戸市PR動画出演<br />
                  EXPOアリーナ「Matsuri」出演<br />
                  hippy バックダンサー
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Performance Section */}
      <section id="performance" className="py-20 px-4 bg-gradient-to-br from-gray-900 to-purple-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              My <span className="text-purple-400">Performance</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              パフォーマンスの一部をご覧ください
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative bg-black/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl"
          >
            <video
              controls
              className="w-full h-auto"
              poster={profileImage}
            >
              <source src={danceVideo} type="video/mp4" />
              お使いのブラウザは動画の再生に対応していません。
            </video>
            <div className="absolute top-4 left-4">
              <div className="flex items-center space-x-2 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full">
                <Play className="w-4 h-4 text-white" />
                <span className="text-white text-sm">アクロバットのパフォーマンス</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>



      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-white/70"
        >
          © 2024 Shun. All rights reserved.
        </motion.p>
      </footer>
    </div>
  )
}

export default App
