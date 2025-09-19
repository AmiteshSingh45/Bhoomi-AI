'use client'
import Image from 'next/image';

import React, { useState } from 'react'

export default function Home() {
  const [openCard, setOpenCard] = useState(null)
  const toggle = (i) => setOpenCard(openCard === i ? null : i)
  const currentYear = new Date().getFullYear()

  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 to-white text-gray-800">
      {/* HERO */}
<section className="relative bg-green-700 text-white">
  <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-10">
    
    {/* Left Content */}
    <div className="flex-1">
      <h1 className="text-4xl sm:text-5xl font-extrabold">KrishiSahayak</h1>
      <p className="mt-4 text-lg sm:text-xl opacity-90">
        Empowering Farmers with AI-driven Smart Agriculture
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="#get-started"
          className="inline-block bg-white text-green-700 px-6 py-3 rounded-lg font-medium shadow"
        >
          Get Started
        </a>
        <a
          href="#download"
          className="inline-block border border-white/40 px-6 py-3 rounded-lg text-white font-medium"
        >
          Download App
        </a>
      </div>

      <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm opacity-90">
        <li>AI crop recommendations</li>
        <li>Offline-first advisory</li>
        <li>Photo-based disease diagnosis</li>
        <li>Multilingual voice assistant</li>
      </ul>
    </div>

    {/* Right Image */}
    <div className="flex-1 relative w-full h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg">
      <Image
        src="/hero-farmer.jpg"
        alt="Farmer standing in field using smartphone"
        fill
        className="object-cover opacity-90"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
    </div>

  </div>
</section>

      {/* ABOUT */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-semibold">About KrishiSahayak</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              KrishiSahayak is an AI-driven digital companion built for small and marginal farmers.
              Our mission is to use accessible intelligence to help farmers make better crop
              decisions, improve soil health, and increase productivity—while working reliably in
              low-bandwidth and offline conditions.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="bg-emerald-50 p-4 rounded-lg">Offline-first design</div>
              <div className="bg-emerald-50 p-4 rounded-lg">Local language support</div>
              <div className="bg-emerald-50 p-4 rounded-lg">Crowdsourced & satellite data</div>
              <div className="bg-emerald-50 p-4 rounded-lg">NGO & Krishi Mitra network</div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-white shadow">
              <h3 className="font-medium">Mission</h3>
              <p className="mt-2 text-sm text-gray-600">
                Use AI to deliver region-specific, actionable advice that farmers can trust.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-white shadow">
              <h3 className="font-medium">How it helps</h3>
              <p className="mt-2 text-sm text-gray-600">
                From irrigation alerts to disease diagnosis and soil prescriptions, KrishiSahayak
                covers end-to-end advisory needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-emerald-50 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-6">Core Features</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              title="Crop Selection"
              desc="AI recommends best crops based on soil, weather, and historical data."
            />
            <FeatureCard
              title="Weather Forecast Alerts"
              desc="Real-time alerts to optimize irrigation and planning."
            />
            <FeatureCard
              title="Crop Disease Diagnosis"
              desc="Upload a photo and get instant diagnosis with step-by-step remedies."
            />
            <FeatureCard
              title="Soil Health Analysis"
              desc="Input soil card data or answer a short questionnaire to get fertilizer advice."
            />
            <FeatureCard
              title="Multilingual AI Chatbot"
              desc="24/7 support in local languages via voice and chat."
            />
            <FeatureCard
              title="Offline-first Experience"
              desc="Core advisories available offline; images and data sync when connectivity returns."
            />
          </div>
        </div>
      </section>

      {/* TECHNICAL APPROACH */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-6">Technical Approach</h2>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <InfoCard
              title="AI / ML Core"
              content="TensorFlow, OpenCV, transfer learning, and XGBoost/LightGBM for recommendations."
            />
            <InfoCard
              title="NLP & Voice"
              content="Speech-to-text and text-to-speech using cloud or on-device models; multilingual intent understanding with transformer models."
            />
            <InfoCard
              title="Mobile & Backend"
              content="React Native / Flutter mobile apps, Django / Flask backend, PostgreSQL + PostGIS for geospatial queries, MongoDB for unstructured data."
            />
          </div>

          <div className="space-y-2">
            <h3 className="font-medium">Expandable Details</h3>
            <div className="space-y-3">
              {[
                {
                  title: 'Federated & Transfer Learning',
                  body: 'Fine-tune models per climatic zone for higher local accuracy.',
                },
                {
                  title: 'Offline-First Architecture',
                  body: 'Download season schedules and advisories for offline use; queue uploads for later.',
                },
                {
                  title: 'Crowdsourced Validation',
                  body: 'Enable Krishi Mitra and farmers to validate and label data for continuous improvement.',
                },
              ].map((it, i) => (
                <div key={i} className="border rounded-lg">
                  <button
                    className="w-full text-left p-4 flex justify-between items-center"
                    onClick={() => toggle(i)}
                  >
                    <span className="font-medium">{it.title}</span>
                    <span className="text-sm text-gray-500">
                      {openCard === i ? '−' : '+'}
                    </span>
                  </button>
                  {openCard === i && (
                    <div className="p-4 border-t bg-white text-sm text-gray-600">
                      {it.body}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEASIBILITY & IMPACT */}
      <section className="bg-gradient-to-r from-emerald-100 to-white py-12">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-2xl font-semibold">Feasibility & Viability</h2>
            <ul className="mt-4 list-disc ml-6 text-gray-700 space-y-2">
              <li>Offline-first design for low-internet areas</li>
              <li>Federated & transfer learning for local adaptation</li>
              <li>Crowdsourced and satellite data integration</li>
              <li>NGO and Krishi Mitra network for onboarding and training</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Impact & Benefits</h2>
            <ul className="mt-4 list-disc ml-6 text-gray-700 space-y-2">
              <li>Enhanced AI precision and relevance</li>
              <li>Boosted farmer adoption and trust</li>
              <li>Reliable access anytime, anywhere (even offline)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-6">Testimonials</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <blockquote className="p-6 bg-white rounded-lg shadow">
            “KrishiSahayak helped me choose the right crop for my soil—my yield improved!” — S.
            Kumar, Pilot Farmer
          </blockquote>
          <blockquote className="p-6 bg-white rounded-lg shadow">
            “The disease diagnosis saved my tomato crop this season.” — R. Devi, Pilot Farmer
          </blockquote>
        </div>
      </section>

      {/* CTA & FOOTER */}
      <section id="get-started" className="bg-green-700 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-semibold">Ready to empower your farm?</h3>
          <p className="mt-2 opacity-90">
            Join beta testing, download the app, or sign up for updates.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <a
              href="#download"
              className="bg-white text-green-700 px-6 py-3 rounded-lg font-medium"
            >
              Download App
            </a>
            <a
              href="#signup"
              className="border border-white/50 px-6 py-3 rounded-lg"
            >
              Sign Up
            </a>
          </div>
        </div>
      </section>

      <footer className="max-w-6xl mx-auto px-6 py-10 text-sm text-gray-600">
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold">KrishiSahayak</h4>
            <p className="mt-2">Your Smart Digital Companion for Farmers</p>
          </div>

          <div>
            <h4 className="font-semibold">Contact</h4>
            <p className="mt-2">Email: hello@krishisahayak.org</p>
            <p>Phone: +91-XXXXXXXXXX</p>
          </div>

          <div>
            <h4 className="font-semibold">Research & Links</h4>
            <p className="mt-2">References and research links can be added here.</p>
            <div className="mt-4 flex gap-3">
              <a href="#" className="underline">
                Twitter
              </a>
              <a href="#" className="underline">
                LinkedIn
              </a>
              <a href="#" className="underline">
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-gray-500">
          © {currentYear} KrishiSahayak — All rights reserved.
        </div>
      </footer>
    </main>
  )
}

function FeatureCard({ title, desc }) {
  return (
    <div className="p-5 rounded-lg bg-white shadow hover:shadow-md transition">
      <div className="h-12 w-12 rounded-md bg-emerald-100 flex items-center justify-center mb-3">
        🌾
      </div>
      <h4 className="font-medium">{title}</h4>
      <p className="mt-2 text-sm text-gray-600">{desc}</p>
    </div>
  )
}

function InfoCard({ title, content }) {
  return (
    <div className="p-4 border rounded-lg bg-white shadow-sm">
      <h4 className="font-medium">{title}</h4>
      <p className="mt-2 text-sm text-gray-600">{content}</p>
    </div>
  )
}
